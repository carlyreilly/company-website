import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import logo from '../../assets/images/logoWhiteStacked.webp';
import discordLogo from '../../assets/images/discordLogo.webp';

import './index.css';
export default function Footer() {
  return (
    <div id='footer' className={css(styles.footer)}>
      <div className={css(styles.left)}>
        <img src={logo} width='104' height='45' alt='Block::Block logo'/>
        <p className={css(styles.text)}>
          We are looking for one or two exceptional smart contract and web3 devs. But we also like interesting, entrepreneurial people of all backgrounds. Reach out to us with a paragraph about yourself if you’re interested in working together.
          <br />
          <br />
          Contact: <a className={css(styles.email)} href="mailto:info@blockblock.io">info@blockblock.io</a>
        </p>

        <div className={css(styles.socials)}>
          <div className={css(styles.flexColumn) + ' discord-button-column'}>
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
          <a href="" target="_blank">
            <i className={css(styles.icon) + " fab fa-twitter"}></i>
          </a>
          <a href="" target="_blank">
            <i className={css(styles.icon) + " fab fa-linkedin-in"}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#999999',
    fontSize: 16,
    maxWidth: 390,
    // lineHeight: '16.8px',
    lineHeight: 1.2,
    fontSize: 18,
  },
  email: {
    color: '#999',
    textDecoration: 'underline',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    color: '#000',
    background: '#fff',
    padding: 12,
    fontSize: '2em',
    borderRadius: '50%',
  },
  flexColumn: {
    flex: 'unset',
  }
})