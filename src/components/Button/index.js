import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({ title, children, primary, secondary, success, danger, warning, info, light, dark }) {
  const classes = clsx(styles.btn, {
    [styles.btnPrimary]: primary,
    [styles.btnSecondary]: secondary,
    [styles.btnSuccess]: success,
    [styles.btnDanger]: danger,
    [styles.btnWarning]: warning,
    [styles.btnInfo]: info,
    [styles.btnLight]: light,
    [styles.btnDark]: dark,
  });
  return <button className={classes}>{title || children || 'Button'}</button>;
}

export default Button;
