import styled from "styled-components";
import * as colors from "../../constains/colors";
interface TagProps {
  children: string;
}
const Layout = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  width: fit-content;
  background: ${colors.bgBlock3};
  font-size: 0.75rem;
  color: ${colors.gray};

  transition: all ease-in 0.3s;

  &:hover {
    background: ${colors.bgBlock6};
    color: ${colors.white};
  }
`;
const Tag = ({ children }: TagProps) => <Layout>{children}</Layout>;

export default Tag;
