import React from 'react';
import Title from './Title.js'
import Add_Post from './Add_Post.js';
import Post_List from './Post_List.js';
import { POST_COLLECTION } from '../api/post_database.js';

export default class App extends React.Component {
    render() {
        return(
            <>  
            <div>
                    <Title/>
                    <Add_Post/>
                    <Post_List passedPosts={POST_COLLECTION.find({},
                    {sort: {date_added: -1}}).fetch()} />
                 </div>
            </>
        )
    }
}