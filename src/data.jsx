import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Manohar',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Badana',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Phone : ',
    description: '8096883534',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Srikakulam',
  },

  {
    id: 7,
    title: 'Linkedin : ',
    description: 'linkedin.com/in/manohar-badana',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'manoharbadana12@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: 'github.com/Manuarya4246',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Telugu',
  }, 
];

export const stats = [
  {
    id: 1,
    no: '0+',
    title: 'No Experience <br/> Fresher',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '8+',
    title: 'Months Trained in <br /> J Spiders',
  },

  {
    id: 4,
    no: '4+',
    title: ' Certifications <br /> done',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024-PRESENT',
    title: 'Full Stack Web Development <span> J Spiders </span>',
    desc: 'Currently iam enrolled in Jspiders where i have been improving my skills i have successfully completed training in Full Stack Web Devlopment. ',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: '2022-2023',
    title: 'Pega Certified Senior System Architect <span> Pega </span>',
    desc: 'Certified in Pega advanced system architecture, specializing in version 8.7. Proficient in designing and implementing enterprise solutions using the Pega Platform.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: 'Aug-Oct 2022',
    title: 'Salesforce Developer Virtual Internship <span> Smart Internz </span>',
    desc: 'Certified in Salesforce Developer Virtual Internship and completed Salesforce Trailhead modules',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: 'Engineering Degree <span> Avanthi Institute of Eng & Technology</span>',
    desc: 'I scored 68% in my Graduation, i have done major project on hotel booking system by using a pega tool ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: 'Intermediate <span> Narayana Junior College</span>',
    desc: 'I scored 90% in Board Of Intermediate Education AndhraPradesh and i engaged in so many extra curricular activites and leadership oppurtunites.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Secondary Education <span> Bhashyam High School </span>',
    desc: 'I scored 92% in my secondary education,i have learned lot of things in my school days',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Sql',
    percentage: '85',
  },

  {
    id: 5,
    title: 'Nodejs',
    percentage: '55',
  },

  {
    id: 6,
    title: 'Mongodb',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Bootstrap',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ecommerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce',
      },
      {
        icon: <FiUser />,
        title: 'Copy Rights : ',
        desc: 'Manu',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Reactjs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Restaurant Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Restaurant Website',
      },
      {
        icon: <FiUser />,
        title: 'Copy Rights : ',
        desc: 'Manu',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Image Search Engine',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Image Search Engine',
      },
      {
        icon: <FiUser />,
        title: 'Copy RIghts : ',
        desc: 'Manu',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Quote Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Quote Generator',
      },
      {
        icon: <FiUser />,
        title: 'Copy Rights : ',
        desc: 'Manu',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Drag & Drop',
    details: [
      {
        title: 'Project : ',
        desc: 'Drag & Drop',
      },
      {
        title: 'Copy Rights: ',
        desc: 'Manu',
      },
      {
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Contact Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Contact Form',
      },
      {
        icon: <FiUser />,
        title: 'Copy Rights : ',
        desc: 'Manu',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Manuarya4246',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
