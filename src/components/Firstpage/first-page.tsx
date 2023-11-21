import Card from "../Cardscomponent/first-Card/firstCard";
import "../Firstpage/first-page.scss";
import { cardData } from "../../datafile/cardData";
import { useEffect, useState } from "react";
import "../SecondPage/secondpage.scss";
import SpeakToOurExperts from "../Popup/Speak-to-our-experts";
const FirstPage = () => {
  const [open, setOpen] = useState(false);

  const consultExperts = () => {
    console.log("consult Our experts");
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
    <>
      <div className="man-holding-technology-gear-wheel-interface">
        <div className="front">
          <span className="Build-Future-Proof-S">
            Experience The Unconventional Growth With
            <span className="text-style-1">
              {" "}
              End-to-End Stellar Mobility Solutions
            </span>
          </span>
          <div className="Our-Experts">
            <span className="Consult-With-Our-Exp btn" onClick={consultExperts}>
              Consult With Our Experts
            </span>
            <div>
              {open && (
                <SpeakToOurExperts
                  open={open}
                  handleClose={() => setOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Our-Product">
        <div className="Our-Product-Engineer">
          Our Product Engineering Services
        </div>
        <div className="card-sec">
          {cardData.map((ele: any, index: number) => {
            return <Card key={index} ele={ele} />;
          })}
        </div>
      </div>
      <div className="second-page">
        <div className="G-D-Model">
          <div className="destop">
            <div className="gd-model-cover-page">
              <div className="gdmodel">
                <div className="spanmsg">
                  <span className="Global-Delivery-Mode">
                    Global Delivery Model
                  </span>
                </div>
                <div className="GMD">
                  <img
                    src={require("../../assests/GDM-desktop.png")}
                    className="GDM-desktop"
                  />
                </div>
              </div>
            </div>
            {/* Mobile Phonessssssssssssssssssssssssssssssss */}
            <div className="mobile">
              <div className="msg">
                <span className="Global-Delivery-Mode-mobile">
                  Global Delivery Model
                </span>
              </div>
              <div className="content-375">
                <div className="Rectangle-375">
                  <span className="Onsite">Onsite</span>
                </div>

                <span className="Customer-facing-SME">
                  Customer facing, SME's, Project Management, Consultants,
                  Architects, Business Analysts and Technical Support Resources
                </span>
                <div className="Rectangle-375">
                  <span className="Onsite">Offshore</span>
                </div>

                <span className="Customer-facing-SME">
                  Offshore delivery and support for better cost savings and
                  scalability. Regulated offshore development with client driven
                  process. Staged transition for large scale projects.
                </span>

                <img
                  src={require("../../assests/375-img1.png")}
                  className="GDM_img"
                />
              </div>

              <div className="small-text-container">
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Reducing the Service cost by 20% or more
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Rapid Scalability of Resources
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Best Practices & Highest Quality Standards
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    24/7 Support Capability
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Lowering Total Cost Of Ownership
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Offshore Dedicated Centers
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Reducing the Service cost by 20% or more
                  </span>
                </div>
                <div className="text-inbox">
                  <img src={require("../../assests/375-img2.webp")} />
                  <span className="Reducing-the-Service">
                    Reducing the Service cost by 20% or more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <span className="-Member-margin">100+ Member App Services Team</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">Industry Specific Solutions</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">
          Frameworks & Solution Accelrators
        </span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">App. Support & Maintanence</span>
        <img
          src={require("../../assests/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-margin-right">
          Offshore Development Center
        </span>
      </div>
    </>
  );
};

export default FirstPage;
