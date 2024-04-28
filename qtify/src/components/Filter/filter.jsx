import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Style from "./filter.module.css";
export default function Filters({ filters, handleChange, value }) {
  return (
    <Box sx={{ width: "90%", margin: "0 0 3.5vw 1vw" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#34C94B",
          },
        }}
      >
        <Tab key="all" value="all" label="All" className={Style.all} />
        {filters.map((filter) => {
          return (
            <Tab
              key={filter.key}
              value={filter.key}
              label={filter.label}
              className={Style.tabs}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
