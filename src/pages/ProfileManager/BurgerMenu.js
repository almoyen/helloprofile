import React from 'react'
import { useDispatch } from 'react-redux';

export default function BurgerMenu() {
    const dispatch = useDispatch();

    const changePage = (pageName) => {
        dispatch({type: "changePage", payload: pageName})
    }

    return (
        <div class="frame-1149 border-1px-stroke">
            <img class="rectangle-881-1" src="img/rectangle-881-1@2x.png" />
            <div class="flex-row">
              <div class="overlap-group1">
                <div class="ellipse_736 border-2px-haiti"></div>
                <img class="path_33945" src="img/path-33945@2x.svg" />
              </div>
              <div class="my-account valign-text-middle montserrat-normal-tangaroa-14px">My Account</div>
            </div>
            <img class="vector-5" src="img/vector-5-1@2x.svg" />
            <div class="flex-row-1">
              <img class="category" src="img/category-1@2x.svg" />
                <div onClick = {()=> changePage("Overview")} class="group-1124">
                  <div class="overview valign-text-middle montserrat-normal-licorice-14px">Overview</div>
                </div>
              
            </div>
            <div class="flex-row-2">
              <img class="document" src="img/document-1@2x.svg" />
              <a href="desktop-26.html"
                ><div onClick = {()=> changePage("Contact Manager")} class="contact-manager valign-text-middle montserrat-normal-tangaroa-14px">Contact Manager</div>
              </a>
            </div>
            <div class="overlap-group2-1">
              <img class="work" src="img/work-1@2x.svg" />
              <div onClick = {()=> changePage("Profile Manager")} class="profile-manager-1 valign-text-middle montserrat-normal-robins-egg-blue-14px">
                Profile Manager
              </div>
            </div>
            <div class="flex-row-3">
              <img class="chart" src="img/chart-1@2x.svg" />
              <div class="analytics valign-text-middle montserrat-normal-tangaroa-14px">Analytics</div>
            </div>
            <div class="flex-row-4">
              <div class="overlap-group-2">
                <div class="ellipse_737 border-2px-haiti"></div>
              </div>
              <div class="settings valign-text-middle montserrat-normal-tangaroa-14px">Settings</div>
            </div>
            <div class="flex-row-5">
              <img class="group-1125" src="img/group-1125-1@2x.svg" />
              <div class="help-support valign-text-middle montserrat-normal-tangaroa-14px">Help &amp; Support</div>
            </div>
            <div class="flex-row-6">
              <img class="group-7080" src="img/group-7080-1@2x.svg" />
              <div class="about valign-text-middle montserrat-normal-tangaroa-14px">About</div>
            </div>
            <img class="vector-6" src="img/vector-5-1@2x.svg" />
            <div class="flex-row-7">
              <img class="logout" src="img/logout-1@2x.svg" />
              <div class="log-out valign-text-middle montserrat-normal-tangaroa-14px">Log Out</div>
            </div>
          </div>
    )
}
