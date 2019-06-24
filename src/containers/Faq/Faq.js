import React from 'react';

import styles from './Faq.module.css';

function faq() {
  return (
    <section className={styles.faq}>
      <div className={styles.imgWrapper}>
        <img className={styles.mainImg} src="https://images.unsplash.com/photo-1554592939-767f39bff846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt=""/>
      </div>
      <h2>F.A.Q.</h2>
      <div className={styles.contentWrapper}>
        <p><b>Items Provided on Your Tour:</b> A spotting Scope and 2 sets of binoculars.</p>
        <b>Please bring:</b>
        <ul className={styles.list}>
          <li className={styles.item}>1 reusable water bottle per person you are traveling with</li>
          <li className={styles.item}>Sunscreen</li>
          <li className={styles.item}>Chap-stick</li>
          <li className={styles.item}>Hat/ball cap</li>
          <li className={styles.item}>Because snow and rain happen unexpectedly, please bring layers of clothing, including: t-shirt, long-sleeved shirt, water resistant jacket, shoes that are comfortable to walk in</li>
          <li className={styles.item}>Backpack (if you have one)</li>
        </ul>
        <b>Remember:</b> <p>You are coming to a high elevation area, where you require more water intake than you typically would at lower elevations. We recommend making an effort to drink more water than you usually would, the week before you travel to help prevent dehydration and altitude sickness. If you have health conditions, please consult you doctor before coming.</p>
      </div>
      <div className={styles.contentWrapper}>
        <b>Deposit and Cancellation Policy:</b><p> Upon booking your tour, there is a $50 non-refundable deposit due. If you have to cancel your trip 14 days prior to your tour date, the fee is an additional $100. Past that, the full amount is due.</p>
        <p>*We love what we do and strive to give you the most memorable experience possible.  However, there are things we cannot control.</p>
        <p>Circumstances out of our control including, but not limited to: inclement weather, construction or wildlife delays, absence of wildlife, road closures and detours are not refundable.</p>
      </div>
    </section>
  )
}

export default faq
