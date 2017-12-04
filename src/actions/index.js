import * as FetchCategoriesAPI from '../utils/category-api';
import * as FetchPostsAPI from '../utils/post-api'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const SORT_POSTS = 'SORT_POSTS'
export const ADJUST_VOTES = 'ADJUST_VOTES'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'


export const getCategories = categories => (
	 {
		type: GET_CATEGORIES,
		categories
	}
)

export const getPosts = posts => (
	 {
		type: GET_POSTS,
		posts
	}
)
export const createUserSuccess = data => (
	 {
		type: CREATE_USER_SUCCESS,
		data
	}
)

export const sortPosts = (posts, value) => (
	{
		type: SORT_POSTS,
		posts,
		value
	}
)

export const adjustVotes = (posts, value, index) => (
	{
		type: ADJUST_VOTES,
		posts,
		value,
		index
	}

)

export const fetchCategories = () => dispatch => (
	FetchPostsAPI.fetchCategories().then(data => dispatch(getCategories(data.categories)))
)
export const fetchPosts = () => dispatch => (
	FetchPostsAPI.fetchPosts().then(data => dispatch(getPosts(data)))
)
export const fetchCategorySpecificPosts = (data) => dispatch => (
	FetchPostsAPI.fetchSpecificPosts(data).then(data => dispatch(getPosts(data)))
)

export const createPosts = (data) => dispatch => (
	FetchPostsAPI.createPost(data).then(data => dispatch(createUserSuccess({ success: true}))
))
export const sortPostData = (data, value) => dispatch => (
	dispatch(sortPosts(data, value))
)

export const adjustVotesData = (data, value, index) => dispatch => (

	dispatch(adjustVotes(data, value, index))
)
export const deletePosts = (id) => dispatch => (
	FetchPostsAPI.deletePost(id).then(data => console.log(data))
)

