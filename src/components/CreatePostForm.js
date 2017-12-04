import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom'
import * as categoryActions from '../actions'
import './style.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import uuidv4 from 'uuid/v4';



 class  CreatePostForm extends Component {
 	constructor(props) {
 		super(props)
 		this.state ={
 			title: '',
 			description: '',
 			author: '',
 			category: '',
 			userAdded: false
 		}
 		this.onVotesClick = this.onVotesClick.bind(this)
 		this.handleSubmit = this.handleSubmit.bind(this)
 		this.handleChange = this.handleChange.bind(this)
 		this.handleNameChange = this.handleNameChange.bind(this)
 		this.onAuthorChange = this.onAuthorChange.bind(this)
 		this.handleCategoryChange = this.handleCategoryChange.bind(this)
 	}
 	componentWillReceiveProps(nextProps) {
 		console.log(nextProps, "jklvklsjkldjvkls")
 		if(this.props.userCreateSuccess != nextProps.userCreateSuccess) {
			this.setState({
				userAdded: true
			}) 			
 		}
 	}
 	handleSubmit(event) {
 		event.preventDefault();
 		const {title, description, author, category} = this.state

 		if(title && description && author && category) {
 			const data = {}
 			data.title = title;
 			data.body = description
 			data.author = author
 			data.timestamp = Date.now()
 			data.id = uuidv4()
 			data.category =category
 			this.props.categoryActions.createPosts(data)
 		} else {
 			return
 		}
 	}
 	onAuthorChange(event) {
 		this.setState({
 			author: event.target.value
 		})
 	}
 	handleNameChange(event) {
 		this.setState({
 			title: event.target.value
 		})
 	}
 	handleChange(event) {
 		this.setState({
 			description: event.target.value
 		})
 	}
 	handleCategoryChange(event) {
 		console.log(event)
 		this.setState({
 			category: event.value
 		})
 	}
 	onVotesClick (data, index) {
 		const {posts} = this.props
 		this.props.categoryActions.adjustVotes(posts, data, index)
 	}

	render() {
		console.log(this.props.userCreateSuccess, 'vsdvsdvsdv')
		const { post} = this.props
		return (
			<div className="container">
				<h1>Create a New Post</h1>
				<form onSubmit={this.handleSubmit} action="/">
					<input className = "text-input" type="text" value={this.state.title} onChange={this.handleNameChange} name="title" placeholder="Enter the post Title"/>
					<br/>
					<input className = "text-input"	type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Description"/>
					<br/>
					<input className = "text-input" type="text" value={this.state.author} onChange={this.onAuthorChange} name="author" placeholder="Enter author Name"/>
					<br/>
					<Select
						className="create-post-select"
        		name="form-field-name"
        		value={this.state.category}
        		onChange={this.handleCategoryChange}
        		options={[
          { value: 'redux', label: 'Redux' },
          { value: 'udacity', label: 'Udacity' },
          { value: 'react', label: 'React' }
        ]}
        placeholder="Please Select a Category"
      />
					<input type="submit" className = 'create-post-button' value="Submit"/>
					{this.state.userAdded && <div>Post Added Sucessfully</div>}	
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories.categories,
		posts: state.posts.posts,
		userCreateSuccess: state.posts.userCreateSuccess
	}
}
function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CreatePostForm)
