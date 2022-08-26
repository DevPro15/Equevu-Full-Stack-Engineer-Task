import React, { useState } from 'react'
import { Button, TextField, Typography
  } from "@mui/material";
import StyledCard from "../UI/StyledCard";
import StyledBox from "../UI/StyledBox";

const Success = () => {
  const [id, setId] = useState('');

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const submitChange = () =>{
    
    setId('');
  }

  return (
    <StyledBox>
        <StyledCard sx={{height: "300px", width: "400px"}}>
        <Typography variant="h3" m={3}> Resume </Typography>
        <TextField 
          sx= {{width: '350px', margin: '8px'}} 
          id="standard-helperText" label="Enter ID" type="text" 
          value={id} onChange={idChangeHandler}/>
          <Button
          sx= {{width: '150px', marginRight: '125px',marginLeft: 'auto', marginTop: '15px'}}
          type='submit' variant="contained" onClick={submitChange}>Get Resume</Button>
        </StyledCard>
    </StyledBox>
  )
}

export default Success