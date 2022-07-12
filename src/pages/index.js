import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const clickHandle = () => {
    dataLayer.push({ event: "login" })
    // window.gtag("Buttonevent", "Buttonclick", {
    //   event_category: "category",
    //   event_label: "label",
    //   value: "value",
    // })
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
