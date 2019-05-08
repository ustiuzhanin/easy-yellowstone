import React, { Component } from 'react';

import styles from './Features.module.css';
import Feature from './Feature/Feature'

export class Features extends Component {
  state = {
    tours: [
      {
        id: 1,
        text: 'Based in West Yellowstone, MT we offer private tours of Yellowstone National Park. Our guides get into your vehicle or ours allowing us to provide you with a private and affordable customized tour. Lower Loop Tour in Yellowstone for only $525.  Call for details. Now taking reservations for 2019!',
        title: 'feature 1',
        url: 'https://images.unsplash.com/photo-1554592898-d70d4d084d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      },
      {
        id: 2,
        text: 'No more crowded buses packed with people you don’t know; just you, your friends and family on your own tour.  We specialize in fun, educational, memorable tours of Yellowstone National Park! We’re currently offering the Lower Loop Tour in Yellowstone for only $525.  Call for details.',
        title: 'feature 2',
        url: 'https://images.unsplash.com/photo-1546627016-b4a7cce540e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80'
      }
    ]
  }
  render() {
    return (
      <section className={styles.features}>
        <h2>Lorem Featured Tours</h2>
        <div className={styles.wrapper}>
          {this.state.tours.map(item => {
            return <Feature key={item.id} text={item.text} url={item.url} title={item.title} />
          })}
        </div>
      </section>
    )
  }
}

export default Features
