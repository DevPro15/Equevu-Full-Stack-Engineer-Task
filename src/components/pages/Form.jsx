import React, { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import StyledCard from "../UI/StyledCard";
import StyledBox from "../UI/StyledBox";
import InputLabel from "@mui/material/InputLabel";

const Form = () => {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [experience, setexperience] = useState("");
  const [department, setdepartment] = useState("");

  const nameValid = name.length > 0;

  const formSubmissionHandler = (event) => {
    if (nameValid) {
      event.preventDefault();
      const values = {
        name,
        date,
        experience,
        department,
      };

      setname("");
      setdate("");
      setexperience("");
      setdepartment("");
    } else {
      <p></p>;
    }
  };

  return (
    <StyledBox>
      <StyledCard sx={{ height: "550px", width: "500px" }}>
        <CardContent>
          <FormControl
            sx={{ display: "flex" }}
            onSubmit={formSubmissionHandler}
          >
            <Typography variant="h3"> FORM </Typography>
            <TextField
              sx={{ width: "400px", margin: "8px" }}
              id="standard-helpertext"
              label="Name"
              type="text"
              required
              value={name}
              onChange={(event) => {
                setname(event.target.value);
              }}
            />

            <TextField
              sx={{ width: "400px", margin: "8px" }}
              helpertext="Date of birth"
              id="standard-helpertext"
              required
              type="date"
              variant="outlined"
              value={date}
              onChange={(event) => {
                setdate(event.target.value);
              }}
            />

            <TextField
              sx={{ width: "400px", margin: "8px" }}
              id="standard-helpertext"
              label="Experience(Years)"
              type="number"
              required
              value={experience}
              onChange={(event) => {
                setexperience(event.target.value);
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                sx={{ width: "400px", margin: "8px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                onChange={(event) => {
                  setdepartment(event.target.value);
                }}
                required
              >
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"HR"}>HR</MenuItem>
                <MenuItem value={"FINANCE"}>Finance</MenuItem>
              </Select>
            </FormControl>

            <Input
              sx={{ width: "400px", marginLeft: "8px", marginTop: "12px" }}
              required
              accept="application/pdf,.doc,.docx"
              multiple
              type="file"
            />
            <CardActions mt={"none"}>
            <Button
              sx={{
                width: "400px",
                height: "40px",
                marginLeft: "7px",
                marginTop: "15px",
              }}
              type="submit"
              variant="contained"
              onSubmit={formSubmissionHandler}
            >
              Submit
            </Button>
        </CardActions>
          </FormControl>
        </CardContent>
        
      </StyledCard>
    </StyledBox>
  );
};

export default Form;
