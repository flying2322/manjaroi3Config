(function() {
    var libs, ImportRuleModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/domainManager", "services/validate", "services/generate", "directives/scopeElement"], 
    ImportRuleModalControllerOps = function(angular, jquery) {
        var ImportRuleModalController, i;
        return ImportRuleModalController = function($scope, $rootScope, $timeout, $translate, $element, $document, $popover, userManager, domainManager, validate, generate) {
			$scope.initAlertText = $translate.instant("options.rules_import.help_text");
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;

			$scope.email = $rootScope.user.profile.email;
			$scope.showSendEmailInput = false;
        	$scope.focusSendToEmail = false;
        	$scope.disableInput = false;
        	$scope.submit_succ = false;
        	$scope.typing = false;
        	$scope.url_loading = false;
        	$scope.verified = false;
        	$scope.submiting = false;
        	$scope.load_error = false;
        	$scope.load_error_message = null;
        	$scope.submit_button_text = $translate.instant("options.rules_import.verify");
			
        	$scope.totalLines = -1;
	
        	//alert(validate.ip("a192.168.2.121"));
			//alert(validate.cidr_contains("192.168.1.1/24", "192.168.2.121"));
			//console.log($element);
/*
$scope.popover = {
  "title": "Title",
  "content": "Hello Popover<br />This is a multiline message!"
};
*/

			$scope.focuses = {
				url: true,
				content: false
			};


			$scope.updateGutter = function (allLines) {
			  	const toAdd = $document[0].createDocumentFragment();
				$document[0].getElementsByClassName('number-gutter')[0].innerHTML = '';
			  	for (let i = 0; i < allLines;) {
				    i += 1;
				    const newDiv = $document[0].createElement('div');
				    newDiv.id = 'r' + i;
				    newDiv.className = 'ansbox';
				    newDiv.innerHTML = `${i}`;
				    toAdd.appendChild(newDiv);
				    $document[0].getElementsByClassName('number-gutter')[0].appendChild(toAdd);
			  	}
			}

			function getText() {
			  let element = $document[0].querySelector('div#numbered-text-box');
			  if(!element || !element.firstChild) return "";
			  let firstTag = element.firstChild.nodeName;
			  let keyTag = new RegExp(
			    firstTag === '#text' ? '<br' : '</' + firstTag,
			    'i'
			  );
			  let tmp = document.createElement('p');
			  tmp.innerHTML = element.innerHTML
			    .replace(/<[^>]+>/g, (m, i) => (keyTag.test(m) ? '{ß®}' : ''))
			    .replace(/{ß®}$/, '');
			  return tmp.innerText.replace(/{ß®}/g, '\n');
			}

			$scope.unEqual = function(linesTotal) {
			  if (linesTotal !== $scope.totalLines) {
			    $scope.totalLines = linesTotal;
			    $scope.updateGutter($scope.totalLines);
			  }
			}



			$scope.keyup  = function() {
				var linesTotal = getText().textarea_line_count();
				console.log(linesTotal);
				$scope.unEqual(linesTotal);
			}



			setTimeout(function(){ 			
				var linesTotal = getText().textarea_line_count();
				$scope.unEqual(linesTotal);
			}, 100);


			$scope.getUsername = function() {
				return userManager.getUsername();
			};
			
			$scope.url = "https://raw.githubusercontent.com/xxx/maikr_rules.conf";

			$scope.getInviteUrl = function() {
				return $rootScope.user.invite_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_url_suffix;
				//return $rootScope.user.profile.invite_url;
			};
			$scope.getQRCodeImageURL = function() {
				return $rootScope.user.invite_qrcode_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_qrcode_url_suffix;
				//return $rootScope.user.profile.invite_qrcode_url;
			};
			
			$scope.alert = function(msg) {
				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				10 * 1000)
			};

			$scope.submitRules = function() {
				$scope.disableInput = true;
				$scope.submiting = true;

				if(!$scope.verified){
					var text = getText();
					var base64 = generate.lz_compressToBase64(text);
					domainManager.submitRulesToParse(base64, $translate.use());
				}else{
					var text = getText();
					var base64 = generate.lz_compressToBase64(text);
					domainManager.importRules(base64, $translate.use());
				}


				//alert("submitEmailDraft:"+jquery("div.content").html());
/*
				$scope.alertStyle = 'alert-success';
				$scope.alertText = $translate.instant("options.invite_email.alert.submitted");
				$rootScope.$watch('user.error', function(error) {
					if(error && error.submit_invite_email_draft_succ){
						$scope.alertStyle = 'alert-success';
						$scope.alertText = $translate.instant("options.invite_email.alert.send_email_succ");
						//$scope.disableInput = true;
						$scope.submit_button_text = $translate.instant("options.invite_email.alert.submit_succ");
						$scope.submit_succ = true;
						
					}
					if(error && error.submit_invite_email_draft_error){
						$scope.alertStyle = 'alert-danger';
						$scope.alertText = $translate.instant("options.invite_email.alert.send_email_fails");
						$scope.submit_button_text = $translate.instant("options.invite_email.alert.send_email_fails");
						$timeout(function() {
							$scope.disableInput = false;
							$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
						},
						2 * 1000);
						//$scope.disableInput = true;
						//$scope.submit_succ = true;
					}

				}, true);
				//alert(email);
				//console.log("submitEmailDraft:"+email);
				userManager.submitInviteEmailDraft(email, $scope.subject, content);

*/
			};
				$rootScope.$watch('user.error', function(error) {

					if(error && error.rules_fetch_third_party_error){

						$scope.alert($translate.instant("options.rules_import.import_third_party_url_error") + error.rules_fetch_third_party_error_code);
						
						$scope.load_error = true;
						$scope.load_error_message = error.rules_fetch_third_party_message;

						$timeout(function() {
							$scope.load_error = false;
							$scope.load_error_message = null;
						}, 10 * 1000);
					}

					if(error && error.rules_fetch_third_party_succ){
						$scope.url_loading = false;
						$scope.load_error = false;
						if(error.rules_fetch_third_party_rules && error.rules_fetch_third_party_rules !== ''){
							var rules = generate.lz_decompressFromBase64(error.rules_fetch_third_party_rules);
							var contentDiv = jquery("#numbered-text-box");
							let element = $document[0].querySelector('#numbered-text-box');
							element.innerText = rules;
							error.rules_fetch_third_party_rules = null;
							var linesTotal = getText().textarea_line_count();
							$scope.unEqual(linesTotal);
						}
					}

					if(error && error.submit_rules_to_parse_error){
						$scope.submiting = false;
						$scope.alertStyle = 'alert-danger';
						$scope.alertText = $translate.instant("options.invite_email.alert.send_email_fails");
						//$scope.submit_button_text = $translate.instant("options.invite_email.alert.send_email_fails");
						$timeout(function() {
							$scope.disableInput = false;
							//$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
							//var contentDiv = jquery("#numbered-text-box");
							//contentDiv.attr("contenteditable", true);
						}, 2 * 1000);

						if(error.submit_rules_to_parse_error_line){
							var line_num_element = $element[0].querySelector("#r" + error.submit_rules_to_parse_error_line);
							line_num_element.scrollIntoView();
							line_num_element.style.color = "red";
						}

						if(error.submit_rules_to_parse_error_message && error.submit_rules_to_parse_error_message !== ''){
							$scope.alert(error.submit_rules_to_parse_error_message);
						}
					}

					if(error && error.submit_rules_to_parse_succ){
						$scope.submiting = false;
						$scope.submit_button_text = $translate.instant("options.rules_import.import_rules");
						$scope.verified = true;

						var contentDiv = jquery("#numbered-text-box");
						contentDiv.attr("contenteditable", true);
					}

					if(error && error.rules_import_error){
						$scope.submiting = false;

					}
					if(error && error.rules_import_succ){
						$scope.submit_button_text = $translate.instant("options.rules_import.submit_succ");
						$scope.submiting = false;
						$scope.submit_succ = true;

					}
				}, true);

			$scope.loadURL = function (url) {
				$scope.url_loading = true;
				$scope.load_error = false;
				
				domainManager.fetchThirdPartyRules(url, $translate.use());

			};

			$scope.cancel = function() {
				$rootScope.importRuleModal.hide();
				return $rootScope.importRuleModal.destroy();
			};
			return $scope.closeModal = function() {
				$rootScope.importRuleModal.hide();
				return $rootScope.importRuleModal.destroy();
			};
        }, angular.module("options").controller("ImportRuleModalController", ImportRuleModalController)
    }, define(libs, ImportRuleModalControllerOps)
}).call(this);