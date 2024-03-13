import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "#", width: 100 },
  { field: "descriptions", headerName: "Description", width: 500 },
  { field: "amount", headerName: "Amount", width: 150 },
];

const rows = [
  {
    id: 1,
    descriptions: "Tuition Fee",
    type: "number",
    amount: 10000.0,
  },
  {
    id: 2,
    descriptions: "Textbooks and Supplies",
    type: "number",
    amount: 3500.0,
  },
  {
    id: 3,
    descriptions: "Extracurricular Activities Fee",
    type: "number",
    amount: 1800.0,
  },
  {
    id: 4,
    descriptions: "Field Trip Expenses",
    type: "number",
    amount: 1200.0,
  },
  {
    id: 5,
    descriptions: "Technology Fee",
    type: "number",
    amount: 2500.0,
  },
  {
    id: 6,
    descriptions: "Lab Fees",
    type: "number",
    amount: 1600.0,
  },
  {
    id: 7,
    descriptions: "Sports Team Uniform",
    type: "number",
    amount: 1400.0,
  },
  {
    id: 8,
    descriptions: "Library Fee",
    type: "number",
    amount: 500.0,
  },
  {
    id: 9,
    descriptions: "Art Supplies",
    type: "number",
    amount: 800.0,
  },
  {
    id: 10,
    descriptions: "Graduation Ceremony Fee",
    type: "number",
    amount: 6000.0,
  },
];

export default function StudBillingsTbl() {
  return (
    <div
      style={{
        height: 370,
        width: "60%",
      }}
    >
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
