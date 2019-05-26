import React from 'react';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

function footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}><span className={styles.highlightText}>Easy Tours Yellowstone, LLC</span> is authorized by the National Park Service U.S. Department of the Interior to provide these services.</p>
      {/* <NavigationItems className={styles.footerNav} /> */}
      <a className={styles.link} href="#">406-640-0226</a>
      <Link className={styles.link} to='/Contacts/'>Full Contact List</Link>
      <a className={styles.link} href="#">Like Us on Facebook!</a>
      <div className={styles.copyrightWrapper}>
        <p className={styles.copyright}>Easy Tours Yellowstone , LLC © 2019.</p>
      </div>
    </footer>
  )
}

export default footer
