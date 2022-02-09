import type { NextPage } from "next";

import { ParseSection } from "../components/ParseSection";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        pageTitle="TOP"
        pageDescription="TailwindCSSのPrefixを各クラス名の先頭に付与します。"
        pageImg="https://twc-prefix-parser.vercel.app/ogp.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <ParseSection />
    </>
  );
};

export default Home;
