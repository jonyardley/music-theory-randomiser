import { Box, Tabs, Tab, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import ChordsTab from './ChordsTab';
import IntervalsTab from './IntervalsTab';
import KeysTab from './KeysTab';
import ExerciseSheet from './ExerciseSheet';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ModeTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Keys" />
          <Tab label="Intervals" />
          <Tab label="Chords" />
          <Tab label="Exercise Sheet" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <KeysTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IntervalsTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChordsTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ExerciseSheet />
      </TabPanel>
    </Box>
  );
};

export default ModeTabs;
