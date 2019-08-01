import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import gql from 'graphql-tag'
import { INCREMENT_COUNT, DECREMENT_COUNT, GET_POSTS } from '../../config'

import Launches from '../Launches/launches'
import Todo from '../Todo/todo'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

const Home = (props) => {
    const { count, posts } = useSelector(state => {
        return {
            ...state.counterReducer
        }
    })
    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrementCount = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const getPosts = async () => {
        const request = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then(res => res.data)

        dispatch({
            type: GET_POSTS,
            payload: request
        })
    }

    return (
        <div>
            <h1>The count is: {count}</h1>
            <button onClick={incrementCount}>Plus Count</button>
            <button onClick={decrementCount}>Minus Count</button>
            <Launches gqlQuery={LAUNCHES_QUERY}/>
            <Todo/>
        </div>
    )
}

export default Home
