import React from 'react';

import logo from '../../assets/images/logoWhiteStacked.png';
import discordLogo from '../../assets/images/discordLogo.png';
import './index.css';

export default function Header() {
  return (
    <div id='header'>
      <div className='block-logo-column'>
        <div className='block-logo-container'>
          <div className='block-logo'>
            <img src={logo} width='104' height='45' alt='Block::Block logo' />
          </div>
        </div>
      </div>
      <div className='discord-button-column'>
        <a
          className='discord-button-link'
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
                height='22.47'
                alt='Block::Block logo'
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
