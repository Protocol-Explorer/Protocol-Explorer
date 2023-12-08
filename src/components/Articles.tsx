import React from 'react'
import styles from "@/styles/Articles.module.css"

type articles = {
  title: string;
  author: string;
  twitter: string;
  link: string;
};

interface ArticleProps {
  articles: articles[];
}

const Articles: React.FC<ArticleProps> = ({ articles }) => {
  console.log({ articles })
  return (
    <div className={styles.timeline}>
      {articles.map((article, i) => (
        <div className={styles.card} key={i}>
          <h2>{article.title}</h2>
          <p className={styles.byline}>By: {article.author}</p>
          <a className={styles.link} href={article.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className={styles.link} href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Articles
