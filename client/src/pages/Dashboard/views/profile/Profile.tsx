import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import * as colors from "../../../../constains/colors";
import {
  Button,
  MessageIcon,
  Tabs,
  FeedCard,
  VideoCard,
  CategoryCard,
} from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import { TabsItem } from "../../../../types/tabs";
interface IProfileLayoutProps {
  src: string;
  avatarSrc: string;
}
const Profile = () => {
  const tabsInit: TabsItem[] = [
    { value: "0", label: "Post" },
    { value: "1", label: "Montage" },
  ];
  const history = useHistory();
  const [tabs, setTabs] = React.useState<TabsItem>(tabsInit[0]);

  const handleChangeTabs = (tab: TabsItem) => {
    setTabs(tab);
  };
  const renderFeed = (tab: TabsItem) => {
    // Post
    let render = null;
    switch (tab.value) {
      case "0":
        render = (
          <div className="content--feed--main--list">
            {[...Array(8).keys()].map((i) => (
              <FeedCard
                key={i}
                src={`https://source.unsplash.com/random?sig=28${i}&3d-render`}
              />
            ))}
          </div>
        );

        break;
      case "1":
        render = (
          <div className="content--feed--main--cards">
            {[...Array(8).keys()].map((i) => (
              <VideoCard
                author={"Ken"}
                title={`This is Title video ${i}`}
                tags={["Categories", "Gaming"]}
                key={i}
                src={`https://source.unsplash.com/random?sig=28${i}&3d-render`}
              />
            ))}
          </div>
        );

        break;

      default:
        render = null;
        break;
    }
    console.log("Render");
    return render;
  };
  return (
    <Layout
      src={`https://images.unsplash.com/photo-1633907284646-7abf4a195875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80`}
      avatarSrc={`https://images.unsplash.com/photo-1633636611822-30b3aece0748?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
    >
      <div className="profile">
        <div className="profile--card--info">
          <div className="profile--card--info--avatar"></div>
          <div className="profile--card--info--content">
            <div className="profile--card--info--content--text">
              <h1 className="profile--card--info--content--text--heading">
                Lily Bailey
              </h1>
              <span className="profile--card--info--content--text--email">
                @LilyBailey
              </span>
              <div className="profile--card--info--content--text--meta">
                <div className="item">
                  <strong>300</strong> Followers
                </div>
                <div className="item">
                  <strong>50</strong> Following
                </div>
                <div className="item">
                  <strong>100</strong> Montages
                </div>
              </div>
            </div>
            <div className="profile--card--info--content--actions">
              <Button size="lg" color="primary">
                Follow
              </Button>

              <Button
                size="sm"
                color="secondary"
                className="message"
                icon={<MessageIcon color={colors.bgBlock1} />}
              >
                Message
              </Button>
              {/* {
                <Button
                  onClick={() => {
                    history.push("/dashboard/profile/edit");
                  }}
                  size="lg"
                  color="ghost"
                >
                  Edit Profile
                </Button>
              } */}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content--categories">
          <div className="content--categories--title">
            What Lily Bailey play
          </div>
          <div className="content--categories--slide">
            {[...Array(6).keys()].map((i) => (
              <CategoryCard
                key={i}
                src={`https://source.unsplash.com/featured/?sig=83${i}&3d-render`}
              />
            ))}
          </div>
        </div>

        <div className="content--feed">
          <div className="content--feed--main">
            <div className="content--feed--main--filter">
              <Tabs tabs={tabsInit} onChange={handleChangeTabs} />
            </div>
            {renderFeed(tabs)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

const Layout = styled(MontageLayout)<IProfileLayoutProps>`
  .profile {
    position: relative;
    height: 15rem;
    min-height: 0;
    width: inherit;

    border-radius: 1rem;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &--card--info {
      position: absolute;
      width: 80%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);

      display: flex;
      flex-wrap: wrap;
      background-color: ${({ theme }) => theme.bgBlock2};
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      padding: 30px;
      border-radius: 1rem;

      background: #1d1d1d;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.3);
      &--avatar {
        flex-shrink: 0;

        width: 100px;
        height: 100px;
        outline: 3px solid ${({ theme }) => theme.primary};
        border-radius: 50%;

        background-image: url(${({ avatarSrc }) => avatarSrc});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &--content {
        display: flex;

        gap: 0 50px;
        flex: 1;
        align-items: center;
        justify-content: space-between;

        &--text {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          flex-direction: column;
          row-gap: 10px;
          &--heading {
            font-size: 2rem;
            font-weight: bold;
          }
          &--email {
            color: ${({ theme }) => theme.gray};
          }
          &--meta {
            display: flex;
            align-items: center;
            gap: 0 20px;
          }
        }
        &--actions {
          display: flex;
          margin-left: auto;
          flex-direction: column;
          justify-content: space-between;
          align-items: start;
          gap: 15px 0;

          svg {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
  .content {
    width: 80%;
    margin: 0 auto;
    &--categories {
      margin-top: 150px;
      &--title {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${({ theme }) => theme.lightGray};
        margin-bottom: 20px;
        cursor: pointer;
      }
      &--slide {
        margin-top: 15px;
        display: flex;
        column-gap: 30px;
        padding-bottom: 10px;
        /* flex-wrap: wrap; */
        width: inherit;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;

        div {
          flex-shrink: 0;
          scroll-snap-align: start;
        }
      }
    }
    &--feed {
      margin-top: 50px;
      &--main {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
        margin: 0 auto;
        width: 80%;
        &--filter {
          width: 100%;
          margin: 0 auto;
        }
        &--list {
          display: flex;
          flex-direction: column;
          gap: 15px 0;
          margin: 0 auto;
        }
        &--cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }
      }
    }
  }
`;
