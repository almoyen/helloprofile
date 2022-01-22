import React from 'react'

export default function List() {
    return (
        <div className="flex-row-2">
                <div className="flex-col-3">
                  <div className="activities valign-text-middle status">Activities</div>
                  <img className="mask-group" src="img/mask-group-2@2x.svg" />
                  <div className="group-7112" />
                </div>
                <div className="flex-col-4">
                  <div className="about-startup-grind valign-text-middle status">About Startup Grind</div>
                  <p className="startup-grind-is-the-1 button-stylemedium">
                    Startup Grind is the largest independent startup community, actively educating, inspiring, and
                    connecting over 5,000,000 entrepreneurs in over 500 cities.
                  </p>
                  <div className="flex-row-3">
                    <div className="learn-more status">Learn more</div>
                    <img className="group-1" src="img/group@2x.svg" />
                  </div>
                  <p className="startup-grand-global-conference-2022 valign-text-middle status">
                    Startup Grand Global Conference 2022
                  </p>
                  <p className="join-us-for-our-glob captionregular">
                    Join us for our Global Conference, February 28 - March 2 live in Redwood City, CA. Featuring
                    meaningful networking, educational content shared by leaders of brands building
                  </p>
                  <div className="flex-row-4">
                    <div className="register-now status">Register Now</div>
                    <img className="group-2" src="img/group@2x.svg" />
                  </div>
                </div>
              </div>
    )
}
