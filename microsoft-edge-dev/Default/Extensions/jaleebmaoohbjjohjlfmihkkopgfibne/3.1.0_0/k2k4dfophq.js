(()=>{"use strict";var e={3089:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserProfileLoadStatus=t.SimplifiedPdfSourceType=t.ReferenceTypes=t.LocaleStringId=t.TooltipContext=t.Endpoint=t.ClickUrl=t.StorageKeys=t.InlineButtonState=t.SnowplowAnalyticsEvents=t.EndNoteClickAnalyticsEvents=t.Route=t.ResponseFormat=t.HeaderOperation=t.RuleActionType=t.ResourceType=t.HttpHeader=t.HttpMethod=t.Message=t.AuthenticationProtocol=t.AuthenticationState=t.BiblioContentStatus=t.ResearchItemStatus=t.MessageHandlerReturn=t.MimeType=void 0,function(e){e.Json="application/json",e.Html="text/html",e.Pdf="application/pdf",e.Binary="application/octet-stream",e.Download="application/download",e.FormEncoded="application/x-www-form-urlencoded",e.FormData="multipart/form-data",e.Png="image/png",e.None=""}(t.MimeType||(t.MimeType={})),t.MessageHandlerReturn={SyncHandled:!1,AsyncHandled:!0},function(e){e.Pending="pending",e.Started="started",e.Complete="complete"}(t.ResearchItemStatus||(t.ResearchItemStatus={})),function(e){e.Pending="pending",e.Started="started",e.Complete="complete"}(t.BiblioContentStatus||(t.BiblioContentStatus={})),function(e){e.Authenticated="authenticated",e.NotStarted="not started",e.InProgress="in-progress"}(t.AuthenticationState||(t.AuthenticationState={})),function(e){e.None="none",e.Ezproxy="ezproxy",e.Shibboleth="shibbolleth",e.OpenAthens="openathens",e.Saml2="saml2"}(t.AuthenticationProtocol||(t.AuthenticationProtocol={})),function(e){e.BgDownloadPdf="background-download-pdf",e.BgGetAnalyticsContext="get-analytics-context",e.BgGetPdfMetaData="get-pdf-metadata",e.BgGetResearchData="bg-get-research-items",e.BgOnPdfDeletion="on-pdf-deletion",e.BgLinkResolverClicked="bg-link-resolver-clicked",e.BgLocalSettingsHaveChanged="bg-local-settings-have-changed",e.BgPageUpdated="bg-page-updated",e.BgPageRemove="bg-page-remove",e.BgRetrievePdfBlob="retrieve-pdf-blob",e.BgSmartRisExport="smart-ris-export",e.BgViewPdfClicked="bg-view-pdf-clicked",e.BgReloadUserData="reloaduserdata",e.BgUploadPdf="upload-pdf",e.BgUninstallExtension="uninstall-extension",e.BgLookupCitations="lookup-citations",e.CnCanaryBridgeMessage="canaryMessageSentEvent",e.CnCanaryBridgeResponse="canaryMessageResponseEvent",e.CnCreateInlineButton="cn-create-inline-button",e.CnCreateViewPdfBar="cn-create-viewpdf-bar",e.CnUpdateInlineButton="cn-update-inline-button",e.CnUpdateViewBar="cn-update-viewpdf-bar",e.CnLogSnowplowEvent="cn-log-snowplow-event",e.BgSetItemSelection="bg-set-item-selection",e.BgLogAnalyticsEvent="bg-log-analytics-event"}(t.Message||(t.Message={})),function(e){e.Post="POST",e.Get="GET",e.Head="HEAD",e.Put="PUT",e.Patch="PATCH"}(t.HttpMethod||(t.HttpMethod={})),function(e){e.ContentType="content-type",e.Authorization="authorization",e.PluginVersion="X-Kopernio-Plugin-Version"}(t.HttpHeader||(t.HttpHeader={})),function(e){e.MAIN_FRAME="main_frame",e.SUB_FRAME="sub_frame",e.STYLESHEET="stylesheet",e.SCRIPT="script",e.IMAGE="image",e.FONT="font",e.OBJECT="object",e.XMLHTTPREQUEST="xmlhttprequest",e.PING="ping",e.CSP_REPORT="csp_report",e.MEDIA="media",e.WEBSOCKET="websocket",e.OTHER="other"}(t.ResourceType||(t.ResourceType={})),function(e){e.BLOCK="block",e.REDIRECT="redirect",e.ALLOW="allow",e.UPGRADE_SCHEME="upgradeScheme",e.MODIFY_HEADERS="modifyHeaders",e.ALLOW_ALL_REQUESTS="allowAllRequests"}(t.RuleActionType||(t.RuleActionType={})),function(e){e.APPEND="append",e.SET="set",e.REMOVE="remove"}(t.HeaderOperation||(t.HeaderOperation={})),function(e){e.String="string",e.Json="json",e.Blob="blob",e.Response="response"}(t.ResponseFormat||(t.ResponseFormat={})),function(e){e.OpenAccess="viaoadoi",e.Publisher="viadeep",e.PublisherEzProxy="viaezproxy",e.PublisherShibboleth="viashibboleth",e.Canary="viacanarydb",e.Locker="viacanarylocker"}(t.Route||(t.Route={})),function(e){e.NoEvent="",e.Activated="activated",e.ListActivated="list-activated",e.DoiFound="doi-found",e.ListDoiFound="list-doi-found",e.PdfFound="pdf-found",e.ListPdfFound="list-pdf-found",e.NoPdf="no-pdf",e.ListNoPdf="list-no-pdf",e.PmQuery="pm-query",e.GsQuery="gs-query",e.WsQuery="ws-query",e.AddToLocker="add-to-locker",e.Viewer="viewer",e.FirstByte="first-byte",e.NativeClick="native-click",e.KopernioClick="kopernio-click",e.LeaveBeforeDone="leave-before-done",e.ListLeaveBeforeDone="list-leave-before-done",e.Uninstall="uninstall",e.ViewerError="viewer-error",e.OpenUrlLinkout="openurl-linkout",e.NoPublisherPdf="no-publisher-pdf"}(t.EndNoteClickAnalyticsEvents||(t.EndNoteClickAnalyticsEvents={})),function(e){e.AppLogin="app-login",e.AppLogout="app-logout",e.ViewPdf="view-pdf",e.LinkResolver="link-resolver",e.PopupOpened="popup-opened",e.PopupSearch="popup-search",e.AddToLocker="add-to-locker",e.RemoveFromLocker="remove-from-locker",e.ViewBarDisabled="viewbar-disabled",e.ViewBarEnabled="viewbar-enabled",e.EndnoteLogin="endnote-login",e.PushReferences="push-references-to-endnote",e.PushFailed="endnote-reference-push-failed",e.ExportRis="export-ris",e.InlineButtonsEnabled="inline-buttons-enabled",e.InlineButtonsDisabled="inline-buttons-disabled",e.PopupPmQuery="pm-query",e.PopupGsQuery="gs-query",e.PopupWsQuery="ws-query"}(t.SnowplowAnalyticsEvents||(t.SnowplowAnalyticsEvents={})),function(e){e.Hidden="hidden",e.Searching="searching",e.ViewPdf="viewPdf",e.LinkResolver="linkResolver"}(t.InlineButtonState||(t.InlineButtonState={})),function(e){e.ResearchItems="researchItems",e.UserProfile="userProfile",e.PrivacyOptIn="privacyOptIn",e.AuthToken="authtoken",e.OnboarderShown="onboarderShown",e.PdfCache="pdfCache",e.WosCache="wosCache",e.CrossrefCache="crossrefcache",e.SelectedItems="selectedItems"}(t.StorageKeys||(t.StorageKeys={})),function(e){e.Signin="/signin",e.GetStarted="/get-started",e.Api="/api/v1/",e.Locker="/locker",e.Viewer="/viewer",e.Logout="/logout"}(t.ClickUrl||(t.ClickUrl={})),function(e){e.UserData="user-data",e.Unpaywall="unpaywall",e.CrProxyWorks="cr-proxy-works",e.WosLookup="wos-lookup",e.AddToLocker="add-to-locker",e.GenerateDynamicUrl="upload/generate-url-v2"}(t.Endpoint||(t.Endpoint={})),function(e){e.InlineButton="inline",e.ViewPdfBar="bar"}(t.TooltipContext||(t.TooltipContext={})),function(e){e.Searching="searching",e.ViewPdf="viewPdf",e.SearchLibrary="searchInstitutionLibrary",e.PdfLink="pdfLink",e.Search="search",e.TopicKeywords="topicKeywords",e.ArticlePdfNotFound="articlePdfNotFound",e.PublisherPdfFound="publisherPdfFound",e.OpenAccess="openAccess",e.InYourLocker="inYourLocker",e.CitedBy="citedBy"}(t.LocaleStringId||(t.LocaleStringId={})),function(e){e.Journal="17"}(t.ReferenceTypes||(t.ReferenceTypes={})),function(e){e.Url="url",e.Document="document",e.Meta="meta"}(t.SimplifiedPdfSourceType||(t.SimplifiedPdfSourceType={})),function(e){e.Successful="success",e.FailedNoRetry="failed-no-retry",e.FailedRetry="failed-retry"}(t.UserProfileLoadStatus||(t.UserProfileLoadStatus={}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=n(3089);window.addEventListener("message",(t=>{const{origin:n}=t,{name:o,detail:i}=t.data;["https://click.endnote.com"].some((e=>n.includes(e)))&&o===e.Message.CnCanaryBridgeMessage&&chrome.runtime.sendMessage(i).then((t=>{window.postMessage({name:e.Message.CnCanaryBridgeResponse,detail:{_messageId:i._messageId,data:t}},n)}))}))})()})();