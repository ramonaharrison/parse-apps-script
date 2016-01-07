// POST

function sendHttpPostToParse(url, data) {
  
   // Get Parse API keys
   var scriptProperties = PropertiesService.getScriptProperties();
   var applicationId = scriptProperties.getProperty('applicationId');
   var restId = scriptProperties.getProperty('restId');
  
   var payload = JSON.stringify(data);
  
   var headers =
   {
     "X-Parse-Application-Id" : applicationId,
     "X-Parse-REST-API-Key" : restId,
     "Content-Type" : "application/json"
   };

   var options =
   {
     "method" : "post",
     "headers" : headers,
     "payload" : payload
   };

   return UrlFetchApp.fetch(url, options);
 }


// GET

function sendHttpGetToParse(url) {
  
   // Get Parse API keys
   var scriptProperties = PropertiesService.getScriptProperties();
   var applicationId = scriptProperties.getProperty('applicationId');
   var restId = scriptProperties.getProperty('restId');
  
   var headers =
   {
     "X-Parse-Application-Id" : applicationId,
     "X-Parse-REST-API-Key" : restId,
     "Content-Type" : "application/json"
   };

   var options =
   {
     "method" : "get",
     "headers" : headers,
   };

   return UrlFetchApp.fetch(url, options);
 }

// PUT

function sendHttpPutToParse(url, data) {
 
   var scriptProperties = PropertiesService.getScriptProperties();
   var applicationId = scriptProperties.getProperty('applicationId');
   var restId = scriptProperties.getProperty('restId');
  
   var payload = JSON.stringify(data);
  
   var headers =
   {
     "X-Parse-Application-Id" : applicationId,
     "X-Parse-REST-API-Key" : restId,
     "Content-Type" : "application/json"
   };

   var options =
   {
     "method" : "put",
     "headers" : headers,
     "payload" : data
   };

   return UrlFetchApp.fetch(url, options);
 }
