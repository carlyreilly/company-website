import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Carousel, {
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './index.css';
import UserCard from './UserCard';

const members = [
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
]

export default function WhoSection() {
  return (
    <div id='who-section' className={css(styles.container)}>
      <div className={css(styles.topText)}>
        <div className={css(styles.topTextWrapper)}>
          <h2 className={css(styles.whoWeAreTitle)}>
            Who <b/> we are
          </h2>
          <div className={css(styles.whoWeAreOverlay)}></div>
        </div>
        <p className={css(styles.quote)}>
          “Block::Block is helping build the future brick by brick, block by block. They’ve created an awesome community of world-changers and are committed to investing in projects that push humanity forward.”
          <div className={css(styles.benioff)}>
            - Marc Benioff
          </div>
        </p>
      </div>
      <div className={css(styles.carouselSection)}>
        <Carousel 
          plugins={[
            'arrows',
            'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 5
              }
            },
          ]}
          breakpoints={{
            767: {
              plugins: [
                'arrows',
                'infinite',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            1000: {
              plugins: [
                'arrows',
                'infinite',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ],
            },
            1100: {
              plugins: [
                'arrows',
                'infinite',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 5,
                  },
                },
              ],
            },
            1300: {
              plugins: [
                'arrows',
                'infinite',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 5,
                  },
                },
              ],
            },
          }
        }
        >
          { members.map((member, index) => {
            return (
              <UserCard 
                name={member.name}
                img={member.img}
                description={member.description}
                key={member.name + `_${index}_member_card`}
              />
            )
          }) }
        </Carousel>
      </div>
    </div>
  );
}


const styles = StyleSheet.create({
  container: {
    background: '#101010',
    minHeight: '100vh',
    '@media only screen and (min-width: 768px)': {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  topText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    "@media only screen and (max-width: 767px)": {
      flexDirection: 'column',
    }
  },
  whoWeAreOverlay: {
    background: '#000',
    position: 'absolute',
    height: '100%',
    width: 297,
    left: 0,
    top: 0,
    zIndex: 1,
  },
  whoWeAreTitle: {
    textTransform: 'uppercase',
    maxWidth: 170,
    fontSize: 60,
    color: '#fff',
    fontWeight: 700,
    whiteSpace: 'pre-wrap',
    marginRight: 40,
    zIndex: 3,
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
  },
  carouselSection: {
    marginTop: 50,
    paddingBottom: 16,
  },
  topTextWrapper: {
    position: 'relative',
    paddingLeft: 29,
  },
  quote: {
    color: '#fff',
    fontSize: 20,
    lineHeight: '36px',
    fontWeight: 400,
    maxWidth: 617,
    position: 'relative',
    zIndex: 3,

    "@media only screen and (max-width: 767px)": {
      padding: 16,
    }
  },
  benioff: {
    color: '#fff',
    position: 'absolute',
    bottom: -25,
    right: 36,
  },
})