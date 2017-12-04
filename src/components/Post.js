import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import './style.css'

 class  PostComponent extends Component {
	render() {
		const { post} = this.props
		return (
			<div className ="specific-post-container">
				<p>Post Count : {this.props.count + 1}</p>
				<p>Title : {post.title}</p>
				<p>Id: {post.id}</p>
				<p>Body: {post.body}</p>
				<p>Author: {post.author}</p>
				<p>Category: {post.category}</p>
				<p>VoteScore: {post.voteScore}</p>
				<p>Deleted: {post.deleted}</p>
				<p>Comment Count: {post.commentCount}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories.categories,
		posts: state.posts.posts
	}
}
function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (PostComponent)