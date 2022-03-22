import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@reach/router';

export default function SimpleAccordion() {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Computers</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Windows
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
                Mac
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
                Desktops
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
                Laptops
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Printers</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Multifunction
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
            Laserjet
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
            Label
            </Typography>
            </AccordionDetails>
            <AccordionDetails>
            <Typography>
            POS
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography>
            <Link to={`/AddDeviceForm`}>Add Device</Link>
            </Typography>
            </AccordionSummary>
        </Accordion>
    </div>
  );
}
