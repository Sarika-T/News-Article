import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

function StyleTabs() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-page'>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Cricket WC" />
        <Tab label="BENGALURU / 36C " />
        <Tab label="हिन्दी मराठी తెలుగు | NEWS " />
        <Tab label="ENTERTAINMENT "/>
        <Tab label="SPORTS"/>
        <Tab label="GAMING"/>
        <Tab label="MONEY"/>
        <Tab label="LIFESTYLE"/>
        <Tab label="HEALTH"/>
        <Tab label="FOOD"/>
        <Tab label="TRAVEL"/>
        <Tab label="..."/>
      </Tabs>
      <TabPanel value={value} index={0}>
        Tab 1 Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab 2 Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab 3 Content
      </TabPanel>
    </div>
  );
}

export default StyleTabs;
