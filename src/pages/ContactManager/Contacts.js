import React from 'react'
import { useDispatch } from 'react-redux'
import { contactlist } from './ContactsObject';
export default function Contacts() {
    const dispatch = useDispatch();
    const showProfileSlide = (contactIndex) => {
        dispatch({type: "showProfileSlide", payload: true})
        dispatch({type: "updateProfileSlideContent", payload: contactlist[contactIndex]})
    }

    const hideProfileSlide = () => {
        dispatch({type: "showProfileSlide", payload: false})
    }
    return (
        <div className="flex-col">
              <div className="flex-row-9 border-1px-stroke">
                <div className="flex-col-1">
                  <div className="hero-title-headingsl valign-text-middle montserrat-bold-tangaroa-24px">
                    Manage your contacts
                  </div>
                  <p className="ut-est-et-deserunt-e button-stylemedium">
                    Ut est et deserunt elit nisi labore quis eu ex commodo. Est et sint sit tempor deserunt id
                  </p>
                  <div className="flex-row-10">
                    <div className="all body">All</div>
                    <div className="personal-profile body">Personal Profile</div>
                    <div className="work-proile status">Work Proile</div>
                  </div>
                  <div className="rectangle-869" />
                </div>
                <div className="flex-row-11 body">
                  <div className="portfolio-page">Portfolio Page</div>
                  <div className="place">Local</div>
                  <div className="flex-col-2">
                    <div className="overlap-group1-1">
                      <img className="group-1147" src="img/group-1147-3@2x.svg" />
                      <div className="hero-title-headingsl-1 valign-text-middle montserrat-semi-bold-robins-egg-blue-14px">
                        New Contact
                      </div>
                    </div>
                    <div className="scanned">Scanned</div>
                  </div>
                </div>
              </div>
              <div className="frame-7125">
                <div className="overlap-group8">
                  <a href="desktop-26.html"> <div className="rectangle-903 border-1px-stroke" /></a>
                  {contactlist.map((item, index) => {
                      return <div onMouseEnter={() => showProfileSlide(index)} onMouseLeave={hideProfileSlide} className="group-1172">
                    <div className="text-2 valign-text-middle montserrat-normal-black-14px">{item.id}</div>
                    <div className="overlap-group">
                      <div className="kc valign-text-middle montserrat-normal-white-14px">{item.title}</div>
                    </div>
                    <div className="name valign-text-middle montserrat-normal-black-14px">{item.name}</div>
                    <div className="phone valign-text-middle montserrat-normal-black-14px">{item.phone}</div>
                    <div className="calveenchikeziegmailcom valign-text-middle montserrat-normal-black-14px">
                      {item.email}
                    </div>
                   
                   
                  </div>
                  })
}
                
                
                 
                </div>
                <img className="vector-50" src="img/vector-42@1x.svg" />
              </div>
              <div className="group-1186">
                <img className="arrow-down-3" src="img/arrow---down-3@2x.svg" />
                <div className="overlap-group3-2">
                  <div className="text-1 valign-text-middle montserrat-normal-black-14px">3456..</div>
                  <div className="rectangle-905" />
                </div>
                <div className="number-2 valign-text-middle montserrat-normal-black-14px">20</div>
                <img className="arrow-down-2" src="img/arrow---down-2@2x.svg" />
              </div>
            </div>
    )
}
