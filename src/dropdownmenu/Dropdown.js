import React, {useState, useEffect, useRef} from 'react';
import DropdownItem from './DropDownItem';
import "./Dropdown.css";
import user from '../dropdownmenu/img/user.png';
import edit from '../dropdownmenu/img/edit.png';
import inbox from '../dropdownmenu/img/envelope.png';
import settings from '../dropdownmenu/img/settings.png';
import help from '../dropdownmenu/img/question.png';
import logout from '../dropdownmenu/img/log-out.png';

function Dropdown() 
{  const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() =>
     {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target))
            {
               setOpen(false);
               console.log(menuRef.current);
            }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
                   document.removeEventListener("mousedown", handler);
                 }
  
    });
  
    return (
        
          <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
              <img src={user}></img>
            </div>
    
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
              <h3>Satyam Singh<br/><span>Full Stack Developer</span></h3>
              <ul>
                <DropdownItem img = {user} text = {"My Profile"}/>
                <DropdownItem img = {edit} text = {"Edit Profile"}/>
                <DropdownItem img = {inbox} text = {"Inbox"}/>
                <DropdownItem img = {settings} text = {"Settings"}/>
                <DropdownItem img = {help} text = {"Helps"}/>
                <DropdownItem img = {logout} text = {"Logout"}/>
              </ul>
            </div>
          </div>
       
      );
}

export default Dropdown
