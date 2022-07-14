import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const clickHandle = () => {
    window.gtag("event", "click", { page_path: window.location.pathname })
  }


  return (
    <Layout>
      <Seo title="Home" />
      <div>
        {process.env.APP_TITLE}
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
