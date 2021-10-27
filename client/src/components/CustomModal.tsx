import Modal, { Props } from "react-modal";

Modal.setAppElement("#modal");

const modalStyle: Modal.Styles = {
  content: {
    position: "relative",
    overflow: "visible",
    border: "none",
    top: "50%",
    left: "50% ",
    backgroundColor: "transparent",
    width: "fit-content",
    height: "fit-content",
    transform: "translate(-50%,-50%)",
    transition: "all 0.5s ease",
  },
  overlay: {
    zIndex: 99,
    backgroundColor: "#34343491",
  },
};
const CustomModal = ({ ...props }: Props) => (
  <Modal style={modalStyle} {...props} />
);

export default CustomModal;
