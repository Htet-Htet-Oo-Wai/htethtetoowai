import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { hoverChangeSkills } from "./hoverChangeSkills.js";
import { typeWrite } from "./typeWrite.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".myanmarSurveyResearch",
  `During field Study, I have done MSR Data Record Management System - PHP project which can handle the
  records of respondents fromMSR company.`,
  "Field Study as a Web Developer",
  "Myanmar Survey Research",
  "Nov 2019 - Dec 2019"
);

hoverChangeExperience(
  ".hajEmpowerment",
  `During field Study, I have doneJob Recruitment website - A JavaScript project for job recruitment using react.js, FireStore and Google Cloud 
  Run during 3 months internship.`,
  "Internship as a Web Developer",
  "HAJ Empowerment Co., Ltd",
  "1ST JUNE 2020 – 31ST AUG 2020 JAPAN COMPANY"
);

hoverChangeExperience(
  ".seattle",
  `At SCM, I have done PHP ecommerce project with Laravel 8 framework, zend framework and  ECCUBE open source package framework`,
  "Junior ~ Senior Web Developer",
  "Seattle Consulting Myanmar",
  "1ST JANUARY 2021 – CURRENT"
);

hoverChangeSkills(
  ".programming",
  `PHP <br /> HTML <br /> Java<br />JavaScript<br />jQuery<br />React.js<br />
  bootstrap<br />socket.io<br /> Vue JS<br />CSS`,
  "Programming Languages",
);

hoverChangeSkills(
  ".framework",
  `Laravel Framework<br /> Zend Framework<br /> Symfony Framework`,
  "Framework",
);

hoverChangeSkills(
  ".database",
  `Google Cloud<br /> MySQL<br /> Oracle<br /> Microsoft Access`,
  "Database",
);

hoverChangeSkills(
  ".softSkills",
  `Quick Production speed <br/>
   Quick self-learner<br/> 
   Decision making <br/>
   Complex problem solver<br/>
   Innovative <br/>
   Service-focused  <br/>
   Willing to learn new technologies <br/>
   Quality-focused <br/>`,
  "Soft Skills",
);
