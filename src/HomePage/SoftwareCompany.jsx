import React from "react";
import "../styles/Card.module.css";

const SoftwareCompany = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <h2>A Software Company Serving the Worldwide</h2>
        <p className="service-text">
        Whenever we are casting about any software house, 
        the only thing comes first in our minds is on time and 
        satisfied work. Plenty of software houses work for providing software
         development services, however, only few of them sustain their reputation. 
         TechTwirl Technologies is one of them. TechTwirl have in house development 
         teams and also an office development team. Workers do the project
          with full enthusiasm and determination. The supreme motto of techtwirl 
          is to provide non-pareil results. TechTwirl is the registered Software firm, 
          where any client from all over the world can attain their required work. 
          TechTwirl got their highest ranks in very less time.
        </p>
      </div>
      <div className="service-image-container">
        <img 
          src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2022/06/07132503/software-house-gif2-min.gif" 
          alt="Software Development Services" 
          className="service-image"
        />
      </div>
    </div>
  );
};

export default SoftwareCompany;
