import React from 'react';
import Render_Posts from './Render_Posts.js';
import { COMMENT_COLLECTION } from '../api/comment_database.js';
import FlipMove from 'react-flip-move';


export default class Post_List extends React.Component {
    mapPassedPosts(){
        return this.props.passedPosts.map((post) => {
            let commentCollection = COMMENT_COLLECTION.find({parentPost: post._id}, {sort: {totalVotes: -1}}).fetch()
            console.log('Post_List mapPassedPosts post._id ' + post._id)
            
            return <Render_Posts key={post._id} postPropObject={post} commentPropObject={commentCollection}/>
        });
    }render(){
        return (
        <>
            <FlipMove delay={100} leaveAnimation='accordionHorizontal' maintainContainerHeight={true}>
            {this.mapPassedPosts()}
            </FlipMove>
        </>
        )
    }
};