import React from "react";
import LogoWithTextCard from "./subcomponents/LogoWithTextCard";

const IntigretSeo = () => {
  return (
    <div className="intigretseo">
      <h1>I Integrate SEO With Social Media, CRO, SEM</h1>

      <p>
        Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It
        Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It
        Over 2000 Years Old. Richard McClintock, A Latin Professor At
        Hampden-Sydney College In Virginia, Looked Up One Of The More Latin
        Words, Consectetur, From A Lorem Ipsum Passage
      </p>
      <div className="serialofcards">
        <LogoWithTextCard
          logo={require("../assests/icons/rocket.png")}
          heading="Keyword Analysis"
          text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat."
        />
        <LogoWithTextCard
          logo={require("../assests/icons/khopdiset.png")}
          heading="Keyword Assignment"
          text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat."
        />
      </div>
    </div>
  );
};

export default IntigretSeo;
