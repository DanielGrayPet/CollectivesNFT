import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import {
  container,
  heading1,
  headingtop,
  wedop,
  newp,
  nftimg,
  icons,
  navLinks,
  nftcaption,
  linkitem,
} from "../components/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomePage = () => {
  return (
    <div>
      <Layout pageTitle="Home"></Layout>
      <div className={container}>
        <article>
          <h1 className={headingtop}>The Project</h1>
          <p className={wedop}>
            A passion project that melds the artist's love for the sea and the
            ocean with the modern world and the digital age, Collectives is more
            than just a digital image you can purchase. Within every token,
            there's dedication to the art, a craving for perfection in every
            brush's stroke. A delicate collaboration of real life art and
            digital one; the NFT's on display are all hand-drawn by <Link to="/about" style={{textDecoration: "none", color: "whitesmoke",}}><strong>Simon
            Wasser</strong></Link>, and are then scanned and transformed into digital form while
            still keeping their unique look which separates this gallery from
            all others. When you buy an NFT from this gallery, you are handed a
            piece of art, not just a number and a contract.
          </p>
        </article>
        <article>
          <StaticImage
            src="../images/placeholder.jpg"
            className={nftimg}
          ></StaticImage>
          <figcaption className={nftcaption}>
            NFT Number: #11111 Price: $$$$
          </figcaption>
        </article>
        <article>
          <StaticImage
            src="../images/placeholder.jpg"
            className={nftimg}
          ></StaticImage>
          <figcaption className={nftcaption}>
            NFT Number: #11111 Price: $$$$
          </figcaption>
        </article>
        <article>
          <h1 className={heading1}>Find us at</h1>
          <ul className={navLinks}>
            <li className={linkitem}>
              <a
                href="https://www.instagram.com/collectives_bw_nfts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../images/icon-inst.png"
                  alt="instagram icon"
                  className={icons}
                ></StaticImage>
                <h1>Instagram</h1>
              </a>
            </li>
            <li className={linkitem}>
              <a
                href="https://twitter.com/Collectives_BW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../images/icon-twtr.png"
                  alt="twitter icon"
                  className={icons}
                ></StaticImage>
                <h1>Twitter</h1>
              </a>
            </li>
            <li className={linkitem}>
              <a
                href="https://opensea.io/0xbBE0cB8E08E123A1e64210Ebc8257605B9e46387"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../images/icon-ops.png"
                  alt="opensea icon"
                  className={icons}
                ></StaticImage>
                <h1>OpenSea</h1>
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div>
        <h1 className={heading1}>What's New</h1>
        <p className={newp}>
          Nothing yet!<br></br> CHECK AGAIN AFTER COLLECTION LAUNCH!
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
