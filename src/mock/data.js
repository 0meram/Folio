import { nanoid } from 'nanoid';
//http://localhost:8000/#!
// HEAD DATA
export const headData = {
  title: 'OmeRam', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omer Ram',
  subtitle: 'Im a web developer',
  cta: 'see more',
};

// ABOUT DATA
export const aboutData = {
  img: 'self.jpg',
  paragraphOne: 'Hi ther, Im omer  Im a student for computer sunce a cognition',
  paragraphTwo: 'Im a fullstack Developer, who love to code  Im currently learning React, Javascript, and Nodejs I am looking to collaborate with curious and passionate developers like me, to give and help as best I can for meaningful and extensive projects. Always want to learn more and move forward',
  paragraphThree: 'I was in the process of developing my product, and from there I learned how to help friends and acquaintances develop their ideas. I will help you develop your product in a clean, fast and even fun way',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'carKey.jpg',
    title: 'Carkey4u',
    info: '',
    info2: '',
    url: 'http://localhost:3000/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dolla.jpg',
    title: 'Dolla',
    info: '',
    info2: '',
    url: 'https://dollarz.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burgerz.jpg',
    title: 'Burgerz',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '0meram95@gmail.com',
  phone: '0522689870'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
