import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, ButtonGroup } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const MusicPage = () => (
  <Layout>
    <Seo title="ミュージック" />
    <p>this is the music page</p>

  </Layout>
)

export default MusicPage
