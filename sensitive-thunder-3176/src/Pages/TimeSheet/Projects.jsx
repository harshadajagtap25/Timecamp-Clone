import "../../Styles/Home/pro.css";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import TimeSide from "./TimeSide";

const Projects = () => {
  const [text, setText] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const enterkey = (e) => {
    if (Number(e.keyCode) === 13) {
      setText(e.target.value);
      setdata(e);
    }
  };
  const setdata = (e) => {
    setTodo([...todo, { title: e.target.value, id: Date.now(), subtask: "" }]);
  };
  React.useEffect(() => {});

  return (
    <div>
      <TimeSide />
      <Box mt={-785} ml={265} bgColor={"#f1f1f1"} h={"80vh"} w={"86%"}>
        <Box mt={-785} bgColor={"white"} h={"10vh"} w={"100%"}>
          {/*TODO:  import Your Component here */}
        </Box>
        <div style={{ width: "100%", height: "150px" }}>
          <h1 style={{ fontSize: "20px" }}>Enter Project Detail</h1>
          <Input
            placeholder="Select task and project"
            h={"60px"}
            w={"30%"}
            variant="outline"
            border={"1px solid grey"}
            _hover={{ border: "1px solid gray" }}
            onKeyUp={enterkey}
          ></Input>
        </div>

        <div
          style={{
            width: "100%",
            height: "600px",
          }}
        >
          {todo?.map((e, index) => (
            <div
              style={{
                width: "50%",
                heigth: "100px",
              }}
              key={e.id}
              className="project_div"
            >
              <div style={{ textAlign: "center" }}>
                <Text
                  style={{
                    fontFamily: "sans-serif,popins",
                    fontWeight: "500",
                  }}
                  as="b"
                  fontSize="30px"
                >
                  Project Name: {e.title}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Projects;
