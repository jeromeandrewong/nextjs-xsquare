import Head from "next/head";
import Main from "../components/Main";
import FeatureSection from "../components/FeatureSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>XSQUARE | Tuition Centre</title>
        <meta
          name="description"
          content="We are a Singapore based tuition centre specializing in Mathematics for secondary and junior college students."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <FeatureSection />
    </>
  );
}
