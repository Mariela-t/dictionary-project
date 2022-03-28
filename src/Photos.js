import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="images"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <footer>
          <a href="https://www.pexels.com" tabIndex="_blank">
            Photos provided by Pexels
          </a>
        </footer>
      </section>
    );
  } else {
    return null;
  }
}
