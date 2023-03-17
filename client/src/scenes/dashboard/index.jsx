import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  PersonOutlineOutlined,
  Diversity1Outlined
} from "@mui/icons-material";
import {
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total users"
          value={data && data.totalCustomers}
          
          
          icon={
            <PersonOutlineOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Total families"
          value={data && data.todayStats.totalSales}
         
          icon={
            <Diversity1Outlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
     
     
     
      </Box>
    </Box>
  );
};

export default Dashboard;
