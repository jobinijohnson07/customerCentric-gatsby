import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/Carousel/carousel";
// import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer"

const IndexPage = () => (
  // <Layout>
  //   <Seo title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["auto", "webp", "avif"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  <div>
    <Carousel />
    {/* <Contact /> */}
    <Footer />
  </div>
    // <p>
    //   <Link to="/page-2/">Home</Link> <br />
    //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    //   <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
    //   <Link to="/using-dsg">Go to "Using DSG"</Link>
    // </p>
  // </Layout>
)

export default IndexPage