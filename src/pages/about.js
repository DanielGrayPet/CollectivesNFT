import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import {container, titlearticle, heading1, circle, abouthead, aboutbody, imgcirc} from "../components/about.module.css"
import { StaticImage } from "gatsby-plugin-image"

const aboutpage = () => {
  return(
    <body>
      <Layout pageTitle="About"></Layout>
      <div className={container}>
        <article className={titlearticle}><h1 className={heading1}>Who We Are</h1></article>
        <article className={circle}><h1>Ariel Bagaev</h1><StaticImage src="../images/image1.jpg" alt="Ariel" className={imgcirc}></StaticImage><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
        <article className={circle}><h1>Simon Wasser</h1><StaticImage src="../images/image2.jpg" alt="Simon" className={imgcirc}></StaticImage><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
        <article className={circle}><h1>Daniel Gray</h1><StaticImage src="../images/image3.jpg" alt="Gray" className={imgcirc}></StaticImage><body className={aboutbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh nunc molestie ligula, id condimentum nunc turpis in purus. Duis ultrices pellentesque magna eget bibendum. Aliquam eget lectus vehicula, viverra tortor et, tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi. Nam varius ornare nisl nec maximus.</body></article>
      </div>
      <Footer></Footer>
    </body>
  )
}

export default aboutpage