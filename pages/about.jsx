import ContactCode from "../components/ContactCode";

const AboutPage = () => {

  const daostructItems = [
    {
      social: 'website',
      link: 'daostruct.xyz',
      href: 'https://daostruct.xyz/',
    },
    {
      social: 'Position',
      link: 'FRONTEND DEVELOPER (REACT, NEXTJS, WEB3)',
      href: 'https://daostruct.xyz/',
    },
    {
      social: 'From - To',
      link: 'Mar 2023 - Present',
      href: 'https://daostruct.xyz/',
    },
    {
      social: 'KeyTakeAway',
      link: `I enhanced my React and Next.js skills while spearheading the front-end development for an early-stage startup's MVP, concurrently improving on-page SEO, delving into the Web3 ecosystem, attending relevant events, and honing project management abilities as a founding front-end developer.`,
      href: 'https://daostruct.xyz/',
    },
   
  ];
  const truemedsItems = [
    {
      social: 'website',
      link: 'truemeds.in',
      href: 'https://www.truemeds.in/',
    },
    {
      social: 'Position',
      link: 'SDE I - FRONTEND (REACTJS, REDUX)',
      href: 'https://www.truemeds.in/',
    },
    {
      social: 'From - To',
      link: 'Nov 2022 - Mar 2023',
      href: 'https://www.truemeds.in/',
    },
    {
      social: 'KeyTakeAway',
      link: `I worked with Truemeds, a digital pharmacy and consultancy startup, on various admin and management portals, enhancing my React.js skills in the process.`,
      href: 'https://www.truemeds.in/',
    },
   
  ];
  const tonicWorldWideItems = [
    {
      social: 'website',
      link: 'tonicworldwide.com',
      href: 'https://www.tonicworldwide.com/',
    },
    {
      social: 'Position',
      link: 'JR. FRONTEND DEVELOPER',
      href: 'https://www.tonicworldwide.com/',
    },
    {
      social: 'From - To',
      link: 'Aug 2021 - Oct 2022',
      href: 'https://www.tonicworldwide.com/',
    },
    {
      social: 'KeyTakeAway',
      link: `In my first IT job as a self-taught developer, I gained confidence and knowledge, working on numerous web projects, creating over 100+ mailers in six months, improving various skills including blogging, phpMyAdmin, Photoshop, and cleaning PHP and MySQL backend code (though I'm still learning in this area), with a primary focus on frontend technologies like HTML, CSS, Bootstrap, jQuery, and JavaScript.`,
      href: 'https://www.tonicworldwide.com/',
    },
   
  ];





  return (
    <>
      <h1 className="text-xl">A Little Bit About Me</h1>
      <p className="my-4">Greetings! I'm Kritik Sah, a front-end developer with 3+ years experience. My journey includes frontend leadership at a web3 firm, contributions to a marketing agency and online pharmacy e-com projects, and a strong passion for user-centric UI and open-source.</p>
      <hr className="my-6"/>
      <h2 className="my-4 text-lg">EXPERIENCE</h2>
      <ContactCode code={daostructItems} title={"DAOstruct"}/>
      <div className="my-4"></div>
      <ContactCode code={truemedsItems} title={"Truemeds 💊"}/>
      <div className="my-4"></div>
      <ContactCode code={tonicWorldWideItems} title={"TonicWorldWide"}/>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
