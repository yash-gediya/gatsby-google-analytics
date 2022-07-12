import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const clickHandle = (e) => {
      e.preventDefault()
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "buttonClick",
        category: "Custom Button",
        action: "click",
        lable: "Google Analytics Custom Button",
      })
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <button onClick={clickHandle}>Google initialize</button>
        GoogleAnalytics <br />
        <Link to={"one"}>One</Link>
        <br />
        <Link to={"two"}>Two</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
