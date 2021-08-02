import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default function UserCard({img, name, description}) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imgSection)}>
        <img 
          height={90}
          width={90}
          className={css(styles.avatar)}
          src={img}
        ></img>
      </div>
      <div className={css(styles.name)}>
        { name }
      </div>
      <div className={css(styles.description)}>
        { description }
      </div>
      <div className={css(styles.bottomBar)}></div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 290,
    height: 385,
    background: '#000',
    padding: 16,
    boxSizing: 'border-box',
    color: '#fff',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',

    ':hover': {
      transform: 'scale(1.05)',
      transition: '.5s ease-in-out',
    }
  },
  avatar: {
    borderRadius: 8,
    width: 90,
    height: 90,
  },
  name: {
    fontWeight: 500,
    fontSize: 22,
    marginTop: 12,
    marginBottom: 12,
  },
  description: {
    color: '#999999',
    fontSize: 15,
    lineHeight: 1.2,
  },
  bottomBar: {
    background: '#3F3F3F',
    marginTop: 'auto',
    height: 3,
  },
});