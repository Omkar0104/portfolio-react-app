// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Omkar",
  middleName: "",
  lastName: "Sonawane",
  message: "Web Developer|Digital Marketer|Freelancer|Blogger",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Omkar0104",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/omkar159",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/omkar__sonawane_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/omkar-sonawane-a8b73a192/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/OmkarSonawane33",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/omkar9.jpg"),
  imageSize: 300,
  message:
    " My name is Omkar Sonawane currently I am pursuing my engineering degree and  I will be graduate in 2022 from Dr. D.Y.Patil college of Engineering, Akurdi with a degree in IT Engineering.I am a M.E.R.N. Stack Web developer Now I am a Student, a Freelancer as well as a Blogger.I'm quietly confident, naturally curious, and perpetually working on improving my skills."
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Omkar0104", //i.e."johnDoe12Gh"
  reposLength: 1,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
  images: [
    
    { 
      img: require("../editable-stuff/omkar10.jpg"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/logo4.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"400",
    height:"380"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PHP", value: 40 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 40 },
    { name: "HTML/CSS", value: 70 },
    { name: "Java", value: 50 },
  ],  
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch" ,
  message: " if you have any questions, or if you just want to say hi, please feel free to email me at" ,
  email: "omkarsonawane159@gmail.com"
};

// Blog SECTION
const blog = {
  show: true
};

export { navBar, mainBody, blog, about, repos, skills, leadership, getInTouch };
