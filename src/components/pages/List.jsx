import React from "react";
import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import StyledCard from "../UI/StyledCard";
import StyledBox from "../UI/StyledBox";

const StyledCell = styled(TableCell)({
    border: '1px solid',
    align: "center"
})

const StyledCellz = styled(TableCell)({
    color:'white'
})


const Listing = () => {
    const createData = [{
        name:'Hassan',
        dob: '19-02-1998',
        experience: '4',
        department:'IT'
    },
    {
        name:'Hassan',
        dob: '19-02-1998',
        experience: '4',
        department:'IT'
    },
    {
        name:'Hassan',
        dob: '19-02-1998',
        experience: '4',
        department:'IT'
    }]


  return (
    <StyledBox>
        <StyledCard sx={{ height: "550px", width: "950px" }}>
      <StyledCard sx={{ height: "500px", width: "900px", boxShadow: 'none'}}>
      <Typography variant="h3" mb={4}> List of candidates </Typography>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ border: '1px solid', backgroundColor:'#161616'}}>
            <StyledCellz>Name</StyledCellz>
            <StyledCellz>Date of birth</StyledCellz>
            <StyledCellz>Experience(Years)</StyledCellz>
            <StyledCellz>Department</StyledCellz>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {createData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ border: '1px solid'  }}
            >
              <TableCell sx={{ border: '1px solid'  }} component="th" scope="row">{row.name}</TableCell>
              <StyledCell>{row.dob}</StyledCell>
              <StyledCell>{row.experience} Years</StyledCell>
              <StyledCell>{row.department}</StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </StyledCard>
      </StyledCard>
    </StyledBox>
  );
};

export default Listing;
