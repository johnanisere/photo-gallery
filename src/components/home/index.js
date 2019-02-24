import React, { Component } from "react";

import Image from "../image";
import Header from "../header";
import { Section } from "./elements";
import { ControlContainer } from "../elements";
import images from "../../constants/images";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Section>
          <ControlContainer type="content">
            {images.map((val, key) => (
              <Image {...val} key={key} />
            ))}
          </ControlContainer>
        </Section>
      </main>
    );
  }
}

export default App;
