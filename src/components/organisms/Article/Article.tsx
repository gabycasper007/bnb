import React from 'react';
import styles from './Article.module.scss';
import { useTheme } from '../../../hooks/useTheme';

const Article: React.FC = () => {
  const { theme } = useTheme();

  return <article className={styles.article} style={{ ...theme.article }} />;
};

export default Article;
