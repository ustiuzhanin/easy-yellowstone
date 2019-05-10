import React, { Component } from 'react';

import styles from './Tours.module.css';
import Tour from './Tour/Tour'

export class Tours extends Component {
  state = {
    tours: [
      {
        id: 1,
        text: 'Mammoth Hot Springs, Lamar Valley, and the Grand Canyon of the Yellowstone River are top highlights on this tour!',
        title: 'Upper Loop Features',
        url: 'https://images.unsplash.com/photo-1463743805962-52c9a89c6974?ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80'
      },
      {
        id: 2,
        text: 'Enjoy seeing Old Faithful Geyser erupt, Fountain Paint Pots Geyser Basin, and other highlights on this classic tour!',
        title: 'Lower Loop Features',
        url: 'https://images.unsplash.com/photo-1533419784160-1f7f79022119?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2546&q=80'
      }
    ]
  }
  render() {
    return (
      <section className={styles.tours}>
        <h2 className={styles.title}>Lorem Featured Tour Destinations</h2>
        <div className={styles.wrapper}>
          {this.state.tours.map(item => {
            return <Tour key={item.id} text={item.text} url={item.url} title={item.title} />
          })}
        </div>
      </section>
    )
  }
}

export default Tours
