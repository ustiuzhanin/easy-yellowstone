import React from 'react';

import styles from './NotFound.module.css';

function notFound() {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>We couldn’t find this page.</p>
    </section>
  )
}

export default notFound
