const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const http = require("http");

// const swaggerUrl = "http://192.168.7.71:5014/swagger/v1/swagger.json";
// http.get(swaggerUrl, function (request) {
//     var swaggerJson = '';
//     request.on('error', (err) => {
//         console.error(err);
//       }).on('data', (chunk) => {
//         swaggerJson =+ chunk;
//       }).on('end', () => {
//         swaggerJson = Buffer.concat(swaggerJson).toString();
//     });
// });

let fileName = '3002api.js';
let jsonFile = require(path.resolve('3002.json'));

let exportSrt = "";
let text = [];
let file = '';
let pathUrl = "";

let paramInPath = [];
let paramInQuery = [];
let lastag = "";
let tag = "";

function formatJson() {

    _.forEach(jsonFile.paths, (e, i) => {
        var path = formatPath(i);
        var methodArr = _.keys(e);

        for (i = 0; i < methodArr.length; i++) {
            lastag = tag;
            var method = methodArr[i];
            var parametersData = e[method].parameters;
            tag = e[method].tags.toString();
            if (tag != lastag) {
                text.push("//" + tag + `\n`);
            }
            formatParameter(parametersData);
            if (paramInPath.length > 0 && paramInQuery.length == 0) {
                let inPaths = formatInPath(paramInPath);
                let parameters = paramInPath.join(',');
                exportSrt = `export const ${method}${path}Async = (${parameters}) => request.${method}(\u0060${pathUrl}${inPaths}\u0060)\u003b\n`;
            } else if (paramInPath.length == 0 && paramInQuery.length > 0) {
                let parameters = paramInQuery.join(',');
                let inQuery = formatInQuery(paramInQuery);
                exportSrt = `export const ${method}${path}Async = (${parameters}) => request.${method}(\u0060${pathUrl}?${inQuery}\u0060)\u003b\n`;
            } else if (paramInPath.length > 0 && paramInQuery.length > 0) {
                let inPaths = formatInPath(paramInPath);
                let parameters = paramInPath.join(',') + ',' + paramInQuery.join(',');
                let inQuery = formatInQuery(paramInQuery);
                if (method == "post" || method == "put") {
                    exportSrt = `export const ${method}${path}Async = (${parameters}) => request.${method}(\u0060${pathUrl}?${inQuery}\u0060)\u003b\n`;
                } else {
                    exportSrt = `export const ${method}${path}Async = (${parameters}) => request.${method}(\u0060${pathUrl}${inPaths}?${inQuery}\u0060)\u003b\n`;
                }
            } else {
                if (method == "post" || method == "put") {
                    exportSrt = `export const ${method}${path}Async = task => request.${method}(\u0060${pathUrl}\u0060, task)\u003b\n`;
                } else {
                    exportSrt = `export const ${method}${path}Async = () => request.${method}(\u0060${pathUrl}\u0060)\u003b\n`;
                }
            }
            text.push(exportSrt);

        }

    });
    file = _.join(text, '');
}

function formatPath(n) {
    var isInPathNum = n.indexOf("{");
    var tempName = (isInPathNum != -1) ? n.slice(0, isInPathNum) : n;
    pathUrl = tempName;
    var asyncName = tempName.split("/");
    var removeapiName = _.remove(asyncName, function (n) {
        return n != 'api'
    });
    var pathName = []; //export const method{pathName}Async 
    _.forEach(removeapiName, (e) => {
        pathName.push(_.upperFirst(e));
    });
    console.log(removeapiName, pathUrl);
    return _.join(pathName, '');
}

function formatParameter(p) {
    paramInPath = [];
    paramInQuery = [];
    _.forEach(p, o => {
        if (o.in == "path") {
            paramInPath.push(o.name);
        } else {
            paramInQuery.push(o.name);
        }
    });

}

function formatInQuery(q) {
    var queryStr = '';
    _.forEach(q, o => {
        queryStr = queryStr + o + '=${' + o + '}&';
    });
    queryStr = queryStr.substr(0, queryStr.length - 1);
    return queryStr;
}

function formatInPath(i) {
    var pathStr = '';
    _.forEach(i, o => {
        pathStr = pathStr + '${' + o + '}/';
    });
    //pathStr = pathStr.substr(0, pathStr.length - 1);
    return pathStr;
}

formatJson();

//exportSrt = `export const ${method}${paths}Async = (${parameters}) => request.${method}(\u0060${paths}/\u0024\u007b${parameters}\u007d/\u0060)\u003b\n`;

fs.appendFile(fileName, file, (err) => {
    return err
});