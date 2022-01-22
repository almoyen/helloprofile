import React from 'react'
import { useDispatch } from 'react-redux'

export default function BurgerMenu() {
    const dispatch = useDispatch()
    const changePage = (pageName) => {
        dispatch({type: "changePage", payload: pageName})
    }
    return (
        <div className="frame-1149 border-1px-stroke">
              <img className="rectangle-881-1" src="img/rectangle-881-1@2x.png" />
              <div className="flex-row-1">
                <div className="overlap-group1">
                  <div className="ellipse_736 border-2px-haiti" />
                  <img className="path_33945" src="img/path-33945-3@2x.svg" />
                </div>
                <div className="my-account valign-text-middle montserrat-normal-tangaroa-14px">My Account</div>
              </div>
              <img className="vector-5" src="img/vector-5-1@2x.svg" />
              <div className="flex-row-2">
                <img className="category" src="img/category-3@2x.svg" />
              
                  <div className="group-1124">
                    <div onClick = {()=> changePage("Overview")} className="overview valign-text-middle montserrat-normal-licorice-14px">Overview</div>
                  </div>
              </div>
              <div className="overlap-group9">
                <img className="document" src="img/document-3@2x.svg" />
                <div onClick = {()=> changePage("Contact Manager")} className="contact-manager valign-text-middle montserrat-normal-robins-egg-blue-14px">Contact Manager</div>
              </div>
              <div className="flex-row-3">
                <img className="work" src="img/work-3@2x.svg" />
                <div onClick = {()=> changePage("Profile Manager")} className="profile-manager valign-text-middle montserrat-normal-tangaroa-14px">Profile Manager</div>
                
              </div>
              <div className="flex-row-4">
                <img className="chart" src="img/chart-3@2x.svg" />
                <div className="analytics valign-text-middle montserrat-normal-tangaroa-14px">Analytics</div>
              </div>
              <div className="flex-row-5">
                <div className="overlap-group-4">
                  <div className="ellipse_737 border-2px-haiti" />
                </div>
                <div className="settings valign-text-middle montserrat-normal-tangaroa-14px">Settings</div>
              </div>
              <div className="flex-row-6">
                <img className="group-1125" src="img/group-1125@2x.svg" />
                <div className="help-support valign-text-middle montserrat-normal-tangaroa-14px">Help &amp; Support</div>
              </div>
              <div className="flex-row-7">
                <img className="group-7080" src="img/group-7080-3@2x.svg" />
                <div className="about valign-text-middle montserrat-normal-tangaroa-14px">About</div>
              </div>
              <img className="vector-6" src="img/vector-5-1@2x.svg" />
              <div className="flex-row-8">
                <img className="logout" src="img/logout-3@2x.svg" />
                <div className="log-out valign-text-middle">Log Out</div>
              </div>
            </div>
    )
}
