/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nasser Hasian",
  title: "Hi all, I'm Nasser",
  subTitle: emoji(
    "A passionate Systems Administrator 🚀 having experience building and maintaining on premise and cloud Windows and Linux systems in Azure, AWS, and Google."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1RPsqPvR7mSAObLpgPJDmuMWLESf2GfaDs_h0qN_RxIU/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nhasian",
  linkedin: "https://www.linkedin.com/in/nhasian/",
  gmail: "nhasian.work@gmail.com",
  // gitlab: "https://gitlab.com/nhasian",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@nhasian",
  twitter: "https://twitter.com/nhasian",
  // stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Seasoned IT Administrator with a strong background in management and information technology",
  skills: [
    emoji(
      "⚡ Design and manage IT infrastructur to support users and IT equipment"
    ),
    emoji("⚡ Administer networks, domains, roles and services."),
    emoji(
      "⚡ Develop solutions for internal employees as well as external clients"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Intune",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Windows Active Directory",
      fontAwesomeClassname: "fas fa-ad"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fa fa-network-wired"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fas fa-code"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northern Arizona University",
      logo: require("./assets/images/NAU-University-Seal-True-Blue-300x300.png"),
      subHeader: "Bachelor Interdisciplinary Studies Technology Management",
      duration: "2017 - 2019",
      desc: "Summa Cum Laude",
      // descBullets: [
      //  "Nothing here yet",
      //  "Nothing here yet"
      // ]
    },
    {
      schoolName: "Chandler Gilbert Community College",
      logo: require("./assets/images/1591891340401.jfif"),
      subHeader: "Associate Degree",
      duration: "2015 - 2017",
      desc: "Ranked top 10% in the program. Received Cisco certification",
      // descBullets: ["Nothing here yet"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Windows and Linux Servers", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Microsoft Azure and Intune Endpoint Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Google Workspace for Business and Schools",
      progressPercentage: "80%"
    },
    {
      Stack: "Bash and Powershell scripting",
      progressPercentage: "50%"
    },
    {
      Stack: "Virtual Machines, Containers and Docker",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Systems Administrator",
      company: "ER2",
      companylogo: require("./assets/images/ER2Logo_-23.png"),
      date: "Jan 2020 – Present",
      desc: "Managed 8 sites and supported 120 team mates.",
      descBullets: [
        "Managed users, groups, and devices in a Hybrid Azure Windows Active Directory environment.",
        "Evaluated hardware and software to deploy to employees.",
        "Built out support ticketing system for multiple departments using Zendesk."
      ]
    },
    {
      role: "Team Lead",
      company: "Pace",
      companylogo: require("./assets/images/att.png"),
      date: "May 2010 – May 2012",
      desc: "Assisted supervisors in training new agents to resolve technical issues swiftly and maintain a high level of customer satisfaction."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Ubuntu Member",
      subtitle:
        "Ubuntu Membership is a recognition of significant and sustained contribution to Ubuntu and the Ubuntu community.",
      image: require("./assets/images/ubuntu_logo_thumbnailYT.webp"),
      imageAlt: "Ubuntu Member Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://wiki.ubuntu.com/Membership/"
        },
        {
          name: "Ubuntu Member Page",
          url: "https://wiki.ubuntu.com/nhasian"
        }
      ]
    },
    {
      title: "Cisco CCENT",
      subtitle:
        "Cisco certificate for network routing and switching",
      image: require("./assets/images/CCENT-Routing-and-Switching-345x345.jpg"),
      imageAlt: "Cisco CCENT Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },

    {
      title: "Microsoft Certified Professional",
      subtitle: "Workstation and Server",
      image: require("./assets/images/MicrosoftCertifiedProfessional-300x76.jpg"),
      imageAlt: "Microsoft Certified Professional Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://",
      title: "my title",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@nhasian",
      title: "my title",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Valunteering",
  subtitle: emoji(
    "I've been volunteering regularly for the past 10 years"
  ),

  talks: [
    {
      title: "You, 2.0",
      subtitle: "Cyber Security presentation for the Televerde Foundation May 2022",
      slides_url: "https://docs.google.com/presentation/d/1_fD_NdK8KWRDaQ3qBLCy-kqlEOBbWABLcS3eTLHS7vI/edit?usp=sharing",
      event_url: "https://www.facebook.com/TeleverdeFoundation"
    },
    {
      title: "Mercy Gilbert",
      subtitle: "volunteered on weekends for 2 years",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://mypodcast"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 💌"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1-0000000000",
  email_address: "nhasian.work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "nhasian", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
