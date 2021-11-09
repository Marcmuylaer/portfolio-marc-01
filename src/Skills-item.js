import JavaScript     from "./Data/js.png"
import DataBase       from "./daData/tabase.png"
import APILogo        from "./Data/api.png"
import HTMLCSSLogo    from "./Data/html-css.png"
import Coding         from "./Data/coding.png"
import otherSkills    from "./Data/tool.png"
// voir logo react redux , mainframe ??????
const MySkills = [
  {
    skills1: [
      {
        Lenguage: "JavaScript",
        img: JavaScript,
        alt: "javascript",
        text: "React Js, jQuery, ES6 "
      },
      {
        Lenguage: "CSS/HTML",
        img: HTMLCSSLogo,
        alt: "html css",
        text: "HTML5, CSS3, Bootstrap "
      },
      {
        Lenguage: "DataBases",
        img: DataBase,
        alt: "database",
        text: "Firebase, MongoDB, MySql , DB2 "
      }
    ],
  },
  {
    skills2: [
      {
        Lenguage: "API",
        img: APILogo,
        alt: "API",
        text: "Axios, Ajax, Web Api's"
      },
      {
        Lenguage: "Other Libraries",
        img: Coding,
        alt: "Other Libraries",
        text: "Node Js, React, Redux, Express, Git and more"
      },
      {
        Lenguage: "Other Skills",
        img: otherSkills,
        alt: "Other Skills",
        text: "Mainframe (IBM,GCOS,UNISYS) , Microfocus MFEE (cobol) "
      }
    ],
  }
];

export default Skills-item;