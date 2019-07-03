import React from 'react';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.text}><span className={styles.highlightText}>Easy Tours Yellowstone, LLC</span> is authorized by the National Park Service U.S. Department of the Interior to provide these services.</p>
        <a className={styles.link} href="tel:4066400226">406-640-0226</a>
        <Link className={styles.link} to='/Contacts/'>Full Contact List</Link>
        <a className={styles.link} href="https://www.facebook.com/Easytoursyellowstone/">Like Us on Facebook!</a>
        <div className={styles.copyrightWrapper}>
          <p className={styles.copyright}>Easy Tours Yellowstone , LLC © 2019.</p>
        </div>
      </div>
    </footer>
  )
}

export default footer
