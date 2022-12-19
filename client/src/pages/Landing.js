import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              vehicle <span>information</span> app
            </h1>
            <p>
              Working as a Fleet Manager with my employer, the challenge of
              going through archives to get vehicle information for updates is
              time-consuming. The challenge gave birth to VIMAP, an acronym for
              Vehicles Information Management Application. The application
              provides a solution to replace the analog method of accessing,
              saving, and updating vehicle information.{" "}
              <a href="https://medium.com/@mukhtartanimugarba/the-vimap-manual-bb9d299cebba">
                The Vimap Manual
              </a>{" "}
              is a guide for creating a fleet of vehicles data bank. The
              application features are the Collection and Storage of Vehicles
              Information, Search, Updates, Graphical Data Visualization, and
              more.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="vehicle hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
