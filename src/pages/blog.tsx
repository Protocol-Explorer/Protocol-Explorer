import React from 'react';
import styles from '@/styles/blog.module.css'
import TelegramCall from "@/components/TelegramCall";
import Navbar from "@/components/Navbar";

const Blog = () => {
  const posts = [
    { 
      link: 'https://www.razacodes.com/blog/Simple-Storage',
      title: 'Master Solidity 1 - Simple Storage',
      excerpt: 'Learn the basic syntax of solidity and start with the Simple Storage contract',
      author: 'Raza',
      authorImage: '/raza.png'
    },
    { 
      link: 'https://www.razacodes.com/blog/deploy-smartcontract-any-evm',
      title: '5 ways to deploy your smartcontract',
      excerpt: 'Deploy your smart contract using Remix, Hardhat, Truffle, Foundry or Brownie',
      author: 'Raza',
      authorImage: '/raza.png'
    },
    { 
      link: 'https://www.rahatcodes.com/blog/introtoaccountabstraction',
      title: 'An introduction to Account Abstraction',
      excerpt: 'Learn more about Account abstraction on this blog post from Rahat',
      author: 'Rahat',
      authorImage: '/rahat.png'
    },
  ];
  
  return (
    <>
    <TelegramCall />
      <Navbar />
      <h1 className={styles.headline}>Level up your skills</h1>
      <p className={styles.blurb}>Check out the latest articts by Raza and Rahat</p>
    <div className={styles.container}>
    <div className={styles.timeline}>
      {posts.map((post, index) => {
        console.log({ slug: post.link })
        return (
          (
            <div key={post.link} className={styles.entry}>
              <span className={styles.dot}></span>
              <div className={styles.content}>
              <a  className={styles.links} href={post.link} target="_blank" rel="noopener noreferrer">
              <h1 className={styles.title}>
                {post.title}
              </h1>
              </a>
              <div className={styles.authorInfo}>
              <img src={post.authorImage} alt={post.author} className={styles.authorImage} />
              <p className={styles.author}>By {post.author}</p>
            </div>
                <p>{post.excerpt}</p>
              </div>
            </div>
          )
        )
      })}
    </div>
    </div>
    </>
);
}

export default Blog