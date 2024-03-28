import React from 'react';
import { COMMENT_COLLECTION } from '../api/comment_database';
import PropTypes from 'prop-types';
import Comment_List from './Comment_List';


export default class Render_Comments extends React.Component {
    render(){
        let possibleLink = this.props.passedCommentObject.commentContent;
        if (this.props.passedCommentObject.commentContent.includes('http')) {
            possibleLink = <a href={this.props.passedCommentObject.commentContent}>{this.props.passedCommentObject.commentContent}</a>
        }
        return(
            <>  
            <div className="reply_card">
                <div className="reply_content">
                    <h2>{possibleLink}</h2>
{/* Yep */}
                </div>
                <div className="reply_votes">
                    <p>{this.props.passedCommentObject.totalVotes} total votes</p>
                    <button className="reply_vote_button" onClick={()=>{COMMENT_COLLECTION.update({ _id: this.props.passedCommentObject._id},{$inc: {totalVotes: 1}})}}><img src="../imgs/thumbs-up.png" height="35"></img></button>
                    <button className="reply_vote_button" onClick={()=>{COMMENT_COLLECTION.update({ _id: this.props.passedCommentObject._id},{$inc: {totalVotes: -1}})}}><img src="../imgs/thumbs-down.png" height="35"></img></button>
                    <button className="reply_vote_button" onClick={()=>{COMMENT_COLLECTION.remove({ _id: this.props.passedCommentObject._id})}}><img src="../imgs/remove.png" height="35"></img></button>

                </div>
            </div>
            </>
        )
    }
}


Render_Comments.propTypes = {
    passedCommentObject: PropTypes.object.isRequired
}