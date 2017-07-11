(function (global){

  var ajaxUtils = {};

  //Returns an Http Request Object
  function getRequest()  {
    if(window.XMLHttpRequest){
      return (new XMLHttpRequest());
    }

    else {
      global.alert("Ajax is not supported");
      return (null);
    }
  }

  //Makes an AJAX request to 'requestURL'
  ajaxUtils.sendGetRequest = function(requestURL, responseHandler, isJsonResponse) {
    var request = getRequest();
    request.onreadystatechange = function() {
      handleResponse(request,responseHandler,isJsonResponse);
    }
    request.open("GET", requestURL, true);
    request.send(null); //For POST only
  }

  //Only calls user provided 'responseHandler'
  //function if response is ready
  //and not an error

  function handleResponse(request,responseHandler,isJsonResponse)
  {
    if((request.readyState == 4) && request.status == 200){
      if(isJsonResponse == undefined) {
        isJsonResponse = true;
      }

      if(isJsonResponse == true) {
        responseHandler(request);
      }

      else {
        responseHandler(request);
      }
    }
  }

  global.$ajaxUtils = ajaxUtils;

})(window);
