import React from 'react';

import styles from './HomeContactsForm.module.css';
import ContactForm from '../ContactForm/ContactForm';

function HomeContactsForm() {
  return (
    <section className={styles.contacts}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contact Us!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default HomeContactsForm
