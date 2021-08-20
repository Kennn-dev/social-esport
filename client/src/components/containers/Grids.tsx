import * as colors from "../../constains/colors";
import styled from "styled-components";
type ColType = 1 | 2 | 3;
const Grids = styled.div<{ col: ColType }>`
  display: grid;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: ${(props) =>
    props.col == 1 ? "1rf" : props.col == 2 ? "1fr 2fr" : "1fr 3fr 2fr"};
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${colors.gray};
  transition: all ease-in-out 0.5s;
`;
export default Grids;
