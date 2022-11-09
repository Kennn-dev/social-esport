import Modal, { Props } from "react-modal";
import COLORS from "src/constains/colors";
import styled from "styled-components";
import { Cancel2Icon } from "./Icons";

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
    padding: 100,
    backgroundColor: "#34343491",
  },
};

interface CustomModal {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  modalProps: Props;
  isUseDefaultLayout?: boolean;
}

const CustomModal = (props: CustomModal) => {
  const { title, modalProps, isUseDefaultLayout = true, children } = props;

  return (
    <Modal
      parentSelector={() => document!.querySelector("#root") as HTMLElement}
      style={modalStyle}
      shouldCloseOnOverlayClick
      contentLabel="Example Modal"
      {...modalProps}
    >
      {isUseDefaultLayout ? (
        <Wrapper>
          <Header>
            <div>{title || "&nbsp;"}</div>
            <div className="icon">
              <Cancel2Icon
                style={{ width: 24, height: 24 }}
                onClick={modalProps.onRequestClose}
                title="close"
              />
            </div>
          </Header>
          <Child>{children}</Child>
        </Wrapper>
      ) : (
        children
      )}
    </Modal>
  );
};

const Child = styled.div`
  margin-top: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${COLORS.white};

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.5s ease;
    &:hover {
      transform: rotate(90deg);
    }
  }
`;
const Wrapper = styled.div<any>`
  color: ${COLORS.white};
  padding: 20px;

  /* width: 100vh;
  max-width: 580px; */
  border-radius: 15px;
  background-color: ${(p) => p.theme.bgBlock1};

  .modal {
    margin-top: 5px;
    display: flex;

    gap: 0 20px;

    &--avatar {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;

      background-image: url(${(p) => p.avatar});
      background-size: cover;
      background-repeat: no-repeat;
    }
    &--form {
      width: 60vh;
      display: flex;

      flex-direction: column;
      gap: 15px 0;

      &--body {
        textarea {
          width: 100%;
          max-height: 300px;
          margin-bottom: 20px;
        }
      }
      &--footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--items {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        button {
          width: fit-content;
        }
      }
    }
  }
`;

export default CustomModal;
