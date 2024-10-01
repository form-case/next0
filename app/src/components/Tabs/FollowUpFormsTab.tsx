import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, List, ListItem, Button, Divider, ListItemText, ListItemSecondaryAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { finalDB, localSurveyDB, QuestionContext } from '@/context/QuestionContext';

const FollowUpFormsTab = ({ participantId, onNavigate }) => {
  const { setFilters } = useContext(QuestionContext);
  const [followUpForms, setFollowUpForms] = useState([]);

  useEffect(() => {
    // Lógica para obtener formularios de seguimiento
  }, [participantId]);

  return (
    <Box>
      <Typography variant="h6">Follow-up Forms</Typography>
      <List>
        {/* Renderiza los formularios de seguimiento */}
      </List>
    </Box>
  );
};

export default FollowUpFormsTab;
