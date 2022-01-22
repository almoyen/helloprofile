import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfileSlide() {
    const profileContent = useSelector(state => state.profileSlideContent);
    console.log(profileContent)
    return (
        <div className="frame-1157 border-1px-stroke">
              <div className="overlap-group2-1">
                <div className="kc-8 valign-text-middle">KC</div>
                <img className="image-2" src="img/image-2-1@2x.png" />
              </div>
              <div className="name-1 valign-text-middle status">{profileContent.name}</div>
              <div className="managing-director valign-text-middle">Managing Director</div>
              <a href="javascript:ShowOverlay('frame-1252', 'animate-appear');" className="align-self-flex-center">
                <div className="group-1185">
                  <div className="overlap-group-5">
                    <div className="view-profile valign-text-middle">View Profile</div>
                    <img className="show" src="img/show-2@2x.svg" />
                    <div className="rectangle-904 border-2px-main-brand" />
                  </div></div></a><img className="vector-18" src="img/vector-18@2x.svg" />
              <div className="work-phone-number valign-text-middle montserrat-normal-robins-egg-blue-9px">
                Work phone number
              </div>
              <div className="phone-1 valign-text-middle montserrat-normal-black-14px">+2348123456789</div>
              <div className="email-address valign-text-middle montserrat-normal-robins-egg-blue-9px">Email address</div>
              <div className="calveenchikeziegmailcom-1 valign-text-middle captionregular">calveenchikezie@gmail.com</div>
              <div className="company valign-text-middle montserrat-normal-robins-egg-blue-9px">Company</div>
              <div className="digital valign-text-middle captionregular">Digital Growth Boost</div>
              <div className="frame-1157-item valign-text-middle montserrat-normal-robins-egg-blue-9px">Company’s address</div>
              <div className="calveenchikeziegmailcom-1 valign-text-middle captionregular">calveenchikezie@gmail.com</div>
              <div className="compapnys-website valign-text-middle montserrat-normal-robins-egg-blue-9px">
                Compapny’s Website
              </div>
              <div className="digital valign-text-middle captionregular">www.digitalgrowth.com</div>
              <div className="frame-1157-item valign-text-middle montserrat-normal-robins-egg-blue-9px">Socials</div>
              <div className="flex-row-12">
                <img className="group-119" src="img/group-1192@2x.svg" />
                <div className="calveenn valign-text-middle captionregular">@calveenn</div>
              </div>
              <div className="flex-row-13">
                <img className="group-1191" src="img/group-1191@2x.svg" />
                <div className="calveenn valign-text-middle captionregular">@calveenn</div>
              </div>
              <div className="flex-row">
                <img className="group-119" src="img/group-1193@2x.svg" />
                <div className="calveenn valign-text-middle captionregular">@calveenn</div>
              </div>
              <div className="flex-row">
                <img className="group-119" src="img/group-1194@2x.svg" />
                <div className="calveenn valign-text-middle captionregular">@calveenn</div>
              </div>
            </div>
    )
}
