import React, { Component } from 'react';
import '../App.css';
import {add_Reminder, remove_Reminder, clear_Reminder} from './actions/index';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './container.css'

const logo = "https://townofappomattox.com/wp-content/uploads/2018/10/friendly-reminder.jpg" 
class Container extends Component {
    state = {
        text : '',
        date : new Date(),
    }
    render_Reminder = () => {
        const {reminders} = this.props;
            return(
                <ul className="list-group">
                   {
                       reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="closeIcon remove btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                            </li>
                        )
                    })
                   }
                </ul>
            )
    }
    render() {
        return (
            <div className="App">
                <img src={logo} alt="logo"/>
                <div className="reminder-title">
                    <h1>What should you Do ? </h1>
                </div>
                <input type="text" className="form-control" placeholder="Enter What U think"
                  value={this.state.text}
                 onChange={(e) => this.setState({ text : e.target.value})}
                 />
                 <DatePicker
                 className="form-control"
                 value={this.state.date}
                 selected={this.state.date}
                 onChange={(date)=> {this.setState({date})} }
                 showTimeSelect
                 timeFormat="HH:mm"
                 timeIntervals={15}
                 timeCaption="time"
                 dateFormat="MMMM d, yyyy h:mm aa"
               />
                <button className="btn btn-primary btn-block" 
                  onClick={() => {
                     this.props.add_Reminder(this.state.text , this.state.date)
                     this.setState({text : '' , date : ''})
                }}
                 > Add Reminder</button>
                 {this.render_Reminder()}
                <button className="clearReminder btn btn-danger btn-block"
                 onClick={() => this.props.clear_Reminder()}
                 >
                 Clear All</button>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add_Reminder : () => dispatch(add_Reminder()),
//     }
// }
///// note :  I can write more advanced  by shortcut this line ( i can shortcut (mapDispatchToProps) in below line )
/////////// shortcut export default connect(null, {add_Reminder})(Container); this is shortcut line 

const mapStateToProps = (state) => {
    return{
        reminders : state
    }
} 

//////  I can use shortcut code . export default connect(state => {
//     return{
//         reminders : state  
//     }
// },{add_Reminder})(Container);
// this code above I can 


export default connect(mapStateToProps, {add_Reminder, remove_Reminder,clear_Reminder})(Container);