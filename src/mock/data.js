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
  subtitle: 'Im a web developer',
  cta: 'see more',
};

// ABOUT DATA
export const aboutData = {
  img: 'self.jpg',
  paragraphOne: 'Wile working at his previus work-place omer have developed major skills and passion for developing. he discoverd he hase this great abillity of learning by him self ',
  paragraphTwo: 'Omer is a fullstack Developer, who loves to code . Hes currently working as a freelance , web and app developer. Hes looking to collaborate with curious and passionate developers like him, to give and help as best he can for meaningful and extensive projects. Always want to learn more and move forward',
  paragraphThree: 'I learned how to help friends and acquaintances develop their ideas. He will help you develop your product in a clean, fast and even fun way. How can i help you?',
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
    img: 'galgalyEzer.jpg',
    title: 'Galgaley Ezer',
    info: '',
    info2: '',
    url: 'https://galgaley-ezer.netlify.app/',
    repo: 'https://github.com/0meram/course', // if no repo, the button will not show up
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
