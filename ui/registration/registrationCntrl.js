angular.module("registration").controller("registrationCntrl",
		[ "$scope", "$location","$state", "registrationSrvc", 'simpleObj', 'promiseObj' , function($scope, $location, $state, registrationSrvc, simpleObj, promiseObj) {
			$scope.register = function() {
				console.log("user added -", promiseObj);
				registrationSrvc.createUser($scope.user);
				$state.go("regSuccess", {'userid' : $scope.user.userid});
			};

		} ]);

angular.module("registration").controller("loginCntrl",
		[ "$scope", "$location", "loginService", "$stateParams", function($scope, $location, loginService, $stateParams) {
			$scope.doLogin = function() {
				if(loginService.isSucess($scope.login)){
					console.log("login successful from controller --" + $stateParams.userId);
					$location.path("loginsuccess");
				}
				
				
			};

		} ]);

angular.module("registration").factory("registrationSrvc", registrationSrvc);
function registrationSrvc($log, $http){
		var createUser = function(user){
			$log.info("user created");
			$http.post("http://localhost:8081/api/signup", user).
			then(function(response){
				$log.info("user created using http");
			}, function(response){
				$log.error("error occurred while creating user");
			});
			
		};
		return {
			createUser : createUser
		};
}

angular.module("registration").factory("loginService", loginService);
function loginService($http, $log){
	console.log("login success" );
	return{
		isSucess : function(login){
			var isSuccess =  false;
			console.log("--", login); 
			$http.get("http://localhost:8081/api/login", login).
			then(function(response){
				$log.info("Login successful for " + login.username);
				isSuccess = true;
			}, function(error){
				$log.error("login not successful for " + login.username);
				isSuccess = false;
			})
			
			return isSuccess;
			}
	}
}