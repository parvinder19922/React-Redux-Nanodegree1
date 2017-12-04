import * as FetchCategoriesAPI from '../utils/category-api';
import * as FetchPostsAPI from '../utils/post-api'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'


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
export const fetchCategories = () => dispatch => (
	FetchCategoriesAPI.fetchCategories().then(data => dispatch(getCategories(data.categories)))
)
export const fetchPosts = () => dispatch => (
	FetchPostsAPI.fetchPosts().then(data => dispatch(getPosts(data)))
)
export const fetchCategorySpecificPosts = (data) => dispatch => (
	FetchPostsAPI.fetchSpecificPosts(data).then(data => dispatch(getPosts(data)))
)


