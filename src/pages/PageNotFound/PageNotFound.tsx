
// PageNotFound.tsx

import { Link } from "react-router-dom";
import styled from "styled-components";
import bins from "../../assets/waste-bins-medium.png"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function PageNotFound() {
  return (
    <Container>
      <img alt={'bins'} src={bins}></img>
      <h1>Uh-oh</h1>
      <p>Page not found</p>
      <Link to="/">Go back home</Link>
    </Container>
  );
}

export default PageNotFound;
