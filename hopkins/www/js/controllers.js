angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('EngageCtrl', function($scope) {
  $scope.openInAppBrowser = function()
    {
      // Open in app browser
      window.open('http://www.hopkinstaxaccounting.com/wp-content/uploads/2014/04/Form-1040-Engagement-Letter.pdf','_blank'); 
    };
})

.controller('ClientTaxCtrl', function($scope) {
  $scope.openInAppBrowser = function()
    {
      // Open in app browser
      window.open('https://docs.google.com/forms/d/1bmHYgkSvPOLyk7HHNKxF6a2XHnh-m3CFgj7bT06hCI4/viewform','_blank'); 
    };
})

.controller('UploadCtrl', function($scope) {
  $scope.openInAppBrowser = function()
    {
      // Open in app browser
      window.open('https://hopkinstaxaccounting.smartvault.com/secure/SignIn.aspx?ReturnUrl=%2fusers%2fsecure%2fHome.aspx','_blank'); 
    };
})

.controller('ScheduleCtrl', function($scope) {
  $scope.openInAppBrowser = function()
    {
      // Open in app browser
      window.open('https://hopkinstaxaccounting.acuityscheduling.com/schedule.php','_blank'); 
    };
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});

