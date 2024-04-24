import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MenuIcon from "@mui/icons-material/Menu";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SettingsIcon from "@mui/icons-material/Settings";
import { Dashboard } from "@/components/supports/admin/Dashboard";
import { Booking } from "@/components/supports/admin/Booking";
import { Tour } from "@/components/supports/admin/Tour";
import { GenerelSetting } from "@/components/supports/admin/GeneralSetting";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Income } from "@/components/supports/admin/Income";
import { Reviews } from "@/components/supports/admin/Reviews";
import { StarHalfRounded } from "@mui/icons-material";
import { adminDashboardData } from "@/utils/fetchAdminDatas";
import {
  FetchAdminDataProps,
  dashboardDataType,
} from "@/types/dashboardAdminCard";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full h-full"
    >
      {value === index && (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabPageNumber(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
// {props}: {props: FetchAdminDataProps}

export default function Admin() {
  const [AdminData, setAdminData] = React.useState({});

  // const {dashboardData} = props

  React.useEffect(() => {
    const callData = async () => {
      const adminDashboardDataRes = await adminDashboardData();
      setAdminData(adminDashboardDataRes);
      console.log("dashboard data", adminDashboardDataRes);
    };
    callData();
  }, []);
  const [value, setValue] = React.useState(0);

  const [toggle, setToggle] = React.useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: toggle ? "20%" : "fit-content",
        }}
      >
        <div
          className={`w-full  items-center p-5 px-14 ${
            toggle ? "flex justify-between" : "flex-col"
          }`}
        >
          <div>LOGO</div>
          <div onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </div>
        </div>
        <Tab
          icon={<SpaceDashboardIcon />}
          iconPosition="start"
          label={`${toggle ? "Dashboard" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(0)}
        />

        <Tab
          icon={<AirplaneTicketIcon />}
          iconPosition="start"
          label={`${toggle ? "booking" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(1)}
        />

        <Tab
          icon={<AccountBalanceWalletIcon />}
          iconPosition="start"
          label={`${toggle ? "Income" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(2)}
        />

        <Tab
          icon={<TravelExploreIcon />}
          iconPosition="start"
          label={`${toggle ? "tour" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(3)}
        />

        <Tab
          icon={<StarHalfRounded />}
          iconPosition="start"
          label={`${toggle ? "reviews" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(4)}
        />

        <Tab
          icon={<SettingsIcon />}
          iconPosition="start"
          label={`${toggle ? "setting" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(5)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* <Dashboard dashboardData={AdminData}/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Dashboard dashboardData={props.dashboardData}/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Booking />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Income />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Tour />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Reviews />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <GenerelSetting />
      </TabPanel>
    </Box>
  );
}

// export const getServerSideProps = async () => {
//   const dashboardResponse = await adminDashboardData()
//   console.log(dashboardResponse);

//   return { props: { dashboardData: dashboardResponse } }
// }
