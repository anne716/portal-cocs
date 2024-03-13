import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "subjectCode", headerName: "Code", width: 100 },
  { field: "subject", headerName: "Subject", width: 150 },
  {
    field: "firstGrading",
    headerName: "First Grading",
    type: "number",
    width: 160,
  },
  {
    field: "secondGrading",
    headerName: "Second Grading",
    type: "number",
    width: 160,
  },
  {
    field: "thirdGrading",
    headerName: "Third Grading",
    type: "number",
    width: 160,
  },
  {
    field: "fourthGrading",
    headerName: "Fourth Grading",
    type: "number",
    width: 160,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 500,
  },
];

const rows = [
  {
    id: 1,
    subjectCode: "MATH101",
    subject: "Mathematics",
    firstGrading: 85,
    secondGrading: 88,
    thirdGrading: 90,
    fourthGrading: 87,
    remarks: "Excellent progress throughout the year.",
  },
  {
    id: 2,
    subjectCode: "ENG102",
    subject: "English",
    firstGrading: 78,
    secondGrading: 80,
    thirdGrading: 82,
    fourthGrading: 79,
    remarks: "Consistent improvement shown.",
  },
  {
    id: 3,
    subjectCode: "SCI103",
    subject: "Science",
    firstGrading: 92,
    secondGrading: 89,
    thirdGrading: 91,
    fourthGrading: 93,
    remarks: "Outstanding performance in all quarters.",
  },
  {
    id: 4,
    subjectCode: "HIST104",
    subject: "History",
    firstGrading: 75,
    secondGrading: 77,
    thirdGrading: 78,
    fourthGrading: 76,
    remarks: "Satisfactory progress, but room for improvement noted.",
  },
  {
    id: 5,
    subjectCode: "GEOG105",
    subject: "Geography",
    firstGrading: 86,
    secondGrading: 88,
    thirdGrading: 84,
    fourthGrading: 87,
    remarks: "Strong understanding of concepts demonstrated consistently.",
  },
  {
    id: 6,
    subjectCode: "ART106",
    subject: "Art",
    firstGrading: 80,
    secondGrading: 82,
    thirdGrading: 79,
    fourthGrading: 81,
    remarks: "Creativity and effort reflected in performance.",
  },
  {
    id: 7,
    subjectCode: "PE107",
    subject: "Physical Education",
    firstGrading: 90,
    secondGrading: 91,
    thirdGrading: 88,
    fourthGrading: 92,
    remarks: "Exceptional participation and fitness levels maintained.",
  },
  {
    id: 8,
    subjectCode: "CS108",
    subject: "Computer Science",
    firstGrading: 88,
    secondGrading: 85,
    thirdGrading: 86,
    fourthGrading: 89,
    remarks: "Proficient in understanding programming concepts.",
  },
  {
    id: 9,
    subjectCode: "MUS109",
    subject: "Music",
    firstGrading: 82,
    secondGrading: 83,
    thirdGrading: 80,
    fourthGrading: 84,
    remarks: "Improvement shown in practical skills and theoretical knowledge.",
  },
  {
    id: 10,
    subjectCode: "FR110",
    subject: "Foreign Language (French)",
    firstGrading: 87,
    secondGrading: 89,
    thirdGrading: 85,
    fourthGrading: 88,
    remarks: "Competent understanding of vocabulary and grammar structures.",
  },
];

export default function StudGradesTbl() {
  return (
    <div style={{ height: 370, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
