import React from "react";

export default function Footer() {
  return (
    <div className="flex-row-10">
      <p className="light-mode-dark-mode valign-text-middle montserrat-bold-black-12px">
        <span>
          <span className="montserrat-bold-black-12px">Light Mode</span>
          <span className="span1-1 button-stylemedium"> | Dark Mode</span>
        </span>
      </p>
      <img
        className="white-on-black-logo-mark"
        src="img/white-on-black-logo-mark@2x.svg"
      />
      <div className="made-with-hello-profile valign-text-middle captionsemibold12">
        Made with HelloProfile
      </div>
    </div>
  );
}
