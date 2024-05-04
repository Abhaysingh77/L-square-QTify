import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Style from "./Faq.module.css";

export default function Faq() {
  return (
    <>
    <div className={Style.faqContainer}>
      <div>
        <h1 className={Style.faqTitle}>FAQs</h1>
      </div>
      <div>
        <Accordion defaultExpanded className={Style.accordion1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:'#34C94B', fontSize:'3rem'}} />}
            aria-controls="panel1-content"
            id="panel1-header"
            
          >
            <Typography sx={{fontSize:'20px', fontWeight:'500' }}>Is Qtify free to use ?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:'#FFFFFF', color:'#010101'}}>
            <Typography  sx={{fontSize:'18px', fontWeight:'500' }}>
            Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={Style.accordion2}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:'#34C94B', fontSize:'3rem'}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
            
          >
            <Typography sx={{fontSize:'20px', fontWeight:'500' }}>Can I download and listen to songs offline ?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:'#FFFFFF',  color:'#010101', display:'flex',}}>
            <Typography  sx={{fontSize:'18px', fontWeight:'500' }}>
            Sorry, unfortunately we don't provide the service to download any songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    <hr className={Style.divider}/>
    </>
  );
}
