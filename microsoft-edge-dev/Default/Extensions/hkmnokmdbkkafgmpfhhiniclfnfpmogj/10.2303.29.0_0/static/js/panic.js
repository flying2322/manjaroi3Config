function forceReflow(e){var r,a=(document.querySelector(e)||{}).style;!a||window.outerHeight>=600||(r=a.border,a.border=".1px solid rgba(0,0,0,0)",window.setTimeout(function(){a.border=r},200))}function onLoad(){hideLoadingSpinner(),clearTimeout(pageWaitTimeout),forceReflow("#panelHtml")}function hideLoadingSpinner(){spinnerDiv&&(spinnerDiv.style.display="none")}function loadRetryScreen(e){(!e||e!==gateway_iframe_blank_error&&e!==gateway_page_timeout_error)&&(e=gateway_iframe_load_error),retryScreenShownAlready&&falseBoolString!==retryScreenShownAlready||setToLocalStorage(retryScreenShownStorageKey,trueBoolString)||(e=gateway_local_storage_error),gatewayFrame.src=retryHtmlFileName+"?errorCode="+errorCodePrefix+e}function isValidGatewayURL(){return!!(gatewayFrame&&gatewayFrame.src&&gatewayFrame.src.indexOf(blankIframeURL)<0&&gatewayFrame.src.indexOf(retryHtmlFileNameString)<0)}function gatewayFrameHandler(){try{localStorage&&(retryScreenShownAlready=getFromLocalStorage(retryScreenShownStorageKey))}catch(e){}gatewayFrame.onerror=loadRetryScreen,gatewayFrame.onload=onLoad;var e=retryScreenShownAlready&&falseBoolString!==retryScreenShownAlready?subsequentRetryScreenWaitTime:retryScreenWaitTime;setTimeout(function(){gatewayFrame&&gatewayFrame.src.indexOf(blankIframeURL)>=0&&loadRetryScreen(gateway_iframe_blank_error)},e),pageWaitTimeout=setTimeout(function(){isValidGatewayURL()&&loadRetryScreen(gateway_page_timeout_error)},pageWaitTime)}var gatewayIframeId="UBPv2MainPanelFrame",spinnerDivId="spinnerSection",retryScreenShownStorageKey="ubpv2.retry.screen.shown",retryScreenShownAlready="",retryScreenWaitTime=1e3,subsequentRetryScreenWaitTime=1e3,pageWaitTime=1e3,pageWaitTimeout,retryHtmlFileName="./retry.html",falseBoolString="false",trueBoolString="true",blankIframeURL="about:blank",retryHtmlFileNameString="retry.html",gatewayFrame=document.getElementById(gatewayIframeId),spinnerDiv=document.getElementById(spinnerDivId),errorCodePrefix="ext",gateway_iframe_load_error="101",gateway_iframe_blank_error="102",gateway_page_timeout_error="103",gateway_local_storage_error="104";window.addEventListener("DOMContentLoaded",function(){gatewayFrameHandler()});