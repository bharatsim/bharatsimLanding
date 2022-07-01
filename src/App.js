import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ChakraProvider,
  Center,
  Image,
  Box,
  HStack,
  Vstack,
  Text,
  Link,
  VStack,
  Flex,
  Code,
  Heading,
  Grid,
  Container,
  Spacer,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import theme from './theme.js';
import Landing from "./pages/Landing";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Projects from "./pages/Projects";

import LandingLayout from "./components/layouts/LandingLayout";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <Router>
      <Switch>

      <Route path="/people">
          <ChakraProvider theme={theme}>
          <LandingLayout >  <People /></LandingLayout>

          </ChakraProvider>
        </Route>
        <Route path="/components">
            <ChakraProvider theme={theme}>
            <LandingLayout > <Projects /> </LandingLayout>
                <Footer />
            </ChakraProvider>
        </Route>

        <Route path="/faq">
          <Landing />
        </Route>

        <Route path="/about">
        <ChakraProvider theme={theme}>
        <div>
          Hello!
        </div>
    </ChakraProvider>
        </Route>

        <Route path="/media">
        <ChakraProvider theme={theme}>
        <LandingLayout>
          Work in Progress...
          </LandingLayout>
    </ChakraProvider>
        </Route>


      <Route path="/collaborations">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress..
            </div>

        </ChakraProvider>
      </Route>

      <Route path="/simulation_engine">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        </ChakraProvider>
        <Center>
        <Container maxW='container.xl' flexDirection="column" ml={3} mr={3}>
          <Center>
          <Text p={2} m={2} align='justify'>

          <Center>
          <Heading size="lg" p={2}>The Simulation Engine</Heading>
          </Center><br/>
          Mathematical and computational approaches to the dynamics of an infectious disease have a long history. Models first described by Kermack and McKendrick  describe the how fractions of susceptible (S), infectious (I) and recovered (R) individuals of a population change over time. The dynamics of S, I and R are prescribed through coupled non-linear ordinary differential equations. Compartmental models ignore all variation at the individual level, and also assume that the population is well-mixed. Such models neglect complications associated with spatial variations in incidence and elide the interplay of social factors, such as family sizes, community networks and socio-economic status on disease dynamics. <br/><br/>

          Beyond compartmental models, network and agent-based (equivalently individual-based) approaches implement individual-level granularity. Realistic networks describing the interactions between people can contain a few highly connected nodes. Targeting such nodes, ``super-spreaders'' in the context of infectious disease dynamics, can have an overwhelmingly large effect compared to interventions that treat all nodes equivalently. Both network and agent-based models require many more assumptions, especially regarding the nature of contacts that lead to infection. However, they provide a more detailed way of understanding disease dynamics than is possible through compartmental models. They can thus also be used to assess the effects of targeted interventions, such as lock-downs and restrictions on public transport, in a more precise way.<br/><br/>

          A number of agent-based models have been used to study disease dynamics. There are relatively few such models for India. One, the IISc-TIFR city-based simulator, has been used to model COVID-19 spread in the major Indian cities of Bengaluru and Mumbai.  Results from these models include the evaluation of strategies for reopening public transport in the background of an epidemic at different stages of its trajectory as well as studies of the impact of lock-downs and related interventions.<br/><br/>

          The agent-based simulation framework described here, BharatSim, defines and uses a more detailed description of the population than those in earlier work. Additionally, BharatSim is a framework, i.e. it provides a mechanism for users to address specific requirements easily instead of being forced to modify a large, existing base of code. While applications are designed to respond to a specific question, a simulation framework is more general. The simulation framework thus insulates the user from unnecessary implementation details, while providing them with sufficient flexibility.<br/><br/>


            BharatSim defines and uses a synthetic population that is a detailed and granular description of the population that is also statistically faithful. The simulation engine accepts this population as a CSV file. Additionally, the engine was designed so that it would be able to scale up to large population sizes without significant overhead or degradation in speed, given that one use of BharatSim would be to simulate populations of the size of an average Indian state, which also required the framework to implement efficient data structures and algorithms. Finally, we intended that BharatSim be usable on a range of conventionally available hardware ranging from personal laptops to High Performance Computing (HPC) clusters. Flexibility was another design imperative: we wanted modellers from a range of backgrounds, perhaps even lacking significant programming experience, to be able to easily define a new model and add further levels of abstraction, thus extending the framework in new ways.
           </Text>
           </Center>
           <br></br>
           <Heading size="md" m={2} p={2}>Structure of the simulation engine</Heading>
           <Center>
              <Text p={2} m={2} align='justify'>

                <Box p={2} m={2} backgroundColor='white'>
                <Center>
                  <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("./assets/graph.png")}></Image>
                </Center>
                </Box>


              All data in the simulation engine is stored in a <b>Graph</b>. This graph is a network of nodes which can represent both individual agents as well as locations such as households or offices. The framework defines a <tt>Node</tt> class which allows for relations to be established between other such nodes.
              The <tt>Node</tt> class is further extended to define the <tt>Agent</tt> and <tt>Network</tt> classes. The <tt>Network</tt> classes can then be further extended to define specific locations like a <tt>Home</tt> or a <tt>Workplace</tt> class. Thus a typical graph might be one that's shown in the figure below: individual agents (extensions of the <tt>Person</tt> class) are connected to Homes and Workplaces (both extensions of the <tt>Network</tt> class).


                <Box p={2} m={2} backgroundColor='white'>
                <Center>
                  <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("./assets/nodes.png")}></Image>
                </Center>
                </Box>


              One could then establish relations between these nodes. For example, every Agent could be a resident of a specific house (specified by a <tt>HouseholdID</tt>) and be employed by a specific workplace (specified by the <tt>WorkplaceID</tt>). The relations are bidirectional, and require one to additionally specify that the home houses -- and the workplace employs -- that particular Agent (specified by the <tt>AgentID</tt>).


                <Box p={2} m={2} backgroundColor='white'>
                <Center>
                  <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("./assets/relations.png")}></Image>
                </Center>
                </Box>

              </Text>
           </Center>


           <Text p={2} m={2} align='justify'>

           Using an abstraction like a graph makes the framework domain independent and flexible. This graph can be implemented in one of two ways, either by using <Link style={{color:"blue"}} variant="outline" href="https://neo4j.com/" target={"_blank"}>Neo4j</Link>, a graph database, or using the Scala programming language's scalable map implementation <Link style={{color:"blue"}} target={"_blank"} href="https://www.scala-lang.org/api/2.12.8/scala/collection/concurrent/TrieMap.html">TrieMap</Link>. The modeller can choose either of these implementations. Both these structures were chosen since they optimized data operations, allowing the simulation to scale efficiently to larger populations. The simulation engine framework allows modellers to directly specify their models using its own language. This domain-specific language is itself based on <i>Scala</i>, the language that the simulation framework has been written in. This allows modellers to extend their knowledge of <i>Scala</i> when creating their models.
            </Text>

            <Heading size="md" m={2} p={2}>The <tt>Agent</tt> and <tt>StatefulAgent</tt> classes</Heading>
            <Text p={2} m={2} align='justify'>
              The <tt>Agent</tt> class can be extended to specify a custom agent in a model with specific attributes. These could be general attributes like <tt>householdID</tt> or a <tt>workplaceID</tt>, or model-specific attributes like <tt>relativeSusceptibility</tt> which defines the relative susceptibility the individual has to being infected. A pre-defined extension of the <tt>Agent</tt> class is the <tt>StatefulAgent</tt> class, which endows the <tt>Agent</tt> with a <a href="https://en.wikipedia.org/wiki/Finite-state_machine">Finite-State Machine</a>, allowing them to be in one -- and only one -- disease state at any given time.

              <Box p={2} m={2} backgroundColor='white'>
              <Center>
                <Image width="60%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("./assets/person.png")}></Image>
              </Center>
              </Box>


              In addition, certain abstract and highly-used concepts have been highlighted and defined using the framework's language, like schedules that govern the movement of individuals, and behaviours which are actions that are performed by every agent at every time-step.
              </Text>

              <Heading size="sm" m={2} p={2}>Schedules</Heading>

              <Text p={2} m={2} align='justify'>
              Every individual agent follows a schedule that is defined by the modeller. Such schedules specify agent locations across time. These schedules can be dynamic, can depend on the current state of the agent, and can be affected by interventions that are imposed. For example, one could define a different schedules for individuals, depending on whether they are above the age of 20 or below it. In the former case, these individuals could be considered as "employees", who go from home to work, while in the latter case, they could be "students" who go from home to school. These conditions can be made as general or specific as necessary: for example, one could define a schedule for all agents who happen to be symptomatic, which involves them spending more time at home rather than at work or school, thereby exploring the effect of "quarantining" symptomatic individuals. Thus, complicated network structures can be modelled by incorporating granularity into the schedules of different individuals. <br/><br/>


                <Box p={2} m={2} backgroundColor='white'>
                <Center>
                  <Image width="70%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("./assets/schedules.png")}>
                  </Image>
                  </Center>
                </Box>

            </Text>

            <Heading size="sm" m={2} p={2}>Behaviours</Heading>

            <Text p={2} m={2} align='justify'>
              A behaviour is an action that is performed by each agent at every time-step, and can be defined within the user-defined extension of the <tt>Agent</tt> class using the framework-defined <tt>addBehaviour</tt> function. These behaviours can be used to model (for example) whether or not an individual will go to a vaccination centre to get vaccinated, or alternatively to count the number of days that an individual has spent in the infected compartment. Such behaviours thus give the modeller the flexibility to perform a repetitive task per agent per time-step.
            </Text>

        </Container>
        </Center>
      </Route>

      <Route path="/synthetic_population">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <Center>
        <Container maxW='container.xl' m={3}>
          <Text m={2} p={2} align='justify'>
          <Center><Heading size="lg" p={2}>The Synthetic Population</Heading></Center><br/>
            At the core of BharatSim is a simulated synthetic population, generated using multiple data sources. The resulting population of individuals and households with demographic attributes resembles “reality”: in that if an identical survey were carried out with the synthetic population, it would bear results that statistically similar to the true population.
          </Text>
          <Text m={2} p={2} align='justify'>
           A synthetic population is a simplified individual-level representation of the actual population. This means that while every person is represented individually in it, not all of their attributes are included (for example, hair colour or shoe-size are deemed to be irrelevant for modelling epidemic spread, and are thus ignored, while the presence of commodities like diabetes would be included). As such, a synthetic population does not aim to be identical to the actual population, but instead attempts to match its various statistical distributions and correlations, thereby being sufficiently close to the true population to be used in modelling.<br></br>
           </Text>


           <Heading size="md" m={2} p={2}>An example</Heading>
           <Text m={2} p={2} align='justify'>

           In the table below, you can see an example of a section of a synthetic population. Each row represents an individual with a unique ID, as well as certain attributes. These attributes could be related to the individual themselves (like their gender, age, and height and so on), or their network (details pertaining to their homes, workplaces, and possibly schools). Additionally, the population could also contain information regarding the individual’s comorbidities (for example, whether they have diabetes or other preexisting conditions), if this is deemed relevant to the modelling exercise.
          </Text>

          <br></br>
                  <Box overflowX="auto" maxWidth="100%">
                <Table size='sm' maxW='500px'>
      <Thead>  <Tr>
          <Th>Agent_ID</Th>
          <Th>SexLabel</Th>
          <Th>Age</Th>
          <Th>Height</Th>
          <Th>Weight</Th>
          <Th>JobLabel</Th>
          <Th>StateLabel</Th>
          <Th>District</Th>
          <Th>AdminUnitName</Th>
          <Th>AdminUnitLatitude</Th>
          <Th>AdminUnitLongitude</Th>
          <Th>HHID</Th>
          <Th>H_Lat</Th>
          <Th>H_Lon</Th>
          <Th>WorkPlaceID</Th>
          <Th>W_Lat</Th>
          <Th>W_Lon</Th>
          <Th>school_id</Th>
          <Th>school_lat</Th>
          <Th>school_long</Th>
          <Th>public_place_id</Th>
          <Th>public_place_lat</Th>
          <Th>public_place_long</Th>
          <Th>essential_worker</Th>
          <Th>Adherence_to_Intervention</Th>
          <Th>M_High_BP</Th>
          <Th>M_Diabetes</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>99802077568</Td>
          <Td>Female</Td>
          <Td>76</Td>
          <Td>147.37</Td>
          <Td>49.05</Td>
          <Td>Construction</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Mohammadwadi-Kausar Baug</Td>
          <Td>18.47477</Td>
          <Td>73.89257</Td>
          <Td>99801684702</Td>
          <Td>18.46709</Td>
          <Td>73.90603</Td>
          <Td>2001000003467</Td>
          <Td>18.4679</Td>
          <Td>73.89859</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000062</Td>
          <Td>18.45035</Td>
          <Td>73.87068</Td>
          <Td>0</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99801380107</Td>
          <Td>Male</Td>
          <Td>37</Td>
          <Td>162.03</Td>
          <Td>57.94</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Nagpur Chawl-Phule Nagar</Td>
          <Td>18.55893</Td>
          <Td>73.87609</Td>
          <Td>99801248473</Td>
          <Td>18.55952</Td>
          <Td>73.87877</Td>
          <Td>2001000006630</Td>
          <Td>18.58283</Td>
          <Td>73.91661</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001044</Td>
          <Td>18.52699</Td>
          <Td>73.83451</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99802408169</Td>
          <Td>Male</Td>
          <Td>6</Td>
          <Td>111.21</Td>
          <Td>23.13</Td>
          <Td>Student</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Kharadi-Chandan Nagar</Td>
          <Td>18.56355</Td>
          <Td>73.93256</Td>
          <Td>99800525921</Td>
          <Td>18.54846</Td>
          <Td>73.94971</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>2001000002070</Td>
          <Td>18.55683</Td>
          <Td>73.94757</Td>
          <Td>3001000000274</Td>
          <Td>18.54904</Td>
          <Td>73.9491</Td>
          <Td>0</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800402683</Td>
          <Td>Female</Td>
          <Td>37</Td>
          <Td>152.65</Td>
          <Td>52.61</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Karve Nagar</Td>
          <Td>18.49149</Td>
          <Td>73.82173</Td>
          <Td>99800473441</Td>
          <Td>18.48539</Td>
          <Td>73.82129</Td>
          <Td>2001000006876</Td>
          <Td>18.53875</Td>
          <Td>73.92594</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000650</Td>
          <Td>18.48382</Td>
          <Td>73.79731</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800824202</Td>
          <Td>Female</Td>
          <Td>35</Td>
          <Td>150.92</Td>
          <Td>52.42</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Deccan Gymkhana-Model Colony</Td>
          <Td>18.51845</Td>
          <Td>73.83391</Td>
          <Td>99800895513</Td>
          <Td>18.52335</Td>
          <Td>73.85339</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000236</Td>
          <Td>18.54026</Td>
          <Td>73.91186</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99801178045</Td>
          <Td>Female</Td>
          <Td>50</Td>
          <Td>151.51</Td>
          <Td>50.1</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Shanivar Peth-Sadashiv Peth</Td>
          <Td>18.51944</Td>
          <Td>73.85194</Td>
          <Td>99801142021</Td>
          <Td>18.51388</Td>
          <Td>73.84935</Td>
          <Td>2001000000636</Td>
          <Td>18.50785</Td>
          <Td>73.84921</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001403</Td>
          <Td>18.51024</Td>
          <Td>73.84731</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99802883562</Td>
          <Td>Female</Td>
          <Td>14</Td>
          <Td>139.25</Td>
          <Td>37.81</Td>
          <Td>Student</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Viman Nagar-Somnath Nagar</Td>
          <Td>18.55818</Td>
          <Td>73.92165</Td>
          <Td>99801268501</Td>
          <Td>18.57398</Td>
          <Td>73.9285</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>2001000000159</Td>
          <Td>18.52152</Td>
          <Td>73.92834</Td>
          <Td>3001000000633</Td>
          <Td>18.56121</Td>
          <Td>73.93799</Td>
          <Td>0</Td>
          <Td>0.8</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800390824</Td>
          <Td>Male</Td>
          <Td>19</Td>
          <Td>157.71</Td>
          <Td>50.84</Td>
          <Td>Plantation lab</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Salisbury Park-Maharshi Nagar</Td>
          <Td>18.49162</Td>
          <Td>73.8661</Td>
          <Td>99800461238</Td>
          <Td>18.49814</Td>
          <Td>73.87331</Td>
          <Td>2001000011846</Td>
          <Td>18.49934</Td>
          <Td>73.8511</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000528</Td>
          <Td>18.46247</Td>
          <Td>73.85122</Td>
          <Td>0</Td>
          <Td>0.4</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800144374</Td>
          <Td>Female</Td>
          <Td>50</Td>
          <Td>152.6</Td>
          <Td>50.58</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Dhanakvadi-Ambegaon Pathar</Td>
          <Td>18.45878</Td>
          <Td>73.84264</Td>
          <Td>99800193269</Td>
          <Td>18.46661</Td>
          <Td>73.8561</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001414</Td>
          <Td>18.46532</Td>
          <Td>73.89147</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800944765</Td>
          <Td>Female</Td>
          <Td>45</Td>
          <Td>151.99</Td>
          <Td>50.99</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Kharadi-Chandan Nagar</Td>
          <Td>18.56355</Td>
          <Td>73.93256</Td>
          <Td>99800978186</Td>
          <Td>18.54808</Td>
          <Td>73.94093</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001402</Td>
          <Td>18.5684</Td>
          <Td>73.82062</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
      </Tbody>
      </Table>
      </Box>
          <br>
          </br>

          <Text m={2} p={2} align='justify'>
              All of these attributes are strongly correlated with each other and a good synthetic population will ideally be able reproduce the correlations that occur in the real world. However, this is a monumental task; real world data is complex, and often contains many artifacts that need to be addressed.
          </Text>

          <Heading size="md" m={2} p={2}>Generating the population</Heading>
          <Text m={2} p={2} align='justify'>
            The synthetic population is generated using statistical methods and machine learning algorithms which are flexible enough to generate data at various administrative levels, i.e., at the level of cities, districts, states, or even the entire country, depending on the level of granularity required by the modeller. The primary sources of data for the generation of such a population are datasets from the Census of India, the India Human Development Survey (IHDS), the National Sample Survey (NSS), the National Family Health Welfare Survey (NFHS), and the Gridded Population of the World (GPW). A number of other sources are also used to fine-tune and validate the above datasets.
            </Text>
            <Text m={2} p={2} align='justify'>

            However, it is not sufficient to merely maintain similar demographic statistics: one must simultaneously handle other connections within the population, like household and workplace contact networks, among other things. If not, we may end up with “families” composed entirely of toddlers, or workplaces with strange mixes of professions, to cite just a few possibilities. Furthermore, the geographical layouts of the households and workplaces must also be realistic.
            </Text>

            <Text m={2} p={2} align='justify'>

            Because different kinds of data respond well to different techniques, a hybrid process is used to scale up these datasets. First, the data is cleaned, removing absurdities such as negative weights. Then, we use a customized hybrid of Iterative Proportional Fitting (IPF), Iterative Proportional Updating (IPU), and a specialized variant of a neural network, called Conditional-Tabular Generative Adversarial Network (CTGAN), to generate new data.
            </Text>
            <Text m={2} p={2} align='justify'>

            <i>Iterative Proportional Fitting:</i> This can find a joint distribution that matches the marginals, while trying to stay as close to the sample distribution as possible.
            </Text>
            <Text m={2} p={2} align='justify'>

            <i>Iterative Proportional Updating:</i> This is a heuristic iterative approach which can simultaneously match or fit to multiple distributions (constraints)
            </Text>
            <Text m={2} p={2} align='justify'>

            <i>Conditional-Tabular Generative Adversarial Networks:</i> CTGAN (Xu et al., 2019) is a GAN-based method to model the tabular data distribution and sample rows from the distribution. A Generative Adversarial Network is composed of two "competing" neural networks, a generator and a discriminator. The goal of the generator is to generate realistic samples such that the discriminator is unable to differentiate between a real sample and a generated sample. In this zero-sum game, capabilities of both the networks are enhanced iteratively and the generator begins to generate samples which resemble the real samples.
            </Text>

            <Heading size="sm" m={2} p={2}>The population generation process</Heading>

            <Text m={2} p={2} align='justify'>
             Iterated proportional updating was used to generate a base population. Census data was then used for the marginal information about the population and the IHDS survey dataset for personal and household attributes. The base population consists of individual data and household data. Each household was assigned to an administrative unit within a district. Experiments were also run with CTGAN to generate a base population. The major advantage of IPU over CTGAN was that the capacity to match individual and household level characteristics while making sure that members of the household have a realistic age and gender joint distribution.<br/><br/>

            To assign job labels to individuals in the synthetic population, relevant data from IHDS is used. Individuals below the age of 18 are considered to be students in this population. Additionally, a subset of the population will also be home-bound consisting of unemployed individuals, home-maker, infants and children under the age 3 and elderly people over the retirement age. We use marginal data from the NSS survey to determine the percentage of adult males and females in a city who are home-bound. This gender based marginal value is used as the parameter for a Bernoulli distribution to draw a random independent sample to assign a home-bound label to each adult.<br/><br/>

            Each student in the population is assigned a school. Similarly, each working individual is assigned a workplace based upon his job label. A synthetic latitude and longitude pair is then created for each home, school and workplace in our dataset. To generate synthetic geolocation data, GADM grid population density data (“Global Administrative Areas”, 2012) is used. The grid points are then sampled (with replacement) from the subset, with each point weighed by the population density in that grid. We add independent uniform random noise to the longitudes and latitudes, and reject the samples which fall outside the geographical boundary. We follow this process to generate synthetic geolocation data for households, schools and workplaces.<br/><br/>

            To assign an individual a school, a sample is drawn from the list of schools within that geographical boundary, with each school weighed by the inverse of the euclidean distance (disregarding the curvature of Earth) between the individual’s home and all the schools. This weighting factor increases the probability of a school closer to an individual’s home getting assigned to her.<br/><br/>

            A similar technique is followed while assigning workplaces to adults, with a sample being drawn from a suitable subset of workplaces depending on the individual’s job type. There are other attributes that need to be addressed as well. Does an individual use public transport service? Is an individual an "essential worker"? Such ideas are particularly useful for many epidemiological studies, like the spread of COVID-19 in particular. Such factors are currently determined by the job title.
            </Text>

            <Heading size="sm" m={2} p={2}>Verifying the generated population</Heading>
            <Text m={2} p={2} align='justify'>
            To compare and verify the generated synthetic population with the real data, multiple metrics such as Statistical (CS-test, KS-test, Bhattacharya distance), Likelihood, and Machine Learning Efficacy Regression are used. For example, the Bhattacharya distance -- a distance measure to measure the statistical similarity between two samples in the same space -- is used to compare the various versions of synthetic population. The greater the overlap between two samples, the lower the Bhattacharya distance. As such, this metric can be used to measure similarity for the age-height and age-weight joint distributions.

            Critically, our techniques are designed to work seamlessly across data-scarce and data-rich areas; even if a particular area has error-prone or missing data, we can still generate a synthetic population, albeit of slightly poorer quality, but without affecting anything else.

          </Text>

        </Container>
        </Center>
        </ChakraProvider>
      </Route>

      <Route path="/viz_engine">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        </ChakraProvider>
        <Center>
        <Container maxW='container.xl'>
        <Center><Heading size="lg" m={2} p={2}>The Visualization Engine</Heading></Center>

            <Text m={2} p={2} align='justify'>
            Using the simulation engine, the modeller may define an output file containing, for example, the number of individuals in different disease states for every time step. The visualization engine can then read this output and create multiple dashboards with different types of graphs that can help in analyzing the results and in visualizing them.<br/><br/>
            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths, which can either be static, or which can change with time based on the data provided in the input CSV file.<br/><br/>

            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths, which can either be static, or which can change with time based on the data provided in the input CSV file, shown below.

            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="30%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("./assets/mumbai.gif")}></Image>
              </Center>
            </Box>
            </Text>

            <Heading size="md" m={2} p={2}>Features of the Visualization Engine</Heading>

            <Text m={2} p={2} align='justify'>

             The visualization engine provides a variety of different features:<br/><br/>


            <Heading size="s">Data Import: </Heading> The visualization engine can import data in ZIP, CSV, and GeoJSON formats. The user can add, delete, and link files from different dashboards and can also add columns with custom formulae.<br/><br/>

            <Heading size="s"> Charts: </Heading>The user can represent time-series data as a line-graph. Additionally, bar charts, histograms, and pie charts can be used to study aggregated data. Geographical information and data can also be visualized. Spatial variations in data can be visualized using either heatmaps or choropleths. Heatmaps visualize data in the form of ``hot'' or ``cold'' spots, with a warm-to-cool color scheme. Choropleth maps can also be used to visualize how quantities vary across a fixed geographic area like a district or state, while simultaneously showing the extent of variation within a region.<br/><br/>

            <Heading size='s'> Project & Dashboard management: </Heading> Users can create a Project which can have multiple individual dashboards for better analysis.<br/><br/>

            Users can add, edit, and delete projects and dashboards for better management. Dashboards are auto-saved to avoid data loss.
            Users can easily add, edit, duplicate, and delete widgets and charts in each dashboard. Dashboards can be duplicated to allow users to duplicate certain design choices and widget configurations. Each widget also allows the users to export the output either as raster or vector data using the PNG and SVG file formats respectively.

            </Text>

        </Container>
        </Center>
      </Route>

      <Route path="/publications">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
          {/*<Publications />*/}
            <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress...
            </div>
          {/* <Footer /> */}
          </ChakraProvider>
        </Route>

        <Route path="/">
          <Landing />


        </Route>
      </Switch>
    </Router>
  );
}
