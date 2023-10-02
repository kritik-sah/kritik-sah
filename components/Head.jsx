import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Kritik Sah is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="kritik sah, kritik, sah, web developer portfolio, kritik web developer, kritik developer, mern stack, kritik sah portfolio, vscode-portfolio, frontend, reactjs developer, react developer, nextjs developer, indian web developer"
      />
      <meta
        property="og:title"
        content="Kritik sah - Fullstack web dev Portfolio"
      />
      <meta
        name="twitter:title"
        content="Kritik sah - Fullstack web dev Portfolio"
      />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta
        property="twitter:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="/projects/portfolio.png" />
      <meta property="twitter:image" content="/projects/portfolio.png" />
      <meta property="og:url" content="https://www.cryptolancer.in/" />
      <meta property="twitter:url" content="https://www.cryptolancer.in/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Kritik Sah",
};
