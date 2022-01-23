import React from "react";
import { useDispatch } from 'react-redux'

export default function Header() {
  const dispatch = useDispatch()

   const closeHeader = () => {
        dispatch({type: "closeHeader", payload: true})
    }
  return (
    <div className="group-7173" >
      <div className="overlap-group19">
        <img
          className="white-on-black-logo"
          src="img/white-on-black-logo-1@2x.svg"
        />
        <a href="javascript:HideOverlay('desktop-30', 'animate-disappear');">
          
        </a>
        <div className="overlap-group1">
          <div className="save-profile valign-text-middle montserrat-bold-white-12px">
            Save Profile
          </div>
        </div>
        <div  className="overlap-group-1">
        
            <div className="group-7136" />
          <img onClick = {()=> closeHeader()} className="vector-3" src="img/close.svg" />
        </div>
      </div>
    </div>
  );
}
