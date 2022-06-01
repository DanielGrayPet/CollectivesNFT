import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import {container, placeholder} from "../components/gallery.module.css"
import { StaticImage } from "gatsby-plugin-image"

const gallerypage = () => {
  return(
    <div>
      <Layout pageTitle="Gallery"></Layout>
      <div className={container}>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
        <article className={placeholder}><StaticImage src="../images/placeholder.jpg" alt="placeholder1"></StaticImage></article>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default gallerypage