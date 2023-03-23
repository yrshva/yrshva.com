import React, { type RefObject } from "react";

const CollectionServices = (props: {
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
              <h3>Collection Services</h3>
              <p>
                The product was designed in Figma and developed in React +
                Typescript using Bootstrap. For portfolio use only. See it on{" "}
                <a href="https://www.behance.net/gallery/150263943/German-collection-services/modules/848921161">
                  Behance
                </a>
                .
              </p>
            </div>
            <video className="project-screenshot" controls muted>
              <source
                src={require("../../../images/collection-services.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-3">
            <button
              className="btn-custom btn-blue m-2"
              onClick={() => { props.previous.current?.scrollIntoView(); }
              }
            >
              Previous
            </button>
            <button
              className="btn-custom btn-yellow m-2"
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
export default CollectionServices;
