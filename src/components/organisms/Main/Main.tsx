import React from 'react';
import styles from './Main.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import Section from '../../molecules/Section/Section';

const Footer: React.FC = () => {
  return (
    <main className={styles.main}>
      <Sidebar>
        <Section />
        <Section second />
      </Sidebar>
      <Article />
      <Sidebar right />
    </main>
  );
};

export default Footer;
