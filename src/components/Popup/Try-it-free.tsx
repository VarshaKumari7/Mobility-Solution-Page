import React from "react";
import ReactDOM from "react-dom";
import "../Popup/popup.scss";

const TryItFree = ({ open, handleClose }: any) => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    contactMethod: "",
    comment: "",
  });
  const handleInputChange = <T extends HTMLInputElement | HTMLSelectElement>(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = () => {
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      service: "",
      contactMethod: "",
      comment: "",
    });
  };

  const portalContainer = document.getElementById("portalModalDiv");

  if (!portalContainer) {
    console.error("Portal container not found in the DOM");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="form-modal-for-free">
      <div className="modal fade Rectangle-try" id="formModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="headings">
              <h4 className="Speak-To-Our-Experts">
                Try Free Pilot For 15 Days
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="body-content">
              <form action="javascript:void(0);" id="fileUploadForm">
                <input
                  className="Full-Name"
                  type="text"
                  required
                  name="name"
                  placeholder="Full Name"
                  onChange={handleInputChange}
                />
                <input
                  className="Phone-Number"
                  type="text"
                  required
                  name="phone"
                  placeholder="Phone Number"
                  pattern="^[0-9]*$"
                  onChange={handleInputChange}
                />
                <input
                  className="Work-Email-Address"
                  type="text"
                  name="email"
                  pattern="^([w-.]+@([w-]+.)+[w-]{2,4})?$"
                  placeholder="Work Email Address"
                  onChange={handleInputChange}
                />
                <input
                  className="Company-Name"
                  type="text"
                  required
                  name="company"
                  placeholder="Company Name"
                  onChange={handleInputChange}
                />
                <select
                  name="service"
                  required
                  id=""
                  className="Select-Services"
                  onChange={handleInputChange}
                  value={formData.service}
                >
                  <option>Select Service</option>
                  <option value="IOS App Development">
                    IOS App Development{" "}
                  </option>
                  <option value="Android App Development">
                    Android App Development
                  </option>
                  <option value="React Native Development">
                    React Native Development
                  </option>
                  <option value="Hybrid Web App Development">
                    Hybrid Web App Development
                  </option>
                  <option value="Progressive Web Apps (PWA)">
                    Progressive Web Apps (PWA)
                  </option>
                  <option value="Wearables & Embedded Softwares">
                    Wearables & Embedded Softwares
                  </option>
                </select>
                <input
                  className="Comment"
                  type="text"
                  required
                  name="comment"
                  placeholder="Comment"
                  onChange={handleInputChange}
                />
                <select
                  name="contactMethod"
                  placeholder="How can we contact you?"
                  id=""
                  className="How-can-we-contact-y"
                  onChange={handleInputChange}
                  value={formData.contactMethod}
                >
                  <option>How can we contact you?</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
                <div className="terms-privacy">
                  <input type="checkbox" id="privacyAccept" />
                  <p>
                    By submitting this information you agree to our{" "}
                    <span style={{ color: "#0f0a4b" }}>Term of Service </span>
                    and <span style={{ color: "#0f0a4b" }}>Privacy Policy</span>
                  </p>
                </div>
                <div className="Rectangle-2-Copy-10">
                  <button
                    type="submit"
                    className="btn btn-free Submit"
                    id="btnSubmit"
                    onClick={(e) => {
                      e.preventDefault();
                      submitHandler();
                    }}
                  >
                    Try Now For Free
                  </button>
                </div>

                <div className="last-content-popup">
                  <img
                    src={require("../../assests/lock.png")}
                    alt=""
                    className="mobile-image"
                  />
                  <p className="The-information-shar">
                    The information shared above will help us get back to you.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalContainer
  );
};
export default TryItFree;
