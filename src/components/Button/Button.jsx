// Button.jsx
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className = ''
}) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
