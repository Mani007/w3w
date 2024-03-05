import {
    logo, 
    menu,
    close, 
    dogtest,    
  } from "../assets";

export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#venue",
      title: "Venue",
    },
    {
      id: "#schedule",
      title: "Schedule",
    },
    {
      id: "#speakers",
      title: "Speakers",
    },
    {
        id: "#partners",
        title: "Partners",
    },
    {
        id: "#sponsors",
        title: "Sponsors",
    },
  ];

  export const items = [
    {
      id: 1,
      title: "Day 1 - 8 March 2024",
      plan: [  "4pm Opening and welcome drink and Networking", "6pm 1st panel (45 min)"," 8pm 2nd panel (45 min)","10 pm Band starts – Brazilian music",],
      //Icon: FiDollarSign,
      // imgSrc:
      //   "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    },
    {
      id: 2,
      title: "Day 2 - 9 March 2024",
      plan: [ "10 am doors opening","11 am Speaker - lawyer topic", "1pm – 2pm lunch break", ],
      //Icon: FiPlay,
      // imgSrc:
      //   "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    },
    {
      id: 3,
      title: "Day 3 - 10 March 2024",
      plan: [ "Brunch at 12","Ceremony closing at 5pm", ],
      //Icon: FiBell,
      // imgSrc:
      //   "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    },
    // {
    //   id: 4,
    //   title: "Online Schedule",
    //   plan: [ "Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.", ],
    //   //Icon: FiBarChart,
    //   // imgSrc:
    //   //   "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    //    description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    // },
  ];

  export const speakers = [
    {
      id: 1,
      name: "Julia Muszynski",
      imgSrc:"/speakers/julia.png",
      company: "Lumily Labs, tingz",
      jobtitle: "Co-founder, CEO",
      social: "https://www.linkedin.com/in/julia-muszynski123/"
    },
    {
      id: 2,
      name: "Anil Altas Brug",
      imgSrc:"/speakers/Anil Altas Brug.png",
      company: "Turboslow Web3 Agency and AI Meditation Project named Calmila",
      jobtitle: "Co-founder and Creator",
      social: "https://www.linkedin.com/in/anilaltasbrug/"
    },
    {
      id: 3,
      name: "Daniela Zoellmer",
      imgSrc:"/speakers/daniela.png",
      company: "Zoellmer Lawfirm",
      jobtitle: "Lawyer",
      social: "https://de.linkedin.com/in/danielazoellmer"
    },
    {
      id: 4,
      name: "Marina Markezic",
      imgSrc:"/speakers/Marina Markezic.png",
      company: "EUCI",
      jobtitle: "Co-founder ",
      social: "https://www.linkedin.com/in/marinamarkezic/"
    },
    {
      id: 5,
      name: "Alice Shikova",
      imgSrc:"/speakers/Alice Shikova.png",
      company: "Folks Finance",
      jobtitle: "CMO",
      social: "https://www.linkedin.com/in/alice-shikova-36a708194/"
    },
    {
      id: 6,
      name: "Nicole Carvalho",
      imgSrc:"/speakers/Nicole Carvalho.png",
      company: "BeInCrypto",
      jobtitle: "Lead Marketing Specialist",
      social: "https://www.linkedin.com/in/nicole-carvalho-31099175/"
    },
    {
      id: 7,
      name: "ATHINA STANTZOS",
      imgSrc:"/speakers/ATHINA STANTZOS.png",
      company: "SettleMint",
      jobtitle: "Senior Technical Engineer",
      social: "https://www.linkedin.com/in/athinastantzos/"
    },
    {
      id: 8,
      name: "Ipshita Kumar",
      imgSrc:"/speakers/Ipshita Kumar.png",
      company: "Hype ",
      jobtitle: "VP Brand Innovation",
      social: "https://www.linkedin.com/in/ipshita-kumar/"
    },
    {
      id: 9,
      name: "Mariana Suchodolski",
      imgSrc:"/speakers/Mariana Suchodolski.png",
      company: "Bonfire.xyz",
      jobtitle: "Content & Community lead",
      social: "https://www.linkedin.com/in/mariana-suchodolski-19977926/"
    },
    {
      id: 10,
      name: "Kristina Hayhoe",
      imgSrc:"/speakers/Kristina Hayhoe.png",
      company: "Lumily Labs, tingz",
      jobtitle: "Co-founder, CEO",
      social: "https://www.linkedin.com/in/abcdefghijkkk/"
    },
    {
      id: 11,
      name: "Judith Juhnke",
      imgSrc:"/speakers/Judith Juhnke.png",
      company: "Judith Juhnke Coaching - YOU&JJ-Tailormade Life GmbH",
      jobtitle: "Founder & CEO",
      social: "https://www.linkedin.com/in/judithjuhnke/"
    },
    {
      id: 12,
      name: "Inês Bragança Gaspar",
      imgSrc:"/speakers/ines.png",
      company: "Web3 Lawyer",
      jobtitle: "Lawyer",
      social: "https://www.linkedin.com/in/inesbragancagaspar/"
    },
    {
      id: 13,
      name: "Natacha Cottu",
      imgSrc:"/speakers/Natacha Cottu.png",
      company: "Artsies Collective",
      jobtitle: "Founder",
      social: "https://www.linkedin.com/in/natacha-cottu-151280139/"
    },
    {
      id: 14,
      name: "Diane Bensoussan",
      imgSrc:"/speakers/Diane Bensoussan.png",
      company: "WalletConnect",
      jobtitle: "Product Design",
      social: "https://www.linkedin.com/in/dianeben"
    },
    {
      id: 15,
      name: "Antsa Rakotoniaina",
      imgSrc:"/speakers/Antsa Rakotoniaina.png",
      company: "Speakjourney and LionessandEagle",
      jobtitle: "Founder and Content creator",
      social: "https://www.linkedin.com/in/a-fandresena-rakotoniaina-549596267/"
    },
    {
      id: 16,
      name: "Alexa (Sasha) Sviryd",
      imgSrc:"/speakers/alexasasha.png",
      company: "The Next",
      jobtitle: "CEO",
      social: "https://www.linkedin.com/in/sasha-svirid"
    },
    {
      id: 17,
      name: "Alina Tsoy",
      imgSrc:"/speakers/LinTsoy.png",
      company: "Personal style coaching for enterpreneurs",
      jobtitle: "Personal stylist and coach",
      social: "https://www.linkedin.com/in/lin-tsoy-707187278/"
    },
    {
      id: 18,
      name: "Blanca Almaguer",
      imgSrc:"/speakers/Blanca Almaguer.png",
      company: "Audytas",
      jobtitle: "CMO/Co-Founder",
      social: "https://www.linkedin.com/in/balmaguer/"
    },
  ]; 

  export const partners = [
    { 
      id: 1,
      imgSrc: "/blanklogo.png",
      title: "Crypto Female",
      weblink: "https://www.cryptofemale.org/",
    },
    { 
      id: 2,
      imgSrc: "/blanklogo.png",
      title: "Moongate",
      weblink: "https://www.moongate.id/",
    },
    { 
      id: 3,
      imgSrc: "/blanklogo1.png",
      title: "Jobited",
      weblink: "https://jobited.com",
    },
    { 
      id: 4,
      imgSrc: "/blanklogo2.png",
      title: "Offchain Lisbon ",
      weblink: "#",
    },
    { 
      id: 5,
      imgSrc: "/blanklogo2.png",
      title: "MetaMixer",
      weblink: "https://MetaMixer.pl",
    },
    { 
      id: 6,
      imgSrc: "/blanklogo2.png",
      title: "Artsies Collective",
      weblink: "artsies.io",
    },
    { 
      id: 7,
      imgSrc: "/blanklogo2.png",
      title: "Turboslow Web3 ",
      weblink: "https://turboslownft.com/",
    },
  ];

  export const cpartners = [
    { 
      id: 1,
      imgSrc: "/partners/community/cryptof.jpeg",
      title: "Crypto Female",
      weblink: "https://www.cryptofemale.org/",
    },
    { 
      id: 2,
      imgSrc: "/partners/community/moongate.webp",
      title: "Moongate",
      weblink: "https://www.moongate.id/",
    },
    { 
      id: 3,
      imgSrc: "/partners/community/jobedited.png",
      title: "Jobited",
      weblink: "https://jobited.com",
    },
    { 
      id: 4,
      imgSrc: "/partners/community/offchain.jpg",
      title: "Offchain Lisbon ",
      weblink: "#",
    },
    { 
      id: 5,
      imgSrc: "/partners/community/metamix.jpeg",
      title: "MetaMixer",
      weblink: "https://MetaMixer.pl",
    },
    { 
      id: 6,
      imgSrc: "/partners/community/ARTSIES COLLECTIVE.png",
      title: "Artsies Collective",
      weblink: "artsies.io",
    },
    { 
      id: 7,
      imgSrc: "/partners/community/turboslow.jpeg",
      title: "Turboslow Web3 ",
      weblink: "https://turboslownft.com/",
    },
  ];