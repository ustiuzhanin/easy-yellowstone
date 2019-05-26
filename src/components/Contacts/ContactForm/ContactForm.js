import React, { Component } from 'react';

import styles from './ContactForm.module.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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

  render() {
    return (
      <form className={styles.form}>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Full Name:</label>
        <input
            className={styles.input}
            minLength='2'
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.inputChangeHandler} />
        </p>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Email Address</label>
        <input
            className={styles.input}
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.inputChangeHandler} />
        </p>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Phone Number</label>
        <input
            className={styles.input}
            name="phone"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            value={this.state.phone}
            onChange={this.phoneChangeHandler} />
        </p>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Number Of People</label>
        <input
            className={styles.input}
            name="amount"
            type="number"
            value={this.state.amount}
            onChange={this.inputChangeHandler} />
        </p>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Date</label>
          <DayPickerInput 
            inputProps={{readOnly: 'true'}} 
            className={styles.input} 
            onDayChange={date => this.setState({date: date})} 
            dayPickerProps={{ disabledDays: {before: new Date()} }} />
        </p>
        <p className={styles.inputWrapper}>
        <label className={styles.label}>Additional Message</label>
        <textarea
            className={styles.input}
            name="message"
            value={this.state.message}
            onChange={this.inputChangeHandler} />
        </p>
        <button className={styles.btn} type='submit'>Submit</button>
      </form>
    );
  }
}

export default ContactForm
