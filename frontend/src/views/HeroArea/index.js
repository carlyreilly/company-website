import React from 'react';

import heroBackground from '../../assets/images/heroBackground.webp';
import blocks10x from '../../assets/images/blocks10x.webp';
import logo from '../../assets/images/logoBlackStacked.webp';
import floatingPunk from '../../assets/images/floatingPunk.webp';
import blocks10x2 from '../../assets/images/blocks2-10x.webp';
import './index.css';

export default function HeroArea() {
  return (
    <>
      <div id='hero-area'>
        <img
          className='hero-background'
          src={heroBackground}
          width='1023'
          height='640'
          alt='yellow background with small squares of various colors peppered throughout'
        />
      </div>
      <div id='hero-area-overlay'>
        <img
          className='blocks10x'
          src={blocks10x}
          width='395'
          height='520'
          alt='yellow background with small squares of various colors peppered throughout'
        />
        <div className='card'>
          <img
            className='logo'
            src={logo}
            width='257'
            height='111'
            alt='Block::Block logo'
          />
          <div className='white-text-box'>
            <p>
              We are a Creative Blockchain Lab working in DAOs, NFTs, and
              building the creator economy. Also the Metaverse. We microfund
              entrepreneurs and artists each month. 
            </p>
            <br />
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
            className='floating-punk'
            src={floatingPunk}
            width='218'
            height='249'
            alt='punk'
          />
          <img
            className='two-blocks'
            src={blocks10x2}
            width='98'
            height='53'
            alt='2 blocks side by side'
          />
        </div>
      </div>
    </>
  );
}
