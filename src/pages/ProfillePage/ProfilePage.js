import React from "react";
import "./ProfilePage.css";
import Flexbox from "flexbox-react";
import Cover from "./Components/Cover";
import Contact from "./Components/Contact";
import List from "./Components/List";
import Events from "./Components/Events";
import CallToAction from "./Components/CallToAction";
import SocialMedia from "./Components/SocialMedia";
import Booking from "./Components/Booking";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {useSelector} from 'react-redux';

export default function ProfilePage() {

    const closeHeader = useSelector(state => state.closeHeader);
    console.log(closeHeader)
  return (
   
      <div className="desktop-30 screen">
        {closeHeader ? null : <Header />}
        <div className="frame-1252">
          <div className="overlap-group-container">
            <Cover />
            <Contact />
            <List />
            <Events />
            <CallToAction />
            <SocialMedia />
            <Booking />
          </div>
          <Footer />
        </div>
      </div>

  );
}
