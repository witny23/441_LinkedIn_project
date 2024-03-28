import React from 'react';
import { POST_COLLECTION } from '../api/post_database';
import { COMMENT_COLLECTION } from '../api/comment_database';
import Add_Comment from './Add_Comment.js';
import PropTypes from 'prop-types';
import Comment_List from './Comment_List.js';
import Post_List from './Post_List';

export default class Render_Posts extends React.Component {
    render(){
        let possibleLink = this.props.postPropObject.postContent;
        if (this.props.postPropObject.postContent.includes('http')) {
            possibleLink = <a href={this.props.postPropObject.postContent}>{this.props.postPropObject.postContent}</a>
        }
        return(
            <>
            <div className="post_container center">
                <div className="flex">
                    <div className="post_content">
                        <h1>{possibleLink}</h1>
                    </div>
                    <div className="post_votes">
                        <p>{this.props.postPropObject.totalVotes} total votes</p>
                    </div>
                    <div className="vote_buttons">
                    

                        <button className='vote_button' onClick={()=>{POST_COLLECTION.update({ _id: this.props.postPropObject._id},{$inc: {totalVotes: 1}})}}><img src="../imgs/thumbs-up.png" height="50"></img></button>
                        <button className='vote_button' onClick={()=>{POST_COLLECTION.update({ _id: this.props.postPropObject._id},{$inc: {totalVotes: -1}})}}><img src="../imgs/thumbs-down.png" height="50"></img></button>
                        <button className='vote_button' onClick={()=>
                        {POST_COLLECTION.remove({ _id: this.props.postPropObject._id})
                            this.props.commentPropObject.map((comment) => {
                                COMMENT_COLLECTION.remove({_id: comment._id})
                            })
                        }}><img src="../imgs/remove.png" height="50"></img></button>  
                    </div>
                </div>
                <div className="replies_container">
                    <Add_Comment parentPost={this.props.postPropObject._id}/>
                    <Comment_List passedCommentObj={this.props.commentPropObject}/>
                </div>
            </div>
            </>
        )
    }
}


Render_Posts.propTypes = {
    commentPropObject: PropTypes.array.isRequired
}