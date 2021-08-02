import React from 'react';

import logo from '../../assets/images/logoWhiteStacked.webp';
import discordLogo from '../../assets/images/discordLogo.webp';
import './index.css';

export default function Header() {
  return (
    <header id='header'>
      <div className='block-logo-column'>
        <a href='/'>
          <div className='block-logo'>
            <img src={logo} width='104' height='45' alt='Block::Block logo' />
          </div>
        </a>
      </div>
      <div className='separator' />
      <div className='discord-button-column'>
        <a
          href='https://discord.com/invite/Fe3WYFxQ'
          target='_blank'
          rel='noreferrer'
        >
          <div className='discord-button'>
            <div className='discord-button-text'>Join us on</div>
            <div className='discord-logo'>
              <img
                src={discordLogo}
                width='82'
                height='23'
                alt='Block::Block logo'
              />
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
