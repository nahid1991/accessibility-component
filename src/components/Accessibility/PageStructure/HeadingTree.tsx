import React from "react";
import { HeadingData } from "../Accessibility";
import { Chip, Grid, Typography } from "@mui/material";

interface HeadingTreeProps {
  data: HeadingData;
}

const HeadingTree: React.FC<HeadingTreeProps> = ({ data }) => {
  return (
    <Grid container flexDirection="row" justifyContent="flex-start">
      <Chip
        label={data.tagName}
        sx={{ marginBottom: "5px", marginRight: "2px" }}
      />
      <Typography variant="caption" sx={{ paddingTop: "5px" }}>
        {data.innerText}
      </Typography>
      {data.children.length > 0 &&
        data.children.map((child, index) => (
          <HeadingTree key={index} data={child} />
        ))}
    </Grid>
  );
};

export default HeadingTree;
