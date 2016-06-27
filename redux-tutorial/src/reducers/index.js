import { combineReducers } from 'redux'
import {user} from './user'
import {page} from './page'

// const initialState = {user: 'Unknown User'}


export default function rootReducer() {
    combineReducers(
        user,
        page
    )
    // body...
}