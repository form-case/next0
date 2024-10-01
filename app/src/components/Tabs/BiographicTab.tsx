import React from 'react';
import { Grid, Avatar, TextField, Button } from '@mui/material';

const BiographicTab = ({ formData, handleChange, extraFields }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <Avatar src={formData.photo} style={{ width: '100px', height: '100px' }} />
      <Button variant="contained" component="label" style={{ marginTop: '8px' }}>
        Upload Photo
        <input type="file" hidden />
      </Button>
    </Grid>
    <Grid item xs={12} sm={8}>
      <Grid container spacing={2}>
        {/* Renderiza los datos biográficos */}
      </Grid>
    </Grid>
  </Grid>
);

export default BiographicTab;
