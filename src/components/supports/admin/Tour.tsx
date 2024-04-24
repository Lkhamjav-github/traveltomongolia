import React from 'react'
import { Header } from './Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Add } from '@mui/icons-material';
import Travelinput from './travelinput/TravelInput';
import { TravelData } from './travelinput/TravelData';
import { NewTravel } from './travelinput/NewTravel';

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
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className='h-full'
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const Tour = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <div className='w-full h-full bg-gray-50 p-5'>
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex-col', height: '100%', width: '100%', borderRadius: '20px', gap: '10px' }}
        >
          <Tabs
              value={value} onChange={handleChange} centered
          >
              <Tab  icon={<ModeOfTravelIcon/>} iconPosition='start' label={`Аялалын жагсаалт`}  sx={{justifyContent: 'flex-start', padding: 3, paddingX: 7}} {...a11yProps(0)}/>

              <Tab  icon={<Add/>} iconPosition='start' label={`Аялал нэмэх`}  sx={{justifyContent: 'flex-start', padding: 3, paddingX: 7}} {...a11yProps(1)}/>

              
          </Tabs>
          <TabPanel value={value} index={0}>
              <TravelData/>
          </TabPanel>
          <TabPanel value={value} index={1}  >
              <NewTravel/>
          </TabPanel>

       
        </Box>
      </div>
    </div>
  )
}
