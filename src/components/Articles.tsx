import React from "react";
import styles from "@/styles/Articles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
type articles = {
  title: string;
  author: string;
  twitter: string;
  link: string;
};

interface ArticleProps {
  articles: articles[];
  protocolName: string;
}

const Articles: React.FC<ArticleProps> = ({ articles, protocolName }) => {
  console.log({ articles });
  const splitTitleIntoWords = (title: string) => {
    return title.split(' ');
  };
  return (
    <div className={styles.timeline}>
      <div className={styles.title}>{protocolName} Articles</div>
      {articles.map((article, i) => (
        <div className={styles.card} key={i}>
          <div>
          <h2 className={styles.heading}>
              {splitTitleIntoWords(article.title).length > 5 ? (
                <span>
                  {splitTitleIntoWords(article.title).slice(0, 5).join(' ')}
                  <br />
                  {splitTitleIntoWords(article.title).slice(5).join(' ')}
                </span>
              ) : (
                article.title
              )}
            </h2>
          </div>
          <div>
            <p className={styles.byline}>By: {article.author}</p>
          </div>
          <div className={styles.socials}>
            <a
              className={styles.link + " " + styles.socialIconWrapper}
              href={article.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faXTwitter}
              />
            </a>
            <a
              className={styles.link2}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
