import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import './style.css'
import PostComponent from './Post'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


 class  HomeComponent extends Component {
 	constructor(props) {
 		super(props)
 		this.state ={
 			value: ''
 		}
 		this.handleChange = this.handleChange.bind(this)
 	}
 	handleChange(event) {
 		const {posts} = this.props 
 		if(event && event.value) {
 			this.setState({
 			value: event.value
 		})
 			this.props.categoryActions.sortPostData(posts, event.value)
 		}
 	}
 	componentWillMount() {
 		this.props.categoryActions.fetchCategories()
 		this.props.categoryActions.fetchPosts()
 	}
 	componentWillReceiveProps(nextProps) {
 		console.log(nextProps, "jklvklsjkldjvkls")
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
			<div className = "Select-list">
				<Select
        name="form-field-name"
        value={this.state.value}
        onChange={this.handleChange}
        options={[
          { value: 'timestamp', label: 'Date' },
          { value: 'voteScore', label: 'Votes' },
        ]}
        placeholder="Sort By"
      />
      </div>
			{posts.map((post, i) => {
				return(
					!post.deleted  && 
					<PostComponent post={post} count={i}/>
				)
				})
			}
			<Link to="/create-post" className="post-button">Create A Post</Link>
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