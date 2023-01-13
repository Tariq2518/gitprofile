
import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'tariq2518', // Your GitHub org/user name. (Required)
          sortBy: 'stars', // stars | updated
          limit: 8, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: 'tariq-hussain-47a4201a4',
          twitter: 'tariqhpk',
          facebook: '',
          instagram: '',
          dribbble: '',
          behance: '',
          medium: 'tariq78',
          dev: 'tariq2518',
          stackoverflow: '15536371/tariq-hussain', // format: userid/username
          website: 'https://gitprofile-wrzhwt.stackblitz.io',
          phone: '',
          email: 'tariq.hussain2518@gmail.com',
        },
        resume: {
          fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
        },
        skills: [
          'Kotlin',
          'Java',
          'Android',
          'Android Studio',
          'Firebase',
          'MVVM',
          'Postman',
          'PHP',
          'MySQL',
          'Git',
          'HTML',
          'CSS',
          ,
        ],
        experiences: [
          {
            company: 'Metric',
            position: 'Sr. Android Engineer',
            from: 'December 2022',
            to: 'Present',
            companyLink: 'https://metricapp.co',
          },
          {
            company: 'Funsol Technologies',
            position: 'Android Developer',
            from: 'August 2021',
            to: 'Decemeber 2022',
            companyLink: 'https://funsoltech.com',
          },
        ],
        education: [
          {
            institution: 'Comstas University Islamabad',
            degree: 'BS Software Engineering',
            from: '2017',
            to: '2021',
          },
        ],
        // Display blog posts from your medium or dev account. (Optional)
        blog: {
          source: 'medium', // medium | dev
          username: 'tariq78', // to hide blog section, keep it empty
          limit: 3, // How many posts to display. Max is 10.
        },
        googleAnalytics: {
          id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        // Track visitor interaction and behavior. https://www.hotjar.com
        hotjar: {
          id: '3322172',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'bumblebee',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: false,

          // Hide the ring in Profile picture
          hideAvatarRing: false,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
