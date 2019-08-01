import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { UPDATE_POSTS, GET_POSTS, ADD_POST, CHANGE_POST } from '../../config'

const Todo = (props) => {
    const { posts, newPost } = useSelector(state => {
        return {
            ...state.counterReducer
        }
    })
    const dispatch = useDispatch()

    const getPosts = async () => {
        const request = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then(res => res.data)

        dispatch({
            type: GET_POSTS,
            payload: request
        })
    }

    const removeTodo = item => e => {
        const updatedPosts = posts.filter((val) => {
            return val.id !== item.id
        })

        dispatch({
            type: UPDATE_POSTS,
            payload: updatedPosts
        })
    }

    const addPost = (event) => {
        dispatch({
            type: ADD_POST,
            payload: event.target.value
        })
    }

    const handleNewPost = () => {
        const updatedPosts = [{ id: Math.floor(Math.random() * 100) + 10, title: newPost}, ...posts]

        dispatch({
            type: CHANGE_POST,
            payload: updatedPosts
        })
    }

    const handlePosts = (value) => {
        return value.map((item, i) => {
            return (
                <div key={i}>
                    <p>{item.title}</p>
                    <button onClick={removeTodo(item)}>xD</button>
                </div>
            )
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <input type="text" onChange={addPost}></input>
            <button onClick={handleNewPost}>AddPost</button>
            <h4>{newPost}</h4>
            {posts ? (
                handlePosts(posts)
            ) : (
                null
            )}
        </div>
    )
}

export default Todo
