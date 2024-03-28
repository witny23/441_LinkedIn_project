import React from 'react';
import Render_Comments from './Render_Comments.js';
import { COMMENT_COLLECTION } from '../api/comment_database.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';


export default class Comment_List extends React.Component {
    mapComments(){

        return this.props.passedCommentObj.map((comment) => {
            return <Render_Comments key={comment._id} passedCommentObject={comment}/>
        })
    }render(){
        return(
            <>
            <FlipMove delay={100} leaveAnimation='accordionHorizontal' maintainContainerHeight={true}>
                {this.mapComments()}
                </FlipMove>
            </>
        )
    }
}

Comment_List.propTypes = {
    passedCommentObj: PropTypes.array.isRequired
}