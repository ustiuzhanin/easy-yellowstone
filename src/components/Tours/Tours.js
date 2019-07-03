import React, { Component } from 'react';

import styles from './Tours.module.css';
import Tour from './Tour/Tour'

export class Tours extends Component {
  state = {
    tours: [
      {
        id: 'lower-loop',
        text: 'Mammoth Hot Springs, Lamar Valley, and the Grand Canyon of the Yellowstone River are top highlights on this tour!',
        title: 'Upper Loop Features',
        subText: 'While touring the Upper Loop Of Yellowstone National Park, some of the following sights may be viewed:',
        features: ['Firehole Canyon',
          'Fountain Paint Pots',
          'Old Faithful Geyser',
          'Old Faithful Inn',
          'Gibbon Falls',
          'Norris Geyser Basin',
          'Yellowstone Lake',
          'Lake Hotel',
          'Mud Volcano',
          'Hayden Valley',
          'Grand Canyon of Yellowstone',
          'West Thumb Geyser',
          'Midway Geyser Basin',
          'Biscuit Basin',
          'Black Sands Basin'],
        url: 'https://images.unsplash.com/photo-1463743805962-52c9a89c6974?ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80'
      },
      {
        id: 'upper-loop',
        text: 'Enjoy seeing Old Faithful Geyser erupt, Fountain Paint Pots Geyser Basin, and other highlights on this classic tour!',
        title: 'Lower Loop Features',
        subText: 'The most popular features of the Lower Loop are:',
        features: ['Wildlife Viewing', 
          'Mammoth Hot Springs',
          'Norris Geyser Basin',
          'Grand Canyon of Yellowstone',
          'Dunraven Pass',
          'Obsidian Cliff',
          'Gibbon Falls',
          'Tower Falls',
          'Lamar Valley'],
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
            return <Tour key={item.id} {...item} />
          })}
        </div>
      </section>
    )
  }
}

export default Tours
