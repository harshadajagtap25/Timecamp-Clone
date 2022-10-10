import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import a from "../../Styles/Home/footerfaq.module.css";
const FooterFaq = () => {
  return (
    <div className={a.footer_container}>
      <h1>FAQ</h1>
      <div className={a.footer_innner}>
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem p={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box ml={5} flex="1" textAlign="left">
                      <Text fontSize={18} fontWeight={600}>
                        What is Time Tracker
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                    {" "}
                    A time tracker is computer software or a web app that allows
                    teams, managers, and freelancers to measure time spent on
                    tasks and projects. It is used in many industries (law
                    firms, accounting, creative agencies, IT teams) for settling
                    up with hourly workers and billing clients for work. You can
                    integrate a time tracker with third-party tools for project
                    management, accounting, customer service, to-do lists, and
                    many more. Speaking shortly, a time tracker helps you
                    understand which practices in your business lead to time
                    waste. With this knowledge, you can reduce bad practices and
                    optimize workflow.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem p={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box ml={5} flex="1" textAlign="left">
                      <Text fontSize={18} fontWeight={600}>
                        Why use Time Tracker
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                    There are many reasons to use time tracking software. Here
                    are the main use cases for a time tracker: Tracking billable
                    hours: helps freelancers and employees who are paid on an
                    hourly basis measure time spent on work with accuracy up to
                    every second. Improving productivity: employees who struggle
                    with poor time management and distractions can work on their
                    efficiency, understand how they work, and what takes most of
                    their time. Timesheet management: one of the most common
                    features of time tracker is a timesheet – a digital version
                    of a paper timesheet. With a time tracker, your team can
                    have it filled out automatically. Work automation: time
                    tracker helps to save time on administrative and repetitive
                    tasks, better allocate resources, cut costs, and smoothen
                    teams’ workflow.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem p={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box ml={5} flex="1" textAlign="left">
                      <Text fontSize={18} fontWeight={600}>
                        What are the Benifit of Time Tracking
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                    Here are all the benefits of using time tracking software in
                    a nutshell. Increased productivity Accurate timesheets
                    Real-time updates on projects status Easy attendance
                    management Workflow automation
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem p={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box ml={5} flex="1" textAlign="left">
                      <Text fontSize={18} fontWeight={600}>
                        How To bill Client Hourly and Workly
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                    With TimeCamp, you can set up billing rates for your team
                    members, projects, and clients. Have the time tracker record
                    billable time and easily turn timesheet data into invoices,
                    adjust the tax rates for your country and profession. And
                    then, simply export the document or send it straight to your
                    clients.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem p={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box ml={5} flex="1" textAlign="left">
                      <Text fontSize={18} fontWeight={600}>
                        How To save Time On Time Sheet
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                    There is nothing better than having your timesheet filled
                    out automatically! TimeCamp’s non-intrusive desktop app
                    works in the background so you and your team can focus on
                    what really matters, while the time tracker collects all the
                    data for timesheets. Edit your time logs any time or add
                    time manually for even more accuracy. Approve your team’s
                    daily or weekly timesheets with one click without effort.
                    Quick, easy, and painless timesheet management!
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FooterFaq;
