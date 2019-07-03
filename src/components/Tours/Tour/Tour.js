import React from 'react';

import styles from './Tour.module.css';
import { Link } from 'react-router-dom';

function tour(props) {
  return (
    <article className={styles.tour}>
      <img className={styles.img} src={props.url} alt={props.title} />
      <div className={styles.wrapper}>
        <Link to={{
          pathname: '/tours/' + props.id,
          state: {
            ...props
          }
        }}>
          <h3 className={styles.title}>{props.title}</h3>
        </Link>
        <p className={styles.text}>{props.text}</p>
      </div>
    </article>
  )
}

export default tour
