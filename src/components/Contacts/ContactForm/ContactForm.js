import React, { Component } from 'react';

import styles from './ContactForm.module.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

export class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    amount: '',
    date: '',
    message: ''
  };

  inputChangeHandler = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  phoneChangeHandler = (event) => {
    const target = event.target;
    let value = target.value.replace(/[^0-9.]/g, '');

    this.setState({
      [target.name]: value
    });
  }

  async formSubmitHandler(evt) {
    evt.preventDefault();
    console.log('qq');
    const { name, email, phone, amount, date, message } = this.state;

    await axios.post('/api/form', {
      name, 
      email, 
      phone, 
      amount, 
      date, 
      message
    })
  }

  render() {
    return (
      <form  onSubmit={(evt) => this.formSubmitHandler(evt)} className={styles.form}>
        <div className={styles.inputWrapper}>
        <label htmlFor="name" className={styles.label}>Full Name:</label>
        <input
            id="name"
            className={styles.input}
            minLength='2'
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            required />
        </div>
        <div className={styles.inputWrapper}>
        <label htmlFor="email" className={styles.label}>Email Address:</label>
        <input
            id="email"
            className={styles.input}
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.inputChangeHandler} />
        </div>
        <div className={styles.inputWrapper}>
        <label htmlFor="phone" className={styles.label}>Phone Number:</label>
        <input
            id="phone"
            className={styles.input}
            name="phone"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={this.state.phone}
            onChange={this.phoneChangeHandler}
            required />
        </div>
        <div className={styles.inputWrapper}>
        <label htmlFor="amount" className={styles.label}>Number Of People:</label>
        <input
            id="amount"
            className={styles.input}
            name="amount"
            type="number"
            value={this.state.amount}
            onChange={this.inputChangeHandler}
            required />
        </div>
        <div className={styles.inputWrapper}>
        <label htmlFor="date" className={styles.label}>Date:</label>
          <DayPickerInput
            inputProps={{readOnly: true, placeholder: '', id: 'date'}} 
            className={styles.input} 
            onDayChange={date => this.setState({date: date})} 
            dayPickerProps={{ disabledDays: {before: new Date()} }} />
        </div>
        <div className={styles.inputWrapper}>
        <label htmlFor="message" className={styles.label}>Additional Message:</label>
        <textarea
            id="message"
            className={styles.input}
            name="message"
            value={this.state.message}
            onChange={this.inputChangeHandler} />
        </div>
        <button className={styles.btn} type='submit'>Submit</button>
      </form>
    );
  }
}

export default ContactForm
