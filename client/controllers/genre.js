angular.module('EpsilonPi')
    .controller('GenreCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
      console.log('GenreCtrl loaded...');

      function Genre(name, img) {
        this.name = name;
        this.img = img;
      }

      var genres = [
        { name: 'Suspense', img: '' },
        { name: 'Drama', img: '' },
        { name: 'Romance', img: '' },
        { name: 'NonFiction', img: '' },
        { name: 'Other', img: '' }
      ];

      $scope.getGenres = function(){
        $http.get('/api/genres').success(function(response){
          $scope.genres = response;
        });
      };

      $scope.getGenre = function(){
        var id = $routeParams.id;
        $http.get('/api/genres/'+id).success(function(response){
          $scope.genre = response;
        });
      };

      $scope.addGenre = function(){
        console.log($scope.genre);
        $http.post('/api/genres/', $scope.genre).success(function(response){
          window.location.href='#/genres';
        });
      };

      $scope.updateGenre = function(){
        var id = $routeParams.id;
        $http.put('/api/genres/'+id, $scope.genre).success(function(response){
          window.location.href='#/genres';
        });
      };

      $scope.removeGenre = function(id){
        $http.delete('/api/genres/'+id).success(function(response){
          window.location.href='#/genres';
        });
      };

      return Genre;
    }]);
