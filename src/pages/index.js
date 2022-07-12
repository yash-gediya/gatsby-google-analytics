import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const clickHandle = () => {
    window.gtag("event", "myEventName", {
      event_category: "something_something",
      event_label: "test",
      value: someParam,
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
