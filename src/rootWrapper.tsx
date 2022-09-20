import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import Layout from "./components/layout"
import "@fontsource/shippori-mincho/400.css"
import "@fontsource/shippori-mincho/500.css"
import "@fontsource/shippori-mincho/600.css"
import "@fontsource/shippori-mincho/700.css"
import "@fontsource/shippori-mincho/800.css"

const theme = extendTheme({
  fonts: {
    heading: `'Shippori Mincho', sans-serif`,
    body: `'Shippori Mincho', sans-serif`,
  },
})

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
