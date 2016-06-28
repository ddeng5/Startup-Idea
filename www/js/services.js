angular.module('starter.services', [])

.factory('Person', function($firebaseArray) {
  
  var config = {
    apiKey: "AIzaSyBodc0-aPC_gLtH9v5kYm9Nn7K6PldBCwI",
    authDomain: "startup-d092c.firebaseapp.com",
    databaseURL: "https://startup-d092c.firebaseio.com",
    storageBucket: "startup-d092c.appspot.com",
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  return database.ref();
/*
  var itemsRef = new Firebase("https://startup-d092c.firebaseio.com/");
  return $firebaseArray(itemsRef);*/
});