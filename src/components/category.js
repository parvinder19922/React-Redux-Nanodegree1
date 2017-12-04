import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import PostComponent from './Post'
import './style.css'

 class  CategoryComponent extends Component {
 	componentWillMount() {
 		const {params} = this.props.match
 		console.log(params.category)
 		this.props.categoryActions.fetchCategorySpecificPosts(params.category)
 	}
	render() {
		const { posts } =  this.props
		const {params} = this.props.match
		return(
			posts.length ?
				(<div className="container">
					<h1>Category Name : {params.category}</h1>
				{
					posts.map((post , i) => {
						return (
							<PostComponent post={post} count={i}/>
						)
					})
				}</div>) : 
					(<div className="container"><h1 style={{marginTop: '50px'}}>No Posts Available</h1></div>)
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

export default connect(mapStateToProps, mapDispatchToProps) (CategoryComponent)