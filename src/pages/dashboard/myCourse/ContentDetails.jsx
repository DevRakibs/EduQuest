/* eslint-disable react/prop-types */
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import CButton from '../../../common/CButton'
import React, { useState } from 'react';
import CDialog from '../../../common/CDialog';
import AddContent from './AddContent';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import EditContent from './EditContent';

const ContentDetails = ({ course }) => {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const handleAccordionChange = (panel) => {
    setExpanded(panel === expanded ? null : panel);
  };
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between'>
        <Box />
        {
          course?.content.length > 0 ?
            <CButton onClick={() => setEditDialogOpen(true)} contained>Update Content</CButton>
            :
            <CButton onClick={() => setAddDialogOpen(true)} contained>Add New Content</CButton>
        }
      </Stack>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
        Course Content
      </Typography>

      {course?.content?.length === 0 && <Typography sx={{ textAlign: 'center', mt: 2 }}>No content found</Typography>}
      {course?.content?.map((section, id) => (
        <Accordion expanded={expanded === section._id} onChange={() => handleAccordionChange(section._id)} sx={{ mb: 2 }} key={section._id}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              <span style={{ fontWeight: 400, marginRight: '10px' }}>{id + 1}.</span>
              {section.section}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <List>
              {section.content.map((item) => (
                <React.Fragment key={item._id}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          {item.description && (
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              {item.description}
                            </Typography>
                          )}
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            <b>Url: </b>
                            <Link href={item.url} target="_blank" rel="noopener">
                              {item.url}
                            </Link>
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* add content */}
      <CDialog disableOutsideClick maxWidth='md' title='Add New Content' open={addDialogOpen} onClose={() => setAddDialogOpen(false)}>
        <AddContent course={course} onClose={() => setAddDialogOpen(false)} />
      </CDialog>

      {/* edit content */}
      <CDialog disableOutsideClick maxWidth='md' title='Update Content' open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <EditContent course={course} onClose={() => setEditDialogOpen(false)} />
      </CDialog>
    </Box>
  )
}

export default ContentDetails