import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkNum = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    } else if (num < 0) {
      return reviews.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  function randomNum() {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNum(randomNumber));
  }

  return (
    <div
      className="card"
      style={{
        width: "50vw",
        backgroundColor: "white",
        padding: "1.5rem 2rem",
      }}
    >
      <div className="image">
        <img
          src={image}
          className="logo"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />

        <span className="quote-icon ">
          <FaQuoteRight className="qoute" />
        </span>
      </div>
      <h1 className="author">{name}</h1>
      <h3 className="role">{job}</h3>
      <p className="info">{text}</p>
      <div className="btns">
        <button className="prev" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random" onClick={randomNum}>
        Surprise Me
      </button>
    </div>
  );
}

export default Review;
