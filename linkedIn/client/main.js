import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { POST_COLLECTION } from '../imports/api/post_database.js';
import App from '../imports/ui/App.js';


Meteor.startup(() => {
  Tracker.autorun(() => { 

    ReactDom.render(<App passedPosts={
          POST_COLLECTION.find({}, {sort: {date_added: -1}}).fetch()}/>, 
          document.getElementById('react-target'));
  });

});
