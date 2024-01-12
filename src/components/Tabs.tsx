import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/Tabs.module.css";
import Articles from "./Articles";

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
  const tabsData = [
    { label: "Overview", content: children },
    { label: "Articles", content: <Articles articles={protocol.articles} /> },
    // { label: "Videos", content: "Viewing Soon" }, - bring this back someday
    // { label: "Code", content: "Coming Code" }, - bring this back someday
  ];

  useEffect(() => {
    const activeTab = tabsRef.current[activeTabIndex];
    setUnderlineStyle({
      //@ts-ignore
      left: activeTab.offsetLeft,
      //@ts-ignore
      width: activeTab.offsetWidth,
    });
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
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
