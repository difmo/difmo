import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import phoneImage from "../../assets/phone.png"; // Assuming this is your image file

export default class Example extends Component {
  state = {
    goToSlide: Carousel,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171358-removebg-preview.png?alt=media&token=47956566-a935-4028-8769-83a66a326889"
          alt="1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171910-removebg-preview%20(1).png?alt=media&token=bb7c014d-2a64-4c7a-8281-fb9712893217"
          alt="2"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171358-removebg-preview.png?alt=media&token=47956566-a935-4028-8769-83a66a326889"
          alt="3"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171450-removebg-preview.png?alt=media&token=c1977bf0-d104-4b66-beb6-5ade83b10538"
          alt="4"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171606-removebg-preview.png?alt=media&token=822eb55d-2958-4cf2-b757-939c18643b8c"
          alt="5"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot%202025-01-24%20174710.png?alt=media&token=f4b0fc4c-347a-4581-940d-2ae7b5395357"
          alt="6"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171524-removebg-preview.png?alt=media&token=c4224130-118c-4fd0-9a81-75220c74b43e"
          alt="7"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          className="rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/amoksh-5c507.appspot.com/o/imp%2FScreenshot_2025-01-24_171524-removebg-preview.png?alt=media&token=c4224130-118c-4fd0-9a81-75220c74b43e"
          alt="8"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            // margin: "0 auto",
            marginTop: "2rem",
            width: "100%",
            display: "flex",
            // justifyContent: "space-around",
          }}
        ></div>
      </div>
    );
  }
}
