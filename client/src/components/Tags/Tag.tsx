import styled from "styled-components";
interface TagProps {
  children: string;
}
const Layout = styled.div`
  cursor: default;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  width: fit-content;
  background: ${({ theme }) => theme.bgBlock3};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray};

  transition: all ease-in 0.3s;

  &:hover {
    background: ${({ theme }) => theme.bgBlock6};
    color: ${({ theme }) => theme.white};
  }
`;
const Tag = ({ children }: TagProps) => <Layout>{children}</Layout>;

export default Tag;
