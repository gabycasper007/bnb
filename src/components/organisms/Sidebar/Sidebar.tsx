import React from 'react';
import styles from './Sidebar.module.scss';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  right?: boolean;
};

const Sidebar: React.FC<Props> = ({ children, right }) => {
  const { theme } = useTheme();

  return (
    <aside
      className={`${styles.sidebar} ${right ? styles.right : styles.left}`}
    >
      <div
        className={right ? 'full' : styles.withSections}
        style={right ? { ...theme.sidebarRight } : {}}
      >
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
