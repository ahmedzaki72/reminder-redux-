import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from '../types';

// const initState = {
  
// }

//// note : you will connect action creator with reducer by dispatch 

const reminder = ( state = [] , action) =>  {
   let reminders = [];
   if (action.type === ADD_REMINDER) {
      reminders = [...state , {text : action.text , date : action.date , id : Math.random('a1b2c3')}]
        // console.log(reminders);
      return reminders;
   }else if (action.type === REMOVE_REMINDER) {
      reminders = state.filter( reminder =>  reminder.id !== action.id)
      return reminders;
   }else if (action.type === CLEAR_REMINDER) {
         reminders = []
         return reminders
   }else{
      return state;
   }
}


export default reminder;

