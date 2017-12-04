import { GET_CATEGORIES, GET_POSTS } from '../actions/index'
import {combineReducers} from 'redux'

const initialState = {
	categories : [],
	posts: []
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
	console.log(action)
	switch(action.type) {
		case GET_POSTS :
		return {
			...state,
			posts: action.posts
		}
		default:
		return  state
	}
}

export default combineReducers({
	categories,
	posts
})