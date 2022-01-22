import React from 'react'
import Header from '../../components/Header'
import BurgerMenu from './BurgerMenu'
import Contacts from './Contacts'
import "./ContactsManager.css"
import ProfileSlide from './ProfileSlide'
import { useSelector } from 'react-redux'

export default function ContactManager() {
    const showProfileSlide = useSelector(state => state.showProfileSlide)
    return (
        <div>
        <div className="container-center-horizontal">
          <div className="desktop-26 screen">
            <Header/>
            <BurgerMenu/>
            <Contacts/>
           {showProfileSlide
           ? <ProfileSlide/>
        :<div className="frame-1157 " style = {{backgroundColor: "#fafafa"}}></div>}
          </div>
        </div>
      </div>     
    )
}
