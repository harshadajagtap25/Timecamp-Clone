import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Review = () => {
  return (
    <Box
      border={"1px solid #fafffd"}
      paddingBottom={"0px"}
      w={"70%"}
      background={"#fafffd"}
      h={"auto"}
      margin={"auto"}
    >
      <Text mt={"60px"} mb={"100px"} fontSize="40px" fontWeight="700">
        Reviews
      </Text>

      <Text
        mt={"60px"}
        mb={"100px"}
        fontSize="40px"
        fontWeight="700"
        justifyItems="center"
      >
        Time tracking software for businesses across all industries and sizes
      </Text>
      <HStack w={"52%"} gap={"60px"}>
        <Box
          boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)"
          h={"400px"}
          w={"100%"}
          p={"20px"}
          backgroundColor={"white"}
          borderRadius={"13px"}
        >
          <Text
            textAlign={"left"}
            mt={"30px"}
            fontSize="18px"
            fontWeight="700"
            mb={"20px"}
          >
            Improving your records every day
          </Text>
          <Text textAlign={"left"} fontSize="18px" color={"#1b1b20"}>
            "Being able to measure the time each task takes or each activity
            that takes place during the day, brings control to your time
          </Text>
          <Text
            mt={"40px"}
            fontWeight={"500"}
            fontW={"500"}
            textAlign={"left"}
            ml={"70px"}
          >
            Felipe
          </Text>
        </Box>
        <Box
          boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)"
          h={"590px"}
          w={"33%"}
          p={"20px"}
          backgroundColor={"white"}
          borderRadius={"13px"}
        >
          <Text
            textAlign={"left"}
            mt={"30px"}
            fontSize="18px"
            fontWeight="700"
            mb={"20px"}
          >
            A huge asset for our remote business{" "}
          </Text>
          <Text textAlign={"left"} fontSize="18px" color={"#1b1b20"}>
            "TimeCamp was a recent implementation for us after using a different
            time tracking system. It is a clean easy to use software with barely
            any learning curve. It has everything we need, min by min tracking,
            notes, projects, tasks, multiple reports, etc. It has been a huge
            asset to our remote business"
          </Text>
          <Text mt={"40px"} fontWeight={"500"} textAlign={"left"} ml={"70px"}>
            Michelle
          </Text>
          <Text textAlign={"left"} ml={"70px"}>
            Recruiting Director
          </Text>
        </Box>
        <Box
          boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)"
          h={"590px"}
          w={"33%"}
          p={"20px"}
          backgroundColor={"white"}
          borderRadius={"13px"}
        >
          <Text
            textAlign={"left"}
            mt={"30px"}
            fontSize="18px"
            fontWeight="700"
            mb={"20px"}
          >
            We can distribute workload in a fair basis{" "}
          </Text>
          <Text textAlign={"left"} fontSize="18px" color={"#1b1b20"}>
            "With TimeCamp we are capable to understand exactly which part of
            the project require more time so we can find a solution and also the
            saturation of the team so we can distribute workload in a fair
            basis."
          </Text>
          <Text
            mt={"40px"}
            fontWeight={"500"}
            fontW={"500"}
            textAlign={"left"}
            ml={"70px"}
          >
            Capterra user
          </Text>
          <Text textAlign={"left"} ml={"70px"}>
            Freelancer
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Review;
