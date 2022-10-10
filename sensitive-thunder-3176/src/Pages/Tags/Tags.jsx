import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TagCard from "./TagCard";
import { useDispatch, useSelector } from "react-redux";
import { getTags, postTags } from "../../Redux/AppReducer/action";
const Tags = () => {
  const tags = useSelector((state) => state.AppReducer.tags);

  const [tag, setTag] = useState("");
  const [create, setCreate] = useState(false);
  // console.log(tags)

  const dispatch = useDispatch();
  const handleAddTag = () => {
    if (tag.length > 0) {
      const payload = {
        name: tag,
      };
      dispatch(postTags(payload));
      dispatch(getTags());
    }
  };
  useEffect(() => {
    dispatch(getTags());
  }, []);
  const inputCreateTag = () => {
    setCreate(true);
  };
  const cancelCreateTag = () => {
    setCreate(false);
  };
  return (
    <Box ml={10}>
      <Box w={"500px"}>
        <Stack my={8}>
          <Button
            color={"white"}
            bgColor={"green.400"}
            _hover={"green"}
            w={40}
            ml={300}
            onClick={inputCreateTag}
          >
            + Add tag list
          </Button>
          <Flex display={create ? "block" : "none"}>
            <Input
              m={2}
              w={"40%"}
              placeholder="Enter Tag Name"
              value={tag.name}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />
            <Button
              color={"white"}
              bgColor={"green.400"}
              _hover={"green"}
              w={"20%"}
              mx={2}
              onClick={handleAddTag}
            >
              Create
            </Button>
            <Button
              color={"white"}
              bgColor={"gray.400"}
              _hover={"green"}
              w={"20%"}
              mx={2}
              onClick={cancelCreateTag}
            >
              Cancel
            </Button>
          </Flex>
          <Text>
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          </Text>
        </Stack>
        {tags.length > 0 &&
          tags.map((tag) => (
            <TagCard id={tag.id} tagName={tag.name} key={tag.id} />
          ))}

        <hr />
        <Button my={10} color={"white"} bgColor={"green.400"} _hover={"green"}>
          Save settings
        </Button>
      </Box>
    </Box>
  );
};

export { Tags };
