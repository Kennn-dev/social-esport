import illustrationSrc from "../../assets/404.png";
import { Button } from "../..//components/index";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

const UnknowPage = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <Layout>
      <div className="main">
        <div className="content">
          <div className="content--heading">Oops ! Something wrong :(</div>
          <div className="content--sub container">
            <div className="content--sub--text">
              We can’t seem to find the page are you looking for
            </div>
            <Button onClick={handleGoBack} color="primary">
              Go Home
            </Button>
          </div>
        </div>
        <div className="image">
          <img
            alt="a dope illustration here"
            width="100%"
            height="auto"
            src={illustrationSrc}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UnknowPage;
const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  .container {
    width: 60%;
    margin: 0 auto;
  }
  .content {
    text-align: center;
    &--heading {
      font-weight: bold;
      font-size: 2.5rem;
      color: ${(p) => p.theme.primary};
    }

    &--sub {
      margin-top: 1rem;

      color: ${(p) => p.theme.lightGray};
      &--text {
        margin-bottom: 1rem;
      }
    }
    button {
      width: fit-content;
      margin: 0 auto;
    }
  }
  .image {
    margin: 0 auto;
    width: 70%;
    padding: 1.5rem 0;
  }
  .links {
    margin: 0 auto;
    text-align: center;
    &--text {
      color: ${({ theme }) => theme.gray};
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &--list {
      margin: 0 auto;
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 0 50px;
      color: ${(p) => p.theme.lightGray};
    }
  }
`;
