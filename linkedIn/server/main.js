import { Meteor } from 'meteor/meteor';
import { POST_COLLECTION } from '../imports/api/post_database';
import { COMMENT_COLLECTION } from '../imports/api/comment_database';

Meteor.startup(() => {
  console.log(POST_COLLECTION.find({}).fetch())
  console.log(COMMENT_COLLECTION.find({}).fetch())
});
