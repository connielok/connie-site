import pandemicEssentials from './components/img/pandemic-essentials.png';
import secretApp from './components/img/secret-app.png';
import liftLog from './components/img/lift-log.png';

const projectsArr = [
  {
    id: 1,
    title: 'Pandemic Essentials',
    image: pandemicEssentials,
    shortDesc:
      'An e-commerce site that offers products deemed essential during a national pandemic. Get your toilet paper, board games, and face masks here! Developed using Node.js, Express, Sequelize, React, Redux, Mocha, and Chai.',
    github: 'https://www.rb.gy/keatkh',
    website: 'https://pandemic-essentials.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Keep It Secret',
    image: secretApp,
    shortDesc:
      'A single page application that allows users to share secret messages with those they trust. Developed with AWS Lambda, Amazon DynamoDB, Amazon API Gateway, React, and Material UI.',
    github: 'https://www.rb.gy/fjdu9q',
    website: 'https://keepitsecret.netlify.app/#/',
  },
  {
    id: 3,
    title: 'Lift Log',
    image: liftLog,
    shortDesc:
      'Lift Log is a web application and weightlifting tracker. Lift Log automatically detects and logs exercises as you are working out, eliminating the need of manually tracking for weightlifters.',
    github: 'https://github.com/capstone-2004-team-awesome/Lift-Log',
    website: 'https://lift-log-pro.herokuapp.com/',
  },
];

export default projectsArr;
