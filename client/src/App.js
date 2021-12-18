import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import seaparets from "./images/seaparets.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Form";

function App() {
  return (
    <Container maxWidth="lg">
<AppBar position="static" color="inherit">
  <Typography  variant="h2" align="center">
movie critique
  </Typography>
  <img src={seaparets} alt="img" height="500" />
</AppBar>
<Grow in>
  <Container>
    <Grid container justify="space between" alighItems="stretch" spacing={3}>
<Grid item xs={12} sm={7}>
  <Posts />
</Grid>
<Grid item xs={12} sm={4}>
  <Form />
</Grid>
    </Grid>
  </Container>
</Grow>
    </Container>
  );
}

export default App;
