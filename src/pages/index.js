import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import { Link } from 'gatsby'
import { container, heading1, headingtop, wedop, newp, picturedo, span2, icons, navLinks, nftcaption } from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <div>
      <Layout pageTitle="Homepage"></Layout>
      <div className={container}>
        <article className={span2}><h1 className={headingtop}>What We Do</h1><p className={wedop}><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum nec eros nec malesuada. Ut convallis facilisis nulla eget pharetra. Duis finibus mi eu dui bibendum, id ultrices ante elementum. Mauris viverra erat et dui fringilla, id posuere nisl venenatis. Ut venenatis vulputate molestie. Morbi gravida quis ipsum nec mattis. Donec vel ligula congue, commodo leo et, sodales ante. Nam nec porttitor urna. Aliquam eget lorem ut tortor consectetur laoreet at vel diam. Praesent ligula lorem, vestibulum elementum massa nec, rhoncus tristique mi. Donec dignissim elit fringilla nibh placerat consequat et fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum malesuada nibh ut augue consequat fermentum. Fusce ullamcorper dolor nec accumsan aliquam. Sed in dictum mauris.</strong></p></article>
        <article className={picturedo}><StaticImage src="../images/placeholder.jpg"></StaticImage><figcaption className={nftcaption}>NFT Number: #11111 Price: $$$$</figcaption></article>
        <article className={picturedo}><StaticImage src="../images/placeholder.jpg"></StaticImage><figcaption className={nftcaption}>NFT Number: #11111 Price: $$$$</figcaption></article>
        <article className={span2}>
          <h1 className={heading1}>Find us at</h1>
          <ul className={navLinks}>
            <li><Link to="https://www.instagram.com/collectives_bw_nfts/"><StaticImage src="../images/icon-inst.png" alt="instagram icon" className={icons}></StaticImage></Link></li>
            <li><Link to="https://twitter.com/Collectives_BW"><StaticImage src="../images/icon-twtr.png" alt="twitter icon" className={icons}></StaticImage></Link></li>
            <li><Link to="https://opensea.io/0xbBE0cB8E08E123A1e64210Ebc8257605B9e46387"><StaticImage src="../images/icon-ops.png" alt="opensea icon" className={icons}></StaticImage></Link></li>
          </ul>
        </article>
      </div>
      <div>
        <h1 className={heading1}>What's New</h1>
        <p className={newp}>PLACEHOLDER FOR NOW,<br></br> CHECK AGAIN AFTER COLLECTION LAUNCH</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage