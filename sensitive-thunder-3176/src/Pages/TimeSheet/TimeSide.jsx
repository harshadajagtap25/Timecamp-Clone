import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiSettings, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { QuestionOutlineIcon, SettingsIcon, TimeIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartPie,
  FaLaptop,
  FaTags,
  FaBriefcase,
  FaFileInvoiceDollar,
  FaUserPlus,
  FaQuestionCircle,
  FaUserFriends,
  FaFolderOpen,
  FaCheckSquare,
  FaClipboard,
  FaClock,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Getlogout } from "../../Redux/AuthReducer/Action";

const LinkItems = [
  { name: "Timesheet", icon: FaClock, path: "timesheet" },
  { name: "Dashboard", icon: FaTachometerAlt, path: "dashboard" },
  { name: "Reports", icon: FaChartPie, path: "reports" },
  { name: "Computer Time", icon: FaLaptop, path: "computertime" },
  { name: "Projects", icon: FaFolderOpen, path: "projects" },
  { name: "Tags", icon: FaTags, path: "tags" },
  { name: "Users", icon: FaUserFriends, path: "users" },
  { name: "Attendance", icon: FaCheckSquare, path: "attendance" },
  { name: "Timesheet Approvals", icon: FaClipboard, path: "approvals" },
  { name: "Clients", icon: FaBriefcase, path: "clients" },
  { name: "Invoices", icon: FaFileInvoiceDollar, path: "invoices" },
];

export default function TimeSide({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      {/* {LinkItems.map((i)=>( */}
      <MobileNav onOpen={onOpen} />
      {/* ))} */}

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "14%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          h={60}
          w={"80%"}
          src={
            "https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"
          }
          onClick={handleclick}
        ></Image>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} p={link.path} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, p, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bgColor: "#f1f1f1",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "black",
          }}
          as={icon}
        />
      )}
      <Link to={`/timesheet/${p}`}>{children}</Link>
    </Flex>
  );
};

const MobileNav = ({ onOpen, name, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(Getlogout());
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Box mr={"1230px"}>
        <Text fontWeight={500} fontSize={18}>
          {/* TODO  */}
        </Text>
      </Box>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<SettingsIcon />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FaQuestionCircle />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FaUserPlus />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />

                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Login Mail Id</MenuItem>
              <MenuDivider />
              <MenuItem>Download App </MenuItem>
              <MenuItem>Browser Plugins</MenuItem>
              <MenuDivider />
              <MenuItem onClick={()=>handleLogout()}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
