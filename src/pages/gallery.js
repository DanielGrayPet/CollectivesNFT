import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import {container, placeholder, body1} from "../components/gallery.module.css"

const gallerypage = () => {
  return(
    <body>
      <Layout pageTitle="Gallery"></Layout>
      <div className={container}>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
        <article className={placeholder}><body className={body1}>This is a Placeholder</body></article>
      </div>
      <Footer></Footer>
    </body>
  )
}

export default gallerypage