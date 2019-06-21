import React from 'react'

import styles from './About.module.css';


function about() {
  return (
    <section className={styles.about}>
      <div className={styles.imgWrapper}>
        <img className={styles.mainImg} src="https://images.unsplash.com/photo-1554592915-20530c12f469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt=""/>
      </div>
      <div className={styles.contentWrapper}>
        <h2>About</h2>
        <img src="http://www.easytoursyellowstone.com/wp-content/uploads/2015/03/Old-Faithful-Inn-300x200.jpg" alt=""/>
        <p>Easy Tours is based in West Yellowstone, MT and is all about making your trip to Yellowstone National Park, well, easy! Easy Tours has the flexibility to provide you with the best possible Yellowstone tour experience.</p>

        <p>Amy Beegel is the founder and lead tour guide of Easy Tours. Her vast experience of giving tours and knowledge base of the park and surroundings has laid the foundation for offering a fun and safe trip to patrons visiting Yellowstone National Park.</p>

        <p>For a truly unique and unforgettable experience, Amy can give you in-depth information about the features the park has to offer. She can tailor your guided experience to your exact specifications, including to fit into your busy vacation schedule.</p>

        <p>Below is Amy’s personal bio about how she arrived in Yellowstone to eventually become the tour guide that she is today.</p>
      </div>
      <div className={styles.contentWrapper}>
        <h2>Amy’s Story</h2>        
        <img src="http://www.easytoursyellowstone.com/wp-content/uploads/2015/03/fullsizeoutput_19c-300x158.jpeg" alt=""/>
        <p>Amy began her career in Yellowstone National Park in the summer of 1988. Born and raised in Pittsburgh, PA, her mother often took her camping, fishing, and hiking in the forests and rivers of Pennsylvania. Amy was inspired to go to Yellowstone by her teachers after hearing recounts of their experiences working there. After applying to work at Old Faithful, she headed to Montana on a Greyhound Bus. In the morning when she opened the curtains and saw the ominous mountains and wide-open sky, Amy knew she was there to stay. Her first few nights were spent in a motel on the streets of Livingston, MT, while exploring the historic little town during the day. Then she began working for the concessions at Old Faithful, during the infamous summer of 1988. Living at Old Faithful, she was the only employee to lose all of her belongings after the fire had burnt down the small cabin was living in that summer. It was truly an amazing piece of the Park’s history to live through.</p>

        <p>Over the course of that first season, Amy rode along on tours to learn about Yellowstone. Listening to renowned interpretive tour guides and reading books on Yellowstone, she educated herself on the park and spent many days hiking the numerous trails in the park. After several summer and winter seasons in Yellowstone, she accepted a job with Grand Teton National Park Service for a few summers and wintered in Jackson Hole, WY.</p>

        <p>Amy also lived in California for many years, in and around Yosemite National Park, Anza Borrego, and San Diego, CA before moving to West Yellowstone, MT in 2005. She has been working as tour guide in the summer and winter months in Yellowstone National Park.</p>

        <p>In continuing her education, Amy frequently attends scientific research presentations. In 2014, she attended a Certified Interpretive Guide training class, while attending annual guide training classes by the National Park Service Interpretive Rangers. She keeps her First aid/CRP training current and up to date.</p>

        <p>Among other ventures, Amy has done event planning, fund raising, charitable benefits, volunteering, concert coordination, and caretaking. While attending a concert in Pittsburgh, Bonnie Raitt referred to Amy as the Jack-ess of All Trades (a female version of a Jack of All Trades).</p>
      </div>
    </section>
  )
}

export default about
