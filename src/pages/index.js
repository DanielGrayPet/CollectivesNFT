import * as React from "react"
import Layout from "../components/Layout"
import { container, heading1, body1, heading2, picturelist, picturedo, html, body } from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <body>
      <Layout pageTitle="Homepage"></Layout>
      <div className={container}>
        <h1 className={heading1}>What We Do</h1>
        <body>
          <p className={body1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis mi ac tellus rhoncus, sit amet efficitur lorem viverra. Nam augue justo, posuere eu mi ut, aliquam auctor enim. Praesent nisi tortor, facilisis vestibulum massa eu, lobortis cursus metus. Ut iaculis pulvinar rhoncus. Praesent consectetur felis a orci aliquet, faucibus eleifend enim rhoncus. Curabitur vitae tellus eu ligula auctor facilisis. Nulla venenatis vehicula tortor, sed hendrerit enim maximus sed. Sed id malesuada odio, dapibus finibus ligula. Fusce rhoncus, eros sit amet feugiat maximus, dui nisi commodo eros, eu ultricies leo nulla eget metus. Nunc vel nisl at diam dapibus ultrices et nec sem. Nulla facilisi.</p>
        </body>
      </div>
      <div className={container}>
        <h2 className={heading2}>Sneak Peek</h2>
        <body>
          <ul className={picturelist}>
            <li className={picturedo}><StaticImage src= "../images/image4.jpg" alt="silly" placeholder="blurred"></StaticImage></li>
            <li className={picturedo}><StaticImage src= "../images/image6.jpg" alt="silly" placeholder="blurred"></StaticImage></li>
            <li className={picturedo}><StaticImage src= "../images/image5.jpg" alt="silly" placeholder="blurred"></StaticImage></li>
          </ul>
        </body>
      </div>
    </body>
  );
}

export default HomePage