app.controller("ViewToggleController", ["$scope", "$rootScope", function ($scope, $rootScope) {
 	$scope.toggleView = function() {
 		if($(".left-div").css("width") == "100%"){
 			console.log("none");
 			$(".right-div").css("display", "inline");
 			$(".left-div").css("display", "none");

 			$rootScope.$broadcast("invalidateSize");
 		}
 		else{
 			$(".left-div").css("display", "inline");
 			$(".right-div").css("display", "none");
 			 			$rootScope.$broadcast("invalidateSize");

 		}
	};
}]);