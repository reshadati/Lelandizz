import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { HambergerMenu } from '../../../Components/HambergerMenu';
import CloseIcon from '@mui/icons-material/Close';
import { Search } from '../../../Components/Search';
import { AccordionUsage } from '../../../Components/Accordion';



export const HamMenu = () => {
    const [isShowHamMenu,setIsShowHamMenu]=useState(false);
    const ShowHamHandler=() => {
        setIsShowHamMenu(true)
    }
    const HideHamHandler=()=> {
        setIsShowHamMenu(false)
    }

  return (
    <div >
      {isShowHamMenu &&
        (<HambergerMenu>
          <CloseIcon onClick={HideHamHandler}/>
          <Search/>
          <AccordionUsage/>
         </HambergerMenu>)
      }
  
       <MenuIcon onClick={ShowHamHandler} />
    </div>
  )
}
