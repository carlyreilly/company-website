import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Carousel, {
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './index.css';
import UserCard from './UserCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const members = [
 {
    name: 'BART',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Co-founder. Bart has 25 #1 App Store hits & ran smartphone games for Disney. He co-founded the Mozilla Builders incubator and headed marketing & business affairs for Firefox 1.0. He’s also heavily involved in community work/activism (Full Circle Fund, Plugged In) and an Angel Investor in, MUBI.com, Hooked.com, Tapulous and others.',
  },
  {
    name: 'MARK',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Co-founder. Mark was previously Chief Product Officer for Mozilla and steward of Firefox for the Quantum launch. He served as CTO for cloud computing pioneer, Joyent, and has been the technical co-founder at multiple early startups.',
  },
  {
    name: 'CARLY',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Chief of Staff. Carly Reilly is an entrepreneur, political commentator, and fundraiser. Carly joined Andrew Yang’s 2020 presidential campaign in August 2018 and helped raise over $40 million as national finance director. She is a Washington Post contributor, a co-host of the Yang Speaks podcast, and has been featured by Bloomberg News.',
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'NEO',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Developer. Neo is currently taking a gap year from the University of Central Florida - where he studies computer science - to work with Block::Block. He enjoys building and iterating on new ideas and is excited about jumping into the world of Web3 and crypto. In his free time, he enjoys attending hackathons and meeting new people!',
  },
  {
    name: 'ANGELE',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Intern. Angele is a Comp Sci & Stats undergrad student at McGill and recently got into the crypto/NFT space. As part of her internship with Block::Block, she is building a website that mints NFTs for social media influencers.',
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
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={4}
          adaptiveHeight={true}
          responsive={[
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
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
        </Slider>
      </div>
    </div>
  );
}


const styles = StyleSheet.create({
  container: {
    background: '#1A1A1A',
    // minHeight: '100vh',
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
    fontWeight: 500,
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
