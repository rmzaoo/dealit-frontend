import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { HomepageContainer } from "./style";

const Homepage = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <HomepageContainer>
      <Parallax pages={5}>
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </HomepageContainer>
  );
};

export default Homepage;
