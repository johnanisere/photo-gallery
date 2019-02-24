import React from "react";

import Lazyload from "react-lazyload";
import Spinner from "../spinner";
import { Figure, Image } from "./elements";

const App = ({ src, description }) => (
  <Figure>
    <Lazyload height="100%" offset={100}>
      <Image src={src} description={description} />
    </Lazyload>
  </Figure>
);

export default App;
