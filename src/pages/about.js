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
  instsmall,
  cred,
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
            <i>
              "I always believed that projects that drive you to better yourself
              are the most deserving of your time"
            </i>
            <br></br>
            <br></br> Ariel, our marketing mastermind, is not your typical
            salesperson. A unique trait of his personality, the ability to
            connect with those around him on a deeper, emotional level, grants
            him an edge in all matters related to marketing. Ariel started
            forming the idea of making NFT's after Daniel loosely explained to
            him what they are. After realising his lack of skill at making art,
            contrary to his skills in marketing, he contacted an old friend,
            Simon; Together they named the project.
          </p>
          <a
            href="https://www.instagram.com/ariel__ba/"
            target="_blank"
            rel="noopener noreferrer"
            className={cred}
          >
            <StaticImage
              src="../images/icon-inst.png"
              className={instsmall}
            ></StaticImage>
            <h3>Ariel</h3>
          </a>
        </article>
        <article className={mainwrap}>
          <StaticImage
            src="../images/letsgo.png"
            className={imgcirc}
          ></StaticImage>
          <h1 className={abouthead}>Simon Wasser</h1>
          <h2 className={subhead}>THE Artist</h2>
          <p className={aboutbody}>
            <i>
              "I've always been fascinated by the sea; that was my main focus
              when I first got into oil painting"
            </i>{" "}
            <br></br>
            <br></br> Simon, our artist, driven by his passion for seascape art,
            is projecting his love and fascination of the sea onto canvas using
            oil paint and simple brushes; These drawings are then converted to
            digital format and create a most unique sight. Changing the meaning
            of NFT's by his motivation to create art, rather than appeal to
            popularity, is a main principal in Simon's work. This project has
            been in the works for quite some time and the reason justifies the
            delay: Simon wants to make art.
          </p>
          <a
            href="https://www.instagram.com/sioma_wa99/"
            target="_blank"
            rel="noopener noreferrer"
            className={cred}
          >
            <StaticImage
              src="../images/icon-inst.png"
              className={instsmall}
            ></StaticImage>
            <h3>Simon</h3>
          </a>
        </article>
        <article className={mainwrap}>
          <StaticImage
            src="../images/gray-profile.jpg"
            className={imgcirc}
            placeholder="dominantColor"
          ></StaticImage>
          <h1 className={abouthead}>Daniel Gray</h1>
          <h2 className={subhead}>Project Manager</h2>
          <p className={aboutbody}>
            <i>"I have no idea how to do this, but I'll find out."</i>
            <br></br>
            <br></br>
            Daniel, our project manager, is always keeping the project intact
            and presentable. Ariel approached him with a simple request:
            "explain NFT's to me", and thus started Daniel's new career path,
            web design. Knowing little, and relying on his major in software
            engineering, he turned to the internet in search for a way to make a
            simple website to display the ideas of the group, but nothing's ever
            simple when your mind is racing, and ideas form in your head every
            instance. Thankfully, he settled down for this.
          </p>

          <a
            href="https://www.instagram.com/daniel_gray_d/"
            target="_blank"
            rel="noopener noreferrer"
            className={cred}
          >
            <StaticImage
              src="../images/icon-inst.png"
              className={instsmall}
            ></StaticImage>
            <h3>Daniel</h3>
          </a>
        </article>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
