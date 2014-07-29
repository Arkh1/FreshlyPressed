angular.module('starter.services', [])

.service('FreshlyPressed', ["$http", "$log", FreshlyPressed])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

function FreshlyPressed($http, $log) {
    this.getBlogs = function($scope) {
        $http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
            .success(function(result) {
                $scope.posts = result.posts;
                $scope.$broadcast("scroll.refreshComplete");
            })
    }
}
