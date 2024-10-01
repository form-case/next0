import React from 'react';
import { TextField, Button, Typography, IconButton, Divider, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CaseNotesTab = ({ caseNotes, setCaseNotes, caseNotesHistory, handleSave, handleDelete }) => (
  <Box>
    <TextField
      label="Add Case Note"
      multiline
      rows={4}
      value={caseNotes}
      onChange={(e) => setCaseNotes(e.target.value)}
      fullWidth
      margin="normal"
    />
    <Button variant="contained" color="primary" onClick={handleSave}>
      Save Case Note
    </Button>
    <Typography variant="h6" style={{ marginTop: '16px' }}>Case Notes History</Typography>
    {/* Renderiza el historial de notas */}
  </Box>
);

export default CaseNotesTab;
