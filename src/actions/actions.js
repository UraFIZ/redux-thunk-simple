import jsonPlaceholder from '../api/JSONPlaceholder'
import _ from 'lodash'
export const fetchPost = () => async dispatch => {
  const respons = await jsonPlaceholder.get('/posts')
  dispatch({ type: "FETCH_POSTS", payload: respons.data })
};
export const fetchUser = (name) => async dispatch => {
  const respons = await jsonPlaceholder.get(`/users/${name}`)
  dispatch({ type: "FETCH_USER", payload: respons.data })
};   
