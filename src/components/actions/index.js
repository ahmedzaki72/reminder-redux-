//// action creator mean function return action 
import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER , } from '../types';
///// this is action creator and take parameter 
export const add_Reminder = (text, date) => {
    const action = {
        type : ADD_REMINDER, 
        text,
        date
    }
    // console.log('this is action ' , action)
    return action
}


////// this is action creator delete 

export const remove_Reminder = (id) => {
    const action ={
        type : REMOVE_REMINDER ,
        id
    }
    console.log('REMOVE' , action)
    return action
}


///// this is action creator clear 

export const clear_Reminder = () => {
    const action = {
        type : CLEAR_REMINDER
    }
    return action
}