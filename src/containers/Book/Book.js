import React from 'react';

import ContactForm from '../../components/Contacts/ContactForm/ContactForm';
import styles from './Book.module.css';

function book() {
  return (
    <section className={styles.booking}>
      <h2>Contact Us!</h2>
      <ContactForm />
    </section>
  )
}

export default book
