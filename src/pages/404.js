import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const HeadStyle = {
  color: "whitesmoke",
  textAlign: "center",
  height: "100%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "5rem",
  margin: "1rem",
  marginBottom: "15rem",
  marginTop: "15rem",
}

const NotFound = () => {
  return (
    <div>
      <Layout pageTitle="Page Not Found!"></Layout>
      <div>
        <h1 style={HeadStyle}>The requested page was not found!</h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
