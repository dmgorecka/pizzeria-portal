import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

 const Tables = () => (
   <div className={styles.component}>
     <Typography variant="h4">Tables view</Typography>
     <Typography variant="subtitle1" sx={{ display: 'block' }} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New booking table</Typography>
     <Typography variant="subtitle1" sx={{ display: 'block' }} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} >Booked table 123abc</Typography>
     <Typography variant="subtitle1" sx={{ display: 'block' }} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`} >New booking event</Typography>
     <Typography variant="subtitle1" sx={{ display: 'block' }} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/456def`} >Booked event 456def</Typography>

   </div>
 );


 export default Tables;