import React from "react";
import SkillsList from "./SkillsList";
import AchievementsList from "./AchievementsList";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Skills() {
  return (
    <section id="Skills" className="section content-Sections">
      <div>
        <AccountCircleIcon style={{ fontSize: 100 }} />
        <br />
        <h1>
          Skills and
          <br />
          Achievements
        </h1>
      </div>
      <div>
        <SkillsList />
        <br />
        <br />
        <AchievementsList />
      </div>
    </section>
  );
}

export default Skills;
