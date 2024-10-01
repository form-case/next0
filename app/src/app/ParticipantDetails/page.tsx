
"use client"

import React, { useState } from 'react';
import TabPanel from '@/components/Tabs/TabPanel';
import BiographicTab from '@/components/Tabs/BiographicTab';
import CaseNotesTab from '@/components/Tabs/CaseNotesTab';
import FollowUpFormsTab from '@/components/Tabs/FollowUpFormsTab';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

const ParticipantDetails = ({ participantId }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Box>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Biographic Data" />
          <Tab label="Case Notes" />
          <Tab label="Follow-up Forms" />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        <BiographicTab formData={{}} />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <CaseNotesTab />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <FollowUpFormsTab participantId={participantId} />
      </TabPanel>
    </Box>
  );
};

export default ParticipantDetails;
