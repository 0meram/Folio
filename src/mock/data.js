import { nanoid } from 'nanoid';
//http://localhost:8000/#!
// HEAD DATA
export const headData = {
  title: 'Omer Ram', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omer Ram',
  subtitle: 'Im a Full stack developer',
  cta: 'see more',
};

// ABOUT DATA
export const aboutData = {
  img: 'prof.jpg',
  paragraphOne:
    'Dedicated and efficient full stack developer, who loves to code. Looking to collaborate with curious and passionate developers , and be part of meaningful projects.',
  paragraphTwo:
    'Independent with high self-learning abilities.  Always want to learn more and to improve myself.',
  paragraphThree:
    'I believe in making friendly relationships with my clients. Your satisfaction is my top priority, i have gotten great reviews and happy clients. Id love to work with you too!.',
  resume:
    'https://docs.google.com/document/d/1MKsgW1c5qIg64lVPMxcE8BCDPJ1RSWvV/edit#heading=h.gjdgxs', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fintastic.jpg',
    title: 'Fintastic',
    info: 'Front-end sprint environment fin-tech project',
    info2: '',
    url: 'https://www.fintastic.ai/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rumble.jpg',
    title: 'Rumble',
    info: 'Hey! We are Rumble. And we convert steps into money.',
    info2:
      'With Rumble, you can save and earn money, spendable at hundreds of businesses! The healthier you are, the more coins you receive, the more money you earn!',
    url: 'https://www.rumble.co.il/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'carKey.jpg',
    title: 'Carkey4u',
    info: 'Car issue, We will fix it for you',
    info2: 'Big project that includes a team work of three full stack developers',
    url: 'https://key-4-you.com/',
    repo: '', //'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'galgalyEzer.jpg',
    title: 'Galgaley Ezer',
    info:
      'Galgali Ezer is an association that promote and influence the youth in Israeli society in a variety of areas and stages in there lives after serving the army.',
    info2: 'One pager project as a freelance',
    url: 'https://galgaleyezer.com/',
    repo: 'https://github.com/0meram/course', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dolla.jpg',
    title: 'Dolla',
    info: 'Virtual banking',
    info2: '',
    url: 'https://dollarz.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'disney.jpg',
    title: 'DisneyPlus',
    info: 'disney stream',
    info2: '',
    url: 'https://omerdisney.netlify.app/',
    repo: '', //'https://github.com/0meram/Disney', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '0meram95@gmail.com',
  phone: '0522689870',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/omer.ram.7/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omer-ram-b73753205/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/0meram',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
