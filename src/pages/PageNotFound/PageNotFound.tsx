
// PageNotFound.tsx

import {  useNavigate } from "react-router-dom";
import logo from "../../assets/waste-bins-medium.png"
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import FlexRow from "@/Components/FlexRow";
import Button from "@/Components/Button";


function PageNotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/`);
  };

  return (
    <FlexBackGround>
      <FlexRow>
        <Block style={{maxWidth: "40%"}}>
          <img alt={'bins'} src={logo}></img>
          <h1>Uh-oh</h1>
          <p>404 Page not found</p>
          <Button
            dark={true}
            onClick={handleButtonClick}
            containerStyle={{ marginTop: "15px" }}
          >
            Go Back Home
          </Button>
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default PageNotFound;
