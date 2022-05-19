import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import {container, titlearticle, headingmain, aboutbody, abouthead, subhead, imgcirc, mainwrap} from "../components/about.module.css"
import { StaticImage } from "gatsby-plugin-image"

const aboutpage = () => {
  return(
    <body>
      <Layout pageTitle="About"></Layout>
      <div className={container}>
        <article className={titlearticle}><h1 className={headingmain}>Who We Are</h1></article>
        <article><StaticImage src="../images/placeholder-round.png" alt="Ariel" className={imgcirc}></StaticImage></article>
        <article><StaticImage src="../images/placeholder-round.png" alt="Ariel" className={imgcirc}></StaticImage></article>
        <article><StaticImage src="../images/placeholder-round.png" alt="Ariel" className={imgcirc}></StaticImage></article>
        <article className={mainwrap}><h1 className={abouthead}>Ariel Bagaev</h1><h2 className={subhead}>Marketing Team Lead</h2><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
        <article className={mainwrap}><h1 className={abouthead}>Simon Wasser</h1><h2 className={subhead}>THE Artist</h2><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
        <article className={mainwrap}><h1 className={abouthead}>Daniel Gray</h1><h2 className={subhead}>Project Manager</h2><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
      </div>
      <Footer></Footer>
    </body>
  )
}

export default aboutpage