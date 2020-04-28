import React from 'react';
import styles from './Button.module.scss';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} style={{ ...theme.button }} onClick={() => toggleTheme()}>
      {text}
    </button>
  );
};

export default Button;
