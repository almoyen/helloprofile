import React from "react";
import "./Dashboard.css";
import "./styleguide.css";
import { useDispatch } from "react-redux";
import BurgerMenu from "../../components/BurgerMenu";

const DashboardSideNavOpen = (props) => {
  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch({ type: "closeBurgerMenu", payload: false });
  };

  return (
    <div class="container-center-horizontal">
      <div class="desktop-17 screen">
        <div class="nav-bar border-1px-stroke">
          <img class="menu" src="img/menu-2@2x.svg" />
          <div class="helloprofile valign-text-middle montserrat-bold-robins-egg-blue-24px">
            helloprofile
          </div>
          <div class="seperator"></div>
          <div class="dashboard valign-text-middle subtitleregular">
            Dashboard
          </div>
          <div class="seperator-1"></div>
          <div class="overlap-group3">
            <div class="ellipse_739 border-2px-haiti"></div>
            <img class="line_181" src="img/line-181-1@2x.svg" />
          </div>
          <a
            href="javascript:ShowOverlay('frame-1153', 'animate-appear');"
            class="align-self-flex-start"
          >
            <div class="group-1127">
              <div class="overlap-group2">
                <img class="message" src="img/message-2@2x.svg" />
                <div class="overlap-group">
                  <div class="number valign-text-middle montserrat-normal-white-10px">
                    7
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="javascript:ShowOverlay('frame-1152', 'animate-appear');"
            class="align-self-flex-start"
          >
            <div class="notification">
              <div class="group-container">
                <img class="group-1128" src="img/group-1128@2x.svg" />
                <div class="overlap-group-1">
                  <div class="number valign-text-middle montserrat-normal-white-10px">
                    4
                  </div>
                </div>
              </div>
            </div>
          </a>
          <img class="rectangle-881" src="img/rectangle-881@2x.png" />
        </div>
        <BurgerMenu />
        <div class="flex-col">
          <div class="flex-col-1">
            <div class="flex-row-7">
              <div class="hero-title-headingsl-1 valign-text-middle montserrat-bold-tangaroa-35px">
                Hello, Jane Smith
              </div>
              <div class="button-auth">
                <img class="group" src="img/group@2x.svg" />
                <div class="share-profile valign-text-middle mulish-bold-robins-egg-blue-14px">
                  Share Profile
                </div>
              </div>
            </div>
            <p class="welcome-and-good-to-have-you-back valign-text-middle body">
              Welcome and good to have you back.
            </p>
            <img class="vector-5-1" src="img/vector-5@1x.svg" />
            <div class="task-heading-headingsm">Things to do</div>
            <div class="tasks">
              <div class="task-notification body border-1px-alto">
                <div class="circle-empty border-1px-alto"></div>
                <div class="task-heading-headingss valign-text-middle">
                  Complete your Account details
                </div>
                <div class="label valign-text-middle">Begin</div>
              </div>
              <div class="task-notification-1 border-1px-alto">
                <div class="circle-empty border-1px-alto"></div>
                <div class="task-heading-headingss-1 valign-text-middle body">
                  Complete your Profile Setup
                </div>
                <div class="button">
                  <div class="label-1 valign-text-middle body">Resume</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row-8 montserrat-semi-bold-tangaroa-14px">
            <div class="hero-title-headingsl-container">
              <div class="hero-title-headingsl-2 valign-text-middle montserrat-bold-tangaroa-24px">
                My Profiles
              </div>
              <div class="hero-title-headingsl-3 valign-text-middle montserrat-semi-bold-tangaroa-14px">
                Personal Contact
              </div>
            </div>
            <div class="hero-title-headingsl-4 valign-text-middle">
              Work Profile
            </div>
            <div class="hero-title-headingsl-5 valign-text-middle">
              Portfolio
            </div>
            <img class="group-1147" src="img/group-1147-2@2x.svg" />
            <div class="hero-title-headingsl-6 valign-text-middle">
              Create New Profile
            </div>
          </div>
          <div class="flex-row-9 status">
            <div class="rectangle-887"></div>
            <div class="hero-title-headingsl valign-text-middle">Active</div>
            <div class="rectangle-888"></div>
            <div class="hero-title-headingsl valign-text-middle">Active</div>
            <div class="rectangle-889"></div>
            <div class="hero-title-headingsl-7 valign-text-middle">
              Inactive
            </div>
          </div>
          <div class="flex-row-10">
            <div class="group-container-2">
              <div class="overlap-group-3">
                <img class="rectangle-872" src="img/rectangle-872@2x.png" />
                <img class="rectangle-886" src="img/rectangle-886@2x.svg" />
              </div>
              <div class="group-1132">
                <div class="hero-title-headingsl-8 valign-text-middle">
                  Jane Smith
                </div>
                <div class="hero-title-headingsl-9 valign-text-middle">
                  +2348123456789
                </div>
              </div>
            </div>
            <img class="frame-1150" src="img/frame-1150-1@2x.svg" />
            <div class="hero-title-headingsl-container-1">
              <div class="hero-title-headingsl-10 valign-text-middle montserrat-normal-white-14px">
                Jane Smith
              </div>
              <div class="hero-title-headingsl-11 valign-text-middle headingh5">
                Business Marketer
              </div>
            </div>
          </div>
          <div class="group-1146">
            <div class="hero-title-headingsl-12 valign-text-middle status">
              view all
            </div>
            <img class="iconly" src="img/iconly@21.329999923706055x.png" />
          </div>
        </div>
        <a href="javascript:ShowOverlay('frame-1151', 'animate-appear');">
          <div class="group-1135">
            <img class="subtract" src="img/subtract@2x.svg" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DashboardSideNavOpen;
