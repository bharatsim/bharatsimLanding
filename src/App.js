import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, Text, Stack, Container } from "@chakra-ui/react";
import theme from "./theme.js";
import Landing from "./pages/Landing";
import People from "./pages/People";
import Projects from "./pages/Projects";

import LandingLayout from "./components/layouts/LandingLayout";
import Header from "./components/sections/Header";
import Footerv2 from "./components/sections/Footerv2.js";
import SimulationEngine from "./pages/SimulationEngine.js";
import SyntheticPopulation from "./pages/SyntheticPopulation.js";
import VizEngine from "./pages/VizEngine.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/people">
          <ChakraProvider theme={theme}>
            <LandingLayout>
              <People />
            </LandingLayout>
            <Footerv2 />
          </ChakraProvider>
        </Route>
        <Route path="/components">
          <ChakraProvider theme={theme}>
            <LandingLayout>
              <Projects />
            </LandingLayout>
            {/* <Footer /> */}
            <Footerv2 />
          </ChakraProvider>
        </Route>
        <Route path="/faq">
          <Landing />
        </Route>
        {/* <Route path="/about">
        <ChakraProvider theme={theme}>
        <div>
          Hello!
        </div>
    </ChakraProvider>
        </Route> */}

        <Route path="/media">
          <ChakraProvider theme={theme}>
            <LandingLayout>Work in Progress...</LandingLayout>
          </ChakraProvider>
        </Route>

        <Route path="/collaborations">
          <ChakraProvider theme={theme}>
            <Header bg="#392F74"></Header>
            <div style={{ margin: "auto", width: "50%", paddingLeft: "23vw" }}>
              Work in Progress..
            </div>
          </ChakraProvider>
        </Route>

        <Route path="/simulation_engine">
          <SimulationEngine></SimulationEngine>
          <Footerv2></Footerv2>
        </Route>

        <Route path="/synthetic_population">
          <SyntheticPopulation />
          <Footerv2></Footerv2>
        </Route>

        <Route path="/viz_engine">
          <VizEngine />
          <Footerv2></Footerv2>
        </Route>

        <Route path="/publications">
          <ChakraProvider theme={theme}>
            <LandingLayout>
              <Container maxW="3xl">
                <Stack
                  // as={Box}
                  textAlign={"center"}
                  spacing={{ base: 8, md: 5 }}
                  py={{ base: 5, md: 30 }}
                >
                  <Text
                    color={"white.500"}
                    p={1}
                    fontWeight={300}
                    fontSize="xl"
                    fontFamily="Inter"
                    textAlign="justify"
                  >
                    If you use
                    <span style={{ color: "#2D3748", fontWeight: "600" }}>
                      {` BharatSim `}
                    </span>
                    {`in your research and want to cite it,
                  please use this reference:`}
                  <br/>
                  <br/>
                  {`Cherian, P., Kshirsagar, J.,Neekhra, B., Deshkar, G., Hayatnagarkar, H., Kapoor, K.,
                  Kaski, C., Kathar, G., Khandekar, S., Mookherjee, S., Ninawe, P., Noronha, R. F., Ranka, P., Sinha, V., Vinod, T., Yadav,
                  C., Gupta, D., Menon, G. I. (2023).`} <i>BharatSim: An agent-based modelling framework for India</i>. {`(Manuscript in preparation.)`}
                    <br />
                  </Text>
                </Stack>
              </Container>
            </LandingLayout>
            <Footerv2 />
          </ChakraProvider>
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
