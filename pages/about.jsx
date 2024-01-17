import ContactCode from "../components/ContactCode";

const AboutPage = () => {
  const zoWorldItems = [
    {
      social: "website",
      link: "zo.xyz",
      href: "https://zo.xyz/",
    },
    {
      social: "Position",
      link: "SDE (REACT, NEXTJS, WEB3, REACT NATIVE)",
      href: "https://zo.xyz/",
    },
    {
      social: "From - To",
      link: "Nov 2023 - Present",
      href: "https://zo.xyz/",
    },
    {
      social: "KeyTakeAway",
      link: `I worked with Zo World, as a frontend dev, Learned basics of react
      native and built an android tv application, and build there admin,
      House Keeping dashboards. Learned the best practices and
      typescript and how to write structured and maintainable code.`,
      href: "https://zo.xyz/",
    },
  ];

  const daostructItems = [
    {
      social: "website",
      link: "daostruct.xyz",
      href: "https://daostruct.xyz/",
    },
    {
      social: "Position",
      link: "FRONTEND DEVELOPER (REACT, NEXTJS, WEB3)",
      href: "https://daostruct.xyz/",
    },
    {
      social: "From - To",
      link: "Mar 2023 - Nov 2023",
      href: "https://daostruct.xyz/",
    },
    {
      social: "KeyTakeAway",
      link: `I enhanced my React and Next.js skills while spearheading the front-end development for an early-stage startup's MVP, concurrently improving on-page SEO, delving into the Web3 ecosystem, attending relevant events, and honing project management abilities as a founding front-end developer.`,
      href: "https://daostruct.xyz/",
    },
  ];
  const truemedsItems = [
    {
      social: "website",
      link: "truemeds.in",
      href: "https://www.truemeds.in/",
    },
    {
      social: "Position",
      link: "SDE I - FRONTEND (REACTJS, REDUX)",
      href: "https://www.truemeds.in/",
    },
    {
      social: "From - To",
      link: "Nov 2022 - Mar 2023",
      href: "https://www.truemeds.in/",
    },
    {
      social: "KeyTakeAway",
      link: `I worked with Truemeds, a digital pharmacy and consultancy startup, on various admin and management portals, enhancing my React.js skills in the process.`,
      href: "https://www.truemeds.in/",
    },
  ];
  const tonicWorldWideItems = [
    {
      social: "website",
      link: "tonicworldwide.com",
      href: "https://www.tonicworldwide.com/",
    },
    {
      social: "Position",
      link: "JR. FRONTEND DEVELOPER",
      href: "https://www.tonicworldwide.com/",
    },
    {
      social: "From - To",
      link: "Aug 2021 - Oct 2022",
      href: "https://www.tonicworldwide.com/",
    },
    {
      social: "KeyTakeAway",
      link: `In my first IT job as a self-taught developer, I gained confidence and knowledge, working on numerous web projects, creating over 100+ mailers in six months, improving various skills including blogging, phpMyAdmin, Photoshop, and cleaning PHP and MySQL backend code (though I'm still learning in this area), with a primary focus on frontend technologies like HTML, CSS, Bootstrap, jQuery, and JavaScript.`,
      href: "https://www.tonicworldwide.com/",
    },
  ];

  const opensourceItems = [
    {
      social: "ethereum",
      link: "2023 Ethereum.org Contributor",
      href: "https://www.gitpoap.io/p/itrebel.eth",
    },
    {
      social: "poap",
      link: "2023 POAP.gallery Contributor",
      href: "https://www.gitpoap.io/p/itrebel.eth",
    },
  ];
  const hackthonItems = [
    {
      social: "ethGlobal",
      link: "Polygon Road to Web3 Hackathon Winner Badge",
      href: "https://opensea.io/assets/matic/0x93e2ff8110e15f7befc52d6f72b87700aa4b51c7/6",
    },
    {
      social: "moralis",
      link: "Web3 Twitter Buidler",
      href: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/113461209507512867518933452141320285231135646094834536306130710989420835635700",
    },
  ];
  const testItems = [
    {
      social: "linkedIn",
      link: "HTML",
      href: "https://www.linkedin.com/in/kritiksah/details/skills/",
    },
    {
      social: "linkedIn",
      link: "Cascading Style Sheets (CSS)",
      href: "https://www.linkedin.com/in/kritiksah/details/skills/",
    },
    {
      social: "linkedIn",
      link: "React.js",
      href: "https://www.linkedin.com/in/kritiksah/details/skills/",
    },
    {
      social: "linkedIn",
      link: "Search Engine Optimization (SEO)",
      href: "https://www.linkedin.com/in/kritiksah/details/skills/",
    },
    {
      social: "linkedIn",
      link: "Front-End Development",
      href: "https://www.linkedin.com/in/kritiksah/details/skills/",
    },
  ];

  return (
    <>
      <h1 className="text-xl">A Little Bit About Me</h1>
      <p className="my-4">
        Greetings! I'm Kritik Sah, a fullstack developer (frontend focused) with
        3+ years experience. My journey includes frontend leadership at a web3
        firm, contributions to a marketing agency and online pharmacy e-com
        projects, and a strong passion for user-centric UI, Teaching (Own a
        Youtube Channel with 7.1k Subscriber) and open-source.
      </p>
      <div className="my-4"></div>
      <hr className="my-6" />
      <div className="my-4"></div>
      <h2 className="my-4 text-lg">WORK EXPERIENCE</h2>
      <ContactCode code={zoWorldItems} title={"ZoWorld"} />
      <div className="my-4"></div>
      <ContactCode code={daostructItems} title={"DAOstruct"} />
      <div className="my-4"></div>
      <ContactCode code={truemedsItems} title={"Truemeds 💊"} />
      <div className="my-4"></div>
      <ContactCode code={tonicWorldWideItems} title={"TonicWorldWide"} />
      <hr className="my-6" />
      <div className="my-4"></div>
      <h2 className="my-4 text-lg">OTHER EXPERIENCE</h2>
      <ContactCode code={opensourceItems} title={"OpenSourceContibutions"} />
      <div className="my-4"></div>
      <ContactCode code={hackthonItems} title={"Hackathons"} />
      <div className="my-4"></div>
      <ContactCode code={testItems} title={"testsBadges"} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
