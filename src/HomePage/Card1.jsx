import React from "react";
import "../styles/Card1.css";

const Card1 = () => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img 
        src = "https://www.cyanous.com/img/ourtechnologies.gif"
          // src="https://www.webdesigncompany.lk/images/services/creative-2-software-development-outsourcing-company-in-sri-lanka.gif" 
          alt="Top Software Application Development" 
          className="service-image" 
        />
      </div>
      <div className="service-content">
        <h2>
        Top Software Application Development</h2>
        <p className="service-text">
        API Development, and IOS app development in one place, 
        without loss of quality and the difficult path of selecting and 
        changing contractors of SEO Company Pakistan. If your company needs a 
        new website, a new online store design or an application, 
        you have found the right company. At Exytex Technologies we are 
        specialists in programming. We carry out developments of any size 
        and adapted to your needs and budget. In addition, our experience 
        in Digital marketing services is very great advantage for our clients,
 since all our projects are oriented to online success.
        </p>
      </div>
    </div>
  );
};

export default Card1;
