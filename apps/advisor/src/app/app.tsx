import { Fragment } from 'react';
import { CssBaseline,Grid } from '@material-ui/core';

import styles from './app.module.scss';

import {Header,List,PlaceDetails} from '@tspoon/ui-shared'
import {Map} from '@tspoon/map';



export function App() {

  return (
   <Fragment>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width:'100%'}}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
     
   </Fragment>
  );
}

export default App;
