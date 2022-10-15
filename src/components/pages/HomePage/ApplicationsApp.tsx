import React, { RefObject } from "react";

const ApplicationsApp = (props: {
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
              <h3>Applications Application</h3>
              <p>
                A small application in React + Typescript using REST API,
                Bootstrap, json-server. The data in the table is loaded from the
                server. All the fields contain validation, form has appropriate
                checks before submitting (disable buttons or others) See the{" "}
                <a href="https://github.com/yrshva/fake-applications">
                  source code on GitHub
                </a>
                .
              </p>
            </div>
            <video className="project-screenshot" controls muted>
              <source
                src={require("../../../images/applications-app.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-3">
            <button
              className="btn-custom btn-yellow m-2"
              onClick={() =>
                props.previous.current &&
                props.previous.current.scrollIntoView()
              }
            >
              Previous
            </button>
            <button
              className="btn-custom btn-blue m-2"
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
export default ApplicationsApp;
