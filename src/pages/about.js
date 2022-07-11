import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import {
  container,
  aboutbody,
  abouthead,
  subhead,
  imgcirc,
  mainwrap,
} from "../components/about.module.css";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About"></Layout>
      <div className={container}>
        <article className={mainwrap}>
          <StaticImage
            src="../images/letsgo.png"
            className={imgcirc}
          ></StaticImage>
          <h1 className={abouthead}>Ariel Bagaev</h1>
          <h2 className={subhead}>Marketing Team Lead</h2>
          <p className={aboutbody}>
            Daniel ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis
            turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh
            nunc molestie ligula, id condimentum nunc turpis in purus. Duis
            ultrices pellentesque magna eget bibendum. Aliquam eget lectus
            vehicula, viverra tortor et, tempor augue. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi.
            Nam varius ornare nisl nec maximus.
          </p>
        </article>
        <article className={mainwrap}>
          <StaticImage
            src="../images/letsgo.png"
            className={imgcirc}
          ></StaticImage>
          <h1 className={abouthead}>Simon Wasser</h1>
          <h2 className={subhead}>THE Artist</h2>
          <p className={aboutbody}>
            Daniel ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis
            turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh
            nunc molestie ligula, id condimentum nunc turpis in purus. Duis
            ultrices pellentesque magna eget bibendum. Aliquam eget lectus
            vehicula, viverra tortor et, tempor augue. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi.
            Nam varius ornare nisl nec maximus.
          </p>
        </article>
        <article className={mainwrap}>
          <StaticImage
            src="../images/letsgo.png"
            className={imgcirc}
          ></StaticImage>
          <h1 className={abouthead}>Daniel Gray</h1>
          <h2 className={subhead}>Project Manager</h2>
          <p className={aboutbody}>
            Daniel ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo et metus sed tincidunt. Nunc varius felis urna, a sagittis
            turpis convallis ut. Sed pharetra, lectus ut rhoncus faucibus, nibh
            nunc molestie ligula, id condimentum nunc turpis in purus. Duis
            ultrices pellentesque magna eget bibendum. Aliquam eget lectus
            vehicula, viverra tortor et, tempor augue. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed leo nisi, aliquet non eros eu, lacinia pharetra mi.
            Nam varius ornare nisl nec maximus.
          </p>
        </article>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
