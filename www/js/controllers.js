angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login for', $scope.loginData);
    var regexUWO = "^[a-zA-Z0-9]*@(uwo)\.(ca)";
    var re = new RegExp(regexUWO);
    if (re.test($scope.loginData.username)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  //this is just a test controller to allow the login to move to the next page
  .controller('loginTest', function ($scope, $location) {

    $scope.login = function() {
      $location.path('/app/main');
    };
  })


  .controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://projectdamnndaniel.firebaseio.com/");

    // create a synchronized array
    $scope.messages = $firebaseArray(ref);

    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
      $scope.messages.$add({
        product: $scope.newSellingText,
        price: $scope.newAskingPrice,
        quality: $scope.newQualityNumber
      });
    };

    // click on `index.html` above to see $remove() and $save() in action
  })




.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'b', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})




.controller('mainCtrl', function($scope) {

})



.controller('searchCtrl', function($scope) {

})


.controller('sellCtrl', function($scope) {

})






.controller('signUpCtrl', function($scope, Person) {

  $scope.options = [ {value: 1, name: 'Western'}, {value: 2, name: 'Waterloo'}, {value: 3, name: 'U of T'}];
  $scope.selectionChanged = function(selectionValue){

            console.log(selectionValue);
  }
  $scope.person = Person;
  $scope.add = function() {

            console.log($scope.selectionValue.option.name);

    firebase.database().ref('posts/').push({
      Name: $scope.person.name,
      Phone: $scope.person.phone,
      Email: $scope.person.email,
      City: $scope.person.city

    });

  }
});

