import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import './style.css'
import PostComponent from './Post'

 class  HomeComponent extends Component {
 	componentWillMount() {
 		this.props.categoryActions.fetchCategories()
 		this.props.categoryActions.fetchPosts()
 	}
	render() {
		const {categories, posts} = this.props
		return (
			<div className="container">
			<h1>Category List</h1>
				{categories.map((category, i) => {
				return(
					<ul className='list-container'>
					<li key={i}><Link to={`/${category.name}/posts`} className="close-search">{category.name}</Link></li>
					</ul>
				)
				})
			}
			<h1>Post List</h1>
			{posts.map((post, i) => {
				return(
					<PostComponent post={post} count={i}/>
				)
				})
			}
			<input type="button" name="submitButton" className="post-button"value="Create a Post"/>
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

export default connect(mapStateToProps, mapDispatchToProps) (HomeComponent)