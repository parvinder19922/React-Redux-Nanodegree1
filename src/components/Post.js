import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import './style.css'

 class  PostComponent extends Component {
 	constructor(props) {
 		super(props)
 		this.state ={

 		}
 		this.onVotesClick = this.onVotesClick.bind(this)
 		this.deletePost = this.deletePost.bind(this)
 	}
 	onVotesClick (data, index) {
 		const {posts} = this.props
 		this.props.categoryActions.adjustVotes(posts, data, index)
 	}
 	deletePost(post) {
 		this.props.categoryActions.deletePosts(post.id)
 	}
	render() {
		const { post} = this.props
		return (
			<div className="post-original-container">
				<div className ="specific-post-container" style={{width: '600px'}}>
					<p>Post Count : {this.props.count + 1}</p>
					<p>Title : {post.title}</p>
					<p>TimeStamp: {post.timestamp}</p>
					<p>Id: {post.id}</p>
					<p>Body: {post.body}</p>
					<p>Author: {post.author}</p>
					<p>Category: {post.category}</p>
					<p>VoteScore: {post.voteScore}</p>
					<p>Deleted: {post.deleted}</p>
					<p>Comment Count: {post.commentCount}</p>
				</div>
				<div className ="control-panel">
					<Link className="votes" onClick={this.onVotesClick.bind(this, 'upvote', this.props.count)}to='#'>Upvote</Link>
					<Link className="votes" onClick={this.onVotesClick.bind(this, 'downvote', this.props.count)} to='#'>DownVote</Link>
					<Link className="edit" to='#'>Edit</Link>
					<Link className="delete" to='#' onClick={this.deletePost.bind(this, post)}>Delete</Link>
				</div>
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