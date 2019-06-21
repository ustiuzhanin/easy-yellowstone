import React from 'react';

import styles from './SpecialOffer.module.css'

function specialOffer() {
  return (
    <section className={styles.specialOffer}>
      <div className={styles.wrapper}>
        <p>We’re currently offering the Lower Loop Tour in Yellowstone for only $525. Call <a className={styles.link} href="tel:4066400226">406-640-0226</a> for details!</p>
      </div>
    </section>
  )
}

export default specialOffer
