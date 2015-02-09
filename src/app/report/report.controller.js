angular.module('jxlDebug')
	.controller('reportCtrl', ['$scope','$http','$timeout', function($scope,$http,$timeout){
		var url = '/api/access_raw_data?access_token=cwi37bi3pnaorx&idcard=210103196312094212&client_secret=f26850135ddc4eb7a41694b76ffd5e17&name=%E6%9D%8E%E6%9F%8F%E9%92%A2&phone=13898323355';


		// $http.get(url)
		// 	.success(function(data){
		// 		console.log(data);
		// 	})
		// 	.error(function(data){
		// 		console.log(data);
		// 	})


		var vm = $scope.vm = {};


        vm.resp = {"success":true,"data":[{"id":"df8ba6ec822e4984b3556d2a2cc2d5b8","website":"jingdong","name":"京东","category":"e_business","category_name":"电商","create_time":{"year":2014,"month":6,"dayOfMonth":7,"hourOfDay":18,"minute":49,"second":14},"update_time":{"year":2014,"month":9,"dayOfMonth":17,"hourOfDay":20,"minute":22,"second":49},"offline_times":6,"status":1,"website_code":4,"reset_pwd_method":0,"sms_required":0},{"id":"e89c39c1289444f7a18140216e8518a3","website":"taobao","name":"淘宝","category":"e_business","category_name":"电商","create_time":{"year":2014,"month":6,"dayOfMonth":17,"hourOfDay":14,"minute":52,"second":15},"update_time":{"year":2014,"month":9,"dayOfMonth":17,"hourOfDay":20,"minute":22,"second":48},"offline_times":0,"status":1,"website_code":2,"reset_pwd_method":0,"sms_required":0}]};

        //vm.respText = JSON.stringify(vm.resp,null, 4);
        

        

        vm.getAccessToken  = function(){
            vm.loadding = true;
            $timeout(function(){
                vm.respText = angular.toJson(vm.resp,true);
                console.log("got resp");
                vm.loadding = false;
            },4000)
        }

	}])



