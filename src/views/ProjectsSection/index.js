import { css, StyleSheet } from 'aphrodite';
import React, { useState } from 'react';

import menschBackground from '../../assets/images/menschBackground.webp';
import kryptosignBackground from '../../assets/images/kryptosignBackground.webp';
import menschPreview from '../../assets/images/menschSite.webp';
import kryptosignPreview from '../../assets/images/kryptosignSite.webp';
// import battleVideo from '../../assets/videos/battleVideo.mp4';
import './index.css';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState('meebitsdao');
  const [meebitsVideoPlaying, setMeebitsVideoPlaying] = useState(false);
  
  const projects = [
    {
      id: 'meebitsdao',
      name: 'MeebitsDAO',
      description: `MeebitsDAO is where we get together to build new Meebits projects, one dao at a time.
      ​
      Let's build the Metaverse!
      `,
      action: (
        <a href="https://waitlist.meebitsdao.com" target="_blank">
          <button className={css(styles.button)}>
            Join The Waitlist
          </button>
        </a>
      ),
    },
    {
      id: 'kryptosign',
      name: 'Kryptosign.io',
      description: `Create, Send, Sign. Kryptosign is the first crypto wallet document platform. 

      We use it to power the MeeBits DAO, and expand it to new ventures everyday. Great for  basic agreements & contracts.`,
      action: (
        <a href="https://kryptosign.io" target="_blank">
          <button className={css(styles.button)}>
            Visit kryptosign.io
          </button>
        </a>
      ),
    },
    {
      id: 'menschmaschine',
      name: 'MenschMaschine.io',
      description: `We’re music producers. We created a way to make music that’s half Mensch (that’s us, the producers, using Euroracks, samplers, synths, Ableton) and half Maschine (xxxxxxx). It’s fully generative and 100% on-chain. So dope. `,
      action: (
        <a href="https://www.menschmaschine.io/" target="_blank">
          <button className={css(styles.button)}>
            Visit menschmaschine.io
          </button>
        </a>
      ),
    }
  ];

  const playMeebitsVideo = () => {
    document.getElementById('meebits-video').play();
    setMeebitsVideoPlaying(true);
  }

  const updateActiveTab = (id) => {
    setActiveProject(id);
    setMeebitsVideoPlaying(false);
  }

  const renderHero = () => {
    switch(activeProject) {
      case 'meebitsdao':
        return (
          <video
            id="meebits-video"
            className={css(styles.meebitBattle) + ' projects-background'}
            src={"https://www.dropbox.com/s/3t966odxlq2ugft/210526_Battle_FINAL.mp4?raw=1"}
            type='video/mp4'
            width='1023'
            height='640'
            alt='yellow background with small squares of various colors peppered throughout'
            loop
          />  
        );
      case 'menschmaschine':
        return (
          <img className={css(styles.imageBackground)} src={menschBackground} width={2048} height={1296}></img>
        );
      case 'kryptosign':
        return (
          <img className={css(styles.imageBackground)} src={kryptosignBackground} width={2048} height={1296}></img>
        );
      default:
        return null;
    }
  }

  const renderPreviews = () => {
    switch(activeProject) {
      case 'menschmaschine':
        return (
          <img className={css(styles.menschPreview)} src={menschPreview}></img>
        );
      case 'kryptosign':
        return (
          <img className={css(styles.kryptosignPreview)} src={kryptosignPreview}></img>
        );
      default:
        return null;
    }
  }
  
  return (
    <div id='projects-section' className={css(styles.container)}>
      <div className={css(styles.inlay)}>
        {activeProject === 'meebitsdao'
          ? meebitsVideoPlaying
            ? null
            : <div className={css(styles.play)} onClick={playMeebitsVideo}>
                <i class="fad fa-play-circle"></i>
              </div>
          : null
        }
        <h2 className={css(styles.title)}>
          Our 
          <br />
          Projects
        </h2>
        <div className={css(styles.tabs)}>
          { projects.map((project, index) => {
            const active = activeProject === project.id;
            return (
              <div className={css(styles.project, active && styles.active)} onClick={() => updateActiveTab(project.id)}>
                <h3 className={css(styles.projectTitle)}>
                  { project.name }
                </h3>
                {active
                  ? <>
                      <p className={css(styles.projectDescription)}>
                        { project.description }
                      </p>
                      { project.action
                        ? project.action
                        : null
                      }
                    </>
                  : null
                }
              </div>
            );
          })}
        </div>
      </div>
      { renderHero() }
      { renderPreviews() }
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  active: {
    opacity: 1,
  },
  button: {
    background: "#000",
    textTransform: 'uppercase',
    width: '100%',
    height: 45,
    border: 0,
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
  },
  meebitBattle: {
    width: '100%',
    height: '100%',

    '@media only screen and (max-width: 767px)': {
      height: '100vh',
      objectFit: 'cover',
    }
  },
  tabs: {
    marginLeft: 'auto',
    zIndex: 4,

    "@media only screen and (max-width: 767px)": {
      width: '60%',
      // marginRight: 'auto',
      marginLeft: 16,
    },

    "@media only screen and (min-width: 768px)": {
      marginRight: 80,
      width: 250,  
    },

    "@media only screen and (min-width: 1024px)": {
      marginRight: 130,
      width: 250,  
    },
  },
  play: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '15em',
    color: '#fff',
    cursor: 'pointer',

    "@media only screen and (max-width: 767px)": {
      top: 16,
      transform: 'translateX(-50%)',
      fontSize: '12em',
    }
  },
  project: {
    width: '100%',
    padding: 16,
    background: '#fff',
    opacity: .4,
    marginBottom: 16,
    cursor: 'pointer',
    zIndex: 4,
  },
  menschPreview: {
    position: 'absolute',
    left: '15%',
    maxHeight: '90vh',
    objectFit: 'contain',
    top: 81,
    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      maxHeight: '45vh',
      left: 32,
    },

    "@media only screen and (min-width: 1024px)": {
      maxHeight: '70vh',
      left: 50,
    },
    "@media only screen and (min-width: 1350px)": {
      maxHeight: '90vh',
      left: '15%',
    }
  },
  kryptosignPreview: {
    position: 'absolute',
    left: '15%',
    maxHeight: '90vh',
    objectFit: 'contain',
    top: 77,

    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      maxHeight: '45vh',
      left: 32,
    },

    "@media only screen and (min-width: 1024px)": {
      maxHeight: '70vh',
      left: 50,
    },
    "@media only screen and (min-width: 1350px)": {
      maxHeight: '90vh',
      left: '15%',
    }
  },
  projectTitle: {
    fontSize: 30,
    marginTop: 0,
    marginBottom: 0,

    "@media only screen and (max-width: 767px)": {
      fontSize: 24,
    }
  },
  projectDescription: {
    fontSize: 18,
  },
  imageBackground: {
    maxHeight: '105vh',
    width: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  inlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,

    "@media only screen and (max-width: 767px)": {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  title: {
    background: '#000',
    maxWidth: 420,
    fontSize: 45,
    color: '#fff',
    marginLeft: 'auto',
    padding: '16px 38px',
    boxSizing: 'border-box',
    fontWeight: 500,
    textTransform: 'uppercase',

    "@media only screen and (max-width: 767px)": {
      background: 'transparent',
      paddingLeft: 16,
      marginBottom: 0,
      marginTop: 'auto',
      marginLeft: 0,
    },

    "@media only screen and (min-width: 768px)": {
      width: 370,  
    },

    "@media only screen and (min-width: 1024px)": {
      width: 420,  
    },
  },
})
