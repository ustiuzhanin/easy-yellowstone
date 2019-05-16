import React, { Component } from 'react';

import styles from './FullscreenGallery.module.css';

export class FullscreenGallery extends Component {
  state = {
    pictures: [
      {
        id: 0,
        url: 'https://images.unsplash.com/photo-1552752399-22aa8f97ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1500&q=80',
        title: 'Lorem, ipsum dolor.'
      },
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        title: 'Lorem, ipsum dolor.'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        title: 'Lorem, ipsum dolor.'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1537531579368-1af433cf6f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        title: 'Lorem, ipsum dolor.'
      }
    ]
  }

  render() {
    const currentSlide = this.state.pictures[this.props.id]
    return (
      <section className={styles.fullscreenImg}>
        <img className={styles.img} src={currentSlide.url} alt=""/>
        <button onClick={this.props.close} type='button'>Close</button>
      </section>
    )
  }
}

export default FullscreenGallery
