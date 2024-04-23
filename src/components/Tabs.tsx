import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/Tabs.module.css";
import Articles from "./Articles";
import Footer from "./Footer";

type article = {
  title: string;
  author: string;
  twitter: string;
  link: string;
};
interface Protocol {
  name: string;
  website: string;
  heroImage: string;
  logo: string;
  twitterLink: string;
  discordLink: string;
  docs: string;
  slug: string;
  description: string;
  labels: string[];
  articles: article[];
}

interface ProtocolPageProps {
  protocol: Protocol;
  children?: React.ReactNode;
}

const Tabs: React.FC<ProtocolPageProps> = ({ children, protocol }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);
  const tabsData = [{ label: "", content: children }];

  useEffect(() => {
    const activeTab = tabsRef.current[activeTabIndex];
    if (activeTab) {
      setUnderlineStyle({
        //@ts-ignore
        left: activeTab.offsetLeft,
        //@ts-ignore
        width: activeTab.offsetWidth,
      });
    }
  }, [activeTabIndex]);

  return (
    <div>
      <ul className={styles.tabs}>
        {tabsData.map((tab, index) => (
          <li
            //@ts-ignore
            ref={(el) => (tabsRef.current[index] = el)}
            className={index === activeTabIndex ? styles.current : ""}
            onClick={() => setActiveTabIndex(index)}
            key={index}
          >
            {tab.label}
          </li>
        ))}
        <div className={styles.underline} style={underlineStyle} />
      </ul>
      <div className={styles.tabContent}>
        {/* Render Overview */}
        <div className={styles.container1}>
          <h2 className={styles.label}>{tabsData[0].label}</h2>
          <div className={styles.content}>{tabsData[0].content}</div>
        </div>
        {/* Render Articles */}
        <div className={styles.container2}>
        <Articles articles={protocol.articles} protocolName={protocol.name} />
        </div>
      </div>
    </div>
    
  );
};

export default Tabs;



