import { nanoid } from 'nanoid';
//http://localhost:8000/#!
// HEAD DATA
export const headData = {
  title: 'Omer Ram', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omer Ram',
  subtitle: "I'm a Full stack developer",
  cta: 'see more',
};

// ABOUT DATA
export const aboutData = {
  img: 'prof.jpg',
  paragraphOne:
    'Over the past three years, I have been passionately dedicated to building and developing web applications using a diverse range of technologies, such as React.js, JavaScript, MobX, Node.js, Redux, Next.js, ag-Grid, React-Query, MongoDB, MySQL, Express, HTML, CSS, Material-UI, REST APIs, unit testing, Git, Heroku, Netlify, and more.',
  paragraphTwo:
    "As an efficient Full Stack Developer with a love for coding, I bring positive energy to the workplace. I am eager to collaborate with like-minded, passionate developers, and contribute to significant companies and projects that make a real impact.",
  paragraphThree:
    "I pride myself on my independence and strong self-learning abilities, constantly striving to learn more and enhance my skills. I believe in the power of hard work and fostering supportive relationships with colleagues and clients to achieve success",
  resume:
    'https://docs.google.com/document/d/19FjJPAyvcnm1E2UxT3o9BkbLlYnl6Q_Y/edit#heading=h.gjdgxs', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fintastic.jpg',
    title: 'Fintastic',
    info: 'Frontend developer in a start-up fin-tech company',
    info2:
      "As part of a five-member team, I helped develop demo dashboard features for an MVP using React, Redux, Material-UI, ag-Grid, and React-Query. My responsibilities included designing the structure, handling epic tasks, and collaborating in a sprint team environment. I also worked closely with backend developers, the product team, and customers to refine APIs and optimize UX/UI preferences.",
    url: 'https://www.fintastic.ai/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rumble.jpg',
    title: 'Rumble',
    info: 'Full-stack developer intern at YuviTal rumble company',
    info2:
      'Developed an admin dashboard and web-components using React, mobx, material-ui.           Working in a team of 3 frontend developer and 3 backend developers.            released 6 features to production.           Deployed using Heroku.      added banners to the app.                  Recommended by CTO.',
    url: 'https://www.rumble.co.il/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'carKey.jpg',
    title: 'Carkey4u',
    info: 'Frontend developer',
    info2:
      'Joined the effort of 4 full stack developers team as a freelancer on a three months project. Developed React UI components following figma design.',
    url: 'https://key-4-you.com/',
    repo: '', //'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'galgalyEzer.jpg',
    title: 'Galgaley Ezer',
    info:
      'Freelance Full-stack developer Galgaley-Ezer is an association that promotes and influences the youth in Israeli society in a variety of areas and stages in their lives after serving the army.',
    info2:
      'Working close with a private client, building the project end-2-end. defining the end goal , designing the project, choosing fit banners images and colors, and describing the desired outcome functionality. keeping the client updated with the current related status.',
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
