import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Navbar from "../../surfaces/Navbar";
import StudGradesTbl from "../../components/Data Display/Table/StudGradesTbl";

export default function StudentGrades() {
  // For select field grade level
  const [gradeLevel, setGradeLevel] = React.useState("");

  const handleChange = (event) => {
    setGradeLevel(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h3" sx={{ color: "#079440", fontWeight: "bold" }}>
          REPORT OF GRADES
        </Typography>

        {/* Select field for grade level */}
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="select-grade-level-label">Grade Level</InputLabel>
          <Select
            labelId="select-grade-level-label"
            id="select-grade-level"
            value={gradeLevel}
            label="GradeLevel"
            onChange={handleChange}
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

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {/* Report of Grades Table */}
        <StudGradesTbl />
      </Box>
    </div>
  );
}
