import React from "react";
import { Carousel } from "react-bootstrap";
import { AllProjects } from "./Projects/ProjectInfo";


function Entry() {
  return (
    <div>
      <h1 className="reviews-h1">Reviews</h1>
      <Carousel>
        {AllProjects.map((Project) => (
          <Carousel.Item >
            <img
              className="testimonialImages d-block w-50"
              src={require("../assets/projects/" +
              Project.image +
              ".png")}
            //   alt={review.author}
            />
            <Carousel.Caption>
              <h3>{Project.title}</h3>
              <p>{Project.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Entry;

