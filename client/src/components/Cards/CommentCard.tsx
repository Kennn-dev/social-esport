import styled from "styled-components";
import { FireIcon, MessageIcon } from "../../components/index";
interface IAuthorAvatarProps {
  src: string;
}
interface ICommentCardProps extends IAuthorAvatarProps {}
const CommentCard = ({ src }: ICommentCardProps) => {
  return (
    <Wrapper>
      <div className="comment--author--avatar">
        <AuthorAvatar src={src} />
      </div>
      <div className="comment">
        <div className="comment--author">
          <div>Lily Bailey</div>
          <div className="comment--author--time">3 minutes ago</div>
        </div>
        <div className="comment--content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
          massa ultricies nunc leo consectetur magna potenti eget. Mauris
          montes, turpis erat integer.
        </div>
        <div className="comment--actions">
          <div className="comment--actions--icon">
            30
            <span>
              <FireIcon />
            </span>
          </div>
          <div className="comment--actions--icon">
            2{" "}
            <span>
              <MessageIcon />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CommentCard;
const AuthorAvatar = styled.div<IAuthorAvatarProps>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  padding: 20px;
  border-radius: 15px;
  width: 100%;

  display: flex;
  column-gap: 1rem;

  .comment--author--avatar {
  }
  .comment {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    &--author {
      display: flex;
      column-gap: 10px;
      align-items: center;
      &--time {
        color: ${({ theme }) => theme.gray};
        font-size: 14px;

        font-weight: 300;
      }
    }
    &--content {
      line-height: 1.5;
      font-weight: 300;
    }

    &--actions {
      display: flex;
      align-items: center;
      gap: 2rem;
      width: 100%;
      &--icon {
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        span {
          margin-left: 10px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
