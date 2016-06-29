angular.module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('page', {
        url: '/page1',
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      })

      .state('page2', {
        url: '/buy',
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      })

      .state('page3', {
        url: '/sell',
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      })

      .state('page4', {
        url: '/page5',
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      })

    $urlRouterProvider.otherwise('/page5')



  });
