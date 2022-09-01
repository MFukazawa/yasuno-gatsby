import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon, ChevronRightIcon } from "@chakra-ui/icons"

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="hamburger menu"
        variant="outline"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>メニュー</DrawerHeader>

          <DrawerBody>
            <List>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                <GatsbyLink to="/profile">プロフィール</GatsbyLink>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavDrawer
