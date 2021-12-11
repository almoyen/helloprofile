import React, { Component } from 'react'
import "./Dashboard.css"
import "./styleguide.css"

export default class DashboardSideNavOpen extends Component {

  closeSideBar = () => {
    this.props.close()
  }
    
    render() {
        return (
            <div>
  <input type="hidden" id="anPageName" name="page" defaultValue="desktop-17" />
  <div className="container-center-horizontal">
    <div className="desktop-17 screen">
      <div className="nav-bar border-1px-stroke">
        <div  className="align-self-flex-center">
          <img alt = ""  className="menu" src="img/menu@2x.svg" onClick = {this.closeSideBar} /> </div>
        <div className="helloprofile valign-text-middle headingh2">helloprofile</div>
        <div className="seperator" />
        <div className="dashboard valign-text-middle subtitleregular">Dashboard</div>
        <div className="button-auth">
          <img alt = ""  className="star" src="img/star@2x.svg" />
          <div className="go-premium valign-text-middle">Go Premium</div>
        </div>
        <div className="seperator-1" />
        <div className="overlap-group3">
          <div className="ellipse_739 border-2px-haiti" />
          <img alt = ""  className="line_181" src="img/line-181@2x.svg" />
        </div>
        
          <div className="group-1127">
            <div className="overlap-group2">
              <img alt = ""  className="message" src="img/message@2x.svg" />
              <div className="overlap-group">
                <div className="number valign-text-middle montserrat-normal-white-10px">7</div>
              </div>
            </div>
          </div>
          <div className="notification">
            <div className="group-container">
              <img alt = ""  className="group-1128" src="img/group-1128@2x.svg" />
              <div className="overlap-group-1">
                <div className="number valign-text-middle montserrat-normal-white-10px">4</div>
              </div>
            </div>
          </div>
          <img alt = ""  className="rectangle-881" src="img/rectangle-881@2x.png" />
      </div>
      <div onMouseLeave = {this.closeSideBar} className="frame-1149 border-1px-stroke">
        <img alt = ""  className="rectangle-881-1" src="img/rectangle-881-1@2x.png" />
        <div className="group-1148">
          <div className="overlap-group-2">
            <div className="ellipse_736 border-2px-haiti" />
            <img alt = ""  className="path_33945" src="img/path-33945@2x.svg" />
          </div>
          <div className="my-account valign-text-middle montserrat-normal-tangaroa-14px">My Account</div>
          <img alt = ""  className="star-1" src="img/star-1@2x.svg" />
        </div>
        <img alt = ""  className="vector-5" src="img/vector-5-1@2x.svg" />
        <div className="overlap-group4">
          <img alt = ""  className="category" src="img/category@2x.svg" />
          <div className="overview valign-text-middle">Overview</div>
        </div>
        <div className="group-1157">
          <img alt = ""  className="document" src="img/document@2x.svg" />
          <div className="contact-manager valign-text-middle montserrat-normal-tangaroa-14px">Contact Manager</div>
        </div>
        <div className="group-1159">
          <img alt = ""  className="work" src="img/work@2x.svg" />
          <div className="profile-manager valign-text-middle montserrat-normal-tangaroa-14px">Profile Manager</div>
        </div>
        <div className="group-1160">
          <img alt = ""  className="edit-square" src="img/edit-square@2x.svg" />
          <div className="overlap-group1">
            <div className="editor valign-text-middle montserrat-normal-tangaroa-14px">Editor</div>
            <img alt = ""  className="group-1104" src="img/group-1104@2x.svg" />
          </div>
        </div>
        <div className="group-1161">
          <img alt = ""  className="chart" src="img/chart@2x.svg" />
          <div className="analytics valign-text-middle montserrat-normal-tangaroa-14px">Analytics</div>
        </div>
        <div className="group-1156">
          <img alt = ""  className="time-circle" src="img/time-circle@2x.svg" />
          <div className="recent valign-text-middle montserrat-normal-tangaroa-14px">Recent</div>
        </div>
        <div className="group-1155">
          <img alt = ""  className="delete" src="img/delete@2x.svg" />
          <div className="trash valign-text-middle montserrat-normal-tangaroa-14px">Trash</div>
        </div>
        <div className="group-1154">
          <div className="overlap-group-3">
            <div className="ellipse_737 border-2px-haiti" />
          </div>
          <div className="settings valign-text-middle montserrat-normal-tangaroa-14px">Settings</div>
        </div>
        <div className="group-1153">
          <img alt = ""  className="x3-user" src="img/3-user@2x.svg" />
          <div className="referrals valign-text-middle montserrat-normal-tangaroa-14px">Referrals</div>
        </div>
        <div className="group-1152">
          <img alt = ""  className="group-1125" src="img/group-1125@2x.svg" />
          <div className="help-support valign-text-middle montserrat-normal-tangaroa-14px">Help &amp; Support</div>
        </div>
        <img alt = ""  className="vector-6" src="img/vector-5-1@2x.svg" />
        <div className="align-self-flex-start">
          <div className="group-1196">
            <img alt = ""  className="logout" src="img/logout@2x.svg" />
            <div className="log-out valign-text-middle montserrat-normal-tangaroa-14px">Log Out</div>
          </div></div>
      </div>
      <div className="flex-col">
        <div className="flex-col-1">
          <div className="flex-row">
            <div className="hero-title-headingsl-1 valign-text-middle montserrat-bold-tangaroa-35px">
              Hello, Jane Smith
            </div>
            <div className="button-auth-1">
              <img alt = ""  className="group" src="img/group@2x.svg" />
              <div className="share-profile valign-text-middle">Share Profile</div>
            </div>
          </div>
          <p className="welcome-and-good-to-have-you-back valign-text-middle body">Welcome and good to have you back.</p>
          <img alt = ""  className="vector-5-1" src="img/vector-5@1x.svg" />
          <div className="task-heading-headingsm headingh2">Things to do</div>
          <div className="tasks">
            <div className="task-notification body border-1px-alto">
              <div className="circle-empty border-1px-alto" />
              <div className="task-heading-headingss valign-text-middle">Complete your Account details</div>
              <div className="label valign-text-middle">Begin</div>
            </div>
            <div className="task-notification-1 border-1px-alto">
              <div className="circle-empty border-1px-alto" />
              <div className="task-heading-headingss-1 valign-text-middle body">Complete your Profile Setup</div>
              <div className="button"><div className="label-1 valign-text-middle body">Resume</div></div>
            </div>
          </div>
        </div>
        <div className="flex-row-1 montserrat-semi-bold-tangaroa-14px">
          <div className="hero-title-headingsl-container">
            <div className="hero-title-headingsl-2 valign-text-middle headingh2">My Profiles</div>
            <div className="hero-title-headingsl-3 valign-text-middle montserrat-semi-bold-tangaroa-14px">
              Personal Contact
            </div>
          </div>
          <div className="hero-title-headingsl-4 valign-text-middle">Work Profile</div>
          <div className="hero-title-headingsl-5 valign-text-middle">Portfolio</div>
          <img alt = ""  className="group-1147" src="img/group-1147@2x.svg" />
          <div className="hero-title-headingsl-6 valign-text-middle">Create New Profile</div>
        </div>
        <div className="flex-row-2 status">
          <div className="rectangle-887" />
          <div className="hero-title-headingsl valign-text-middle">Active</div>
          <div className="rectangle-888" />
          <div className="hero-title-headingsl valign-text-middle">Active</div>
          <div className="rectangle-889" />
          <div className="hero-title-headingsl-7 valign-text-middle">Inactive</div>
        </div>
        <div className="flex-row-3">
          <div className="group-container-1">
            <div className="overlap-group-4">
              <img alt = ""  className="rectangle-872" src="img/rectangle-872@2x.png" />
              <img alt = ""  className="rectangle-886" src="img/rectangle-886@2x.svg" />
            </div>
            <div className="group-1132">
              <div className="hero-title-headingsl-8 valign-text-middle">Jane Smith</div>
              <div className="hero-title-headingsl-9 valign-text-middle">+2348123456789</div>
            </div>
          </div>
          <img alt = ""  className="frame-1150" src="img/frame-1150@2x.svg" />
          <div className="hero-title-headingsl-container-1">
            <div className="hero-title-headingsl-10 valign-text-middle">Jane Smith</div>
            <div className="hero-title-headingsl-11 valign-text-middle headingh5">Business Marketer</div>
          </div>
        </div>
        <div className="group-1146">
          <div className="hero-title-headingsl-12 valign-text-middle status">view all</div>
          <img alt = ""  className="iconly" src="img/iconly@21.329999923706055x.png" />
        </div>
      </div>
      
        <div className="group-1135"><img alt = ""  className="subtract" src="img/subtract@2x.svg" /></div>
    </div>
  </div>
  <div id="overlay-frame-1151" className="overlay" style={{minHeight: '900px'}}>
    <div className="container-center-horizontal">
      <div className="frame-1151 screen">
        <div className="frame-1151-1">
          <div className="overlap-group-container border-1px-stroke">
            <div className="overlap-group1">
              <div className="helloprofile valign-text-middle status">helloprofile</div>
              <div className="inplay valign-text-middle">Hi There</div>
              <p className="inplay-1 valign-text-middle captionregular">You’re here because you deserve better.</p>
              <p className="inplay-2 valign-text-middle captionregular">Ask me anything, or share some feedback</p>
            </div>
            <div className="overlap-group2">
              <div className="inplay-3 valign-text-middle captionregular">Send us a message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="overlay-frame-1153" className="overlay" style={{minHeight: '900px'}}>
    <div className="container-center-horizontal">
      <div className="frame-1153 screen">
        <div className="frame-1153-1">
          <div className="overlap-group2">
            <div className="overlap-group border-1px-stroke">
              <div className="messages valign-text-middle status">Messages</div>
              <div className="overlap-group1">
                <div className="inplay-1 valign-text-middle captionregular">Type here</div>
              </div>
            </div>
            <img alt = ""  className="vector-9" src="img/vector-5-1@2x.svg" />
            <div className="group-1144">
              <div className="overlap-group-1">
                <div className="inplay-2 valign-text-middle montserrat-semi-bold-white-14px">KC</div>
              </div>
              <div className="inplay-3 valign-text-middle montserrat-bold-licorice-12px">Kelvin Chiedozie</div>
            </div>
            <div className="group-1143">
              <div className="overlap-group-2">
                <div className="inplay-4 valign-text-middle montserrat-semi-bold-white-14px">JA</div>
              </div>
              <div className="inplay valign-text-middle montserrat-bold-licorice-12px">Julius Ameh</div>
            </div>
            <div className="group-1142">
              <div className="overlap-group-3">
                <div className="inplay-5 valign-text-middle montserrat-semi-bold-white-14px">PO</div>
              </div>
              <div className="inplay valign-text-middle montserrat-bold-licorice-12px">Prince Okechukwu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="overlay-frame-1152" className="overlay" style={{minHeight: '900px'}}>
    <div className="container-center-horizontal">
      <div className="frame-1152 border-1px-stroke screen">
        <div className="frame-1152-1 border-1px-stroke">
          <div className="inplay-1 valign-text-middle status">Notifications</div>
          <img alt = ""  className="vector-9" src="img/vector-5-1@2x.svg" />
          <div className="group-1144">
            <div className="overlap-group">
              <div className="inplay-2 valign-text-middle montserrat-semi-bold-white-14px">KC</div>
            </div>
            <div className="inplay valign-text-middle montserrat-bold-licorice-12px">
              <span><span className="montserrat-bold-licorice-12px">Kelvin Chiedozie<br /></span><span className="span1 captionregular">viewed your profile.</span>
              </span>
            </div>
          </div>
          <div className="group-114">
            <div className="overlap-group-1">
              <div className="inplay-3 valign-text-middle montserrat-semi-bold-white-14px">JA</div>
            </div>
            <div className="inplay valign-text-middle montserrat-bold-licorice-12px">
              <span><span className="montserrat-bold-licorice-12px">Julius Ameh<br /></span><span className="span1 captionregular">viewed your profile.</span>
              </span>
            </div>
          </div>
          <div className="group-114">
            <div className="overlap-group-2">
              <div className="inplay-4 valign-text-middle montserrat-semi-bold-white-14px">PO</div>
            </div>
            <div className="inplay valign-text-middle montserrat-bold-licorice-12px">
              <span><span className="montserrat-bold-licorice-12px">Prince Okechukwu<br /></span><span className="span1 captionregular">viewed your profile.</span>
              </span>
            </div>
          </div>
          <div className="overlap-group1">
            <img alt = ""  className="group-1141" src="img/group-1141@2x.svg" />
            <p className="inplay-5 valign-text-middle captionregular">
              Refers 5 friends &amp; get a free one month premium subscription
            </p>
          </div>
          <div className="group-1145">
            <div className="hero-title-headingsl valign-text-middle status">view all</div>
            <img alt = ""  className="iconly" src="img/iconly-1@21.329999923706055x.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          
        )
    }
}
