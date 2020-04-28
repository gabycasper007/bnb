import React from 'react';
import styles from './Header.module.scss';
import { useTheme } from '../../../hooks/useTheme';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={styles.header}>
      <div className="full" style={{ ...theme.header }}></div>
    </header>
  );
};

export default Header;
