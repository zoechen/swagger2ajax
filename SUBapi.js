//AccessActivity
export const getAccessActivityAsync = (siteCode,parameters) => request.get(`/api/AccessActivity/${siteCode}/?parameters=${parameters}`);
export const getAccessActivityGetByHistoryFormIdAsync = (siteCode,formId,parameters) => request.get(`/api/AccessActivity/GetByHistoryFormId/${siteCode}/${formId}/?parameters=${parameters}`);
export const putAccessActivityExecAsync = (serviceId,fenceId,uuId) => request.put(`/api/AccessActivity/Exec/${serviceId}/${fenceId}/${uuId}/`);
export const putAccessActivityFinishAsync = (serviceId,fenceId,uuId) => request.put(`/api/AccessActivity/Finish/${serviceId}/${fenceId}/${uuId}/`);
export const putAccessActivityDeviateAsync = (serviceId,fenceId,uuId) => request.put(`/api/AccessActivity/Deviate/${serviceId}/${fenceId}/${uuId}/`);
//AccessChecker
export const getAccessCheckerAsync = (siteCode,parameters) => request.get(`/api/AccessChecker/${siteCode}/?parameters=${parameters}`);
export const postAccessCheckerAsync = (siteCode) => request.post(`/api/AccessChecker/${siteCode}/`);
export const putAccessCheckerInActiveAsync = (id,userId) => request.put(`/api/AccessChecker/InActive/${id}/${userId}/`);
export const putAccessCheckerActiveAsync = (id,userId) => request.put(`/api/AccessChecker/Active/${id}/${userId}/`);
//AccessHistory
export const getAccessHistoryGetSiteHistoryListAsync = (siteCode,inChina,parameters) => request.get(`/api/AccessHistory/GetSiteHistoryList/${siteCode}/${inChina}/?parameters=${parameters}`);
export const getAccessHistoryGetSiteActiveListAsync = (siteCode,inChina,parameters) => request.get(`/api/AccessHistory/GetSiteActiveList/${siteCode}/${inChina}/?parameters=${parameters}`);
export const getAccessHistoryGetUserHistoryListAsync = (userId,inChina,parameters) => request.get(`/api/AccessHistory/GetUserHistoryList/${userId}/${inChina}/?parameters=${parameters}`);
export const getAccessHistoryGetUserActiveListAsync = (userId,inChina,parameters) => request.get(`/api/AccessHistory/GetUserActiveList/${userId}/${inChina}/?parameters=${parameters}`);
export const getAccessHistoryGetUserScheduleAsync = (uuId) => request.get(`/api/AccessHistory/GetUserSchedule/${uuId}/`);
export const putAccessHistoryInActiveAsync = (id,userId) => request.put(`/api/AccessHistory/InActive/${id}/${userId}/`);
export const putAccessHistoryArriveAsync = (id,userId) => request.put(`/api/AccessHistory/Arrive/${id}/${userId}/`);
export const putAccessHistoryLeaveAsync = (id,userId) => request.put(`/api/AccessHistory/Leave/${id}/${userId}/`);
//AccessPathogenCheck
export const getAccessPathogenCheckAsync = (siteCode,activityId,parameters) => request.get(`/api/AccessPathogenCheck/${siteCode}/${activityId}/?parameters=${parameters}`);
export const postAccessPathogenCheckAsync = (siteCode) => request.post(`/api/AccessPathogenCheck/${siteCode}/`);
export const putAccessPathogenCheckAsync = (siteCode) => request.put(`/api/AccessPathogenCheck/${siteCode}/`);
export const deleteAccessPathogenCheckAsync = (id) => request.delete(`/api/AccessPathogenCheck/${id}/`);
//AccessPoint
export const getAccessPointAsync = (siteCode,formId,inChina,parameters) => request.get(`/api/AccessPoint/${siteCode}/${formId}/${inChina}/?parameters=${parameters}`);
//AccessReason
export const getAccessReasonAsync = (siteCode,inChina,parameters) => request.get(`/api/AccessReason/${siteCode}/${inChina}/?parameters=${parameters}`);
export const postAccessReasonAsync = (siteCode) => request.post(`/api/AccessReason/${siteCode}/`);
export const putAccessReasonAsync = (siteCode) => request.put(`/api/AccessReason/${siteCode}/`);
export const putAccessReasonInActiveAsync = (id,userId) => request.put(`/api/AccessReason/InActive/${id}/${userId}/`);
export const putAccessReasonActiveAsync = (id,userId) => request.put(`/api/AccessReason/Active/${id}/${userId}/`);
//AccessReasonActivity
export const getAccessReasonActivityAsync = (reasonId,parameters) => request.get(`/api/AccessReasonActivity/${reasonId}/?parameters=${parameters}`);
//AccessReasonPoint
export const getAccessReasonPointAsync = (reasonId,inChina,parameters) => request.get(`/api/AccessReasonPoint/${reasonId}/${inChina}/?parameters=${parameters}`);
//AccessRequest
export const getAccessRequestGetSiteHistoryListAsyncAsync = (siteCode,parameters) => request.get(`/api/AccessRequest/GetSiteHistoryListAsync/${siteCode}/?parameters=${parameters}`);
export const getAccessRequestGetSiteSubmitListAsync = (siteCode,parameters) => request.get(`/api/AccessRequest/GetSiteSubmitList/${siteCode}/?parameters=${parameters}`);
export const getAccessRequestGetUserHistoryListAsync = (userId,parameters) => request.get(`/api/AccessRequest/GetUserHistoryList/${userId}/?parameters=${parameters}`);
export const getAccessRequestGetUserActiveListAsync = (userId,parameters) => request.get(`/api/AccessRequest/GetUserActiveList/${userId}/?parameters=${parameters}`);
export const postAccessRequestAsync = (siteCode) => request.post(`/api/AccessRequest/${siteCode}/`);
export const putAccessRequestAsync = (siteCode) => request.put(`/api/AccessRequest/${siteCode}/`);
export const putAccessRequestApplyAsync = (siteCode) => request.put(`/api/AccessRequest/Apply/${siteCode}/`);
export const deleteAccessRequestAsync = (id,userId) => request.delete(`/api/AccessRequest/${id}/${userId}/`);
export const putAccessRequestRejectAsync = (id,userId) => request.put(`/api/AccessRequest/Reject/${id}/${userId}/`);
export const putAccessRequestApproveAsync = (id,userId) => request.put(`/api/AccessRequest/Approve/${id}/${userId}/`);
export const putAccessRequestInvalidAsync = (id,userId) => request.put(`/api/AccessRequest/Invalid/${id}/${userId}/`);
//AccessRequestItem
export const getAccessRequestItemAsync = (siteCode,formId,parameters) => request.get(`/api/AccessRequestItem/${siteCode}/${formId}/?parameters=${parameters}`);
//AccessRequestSwine
export const getAccessRequestSwineAsync = (siteCode,formId,parameters) => request.get(`/api/AccessRequestSwine/${siteCode}/${formId}/?parameters=${parameters}`);
//AccessUpload
export const getAccessUploadAsync = (siteCode,activityId,parameters) => request.get(`/api/AccessUpload/${siteCode}/${activityId}/?parameters=${parameters}`);
export const postAccessUploadAsync = (siteCode,activityId) => request.post(`/api/AccessUpload/${siteCode}/${activityId}/`);
export const deleteAccessUploadAsync = (id) => request.delete(`/api/AccessUpload/${id}/`);
//ActivityMapping
export const getActivityMappingAsync = (siteCode,parameters) => request.get(`/api/ActivityMapping/${siteCode}/?parameters=${parameters}`);
//ActivityType
export const getActivityTypeAsync = (parameters) => request.get(`/api/ActivityType?parameters=${parameters}`);
//ApprovalHistory
export const getApprovalHistoryAsync = (siteCode,formID,parameters) => request.get(`/api/ApprovalHistory/${siteCode}/${formID}/?parameters=${parameters}`);
//CheckSample
export const getCheckSampleAsync = (siteCode,parameters) => request.get(`/api/CheckSample/${siteCode}/?parameters=${parameters}`);
export const postCheckSampleAsync = (siteCode) => request.post(`/api/CheckSample/${siteCode}/`);
export const putCheckSampleAsync = (siteCode) => request.put(`/api/CheckSample/${siteCode}/`);
export const putCheckSampleInActiveAsync = (id,userId) => request.put(`/api/CheckSample/InActive/${id}/${userId}/`);
export const putCheckSampleActiveAsync = (id,userId) => request.put(`/api/CheckSample/Active/${id}/${userId}/`);
//ControlPoint
export const getControlPointAsync = (siteCode,inChina,parameters) => request.get(`/api/ControlPoint/${siteCode}/${inChina}/?parameters=${parameters}`);
export const postControlPointAsync = (siteCode) => request.post(`/api/ControlPoint/${siteCode}/`);
export const putControlPointAsync = (siteCode) => request.put(`/api/ControlPoint/${siteCode}/`);
export const putControlPointInActiveAsync = (id,userId) => request.put(`/api/ControlPoint/InActive/${id}/${userId}/`);
export const putControlPointActiveAsync = (id,userId) => request.put(`/api/ControlPoint/Active/${id}/${userId}/`);
//ControlPointActivity
export const getControlPointActivityAsync = (siteCode,parameters) => request.get(`/api/ControlPointActivity/${siteCode}/?parameters=${parameters}`);
//ControlPointChecker
export const getControlPointCheckerAsync = (siteCode,parameters) => request.get(`/api/ControlPointChecker/${siteCode}/?parameters=${parameters}`);
//ControlType
export const getControlTypeAsync = (parameters) => request.get(`/api/ControlType?parameters=${parameters}`);
//ControlTypeItem
export const getControlTypeItemAsync = (siteCode,parameters) => request.get(`/api/ControlTypeItem/${siteCode}/?parameters=${parameters}`);
export const postControlTypeItemAsync = (siteCode) => request.post(`/api/ControlTypeItem/${siteCode}/`);
export const putControlTypeItemAsync = (siteCode) => request.put(`/api/ControlTypeItem/${siteCode}/`);
export const putControlTypeItemInActiveAsync = (id,userId) => request.put(`/api/ControlTypeItem/InActive/${id}/${userId}/`);
export const putControlTypeItemActiveAsync = (id,userId) => request.put(`/api/ControlTypeItem/Active/${id}/${userId}/`);
//DisinfectionConfig
export const getDisinfectionConfigAsync = (siteCode,parameters) => request.get(`/api/DisinfectionConfig/${siteCode}/?parameters=${parameters}`);
export const postDisinfectionConfigAsync = (siteCode) => request.post(`/api/DisinfectionConfig/${siteCode}/`);
export const putDisinfectionConfigAsync = (siteCode) => request.put(`/api/DisinfectionConfig/${siteCode}/`);
export const putDisinfectionConfigInActiveAsync = (id,userId) => request.put(`/api/DisinfectionConfig/InActive/${id}/${userId}/`);
export const putDisinfectionConfigActiveAsync = (id,userId) => request.put(`/api/DisinfectionConfig/Active/${id}/${userId}/`);
//Home
export const getAsync = () => request.get(`/`);
//Initial
export const getInitialAsync = (siteCode) => request.get(`/api/Initial/${siteCode}/`);
export const postInitialAsync = (siteCode,userId) => request.post(`/api/Initial/${siteCode}/${userId}/`);
//IsolationConfig
export const getIsolationConfigAsync = (siteCode,parameters) => request.get(`/api/IsolationConfig/${siteCode}/?parameters=${parameters}`);
export const postIsolationConfigAsync = (siteCode) => request.post(`/api/IsolationConfig/${siteCode}/`);
export const putIsolationConfigAsync = (siteCode) => request.put(`/api/IsolationConfig/${siteCode}/`);
export const putIsolationConfigInActiveAsync = (id,userId) => request.put(`/api/IsolationConfig/InActive/${id}/${userId}/`);
export const putIsolationConfigActiveAsync = (id,userId) => request.put(`/api/IsolationConfig/Active/${id}/${userId}/`);
//NotificationHistory
export const getNotificationHistoryAsync = (userId) => request.get(`/api/NotificationHistory/${userId}/`);
export const postNotificationHistoryReceiveAsync = (id) => request.post(`/api/NotificationHistory/Receive/${id}/`);
//OtherActivityConfig
export const getOtherActivityConfigAsync = (siteCode,parameters) => request.get(`/api/OtherActivityConfig/${siteCode}/?parameters=${parameters}`);
export const postOtherActivityConfigAsync = (siteCode) => request.post(`/api/OtherActivityConfig/${siteCode}/`);
export const putOtherActivityConfigAsync = (siteCode) => request.put(`/api/OtherActivityConfig/${siteCode}/`);
export const putOtherActivityConfigInActiveAsync = (id,userId) => request.put(`/api/OtherActivityConfig/InActive/${id}/${userId}/`);
export const putOtherActivityConfigActiveAsync = (id,userId) => request.put(`/api/OtherActivityConfig/Active/${id}/${userId}/`);
//PathogenCheckConfig
export const getPathogenCheckConfigAsync = (siteCode,parameters) => request.get(`/api/PathogenCheckConfig/${siteCode}/?parameters=${parameters}`);
export const postPathogenCheckConfigAsync = (siteCode) => request.post(`/api/PathogenCheckConfig/${siteCode}/`);
export const putPathogenCheckConfigAsync = (siteCode) => request.put(`/api/PathogenCheckConfig/${siteCode}/`);
export const putPathogenCheckConfigInActiveAsync = (id,userId) => request.put(`/api/PathogenCheckConfig/InActive/${id}/${userId}/`);
export const putPathogenCheckConfigActiveAsync = (id,userId) => request.put(`/api/PathogenCheckConfig/Active/${id}/${userId}/`);
//SiteFence
export const getSiteFenceAsync = (siteCode,inChina) => request.get(`/api/SiteFence/${siteCode}/${inChina}/`);
export const postSiteFenceCreateDefaultFenceAsync = (siteCode) => request.post(`/api/SiteFence/CreateDefaultFence/${siteCode}/`);
export const postSiteFenceCreateCircleFenceAsync = (siteCode) => request.post(`/api/SiteFence/CreateCircleFence/${siteCode}/`);
export const postSiteFenceCreatePolygonFenceAsync = (siteCode,inChina) => request.post(`/api/SiteFence/CreatePolygonFence/${siteCode}/${inChina}/`);
//SiteInfo
export const getSiteInfoAsync = (siteCode,inChina) => request.get(`/api/SiteInfo/${siteCode}/${inChina}/`);
//SwineTransferConfig
export const getSwineTransferConfigAsync = (siteCode,parameters) => request.get(`/api/SwineTransferConfig/${siteCode}/?parameters=${parameters}`);
export const postSwineTransferConfigAsync = (siteCode) => request.post(`/api/SwineTransferConfig/${siteCode}/`);
export const putSwineTransferConfigAsync = (siteCode) => request.put(`/api/SwineTransferConfig/${siteCode}/`);
export const putSwineTransferConfigInActiveAsync = (id,userId) => request.put(`/api/SwineTransferConfig/InActive/${id}/${userId}/`);
export const putSwineTransferConfigActiveAsync = (id,userId) => request.put(`/api/SwineTransferConfig/Active/${id}/${userId}/`);
//UserProfile
export const getUserProfileAsync = (userId) => request.get(`/api/UserProfile/${userId}/`);
export const postUserProfileChangePhoneSettingAsync = (userId) => request.post(`/api/UserProfile/ChangePhoneSetting/${userId}/`);
//VerifyMethod
export const getVerifyMethodAsync = (parameters) => request.get(`/api/VerifyMethod?parameters=${parameters}`);
