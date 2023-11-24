import "../Thirdpage/thirdpage.scss";
import { thirdCardData } from "../../datafile/ThirdCardData";
import ThirdCard from "../Cardscomponent/Third-Card/Third-card";
import { useEffect, useState } from "react";
import StayConncetedWithUs from "../Popup/StayConncetedWithUs";
import Secondpage from "../SecondPage/Secondpage";
import TryItFree from "../Popup/Try-it-free";

const Thirdpage = () => {
  const [open, setOpen] = useState(false);
  const getInTouch = () => {
    console.log("Get In Touch");
    setOpen(true);
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);

  return (
    <div className="third-page">
      <div className="Our-Plan-Process">Our Plan & Process</div>
      <div>
        <img
          src={require("../../assests/States-1440.png")}
          className="third-page-img"
        ></img>
        <div className="third-page-imgs">
          <img
            src={require("../../assests/375-img3.png")}
            className="third-page-img1"
          ></img>
          <img
            src={require("../../assests/states-786.png")}
            className="states-786"
          ></img>
          <img
            src={require("../../assests/375-img4.png")}
            className="third-page-img2"
          ></img>
        </div>

        <div className="get-started-containers">
          <div className="get-started-global-container">
            <div className="get-started-container">
              <span className="get-started-text Contracts">Contracts</span>
              <ul className="get-started-list-text">
                <li className="get-started-one-text">NDA and IP Protection</li>
                <li className="get-started-one-text">
                  Master Services Agreement
                </li>
                <li className="get-started-one-text">Statement of Work</li>
              </ul>
            </div>

            <div className="get-started-container ">
              <span className="get-started-text Team-Setup">Team Setup</span>
              <ul className="get-started-list-text">
                <li className="get-started-one-text">
                  Work Closely with Customers
                </li>
                <li className="get-started-one-text">
                  IP Protection Agreements with Every Resource
                </li>
                <li className="get-started-one-text">Induction</li>
              </ul>
            </div>

            <div className="get-started-container">
              <span className="get-started-text Knowledge-Transfer">
                Knowledge Transfer
              </span>
              <ul className="get-started-list-text">
                <li className="get-started-one-text">(on site/Offshore)</li>
                <li className="get-started-one-text">
                  Understand the Technology,
                  <br />
                  <span>
                    Requirements,processes and build good working relationship
                  </span>
                </li>
              </ul>
            </div>

            <div className="get-started-container">
              <span className="get-started-text Infrastructure-Setup">
                Infrastructure Setup
              </span>
              <ul className="get-started-list-text">
                <li className="get-started-one-text">Network and Servers</li>
                <li className="get-started-one-text">
                  Security and IP Protection
                </li>
                <li className="get-started-one-text">Source Control</li>
                <li className="get-started-one-text">Collaboration Tools</li>
                <li className="get-started-one-text">Development Tools</li>
                <li className="get-started-one-text">Environment Set Up </li>
              </ul>
            </div>
            <div className="get-started-container">
              <span className="get-started-text Process-Setup">
                Process Setup
              </span>
              <ul className="get-started-list-text">
                <li className="get-started-one-text">Communication</li>
                <li className="get-started-one-text">Requirement </li>
                <li className="get-started-one-text">
                  Dev Tools & Frameworks set up
                </li>
                <li className="get-started-one-text">Technical Documents</li>
                <li className="get-started-one-text">
                  Coding Standards & Process
                </li>
                <li className="get-started-one-text">
                  Code Review & Intermediate Release Plan
                </li>
                <li className="get-started-one-text">Resource Management</li>
              </ul>
            </div>
            <div className="get-started-sub-container">
              <img
                src={require("../../assests/PlanProcessBottom.webp")}
                className="get-started-sub-image"
              />
            </div>
          </div>
        </div>
        <div className="gradient-copy">
          <div className="new-content">
            <img src={require("../../assests/375-img5.png")} />
            <span className="-NDA-and-IP-Protect">
              • NDA and IP Protection <br></br>• Master Services Agreement{" "}
              <br></br>• Statement of Work
            </span>
          </div>
          <div className="new-content">
            <img src={require("../../assests/375-img6.png")} />
            <span className="-NDA-and-IP-Protect">
              • Work Closely with Customers <br></br>• IP Protection Agreements
              with Every Resource <br></br>• Induction
            </span>
          </div>
          <div className="new-content">
            <img src={require("../../assests/375-img7.png")} />
            <span className="-NDA-and-IP-Protect">
              • (on-site/ offshore) <br></br>• Understand the Technology,
              Requirements, Processe-plains and build good working relationship
            </span>
          </div>
          <div className="new-content">
            <img src={require("../../assests/375-img8.png")} />
            <span className="-NDA-and-IP-Protect">
              • Network and Servers <br></br>• Security and IP Protection{" "}
              <br></br>• Source Control <br></br>• Collaboration Tools <br></br>{" "}
              • Development Tools <br></br>• Environments Set up
            </span>
          </div>
          <div className="new-content">
            <img src={require("../../assests/375-img9.png")} />
            <span className="-NDA-and-IP-Protect">
              • Communication <br></br>• Requirements <br></br>• Dev Tools &
              Frameworks set up <br></br>• Technical Documents <br></br>• Coding
              Standards & Process <br></br>• Code Review & Intermediate Release
              Plan <br></br>• Release Management
            </span>
          </div>
          <div className="get-started">
            <img src={require("../../assests/375-img10.png")} />
          </div>
        </div>
      </div>

      <div className="language-div">
        <div className="Advanced-Technologie">
          Advanced Technologies We Leverage For Developing Mobility Solutions
        </div>
        <div className="language-img">
          <img
            src={require("../../assests/python.png")}
            className="python-img"
          ></img>
          <img
            src={require("../../assests/java.png")}
            className="Group-14-Copy"
          ></img>
          <img
            src={require("../../assests/React.png")}
            className="Group-14-Copy"
          ></img>
          <img
            src={require("../../assests/Swift.png")}
            className="Group-14-Copy"
          ></img>
          <img
            src={require("../../assests/Kotlin.png")}
            className="Kotlin-img"
          ></img>
        </div>
      </div>
      <Secondpage />

      <div className="Thirdpage-footer-section">
        <span className="-Member-margin">50+ Certified BI Experts</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Innovation Labs</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Visualization</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Governance</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Industry Specific Solutions</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-margin-right">
          5+ years of experience in Data Science
        </span>
      </div>
      <div className="our-plan">
        <div className="Our-Plan-Process">Features at a Glance</div>
        <div className="third-card-sec">
          {thirdCardData.map((cardcontent: any, index) => {
            return <ThirdCard key={index} cardcontent={cardcontent} />;
          })}
        </div>
        <div className="last-section">
          <div className="get-background">
            <div className="mobile-last-section">
              <div className="GET-AHEAD">
                <span className="Get-ahead-in-your-In">
                  <span className="text-style-1">
                    Amplify Your Brand Credibility With Performance Driven
                  </span>
                  <span> End-to-End Mobility Solutions</span>
                </span>
                <div className="Rectangle-2-Copy-10">
                  <span className="Get-In-Touch" onClick={getInTouch}>
                    Get In Touch
                  </span>
                  {open && (
                    <StayConncetedWithUs
                      open={open}
                      handleClose={() => setOpen(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="End-of-the-page">
        <span className="Copyright-2010-202">
          Copyright © 2010-2021 Binary Informatics Pvt. Ltd. Company All rights
          reserved | Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Thirdpage;
