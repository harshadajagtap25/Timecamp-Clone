import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { deleteTags, getTags } from "../../Redux/AppReducer/action";

const TagCard = ({ tagName, key, id }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.AppReducer.tags);

  const handleTagDelete = (id) => {
    dispatch(deleteTags(id)).then((r) => dispatch(getTags()));
  };

  return (
    <Box key={key} m={4} p={4} rounded={8} bgColor={"gray.100"}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"semibold"} color={"grey"} fontSize={20}>
          {tagName}
        </Text>
        <ButtonGroup>
          <Button
            border={"2px solid"}
            borderColor={"#b7b8b8"}
            _hover={"grey"}
            bgColor={"white"}
          >
            <GrAdd />
          </Button>
          <Button
            border={"2px solid"}
            borderColor={"#b7b8b8"}
            _hover={"grey"}
            bgColor={"white"}
            onClick={() => handleTagDelete(id)}
          >
            <AiOutlineDelete />
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default TagCard;
