angular.module("mainapp").controller("mainCntrl", [ "$scope", function($scope) {

} ]);

angular.module("mainapp").config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('register', {
            url: '/register',
            
    		
    		resolve:{

    	         // Example using function with simple return value.
    	         // Since it's not a promise, it resolves immediately.
    	         simpleObj:  function(){
    	            return {value: 'simple!'};
    	         },
    	         
    	         promiseObj: function($q){
    	        	 var deferred = $q.defer();
     	        	 deferred.resolve();
    	        	 return deferred.promise;
    	         }
    		},
    		views:{
    			'mainview@':{
    				templateUrl : "registration/registration.html",
    				controller : "registrationCntrl"
    			}
    		},
    		
    		onEnter: function(){
    			console.log("on registration Enter");
    		},
    		onExit: function(){
    			console.log("on registration exit");
    		}
        })
       .state('regSuccess', {
           url:"/regSucess/:userid",  // {userid}, ?userid
           views:{
   			'mainview@':{
   				templateUrl : function($stateParams){
   	            	console.log($stateParams)
   	            	return "registration/regsuccess.html";
   	            }
   				
   			}
   		} 
           
           
           
           
    		//controller : "registrationCntrl"
        })
        .state('login', {
            url: '/login',
            views:{
       			'mainview@':{
       				templateUrl : "registration/login.html",
       				controller : "loginCntrl"
       				
       			}
       		} 
    		
        })
        .state('about', {
            // we'll get to this in a bit       
        }).state('home', {
        	url:'/home',
        	templateUrl: 'index.html',
        	controller : 'mainCntrl'
            // we'll get to this in a bit       
        });
        
});