import React, { type RefObject } from "react";

const MobileDictionary = (props: {
  previous: RefObject<HTMLDivElement>;
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <div>
      <div ref={props.current} className="page bg-yellow">
        <div>
          <div className="project">
            <div className="project-info">
              <h3>Dictionary Application for iOS/Android</h3>
              <p>
                Dictionary application with some new features like different
                accents`` pronunciation. Developed in React Native using
                Typescript, REST API, React Hooks and Audio player library. See
                the{" "}
                <a href="https://github.com/yrshva/react-native-dictionary-app">
                  source code on GitHub
                </a>
                .
              </p>
            </div>
            <video className="dictionary-video" controls muted>
              <source
                src={require("../../../images/mobile-dictionary.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-3">
            <button
              className="btn-custom btn-yellow m-2"
              onClick={() => { props.previous.current?.scrollIntoView(); }
              }
            >
              Previous
            </button>
            <button
              className="btn-custom btn-blue m-2"
              onClick={() => { props.next.current?.scrollIntoView(); }
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileDictionary;
