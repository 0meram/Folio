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
  img: 'stand.jpg',
  paragraphOne:
  'I am a fullstack Developer, who loves to code . Looking to collaborate with curious and passionate developers like me, to contribute as best as possible for meaningful and extensive projects. Always want to learn more and  detting better',
  paragraphTwo:
  'Wile working at my previous work-place i have developed major skills and passion for developing. i discovered this great ability of self teaching ',
  paragraphThree:
    'Communicating with friends and acquaintances develop their ideas into reality. I will help you develop your product in a clean, fast and even fun way. How can i help you?',
  resume: 'https://docs.google.com/document/d/1I0T7qYDc1PCxX4ChBYxfImLweK3gYD2G/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'carKey.jpg',
    title: 'Carkey4u',
    info: 'Car issue, We will fix it for you',
    info2: 'A big project that includes a team work of three full stack developers',
    url: 'http://localhost:3000/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    img: 'disney.jpg',
    title: 'DisneyPlus',
    info: 'disney stream',
    info2: '',
    url: 'https://omerdisney.netlify.app/',
    repo: 'https://github.com/0meram/Disney', // if no repo, the button will not show up
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
