import React, { useState, useEffect, useCallback } from "react";
import styles from "@/styles/MultiSelect.module.css";

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
}

interface ProtocolPageProps {
  protocols: Protocol[];
  // todo: type this
  setProtocolData: any;
}

const MultiSelect: React.FC<ProtocolPageProps> = ({
  protocols,
  setProtocolData,
}) => {
  console.log({ protocols });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleSelectCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    filterByLabels(selectedCategories)
  };

  const filterByLabels = useCallback((labels: string[]) => {
    if (labels.length === 0) {
      setProtocolData(protocols);
      return;
    }

    const lowerCaseLabels = labels.map(label => label.toLowerCase());
    const newData = protocols.filter(protocol => 
      protocol.labels.some(label => lowerCaseLabels.includes(label.toLowerCase()))
    );

    setProtocolData(newData);
  }, [protocols, setProtocolData]);
  

  useEffect(() => {
    const allLabels = protocols.flatMap((protocol) => protocol.labels)
    const uniqueCategories = Array.from(new Set(allLabels));
    setCategories(uniqueCategories)
  }, [protocols]);

  useEffect(() => { 
    filterByLabels(selectedCategories)
  },[selectedCategories, filterByLabels])

  console.log({ protocols });
  return (
    <div>
      <h2 className={styles.header}>Filter Protocols by Category</h2>
      <div className={styles.protocolWrapper}>
        {categories.map((category, i) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <button
              className={`${styles.label} ${isSelected ? styles.selected : ""}`}
              onClick={() => handleSelectCategory(category)}
              key={i}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelect;
