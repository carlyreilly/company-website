import { css, StyleSheet } from 'aphrodite';
import { motion, AnimatePresence } from "framer-motion"

import menschBackground from '../../assets/images/menschBackground.webp';
import kryptosignBackground from '../../assets/images/kryptosignBackground.webp';
import menschPreview from '../../assets/images/menschSite.webp';
import kryptosignPreview from '../../assets/images/kryptosignSite.webp';
import meebitsdaoBackground from '../../assets/images/meebitsdaoBackground.webp';

export default function ProjectsHero({activeProject, translate}) {
  const renderHero = () => {
    switch(activeProject) {
      case 'meebitsdao':
        return (
          <AnimatePresence>
            <motion.div className={css(styles.meebitsdaoBackground)}
              transition={{ duration: .5, type: "tween" }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
              <motion.video
                key={"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4"}
                id="meebits-video"
                className={css(styles.meebitBattle) + ' projects-background'}
                src={"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4"}
                type='video/mp4'
                width='1023'
                height='640'
                alt='Meebits Battle'
                loop
                autoPlay
                muted
              />
              <motion.img className={css(styles.meebitsdaoBlocks)} src={meebitsdaoBackground} />
            </motion.div>
          </AnimatePresence>
        );
      case 'menschmaschine':
        return (
          <AnimatePresence>
            <motion.img
              key="menschmaschine-animation"
              className={css(styles.imageBackground)}
              src={menschBackground}
              width={2048}
              height={1296}
              transition={{ duration: .5, type: "tween" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        );
      case 'kryptosign':
        return (
          <AnimatePresence>
            <motion.img
              key="kryptosign-animation"
              className={css(styles.imageBackground)}
              src={kryptosignBackground}
              width={2048}
              height={1296}
              transition={{ duration: .5, type: "tween" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        );
      default:
        return null;
    }
  }

  const renderPreviews = () => {
    switch(activeProject) {
      case 'menschmaschine':
        return (
          <AnimatePresence>
            <motion.img 
              className={css(styles.menschPreview)}
              src={menschPreview}
              key="mensch-preview"
              transition={{ duration: .5, type: "tween" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        );
      case 'kryptosign':
        return (
          <AnimatePresence>
            <motion.img 
              className={css(styles.kryptosignPreview)}
              src={kryptosignPreview}
              key="kryptosign-preview"
              transition={{ duration: .5, type: "tween" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        );
      default:
        return null;
    }
  }

  return (
    <div 
      id="projects-hero"
      className={css(styles.container)}
      style={{
        transform: `translate3d(0px, ${translate}px, 0px)`,

      }}>
      { renderHero() }
      { renderPreviews() }
    </div>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#000',

    "@media only screen and (min-width: 768px)": {
      top: 840,
    },

    "@media only screen and (min-width: 1024px)": {
      top: 800,
    },

    "@media only screen and (max-width: 767px)": {
      minHeight: '115vh',
      top: 780,
    }
  },
  meebitBattle: {
    width: '100%',
    height: '105vh',
    objectFit: 'cover',
    '@media only screen and (max-width: 767px)': {
      minHeight: '115vh',
    }
  },
  meebitsdaoBackground: {
    position: 'relative',
    width: '100%',
  },
  meebitsdaoBlocks: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    minHeight: '105vh',
    objectFit: 'cover',
    zIndex: 1,
  },
  menschPreview: {
    position: 'absolute',
    objectFit: 'contain',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      left: '27%',
      maxHeight: '45vh',
    },
    "@media only screen and (min-width: 1024px)": {
      // height: 700,
      maxHeight: '70vh',
      left: '30%',
      height: 600,
    },
    "@media only screen and (min-width: 1350px)": {
      height: 800,
      left: '35%',
    }
  },
  kryptosignPreview: {
    position: 'absolute',
    objectFit: 'contain',
    top: 77,
    top: '50%',
    transform: 'translate(-50%, -50%)',

    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      maxHeight: '45vh',
      left: 32,
      left: '27%',
    },

    "@media only screen and (min-width: 1024px)": {
      // height: 700,
      maxHeight: '70vh',
      left: '30%',
      height: 600,
    },
    "@media only screen and (min-width: 1350px)": {
      height: 800,
      left: '35%',
    }
  },
})
