import React, { RefObject } from "react";

const TournamentApp = (props: {
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
              <h3>Tournament App</h3>
              <p>
                The product was developed in React using <strong>Redux</strong>,
                React Hooks, Bootstrap. System can add as many teams as needed,
                initially should start with none. After adding a new team it is
                added on the bottom of a table and automatically paired with
                other teams (all teams play one game with others). For a win,
                team gets 3 points, draw - 1, lost - 0. Table is ordered
                according to total points. See the{" "}
                <a href="https://github.com/yrshva/tournament">
                  source code on GitHub
                </a>{" "}
                or try <a href="https://sport-tournament.netlify.app/">demo</a>{" "}
                to see how it works.
              </p>
            </div>
            <img
              src={require("../../../images/tournament-app.png")}
              alt="tournament application screenshot"
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
export default TournamentApp;
