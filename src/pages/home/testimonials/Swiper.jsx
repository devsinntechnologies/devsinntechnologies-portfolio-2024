
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import './swipe.css';
import { Autoplay, EffectCards} from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

let testimonial = [
  {
    'clientName': "M. Arslan",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 5
  },
  {
    'clientName': "John Smith",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 3
  },
  {
    'clientName': "Saeed Ahmad",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 4
  },
  {
    'clientName': "Arham Sarwar",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 5
  },
  {
    'clientName': "M. Rehan",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 2
  },
  {
    'clientName': "Abdullah",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 3
  },
  {
    'clientName': "Mark Zukerburg",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 5
  },
  {
    'clientName': "Shahroz Tariq",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 1
  },
  {
    'clientName': "Sohaib Iqbal",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 1
  },
  {
    'clientName': "Elon Musk",
    'review': "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
    rating: 2
  },
  
]
export default function App() {
  return (
    <>
      <div className="testimonialDiv">
        <div className="testimonial">
          <h1>Testimonials</h1>
          <p>Clients reviews and love for our work. See what our clients have to say about us.</p>
        </div>
        <div className="swip">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
          >
            {testimonial.map((testimonial,index) => {
              return <>
                <SwiperSlide key={index+1}>
                  <div className="review">
                    <ul className="rating">
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <li key={index}>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                      ))}
                    </ul>
                    <p>{testimonial.review}</p>
                    <h2>{testimonial.clientName}</h2>
                  </div>
                </SwiperSlide>
              </>
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
