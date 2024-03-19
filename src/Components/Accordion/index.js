import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './HambergerMenu.module.css';
import { Link } from 'react-router-dom';


export  function AccordionUsage() {
  return (
    <div className={styles['font']}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         پوست
        </AccordionSummary>
        <AccordionDetails>
           <ul className={styles['nav']}>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>ضد آفتاب</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>آبرسان</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>پاک کننده و شوینده</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>کرم و سرم دور چشم</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         مو
        </AccordionSummary>
        <AccordionDetails>
        <ul className={styles['nav']}>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>شامپو</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>نرم کننده</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>ماسک مو</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>اسپری مو</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          مکمل ها
        </AccordionSummary>
        <AccordionDetails>
        <ul className={styles['nav']}>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>مکمل لاغری</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>مکمل بانوان</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>مکمل آقایان</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          آرایشی
        </AccordionSummary>
        <AccordionDetails>
        <ul className={styles['nav']}>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>کرم پودر</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>ریمل</Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>سایه چشم </Link></li>
            <li className={styles['nav-bar']} ><Link className={styles['nav-link']}>رژ لب</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}