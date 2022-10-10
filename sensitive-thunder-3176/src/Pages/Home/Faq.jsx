import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      <AccordionItem p={2}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <Box backgroundColor={"teal"} />
                ) : (
                  <Box backgroundColor={"red"} />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={600}>
                    Check Log Time on handy time Sheet
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                Enjoy the transparency - check your employees time records with
                more detailed information on the handy timesheet or a graphical,
                calendar-like view.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem p={2}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? <Box textDecoration={"underline"} /> : <Box />}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={600}>
                    Try our easy-to-use desktop app
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                TimeCamp desktop app is reliable and easy to use time tracking
                tool that works in the background and seamlessly fills the
                timesheets. All you have to do is to focus on your work!
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem p={2}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <Box backgroundColor={"teal"} />
                ) : (
                  <Box backgroundColor={"red"} />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Try Your Activity Automatically
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                Fill your timesheets with the daily activities and time entries
                with just one click. Easy time tracking app is here!
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
