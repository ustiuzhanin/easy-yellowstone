import React from 'react';

import styles from './Tours.module.css';

function tours(props) {
  const item = {...props.location.state};
  return (
    <section className={styles.tours}>
      <div className={styles.imgWrapper}>
        <img src={item.url} className={styles.img} alt=""/>
      </div>
      <h2>{item.title}</h2>
      <p>{item.subText}</p>
      <ul>
        {item.features.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </section>
  )
}

export default tours
