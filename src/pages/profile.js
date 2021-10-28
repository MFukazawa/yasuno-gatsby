import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, ButtonGroup } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProfilePage = () => (
  <Layout>
    <Seo title="プロフィール" />
    <p>this is the profile page</p>
  </Layout>
)

export default ProfilePage
