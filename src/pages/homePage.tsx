import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SimpleCard from '../components/exampleCard';
import DogCard from '../components/dogCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh'
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h3" component="h1">Anasayfa</Typography>
    <Container className={classes.root}>
        <SimpleCard/>
        <DogCard/>
    </Container>
    </>
  );
}

export default HomePage;