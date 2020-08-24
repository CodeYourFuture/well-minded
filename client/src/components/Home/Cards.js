import React from "react";
// import { Link } from "react-router-dom";
import Card from "./Card";
import "../../css/Home.css";
import imageSix from "../../images/image 6.jpg";
import imageFive from "../../images/image 5.jpg";
import imageFour from "../../images/image 4.jpeg";
const Cards = () => {
  return (
    <div className="row mt-4 card-container">
      <Card
        src={imageSix}
        alt="Card image cap"
        title="RESEARCH"
        paragraph="Practical advice on how to cope when you have to stay at home because of coronavirus, looking after your wellbeing, and where to find more help"
        link="https://www.mind.org.uk/information-support/coronavirus/coronavirus-and-your-wellbeing/"
        linkcap="Mental health during pandemic"
      />
      <Card
        src={imageFive}
        alt="Card image cap"
        title="BLOG"
        paragraph="If you are looking for motivation, information or simply a supportive online community, the following mental health blogs are an excellent place to start"
        link=""
        linkcap="Mental Health Blogs"
      />
      <Card
        src={imageFour}
        alt="Card image cap"
        title="MENTAL HELP"
        paragraph="If you need help for a mental health crisis, emergency or breakdown, you should get immediate expert advice and assessment. NHS urgent mental health helplines"
        link="https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"
        linkcap="Where to get urgent help"
      />
    </div>
  );
};

export default Cards;
