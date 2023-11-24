import "../Popup/popup.scss";
import ReactDOM from "react-dom";

const ThankYou = ({ handleCloseThank, openThank }: any) => {
  // const submitHandler = () => {
  //   console.log("THanks");
  // };

  const portalContainer = document.getElementById("portalModalDiv");
  if (!portalContainer) {
    console.error("Portal container not found in the DOM");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Thanks-modal">
      <div className="modal fade" id="thanksModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content thanks-modal">
            <div className="">
              <div className="modal-close-button">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={handleCloseThank}
                >
                  &times;
                </button>
              </div>
              <div className="modal-img modal-header">
                <img src={require("../../assests/thankyou.png")} />
              </div>
            </div>
            <div className="modal-body thanks_body">
              <h1 className="thanks_heading modal-title">
                Thank You For Contacting Us!
              </h1>

              <p className="thanks_subheadinig">
                We appreciate that you’ve taken the time to contact us. We will
                get back to you very soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalContainer
  );
};

export default ThankYou;
