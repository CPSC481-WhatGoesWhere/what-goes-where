
// PageNotFound.tsx

import { Link } from "react-router-dom";
import logo from "../../assets/waste-bins-medium.png"
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";


function PageNotFound() {
  return (
    <FlexBackGround>
      <Block>
        <img alt={'bins'} src={logo}></img>
        <h1>Uh-oh</h1>
        <p>Page not found</p>
        <Link to="/">Go back home</Link>
      </Block>
    </FlexBackGround>
  );
}

export default PageNotFound;
