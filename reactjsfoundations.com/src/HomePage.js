import Introduction from "./Introduction";
import WhereToBuy from "./WhereToBuy";
import About from "./About";
import CodeLinks from "./CodeLinks";
import Helmet from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          ReactJS Foundations - Building User Interfaces with
          ReactJS: An Approachable Guide
        </title>
        <meta
          name="description"
          content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it."
        />
      </Helmet>
      <h1>ReactJS Foundations - Building User Interfaces with ReactJS: An Approachable Guide</h1>
      <Introduction />

    </>
  );
}

export default HomePage;
