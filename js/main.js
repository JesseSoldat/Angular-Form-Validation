import angular from 'angular';


angular
  .module('app', [])
  .controller('FormController', function ($scope) {
    let vm = this;

    vm.addContact = addContact;

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
      if(!validateEmpty(contactObj.website)) {
        return console.log('website is empty');
      }
      if(!validateEmpty(contactObj.message)) {
        return console.log('text area is empty');
      }

    }




    function validateEmpty(field) {
      return field ? true : false;
    }





  })  //controller


;


