import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Tabs.module.css';
//@ts-ignore
const Tabs = ({ children }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabsRef = useRef([]);
    const tabsData = [
        { label: "Overview", content: children },
        { label: "Articles", content: "Reading Soon" },
        { label: "Videos", content: "Viewing Soon" },
        { label: "Code", content: "Coming Code" }
    ];

    useEffect(() => {
        const activeTab = tabsRef.current[activeTabIndex];
        setUnderlineStyle({
            //@ts-ignore
            left: activeTab.offsetLeft,
            //@ts-ignore
            width: activeTab.offsetWidth
        });
    }, [activeTabIndex]);

    return (
        <div>
            <ul className={styles.tabs}>
                {tabsData.map((tab, index) => (
                  //@ts-ignore
                    <li ref={(el) => (tabsRef.current[index] = el)}
                        className={index === activeTabIndex ? styles.current : ''}
                        onClick={() => setActiveTabIndex(index)}
                        key={index}>
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
