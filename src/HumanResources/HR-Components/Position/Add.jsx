import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import MenuItem from '@mui/material/MenuItem';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-config';
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';


export default function Add({ closeEvent }) {
  const [company, setComapny] = useState("");
  const [position, setPosition] = useState("");

  //const[rows, setRows] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "department");
  const handleCompanyChange = (event) => {
    setComapny(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const createUser = async () => {
    await addDoc(empCollectionRef, {
      company: company,
      position: position,

    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been submitted.", "success")
  };
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant='h5' align='center'>
        Add Position
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label=" Comapany"
            variant="outlined"
            type="text"
            size='small'
            onChange={handleCompanyChange}
            value={company}
            sx={{ minWidth: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Position"
            variant="outlined"
            size='small'
            onChange={handlePositionChange}
            value={position}
            sx={{ minWidth: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' align='center'>
            <Button variant='contained' onClick={createUser}>
              Submit
            </Button>
          </Typography>

        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }} />
    </>
  );
}