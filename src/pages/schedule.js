import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, ButtonGroup } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SchedulePage = () => (
  <Layout>
    <Seo title="スケジュール" />
    <p>this is the schedule page</p>
  </Layout>
)

export default SchedulePage
