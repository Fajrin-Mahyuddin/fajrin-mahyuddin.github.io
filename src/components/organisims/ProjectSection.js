import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  keyframes,
} from "@chakra-ui/react";
import project_one from "assets/images/project-1.png";
import project_two from "assets/images/project-2.png";
import project_three from "assets/images/project-3.png";
import { GitIcon, ContainerMaxWidth, LivePreviewIcon } from "components";

const rotateAnim = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const projects = [
  {
    img: project_one,
    name: "Landing Page",
    desc: "This landing page was built using native JavaScript and CSS. It features smooth animations like sliding cards, smooth scrolling, and is very lightweight. The shadow color enhances its appearance even more.",
    color: "#F26440",
    liveUrl: "https://landing-page-fajrin.netlify.app",
    codeRepo: "https://github.com/Fajrin-Mahyuddin/landing-page-lasles-vpn",
  },
  {
    img: project_two,
    name: "Coffe and Blog",
    desc: "This website serves as an example of a marketplace and is built using NextJS. The content focuses on selling coffee makers and includes some blog posts about coffee. Additionally, it features news content retrieved from another API website. The technologies used include Firebase, GraphQL, and Sass. Please note that this website is not yet completed and is currently under development.",
    color: "#131E51",
    liveUrl: "https://coffee-app-ssr.vercel.app",
    codeRepo: "https://github.com/Fajrin-Mahyuddin/coffee-app-ssr",
  },
  {
    img: project_three,
    name: "Official Website",
    desc: "This official website served as my senior high school project, providing various information about profiles, registration for new students, blogs, student activities, and more. I used Laravel, InertiaJS, and ReactJS to build this website. Overcoming numerous challenges, I successfully completed it, and the process significantly contributed to enhancing both my experience and skills.",
    color: "#A1CE3F",
    liveUrl: "#",
    codeRepo: "https://github.com/Fajrin-Mahyuddin/smkn2-majene",
  },
];

const ProjectSeciton = () => {
  return (
    <Box as="section" id="project" minH={["auto", "auto", "80vh"]}>
      <ContainerMaxWidth>
        <Flex py="3%" gap={12} flexDir="column">
          <Box textAlign="center">
            <Heading>Projects</Heading>
            <Text>Explore all projects</Text>
          </Box>
          <Box
            gap={14}
            py="20px"
            flexDir={["", "", "column"]}
            overflowX={["auto", "auto", "hidden"]}
            whiteSpace={["nowrap", "nowrap", "initial"]}
            display={["inline-block", "inline-block", "flex"]}
            sx={{
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "10px",
                backgroundColor: "grey",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                backgroundColor: "#0B2A3B",
              },
            }}
          >
            {projects.map((item, i) => {
              return (
                <Box
                  key={i}
                  gap={10}
                  role="group"
                  pos="relative"
                  overflow="hidden"
                  width={["300px", "300px", "100%"]}
                  marginRight={["10px", "10px", "0"]}
                  flexDir={i % 2 ? "row-reverse" : "row"}
                  display={["inline-block", "inline-block", "flex"]}
                >
                  <Box
                    maxW="500px"
                    overflow="hidden"
                    width={["100%", "100%", "50%"]}
                    borderRadius={["15px", "15px", "20px"]}
                    padding="6px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{
                      "::after": {
                        width: "45%",
                        animation: `${rotateAnim} 3s linear infinite`,
                      },
                    }}
                    pos="relative"
                    _after={{
                      content: `""`,
                      transition: "width .3s",
                      position: "absolute",
                      height: "150%",
                      width: "0%",
                      background: `linear-gradient(90deg, ${item.color} 24%, ${item.color} 49%)`,
                    }}
                  >
                    <Image
                      borderRadius={["15px", "15px", "20px"]}
                      zIndex={2}
                      pos="relative"
                      cursor="pointer"
                      src={item.img}
                      alt="item scroll"
                      style={{
                        WebkitTapHighlightColor: "transparent",
                      }}
                    />
                  </Box>
                  <Flex
                    gap={6}
                    zIndex={4}
                    inset="6px"
                    flexDir="column"
                    whiteSpace="wrap"
                    userSelect="none"
                    transition="all .3s"
                    p={["10px", "10px", "0"]}
                    width={["auto", "auto", "100%"]}
                    borderRadius={["15px", "15px", "0"]}
                    position={["absolute", "absolute", "static"]}
                    bgColor={["#f8f7f1", "#f8f7f1", "transparent"]}
                    justifyContent={["center", "center", "flex-start"]}
                    alignItems={["center", "center", "flex-start"]}
                    transform={[
                      "translateY(101%)",
                      "translateY(101%)",
                      "translateY(0)",
                    ]}
                    _groupHover={{
                      transform: "translateY(0)",
                    }}
                  >
                    <Box>
                      <Heading
                        fontSize={["1.3rem", "1.3rem", "1.5rem"]}
                        mb="10px"
                      >
                        {item.name}
                      </Heading>
                      <Text
                        fontSize={[".9rem", ".9rem", "initial"]}
                        textOverflow="ellipsis"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </Box>
                    <HStack>
                      <Button
                        as="a"
                        color="#fff"
                        fontSize="18px"
                        fontWeight="400"
                        bgColor="#F26440"
                        href={item.codeRepo}
                        target="_blank"
                        // minW="140px"
                        _hover={{}}
                        _active={{}}
                        leftIcon={
                          <GitIcon
                            boxSize="7"
                            bgIcon="#fff"
                            colorIcon="#f26440"
                          />
                        }
                      >
                        Git
                      </Button>
                      <Button
                        as="a"
                        target="_blank"
                        href={item.liveUrl}
                        color="#fff"
                        fontSize="18px"
                        fontWeight="400"
                        bgColor="#E6AB35"
                        _hover={{}}
                        _active={{}}
                        leftIcon={<LivePreviewIcon bgIcon="#fff" boxSize="5" />}
                      >
                        Live preview
                      </Button>
                    </HStack>
                  </Flex>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default ProjectSeciton;
