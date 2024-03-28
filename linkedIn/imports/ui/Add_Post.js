import React from 'react';
import { POST_COLLECTION } from '../api/post_database';

export default class Add_Post extends React.Component {
    formDataInsert(event) {
        let postCheck = event.target.postAdditionData.value;
        event.preventDefault()
        if (postCheck){
            POST_COLLECTION.insert({
                postContent: postCheck,
                totalVotes: 0,
                date_added: new Date()
                 //TODO: sort by date
            });
            event.target.postAdditionData.value = '';
        }
    }render(){
        return (
            <form className="center input_form" onSubmit={this.formDataInsert.bind(this)}>
                <input className="content_input_box" type="text" name="postAdditionData" placeholder="What's on your mind?"/><br></br>
                <button className="content_add_button">Add Post</button>
            </form>            
        )
    }
};