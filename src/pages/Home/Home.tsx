import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}

export default Home;
