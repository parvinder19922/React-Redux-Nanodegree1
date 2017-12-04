import { GET_CATEGORIES, GET_POSTS, SORT_POSTS, ADJUST_VOTES, CREATE_USER_SUCCESS } from '../actions/index'
import {combineReducers} from 'redux'

const initialState = {
	categories : [],
	posts: [],
	userCreateSuccess: null
} 

function categories (state = initialState, action) {
	console.log(action.posts)
	switch(action.type) {
		case GET_CATEGORIES :
		return {
			...state,
			categories: action.categories
		}
		default:
		return  state
	}
}
function posts(state = initialState, action) {
	console.log(action.data)
	switch(action.type) {
		case CREATE_USER_SUCCESS: 
		return {
			...state,
			userCreateSuccess: action.data.success
		}
		case GET_POSTS :
		return {
			...state,
			posts: action.posts
		}
		case SORT_POSTS: {
			return {
				...state,
				posts: action.posts.sort((a, b) => {
        		return a[action.value] - b[action.value];
      })
			}
		}
		case ADJUST_VOTES: {
			const value = action.value
			return {
				...state,
				posts: action.posts.map((post, i) => {
					if( i === action.index) { 
						if(value ==='upvote') {
						post.voteScore = post.voteScore + 1
					} else {
						post.voteScore = post.voteScore - 1
					}
					}
					return post
				})
			}
		}
		default:
		return  state
	}
}

export default combineReducers({
	categories,
	posts
})