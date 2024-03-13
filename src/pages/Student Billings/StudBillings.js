import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";

import Navbar from "../../surfaces/Navbar";
import StudBillingsTbl from "../../components/Data Display/Table/StudBillingsTbl";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function StudentBillings() {
  // For select field school year
  const [schoolYear, setSchoolYear] = React.useState("");

  const handleChangeSY = (event) => {
    setSchoolYear(event.target.value);
  };

  // For select field grade level
  const [perGrading, setPerGrading] = React.useState("");

  const handleChangePerGrading = (event) => {
    setPerGrading(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* Select field for SY */}
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="select-school-year-label">SY</InputLabel>
          <Select
            labelId="select-school-year-label"
            id="select-school-year"
            value={schoolYear}
            label="SchoolYear"
            onChange={handleChangeSY}
          >
            <MenuItem value={10}>SY 2023-2024</MenuItem>
            <MenuItem value={20}>SY 2024-2025</MenuItem>
            <MenuItem value={30}>SY 2025-2026</MenuItem>
            <MenuItem value={40}>SY 2026-2027</MenuItem>
            <MenuItem value={50}>SY 2027-2028</MenuItem>
          </Select>
        </FormControl>

        {/* Select field for per grading */}
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="select-per-grading-label">Per grading</InputLabel>
          <Select
            labelId="select-per-grading-label"
            id="select-per-grading"
            value={perGrading}
            label="PerGrading"
            onChange={handleChangePerGrading}
          >
            <MenuItem value={10}>Kinder 1</MenuItem>
            <MenuItem value={20}>Kinder 2</MenuItem>
            <MenuItem value={30}>Grade 1</MenuItem>
            <MenuItem value={40}>Grade 2</MenuItem>
            <MenuItem value={50}>Grade 3</MenuItem>
            <MenuItem value={60}>Grade 4</MenuItem>
            <MenuItem value={70}>Grade 5</MenuItem>
            <MenuItem value={80}>Grade 6</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Divider component="li" />

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Report of Student Billings Table */}
        <StudBillingsTbl />
      </Box>
    </div>
  );
}
