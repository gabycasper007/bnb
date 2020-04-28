import React from 'react';
import styles from './Section.module.scss';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  second?: boolean;
};

const Section: React.FC<Props> = ({ second }) => {
  const { theme } = useTheme();

  return (
    <section className={`${styles.section} ${second && styles.second}`}>
      <div className="full" style={second ? { ...theme.secondSection } : { ...theme.section }}></div>
    </section>
  );
};

export default Section;
