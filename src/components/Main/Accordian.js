import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    width: "80vw",
    maxWidth: "800px",
    margin:"auto",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            What is EETIF Campus Community?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The EETIF campus initiative is a program that aims to assist college 
          students by offering them support and opportunities. This program involves
          creating a community of individuals who share similar interests on campuses
          and also provide students access to a range of resources, activities, and 
          support to aid them in their personal and professional development, thereby 
          helping them to achieve success in their careers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What are the Benefits of joining EETIF campus community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By becoming a part of the EETIF campus community, you can avail yourself of numerous 
          advantages. These advantages comprise the prospect of acquiring fresh skills, enhancing 
          personal growth and development, getting ready for your upcoming career, forging ties 
          with professionals and the industry, and participating in peer-to-peer learning and 
          networking.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            How can students get involved with EETIF campus initiative at their campus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To participate in the EETIF campus initiative at their college, students can 
          visit the EETIF website and search for a tech community at their institution. 
          Upon identifying a suitable community, they can reach out to the community 
          leader for more information or attend a community event to learn more about the 
          initiative and how to become a member.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
          What are some examples of success stories from students who have participated 
          in the EETIF campus initiative program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Several students who have participated in the EETIF campus initiative have achieved 
          success and made significant progress in their careers. These success stories 
          include individuals who have acquired new skills, gained valuable experience, forged 
          meaningful connections with industry professionals, and secured internships or 
          employment opportunities through their involvement in the program.You can check on our 
          instagram account for the experience they have shared working with EETIF.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
          What are the activities of EETIF campus community?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We embark on a journey of self-discovery and collective growth with our program that 
          is dedicated to helping students achieve new skills. We provide a yearly plan to each 
          club, tailored to their specific needs, which serves as a guiding light to enable them 
          to flourish. Our approach is centered on our values and seeks to inspire innovation 
          and creativity in every member.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
          How to join EETIF campus community in your campus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Join EETIF at <a href="/register">link</a>
          <br />
          Welcome aboard!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
