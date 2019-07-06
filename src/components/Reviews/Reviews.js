import React from 'react';

import styles from './Reviews.module.css';
import Review from './Review/Review';
import Slider from 'react-slick';
import CustomArrow from '../Gallery/CustomArrow/CustomArrow';

function reviews() {
  const review = [
    {
      id: 1,
      name: 'Kenzie Koetting',
      text: 'Amy was amazing! She did the whole lower loop of Yellowstone with our family of four, stopping for wildlife and showing us all the sights, including waterfalls and geysers. Her demeanor was pleasant and knowledge base was incredible! She was so friendly to everyone she met, stopping to take pictures whenever we requested! Would highly recommend!!!!! ',
      img: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/62522292_2214195738630181_8389228416615841792_n.jpg?_nc_cat=108&_nc_oc=AQnEsQqdsRqJL45oDMsiOe41yybX-5Pv149SuZ1Q6OjlfNKEZ7ynF0vxDQeimA-lINw&_nc_ht=scontent-sea1-1.xx&oh=27420a487ab0e8fd9fd4068a4326fab0&oe=5DBC9D3B',
    },
    {
      id: 2,
      name: 'Cat Marie',
      text: 'My parents and I toured with Amy through the lower rim. My mom is in a wheelchair and is sometimes hard to get around especially with so many people around. Amy took us around to places that could easily be seen by car. When we wanted to get out she was patient and helped when possible. She was knowledgeable about the park and the cities around it. My parents loved her attitude and awesome personality. I loved her for that and because with her driving it meant I got to look around without having to worry about directions or the crazy traffic in some of the areas!',
      img: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1937225_10201394834030611_3193957451637033318_n.jpg?_nc_cat=105&_nc_oc=AQmhegYcmqSk3ayhkyp1g4nKfQJQbuqlkSb-K_w-b6GDhhGG0Q-WsxrUeRmkMdQmo4c&_nc_ht=scontent-sea1-1.xx&oh=3fdcb9aebe3938f41e88696a6fc711ad&oe=5D8291CF',
    },
    {
      id: 3,
      name: 'Lisa Ansell',
      text: "We had a step on tour where Amy rode in our car with us. We saw so many animals that we are convinced that Amy made special arrangements with the park to have the animals placed where we're going to be in Yellowstone! While riding with Amy, we saw magnificent bison cross the road right in front of us, elk, and a rare grizzly bear. Amy was very eager to share her knowledge about the thermal features and geology of the area. My father was in awe over the incredible Dragons Mouth steam vent.",
      img: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1483317_10202577341664128_1500724332_n.jpg?_nc_cat=105&_nc_oc=AQl34x-S4nIV62m7CVloAEnsxvp-x3l1pqkgU3kPzLVE1JqbX5SdyzcKnuw-vVAWAJc&_nc_ht=scontent-sea1-1.xx&oh=b78214956cdb6d93e345f103d5ce25d5&oe=5DB2D1CB',
    }
  ];

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: true,
    dotsClass: "slick-dots",
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
    <section className={styles.reviews}>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          {review.map(item => {
            return <Review {...item} key={item.id} />
          })}
        </Slider>
        <a className={styles.link} href="https://www.facebook.com/pg/Easytoursyellowstone/reviews/">More reviews</a>
      </div>
    </section>
  )
}

export default reviews
