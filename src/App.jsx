import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'

const App = () => {
  return (
    // <Stack sx={{width:{
    //   xs:"100%",
    //   sm:"100%",
    //   md:"300px",
    //   lg:"400px",
    // },
    // height:"500px",
    // border:{
    //   xs:"2px solid gray",
    //   sm:"2px solid red",
    //   md:"2px solid blue",
    //   lg:"2px solid green",

    // }, margin:"auto",marginTop:"20px",padding:"10px", alignItems:"center"}}>

    // <Box  sx={{width:"200px", height:"200px", border:"1px solid red"}}></Box><br />
    // <Box  sx={{width:"200px", height:"200px", border:"1px solid white"}}></Box> <br />
    // <Box  sx={{width:"200px", height:"200px", border:"1px solid aqua"}}></Box> <br />

    // <Button sx={{width:"300px"}} variant="contained">Contained</Button>


    // </Stack>
  <Grid container sx={{height:500}} spacing={2}>
  
  <Grid item xs={12} sm={12} md={8} lg={6}  >
      <Box sx={{width:"100%",height:"100%", backgroundColor: "cyan"}}>Lorem ipsum dolor sit amet.</Box>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={6}  >
      <Box sx={{width:"100%",height:"100%", backgroundColor: "cyan"}}>Lorem ipsum dolor sit amet.</Box>
    </Grid>
  </Grid>
  )
}

export default App