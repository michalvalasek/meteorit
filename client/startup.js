Meteor.startup(function () {
  if (Session.get('user_id') == null) {
    Meteor.call('addUser', function(error, user_id){
      Session.set('user_id', user_id);
      console.log('new user_id retrieved: '+user_id);
    });
  }
});