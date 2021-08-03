import { css, StyleSheet } from 'aphrodite';

export default function EmailSubscribe() {
  return (
    <div className={css(styles.container)} id="revue-embed">
      <h3 className={css(styles.title)}>Subscribe To Our Newsletter</h3>
      <form action="https://www.getrevue.co/profile/blockblock/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <div className={css(styles.emailGroup)}>
          <label className={css(styles.label)} for="member_email">Email</label>
          <input className={css(styles.input)} placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
        </div>
        <div class="revue-form-actions">
          <input className={css(styles.subscribe)} type="submit" value="Submit" name="member[subscribe]" id="member_submit" />
        </div>
      </form>
    </div>
  )
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    marginLeft: 50,

    "@media only screen and (max-width: 767px)": {
      display: 'none',
    }
  },
  title: {
    fontSize: 20,
  },
  emailGroup: {
    display: 'flex',
    flexDirection: 'column',
    color: '#999999',
    fontSize: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    border: '1px solid #979797',
    borderRadius: 8,
    background: 'transparent',
    outline: 'none',
    height: 40,
    width: 230,
    marginBottom: 16,
    color: '#999',
    padding: 16,
  },
  subscribe: {
    border: '1px solid #979797',
    color: '#979797',
    height: 34,
    width: 85,
    borderRadius: 8,
    background: 'transparent',
    cursor: 'pointer',
  }
})