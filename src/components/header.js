import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react"
import Drawer from "./drawer"

const Header = ({ siteTitle }) => (
  <Box as={"header"}>
    <nav>
      <Flex align={"center"} py={3} px={5}>
        <Box>
          <Heading m={0}>
            <Link to="/">{siteTitle}</Link>
          </Heading>
        </Box>
        <Spacer />
        <Drawer />
        {/* <Box>
          <Link to="/profile">プロフィール</Link>
        </Box>
        <Box ml={5}>
          {" "}
          <Link to="/music">ミュージック</Link>
        </Box>
        <Box ml={5}>
          {" "}
          <Link to="/schedule">スケジュール</Link>
        </Box> */}
      </Flex>
    </nav>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
