import React from 'react';

import styles from './Contacts.module.css';
import ContactForm from '../../components/Contacts/ContactForm/ContactForm';

function contact() {
  return (
    <section className={styles.contacts}>
      <div className={styles.imgWrapper}>
        <img className={styles.mainImg} src="https://images.unsplash.com/photo-1559094590-4b52cd70b6e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt=""/>
      </div>
      <h2>Contacts</h2>
      <p>If you have questions or comments please email or phone Amy directly.</p>
      <ul className={styles.list}>
        <li className={styles.item}>Amy Beegel</li>
        <li className={styles.item}>West Yellowstone, MT 59758</li>
        <li className={styles.item}>P.O. Box 1268</li>
        <li className={styles.item}>
          <a className={styles.link} href="mailto:Yelstneab@gmail.com">Yelstneab@gmail.com</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="tel:4066400226">406-640-0226</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="https://www.facebook.com/Easytoursyellowstone/">Facebook</a>
        </li>
      </ul>
      <h3>Questions callback Lorem ipsum dolor sit amet.</h3>
      <ContactForm />
    </section>
  )
}

export default contact
