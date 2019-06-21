import React, { Component } from 'react';

import styles from './Advantages.module.css'
import Advantage from './Advantage/Advantage';

export class Advantages extends Component {
  state = {
    advantages: [
      {
        id: 1,
        title: 'Guide',
        url: 'https://image.flaticon.com/icons/svg/1454/1454726.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?',
      },
      {
        id: 2,
        title: 'Guide',
        url: 'https://image.flaticon.com/icons/svg/32/32230.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?',
      },
      {
        id: 3,
        title: 'Guide',
        url: 'https://www.flaticon.com/premium-icon/icons/svg/1165/1165670.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?',
      },
      {
        id: 4,
        title: 'Guide',
        url: 'https://image.flaticon.com/icons/svg/313/313011.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?',
      }
    ]
  }
  render() {
    return (
      <section className={styles.advantages}>
        <h2>Why people choose usdfsdfsdf</h2>
        <div className={styles.wrapper}>
          {this.state.advantages.map(item => {
            return <Advantage key={item.id} url={item.url} text={item.text} />
          })}
        </div>
      </section>
    )
  }
}

export default Advantages
