Meteor.methods({
  addUser: addUser
});

function addUser(args)
{
  var user_id = Users.insert({});
  return user_id;
}