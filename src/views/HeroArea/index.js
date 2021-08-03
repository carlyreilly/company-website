import React, { useEffect, useState } from 'react';
import { css, StyleSheet } from 'aphrodite';

import heroBackground from '../../assets/images/heroBackground.webp';
import blocks10x from '../../assets/images/blocks10x.webp';
import logo from '../../assets/images/logoBlackStacked.webp';
import floatingPunk from '../../assets/images/floatingPunk.webp';
import blocks10x2 from '../../assets/images/blocks2-10x.webp';
import './index.css';
import ProjectsHero from '../ProjectsSection/ProjectsHero';

export default function HeroArea({activeProject}) {
  const [activeBackground, setActiveBackground] = useState('blocks');
  const [translateAmount, setTranslateAmount] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const projectsElement = document.getElementById('projects-hero');
      const switchElement = document.getElementById('who-section');

      if (switchElement.getBoundingClientRect().top >= 0) {
        if (activeBackground !== 'blocks') {
          setActiveBackground('blocks');
        }
      } else {
        if (activeBackground !== 'projects') {
          setActiveBackground('projects');
        }  
      }

      setTranslateAmount(-(window.pageYOffset / 1.8));
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [activeBackground, translateAmount]);

  return (
    <div className={css(styles.heroContainer)}>
      <div className={css(styles.background)} id='hero-area'>
        {activeBackground === 'blocks'
          ?         <img
          className={css(styles.blocksBackground) + ' hero-background'}
          id="blocks-background"
          src={heroBackground}
          width='1023'
          height='640'
          alt='yellow background with small squares of various colors peppered throughout'
        />
          : null
        }
        <ProjectsHero
          activeProject={activeProject}
          translate={translateAmount}
        />
      </div>
      <div id='hero-area-overlay'>
        <div className={css(styles.card)}>
          <img
            // className='blocks10x'
            className={css(styles.blocks10x)}
            src={blocks10x}
            width='395'
            height='520'
            alt='yellow background with small squares of various colors peppered throughout'
          />
          <img
            className={css(styles.logo)}
            src={logo}
            width='257'
            height='111'
            alt='Block::Block logo'
          />
          <div className={css(styles.textbox) + ' white-text-box'}>
            <p className={css(styles.text)}>
              We are a Creative Blockchain Lab working in DAOs, NFTs, and
              building the creator economy. Also the Metaverse. We microfund
              entrepreneurs and artists each month. 
            </p>
            <p className='paragraph'>Banter, brainstorm, build with us.</p>
            <a
              className='link'
              href='https://discord.com/invite/Fe3WYFxQ'
              target='_blank'
              rel='noreferrer'
            >
              Join the Discord
            </a>
          </div>
          <img
            className={css(styles.floatingPunk)}
            src={floatingPunk}
            width='218'
            height='249'
            alt='punk'
          />
          <img
            className={css(styles.twoBlocks)}
            src={blocks10x2}
            width='98'
            height='53'
            alt='2 blocks side by side'
          />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
    height: 'calc(100vh - 100px)',
    maxHeight: 800,
    paddingTop: 100,
    minHeight: 550,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    "@media only screen and (max-width: 767px)": {
      overflow: 'hidden',
    }
  },
  blocksBackground: {
    maxHeight: 800,
  },
  background: {
    position: 'fixed',
    top: 0,
    zIndex: -1,
  },
  blocks10x: {
    position: 'absolute',
    bottom: -185,
    zIndex: -1,
  },
  card: {
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    left: -35,
    top: -58,
    zIndex: 2,
    "@media only screen and (max-width: 767px)": {
      left: '5%',
      top: -112,
    }
  },
  floatingPunk: {
    position: 'absolute',
    right: -107,
    bottom: -72,
    zIndex: 2,

    "@media only screen and (max-width: 767px)": {
      right: -70,
      bottom: -142,
    }
  },
  textbox: {
    fontSize: 18,
    fontWeight: 400,

    "@media only screen and (max-width: 767px)": {
      width: '90%',
      margin: 0,
      margin: '0 auto',
      height: 'unset',
      padding: 16,
      boxSizing: 'border-box',
    }
  },
  text: {
    "@media only screen and (max-width: 767px)": {
      marginTop: 0,
    }
  },
  twoBlocks: {
    position: 'absolute',
    top: -184,
    right: 130,
  }
})