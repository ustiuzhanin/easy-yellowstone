import React from 'react';

import styles from './Catcher.module.css';

function catcher() {
  return (
    <section className={styles.catcher}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Easy Tours Yellowstone</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci.</p>
        <button className={styles.btn}>Book Now</button>
      </div>
    </section>
  )
}

export default catcher
