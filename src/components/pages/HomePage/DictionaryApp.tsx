import React, { RefObject } from "react";

const DictionaryApp = (props: {
  previous: RefObject<HTMLDivElement>;
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <div>
      <div ref={props.current} className="page bg-blue">
        <div>
          <div className="project">
            <div className="project-info">
              <h3>Dictionary Application</h3>
              <p>
                You can search for any word's definition and listen to the
                word's pronuncuation with the Dictionary Application. This
                product was developed in React using REST API, React Hooks,
                Bootstrap. See the{" "}
                <a href="https://github.com/yrshva/dictionary-app">
                  source code on GitHub
                </a>{" "}
                or try <a href="https://wordbook-app.netlify.app/">demo</a> to
                see how it works.
              </p>
            </div>
            <img
              src={require("../../../images/dictionary-app.png")}
              alt="dictionary application screenshot"
              className="project-screenshot"
            />
          </div>
          <div className="mt-3">
            <button
              className="btn-custom btn-blue m-2"
              onClick={() =>
                props.previous.current &&
                props.previous.current.scrollIntoView()
              }
            >
              Previous
            </button>
            <button
              className="btn-custom btn-yellow m-2"
              onClick={() =>
                props.next.current && props.next.current.scrollIntoView()
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
export default DictionaryApp;
