// Meteor.publish("postcomments", function(id) {
//   return Comments.find({postId: id});
// });

// Meteor.publish("allcomments", function() {
//   return Comments.find();
// });

Meteor.publish("localgames", function() {
  return Games.find(); // add location constrains
});