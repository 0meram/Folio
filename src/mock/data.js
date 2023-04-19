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
export const projectsData = [{
  id: nanoid(),
  img: 'ui.png',
  title: 'Brainnest',
  info: 'UX/UI designer student',
  info2:
    "As a student at Brainnest Company, I gained experience in UX/UI design and learned industry-standard tools such as Figma. Through hands-on projects and collaboration with peers and instructors, I developed skills in user research, wireframing, prototyping, and visual design. The program provided a strong foundation in design principles and practical experience working on real-world design challenges.",
  url: 'https://www.figma.com/file/iIN6mY6oOjWi6k32NxK6X3/Sushi?node-id=0%3A1&t=xs9CqKdtzgAQDKmZ-1',
  repo: '', // if no repo, the button will not show up
},
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
  info: "Full-Stack Developer at YuviTal Rumble",
  info2:
    "I contributed to developing an admin dashboard and web components with React, MobX, and Material-UI in a team of six developers. I released six features to production, deployed the app using Heroku, added banners, and received a commendation from the CTO.",
  url: 'https://www.rumble.co.il/',
  repo: '', // if no repo, the button will not show up
},
{
  id: nanoid(),
  img: 'carKey.jpg',
  title: 'Carkey4u',
  info: 'Frontend developer',
  info2:
    "I collaborated with a team of four full-stack developers on a several-month project. My responsibilities included developing React UI components, closely adhering to Figma design specifications.",
  url: 'https://key-4-you.com/',
  repo: '', //'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
},
{
  id: nanoid(),
  img: 'galgalyEzer.jpg',
  title: 'Galgaley Ezer',
  info:
    'Freelance Full-stack developer',
  info2:
    "As a freelance Full Stack Developer for Galgaley-Ezer, an association that supports and impacts Israeli youth during their post-army lives, I worked closely with a private client on an end-to-end project. My responsibilities included defining the project's end goal, designing the layout, selecting suitable banner images and colors, and outlining the desired functionality. Throughout the process, I ensured the client was consistently updated on the project's progress.",
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
