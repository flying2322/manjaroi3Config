function Reader(){let e=this;function t(t){return new Promise((t=>{e.tts&&e.tts.pause(!1),t()})).then((()=>{"prem"===t&&"google"===voices.premVoices[e.previewVoiceKey?e.previewVoiceKey:readingBar.settings.premVoice].source||"free"===t?e.tts=freeTts:(e.tts=onlineTts,e.tts.setNumPreloads&&("prem"===t?e.tts.setNumPreloads(2,4):e.tts.setNumPreloads(2,2)),e.tts.clearPreloads&&e.tts.clearPreloads())})).catch((function(e){}))}function r(i){let d=i?i.op:null,l=!1;"emailThread"==d&&(l=!0,e.readOption=d);let u=i?i.caller:null;u&&"readBtn"===u&&e.isFirstRead&&c(0,l);let g=i&&void 0!==i.percentage?i.percentage:null,f=e.setPlayId(),T=i&&i.texts?i.texts:null,m=i&&"index"in i?i.index:null;return null!==e.tts&&R()||t(readingBar.settings.voiceType),utils.setTabId("beingRead").then((async()=>{if(e.isFirstRead||d||0===ttsText.textsForTts.length)return readingBar.settings.shouldCheckForPreviewMode&&"googleDrivePreview"===doc.type?Promise.reject(new Error("ERR_GOOGLE_DRIVE_PREVIEW")):(o(),null!=e.lastReadIndex&&(e.lastReadIndex=null),x(T));if("googleDoc"!==doc.type&&"gmail"!==doc.type&&"googleDrivePreview"!==doc.type&&"outlookMail"!==doc.type&&"gpt"!==doc.type||"all"!==e.readOptionOfParsed||"playNext"==u||"forward"===u||"backward"===u)return Promise.resolve();return await nrTextProcessor.isSameText()?Promise.resolve():Promise.reject(new Error("ERR_TEXT_EDITED"))})).then((()=>{e.isSetReadIndex&&(m=e.currReadIndex,e.isSetReadIndex=!1),null!==m&&(e.currReadIndex=m),"prev"===d&&(e.currReadIndex=ttsText.textsForTts.length-1),"next"===d&&(e.currReadIndex=0),"readPage"===d&&(e.currReadIndex=g?Math.floor(ttsText.textsForTts.length*g):0),e.readProgress=(e.currReadIndex+1)/ttsText.textsForTts.length*100})).then((()=>function(){let r="";ttsText.textsForTts[e.currReadIndex]&&(r=ttsText.textsForTts[e.currReadIndex].processed);if(!r||r&&r.length<=0)return Promise.resolve();let n=readingBar.settings.userInfo;if(n&&function(){if("prem"===readingBar.settings.voiceType&&"google"===voices.premVoices[readingBar.settings.premVoice].source)return t("free"),!0;return!1}()){let e=n.license?n.license:"0";return utils.increaseTtsUsage(e,r.length).catch((e=>{throw e}))}}())).then((()=>function(t,r="next"){return s(!1),t===e.playId?function(){let t=ttsText.textsForTts[e.currReadIndex].processed;return e.tts.play(t,e.currReadIndex,a)}():Promise.reject(new Error("ERR_INVALID_PLAY_ID"))}(f,d))).then((()=>{"kindle"!==doc.type||e.currReadIndex!==ttsText.textsForTts.length-1||e.isEbookBackwarded||setTimeout((()=>{doc.getTextsOfNextPage()}),100),e.isEbookBackwarded&&(e.isEbookBackwarded=!1),"readIndex"===u&&nrDomController.scrollTo(e.currReadIndex)})).catch((t=>{"ERR_TEXT_EDITED"===t.message?("googleDoc"===doc.type&&removeNRTags(),i.index=e.currReadIndex,p(!0),r()):n(t,d,u)}))}function n(t,n=null,s=null){if("ERR_INVALID_PLAY_ID"===(t=t.message));else if("READ_NEW"===t)p(),r();else if("ERR_PDF"===t)chrome.runtime.sendMessage({fn:"displayAlertMessage",message:"ERR_PDF"});else if("ERR_NO_TEXT"===t)g(n,s);else if("ERR_NOT_READABLE"===t||"ERR_INVALID_PAGE"===t)p(),chrome.runtime.sendMessage({fn:"displayAlertMessage",message:t});else if("ERR_GOOGLE_DRIVE_PREVIEW"===t)chrome.runtime.sendMessage({fn:"displayAlertMessage",message:"ERR_GOOGLE_DRIVE_PREVIEW"});else if(1005==t)u(),chrome.runtime.sendMessage({fn:"displayAlertMessage",message:t});else if(1006==t||"ERR_LICENSE_INVALID"==t)"online"===e.tts.type&&(e.tts.hasInvalidLicenseError?e.tts.invalidLicenseErrorCount>0&&p():(e.tts.hasInvalidLicenseError=!0,e.tts.invalidLicenseErrorCount++,e.isWaitingForLicense=!0,chrome.runtime.sendMessage({fn:"updateLicense"},(()=>{chrome.runtime.lastError}))));else{if(t.includes("MEDIA_ELEMENT_ERROR"))return p(!1),new Promise((e=>{chrome.runtime.sendMessage({fn:"hasAudioPlayer"},(t=>{chrome.runtime.lastError&&e(),t?chrome.runtime.sendMessage({fn:"getMediaViolationTabId"},(t=>{chrome.runtime.lastError,t!=utils.tabId?chrome.runtime.sendMessage({fn:"removeAudioPlayer"},(()=>{chrome.runtime.lastError,e()})):e(!0)})):e()}))})).then((t=>{t?(chrome.runtime.sendMessage({fn:"setMediaViolationTabId"},(()=>{chrome.runtime.lastError})),e.tts.hasMediaViolation=!0,e.tts.previousText?r({texts:[e.tts.previousText]}):r()):chrome.runtime.sendMessage({fn:"injectPlayer",docType:doc.type},(t=>{chrome.runtime.lastError,e.tts.hasMediaViolation=!0,e.tts.playerTabId=t,e.tts.previousText?r({texts:[e.tts.previousText]}):r()}))})).catch((e=>{}));t.includes("DEMUXER_ERROR_COULD_NOT_OPEN")?l():p()}}function s(t){e.isFirstRead=t,chrome.runtime.sendMessage({fn:"setIsFirstRead",val:t},(()=>{chrome.runtime.lastError}))}function a(t){if("start"===t.type)s(!1),d("reading"),e.readProgress=(e.currReadIndex+1)/ttsText.textsForTts.length*100,function(){void chrome.runtime.sendMessage({fn:"setBeingRead",readOtpion:e.readOption},(()=>{chrome.runtime.lastError})),d("reading"),"undefined"!=typeof readingBar&&readingBar.readerOnPlay();nrDomController.readerOnPlay()}();else if("end"===t.type)d("init"),l();else if("pause"===t.type)"init"!==e.state&&"pause"!==e.state&&(d("pause"),"undefined"!=typeof readingBar&&readingBar.readerOnPause(),nrDomController.readerOnPause());else if("loading"===t.type)o();else{if("word"===t.type)return nrTextProcessor.setWordForMainTextAndCC(e.currReadIndex,t.word,t.wordIndex).then((()=>{nrDomController.highlightWord(e.currReadIndex,t.wordIndex)})).catch((e=>{}));"error"===t.type&&n({message:t.err})}}function o(){d("loading"),"undefined"!=typeof readingBar&&readingBar.readerOnLoading()}function i(){d("init"),"undefined"!=typeof readingBar&&readingBar.readerOnStop(),"undefined"!=typeof nrDomController&&nrDomController.readerOnStop()}function d(t){e.state=t,readingBar.setReadingBarSetting("readerState",t)}function l(){if(e.currReadIndex+1<ttsText.textsForTts.length){if(null!==e.lastReadIndex&&e.currReadIndex===e.lastReadIndex&&"selection"===e.readOption)return e.lastReadIndex=null,e.currReadIndex++,u(!0);e.currReadIndex++,r({caller:"playNext"})}else if("all"===e.readOption)g("next","playNext");else if(p(!1),("selection"===e.readOption||"selection-context-menu"===e.readOption)&&readingBar.settings.isClickToRead)return e.readOption="all",s(!1),e.currReadIndex=0,x(null)}function c(t=0,r=!1){s(!0),d("init"),e.currReadIndex=t,e.currPageIndex=0,e.lastReadIndex=null,e.playId=void 0,r||(e.readOption="all"),ttsText.clearTexts(),e.tts&&e.tts.clearPreloads&&e.tts.clearPreloads(),e.tts&&e.tts.hasMediaViolation&&(e.tts.hasMediaViolation=!1,e.tts.textForMediaViolation=null,e.tts.marksForMediaViolation=null,chrome.runtime.sendMessage({fn:"removeTabs",tabIds:[e.tts.playerTabId]})),chrome.runtime.sendMessage({fn:"setBeingRead",toReset:!0},(()=>{chrome.runtime.lastError}))}function u(t=!1){e.tts&&e.tts.pause(),t&&(i(),d("init"))}function p(t=!0){i(),e.tts&&e.tts.stop(),d("init"),!0===t&&c()}function g(t="next",s=null){return(!t||"prev"!==t&&"next"!==t)&&(t="next"),"prev"===t&&"kindle"===doc.type&&(e.isEbookBackwarded=!0),nrDomController.scrollToAdjacentPage(t).then((a=>{if("ERR"!==a)ttsText.textsForTts=[],r({op:t,caller:s});else{if("forward"===s||"backward"===s)return r();!e.isFirstRead||ttsText.textsForTts&&0!==ttsText.textsForTts.length||n({message:"ERR_INVALID_PAGE"}),p(!0)}})).catch((e=>{}))}function x(t=null){const r=e.state;return"parsing"===e.state?Promise.resolve():(e.state="parsing",function(t=null){if(t)return"undefined"!=typeof nrTextProcessor&&(nrTextProcessor.resetDocInnerTexts(),removeNRTags()),e.readOptionOfParsed=e.readOption,Promise.resolve(t);{const t=nrTextProcessor.getCurrentIndex();return t===e.currPageIndex&&ttsText.textsForTts.length>0&&e.readOptionOfParsed===e.readOption?Promise.resolve("parsed"):(e.currPageIndex=t,e.readOptionOfParsed=e.readOption,nrTextProcessor.getTextsFromPage(e.readOption))}}(t).then((t=>{if(e.state=r,"parsed"===t)return readingBar.textsToReadOnChange();if("ERR_EBOOK"===t)throw new Error("ERR_EBOOK");if(t&&0===t.length)throw ttsText.textsForTts=[],new Error("ERR_NO_TEXT");return t=t.map((e=>({original:e,processed:ttsText.processText(e)}))),ttsText.textsForTts=t,readingBar.textsToReadOnChange()})))}function R(t=null){return t||(t=readingBar.settings.voiceType),"prem"===t||"plus"===t?("google"!==voices.allVoices[e.previewVoiceKey?e.previewVoiceKey:readingBar.settings.selectedVoice].source||"free"===e.tts.type)&&"online"===e.tts.type:"free"!==t||"online"!==e.tts.type}function f(e=null,t=0){if(null!=e){if(u(),doc.scrollToPage)return o(),doc.scrollToPage(e).then((()=>{ttsText.textsForTts=[],r({op:"readPage",percentage:t})})).catch((e=>{p()}));p(),n({message:"ERR_INVALID_PAGE"})}}e.tts=null,e.setTts=t,e.state="init",e.currReadIndex=0,e.currPageIndex=0,e.readProgress=0,e.isFirstRead=!0,e.playId=void 0,e.readOption="all",e.readOptionOfParsed="all",e.play=r,e.replay=function(){return new Promise((t=>{e.tts&&"online"===e.tts.type&&e.tts.clearPreloads&&e.tts.clearPreloads(),t()})).then((()=>{"reading"!==e.state&&"loading"!==e.state||(e.tts.pause(!1),r())})).catch((e=>{}))},e.stop=p,e.pause=u,e.playNext=l,e.forward=function(){e.isFirstRead||(u(),e.currReadIndex+1<ttsText.textsForTts.length?(e.currReadIndex++,r({caller:"forward"})):"selection"===e.readOption||"selection-context-menu"===e.readOption?(e.currReadIndex=ttsText.textsForTts.length-1,r()):(e.readOption="all",g("next","forward")))},e.isEbookBackwarded=!1,e.backward=function(){e.isFirstRead||(u(),e.currReadIndex-1>=0?(e.currReadIndex--,r({caller:"backward"})):"selection"===e.readOption||"selection-context-menu"===e.readOption?(e.currReadIndex=0,r()):(e.readOption="all",g("prev","backward")))},e.readIndex=function(n=null,a=null,o=0){s(!1),null!==e.tts&&R()||t(readingBar.settings.voiceType);null!==n?isNaN(n)||(n>=0&&n<ttsText.textsForTts.length?(u(),e.currReadIndex=n,r({caller:"readIndex"})):n>=0&&n==ttsText.textsForTts.length&&(u(),e.currReadIndex=n-1,r({caller:"readIndex"}))):null!==a&&(isNaN(a)||(u(),e.readOption="all",f(a,o)))},e.lastReadIndex=null,e.setReadIndex=function(t){e.currReadIndex=t,e.isSetReadIndex=!0},e.setLastReadIndex=function(t){e.lastReadIndex=t},e.setIsSpeechMark=function(t){e.tts&&"online"===e.tts.type&&(onlineTts.isSpeechMark=t)},e.isSetReadIndex=!1,e.readPage=f,e.readSelectionWithContextMenu=async function(t,n,s){try{if(p(),nrDomDetector.removeSelection(),e.readOption="selection-context-menu",readingBar.settings.isAutoSelectVoice){let e=await utils.detectLanguage(t.texts);voices.autoSelectVoice(e)}nrDomDetector.hideReadIcon(),r({texts:ttsText.processSentencesByLength(ttsText.getNlpSentences(t.texts))})}catch(e){}},e.setPlayId=function(){void 0===e.playId?e.playId=0:e.playId++;return e.playId},e.setShouldCheckForPreviewMode=function(e,t,r){readingBar.setReadingBarSetting("shouldCheckForPreviewMode",e.val)},e.setReadOption=function(t,r,n){e.readOption=t.readOption},e.preview=function(r=null){return new Promise((n=>{e.previewVoiceKey=r||"";let s=r.split(" ").slice(-2)[0];null!==e.tts&&R(s)||t(s),n()})).then((()=>{if("plus"==(r=voices.allVoices[r]).type)return e.tts.previewPlus(r);let t=r.language.split("-")[0],n=ttsText.previewTexts[t];n||(n=ttsText.previewTexts.en),e.tts.clearPreloads&&e.tts.clearPreloads(),e.tts.play(n,0)})).catch((e=>{}))},e.getReadOption=function(t,r,n){n(e.readOption)},e.getReaderState=function(t,r,n){n(e.state)},e.setTextsForTtsWithoutPlay=function(t){return Promise.resolve().then((async()=>{if(s(!1),void 0!==t&&(e.readOption=t),"googleDoc"!==doc.Type&&"googleDrivePreview"!==doc.type&&"outlookMail"!==doc.type||"all"!==e.readOptionOfParsed)return x(null);if(await nrTextProcessor.isSameText())return x(null);{const t=e.currReadIndex,r=e.currPageIndex,n=e.playId;return p(!0),e.playId=n,e.currPageIndex=r,e.currReadIndex=t,s(!1),x(null)}})).then((()=>{"kindle"===doc.type&&r()})).catch((e=>{n(e)}))},e.asyncFunctions=["getReadOption","setTextsForTtsWithoutPlay","getReaderState"],e.isWaitingForLicense=!1,e.onLicenseUpdated=function(){e.isWaitingForLicense=!1},e.previewVoiceKey="",browser.runtime.onMessage.addListener((function(n,s,a){if(e[n.fn]){if(e[n.fn](n,s,a),o=n.fn,e.asyncFunctions.includes(o))return!0}else"stop"===n.message?p(n.toReset):"pause"===n.message?u(n.toStop):"setIsSpeechMark"===n.message?"online"===e.tts.type&&(onlineTts.isSpeechMark=n.val):"setTts"===n.message?t(n.type):"play"===n.message&&r(n);var o}))}var reader=reader||new Reader;