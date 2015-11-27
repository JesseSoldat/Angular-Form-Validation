import angular from 'angular';


angular
  .module('app', [])
  .controller('FormController', function ($scope) {
    let vm = this;

    vm.addContact = addContact;

    $scope.$watch('contact.email', function(newVal) {
      if(!newVal) return;

      if(!validateEmail(newVal)) {
        return console.log('email needs an @ symbol');
      }

    })

    function addContact(contactObj) {
      // console.log(contactObj);

      if(!contactObj) {
        return console.log('Empty');
      }

      if(!validateEmpty(contactObj.firstname)) {
        return console.log('first name is empty');
      }
      if(!validateEmpty(contactObj.lastname)) {
        return console.log('last name is empty');
      }
      if(!validateEmpty(contactObj.email)) {
        return console.log('email is empty');
      }
      if(!validateEmail(contactObj.email)) {
        return console.log('email must be valid');
      }
      if(!validateEmpty(contactObj.website)) {
        return console.log('website is empty');
      }
      if(!validateWebsite(contactObj.website)) {
        return console.log('website needs to be valid');
      }
      if(!validateEmpty(contactObj.message)) {
        return console.log('text area is empty');
      }

    }

    function validateEmpty(field) {
      return field ? true : false;
    }

    function validateEmail(field) {
      return (field.indexOf('@') >= 0) ? true : false;
    }

    function validateWebsite(field) {
      var pattern = /^https?:\/\//i;
      return pattern.test(field);
    }





  })  //controller


;


