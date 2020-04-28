import React from 'react';
import styles from './Footer.module.scss';
import { useTheme } from '../../../hooks/useTheme';
import Button from '../../atoms/Button/Button';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={`full ${styles.footerBg}`} style={{ ...theme.footer }}>
        <Button text="Click here!" />
      </div>
    </footer>
  );
};

export default Footer;
