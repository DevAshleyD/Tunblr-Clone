import React from 'react';
import { connect } from 'react-redux';
import VideoPostForm from './video_post_form';

import { createPost, updatePost } from '../../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "/dashboard/edit/video/:postId") {
    return ({
      post: state.entities.posts[ownProps.match.params.postId],
      actionButton: "Edit"
    });
  } else {
    return ({
      post: {},
      actionButton: "Post"
    });
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let actionPost = ownProps.match.path === "/dashboard/edit/video/:postId" ? updatePost : createPost;
  return {
    actionPost: (post) => dispatch(actionPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPostForm);
