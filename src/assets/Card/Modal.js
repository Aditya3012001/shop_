import "./Modal.css";
import ReactDOM from "react-dom";

// this is made as a wrapper component
// modal overlay blocks the interaction with rest of the page
// portal aer used to render html elements in a specific place in a dom tree

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const Modaloverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portal
      )}
    </>
  );
};

export default Modal;
