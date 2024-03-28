import React from 'react';
import { COMMENT_COLLECTION } from '../api/comment_database';

export default class Add_Comment extends React.Component {
    formDataInsert(event) {
        let commentCheck = event.target.commentAdditionData.value;
        event.preventDefault()
        if (commentCheck){
            COMMENT_COLLECTION.insert({
                commentContent: commentCheck,
                parentPost: this.props.parentPost,
                totalVotes: 0
                
            });
            event.target.commentAdditionData.value = '';
        }
    }render(){
        return (
            <form className="center reply_form" onSubmit={this.formDataInsert.bind(this)}>
                <input className="reply_input_box" type="text" name="commentAdditionData" placeholder="Tell them how you feel."/><br></br>
                <button className="reply_add_button">Add Comment</button>
            </form>
        )
    }
};