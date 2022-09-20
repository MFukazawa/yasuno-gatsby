import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, ButtonGroup } from "@chakra-ui/react"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <StaticImage
      src="../images/yasupeko.png"
      width={1024}
      quality={95}
      formats={["auto", "png"]}
      alt="Pekorin-pokochin"
      style={{ marginBottom: `1.45rem` }}
    />
  </>
)

export default IndexPage
