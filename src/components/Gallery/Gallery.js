import React, { Component } from 'react';

import styles from './Gallery.module.css';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
import FullscreenGallery from './FullscreenGallery/FullscreenGallery';
import CustomArrow from './CustomArrow/CustomArrow';
import customArrow from './CustomArrow/CustomArrow';

export class Carousel extends Component {
  state = {
    slides: [
      {
        id: '0',
        title: 'test',
        url: 'https://images.unsplash.com/photo-1552752399-22aa8f97ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1500&q=80'
      },
      {
        id: '1',
        title: 'test',
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      },
      {
        id: '2',
        title: 'test',
        url: 'https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      },
      {
        id: '3',
        title: 'test',
        url: 'https://images.unsplash.com/photo-1537531579368-1af433cf6f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      }
    ],
    fullscreen: false,
    currentSlide: null
  };

  sliderClickHandler = (evt) => {
    this.setState({
      fullscreen: true,
      currentSlide: evt.target.id
    })
  }

  closeBtnHandler = () => {
    this.setState({
      fullscreen: false,
      currentSlide: null
    })
  }

  afterChangeHandler = (currentSlide) => {
    console.log(currentSlide)
    this.setState({
      currentSlide: currentSlide
    })
    console.log(this.state.currentSlide)

  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: true,
      dotsClass: "slick-dots slick-dots-gallery",
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <CustomArrow next />,
      prevArrow: <CustomArrow prev />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        },
      ],
    };


    return (
      <section className={styles.gallery}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Gallery</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error.</p>
        </div>
        <div className={styles.wrapper}>

          {this.state.fullscreen ? <FullscreenGallery id={this.state.currentSlide} close={this.closeBtnHandler} arrow={<CustomArrow prev />} /> : null}

          <MediaQuery minDeviceWidth={1024}>
            <Slider {...settings} afterChange={this.afterChangeHandler}>

              {this.state.slides.map(slide => (
                <div key={slide.id} onClick={(evt) => this.sliderClickHandler(evt)}>
                  <img id={slide.id} src={slide.url} alt={slide.title}/>
                </div>
              ))}

            </Slider>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023}>
            <Slider {...settings}>

              {this.state.slides.map(slide => (
                <div key={slide.id}>
                  <img id={slide.id} src={slide.url} alt={slide.title}/>
                </div>
              ))}

            </Slider>
          </MediaQuery>       
        </div>
      </section>
    );
  }
  }

export default Carousel


