
// PageNotFound.tsx

import { Link } from "react-router-dom";
import logo from "../../assets/waste-bins-medium.png"
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import FlexRow from "@/Components/FlexRow";


function PageNotFound() {
  return (
    <FlexBackGround>
      <FlexRow>
        <Block>
          <img alt={'bins'} src={logo}></img>
          <h1>Uh-oh</h1>
          <p>404 Page not found</p>
          <Link to="/">Go back home</Link>
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default PageNotFound;
