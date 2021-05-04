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
  paragraphOne: 'Wile working at my previus work-place i have developed major skills and passion for developing. i discoverd this great abillity of self teaching ',
  paragraphTwo: 'I am a fullstack Developer, who loves to code . currently study in "itc" wile working as a freelance  , web and app developer. I am looking to collaborate with curious and passionate developers like , to give and help as best i can for meaningful and extensive projects. Always want to learn more and  detting better',
  paragraphThree: 'I have learned how to help friends and acquaintances develop their ideas. I will help you develop your product in a clean, fast and even fun way. How can i help you?',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
    info: 'עמותת גלגלי עזר חרטה על דגלה לקדם ולהשפיע על הנוער בחברה הישראלית במגוון תחומים ושלבים בחיי מטרתינו היא לסייע ולהכווין את דור העתיד בצמתים מרכזיים בחייו תוך מתן דגש על תוכן מקצועי וחוויתי בהליך קבוצתי איכותי וממוקד.',   
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
    img: 'burgerz.jpg',
    title: 'Burgerz',
    info: 'Restaurant',
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
