import React from "react";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
  return (
    <section id="Education" className="section content-Sections">
      <div>
        <SchoolIcon style={{ fontSize: 100 }} />
        <br />
        <h1>Education</h1>
      </div>
      <div>
        <ul>
          <li>
            <h3>
              B.E in CS&E at BMS College of Engineering, Basavanagudi, Bangalore
            </h3>
          </li>
          <li>
            <h3>
              12th in PCMB at Sharna basveshwara Residential PU composite
              College, Gulbarga
            </h3>
          </li>
          <li>
            <h3>10th in Sharna basveshwara Residential School, Gulbarga</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
