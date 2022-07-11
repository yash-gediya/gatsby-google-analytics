import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ReactGA from "react-ga4"


const IndexPage = () => {

  const clickHandle = () => {
    ReactGA.initialize("G-97NGVQTB02")
  }

  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: location.pathname })
  // }, [location])
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
