// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const theme = require('./theme');

module.exports = {
  user: 'StacktiSingh', // Replace with your GitHub username
  startedProgramming: '01/01/2023', // Replace with when you started programming (MM/DD/YYYY)
  repoQuantity: 5, // Replace with number of recent repos to show
  header: {
    image: {
      src: 'src/resources/images/banner.svg',
      width: 850,
      height: 450,
    },
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: theme.colors.primary,
      logoColor: theme.colors.secondary,
    },
    badges: [
      {
        type: 'badge',
        name: 'portfolio',
        href: 'https://your-portfolio-website.com', // Replace with your portfolio URL
        logo: 'firefox',
      },
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/shakti-3311h', // Replace with your LinkedIn
        logo: 'linkedin',
      },
      {
        type: 'badge',
        name: 'email',
        href: 'mailto:sharkt930@gmail.com', // Replace with your email
        logo: 'gmail',
      },
      {
        type: 'views',
        name: 'profile views',
      },
    ],
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'plastic',
      color: theme.colors.primary,
      logoColor: theme.colors.white,
    },
    links: [
      
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/shakti-3311h', // Replace with your LinkedIn
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:sharkt930@gmail.com', // Replace with your email
      },
      {
        name: 'github',
        href: 'https://github.com/StacktiSingh', // Replace with your GitHub
      },
      // Add more social media links as needed
    ],
  },
  skillswall: {
    styles: {
      style: 'plastic',
      align: 'left',
    },
    randomOrder: true,
    skills: [
      // Frontend Technologies
      { name: 'Python', isHighlighted: true },
      { name: 'Data Analysis', isHighlighted: true },
      { name: 'MySQl', isHighlighted: true },
      { name: 'Web Scraping' },
      { name: 'Pandas' },
      { name: 'Numpy' },
      { name: 'Matplotlib' },
      { name: 'Flask', isHighlighted: true },
      { name: 'PowerBI', isHighlighted: true },

      { name: 'Git', isHighlighted: true },
      { name: 'GitHub' },
      { name: 'Visual Studio Code' },
    ],
  },
};
