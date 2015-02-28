var app = angular.module('github-api');

app.controller('githubController', function($scope, githubService) {
	$scope.getUserData = githubService.getUser($scope.searchText).then(function(res) {
		$scope.user = res.data;
	})
});