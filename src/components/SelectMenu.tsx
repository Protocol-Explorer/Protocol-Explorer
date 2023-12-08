import React, { useState } from 'react';
import styles from '@/styles/SelectMenu.module.css'; 

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
  protocolData: Protocol[];
  // todo: type this
  setProtocolData: any;
}

const SelectMenu: React.FC<ProtocolPageProps> = ({ protocols, protocolData, setProtocolData}) => {
  //to-do: programatically get this from data: (should probably move this logic to api route)
  const categories = ["All Categories", "Infrastructure", "Defi", "Wallet"]

  const [selectedValue, setSelectedValue] = useState(categories[0] || '');
  
  function filterByLabel(label:string) {
    if ( label === "All Categories") {
      setProtocolData(protocols)
      return
    }
    const newData = protocols.filter(item => item.labels.includes(label.toLowerCase()));
    setProtocolData(newData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    filterByLabel(event.target.value);
  };

  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        value={selectedValue}
        onChange={handleChange}
      >
        {categories.map((option, index) => (
          <option className={styles.option} value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
