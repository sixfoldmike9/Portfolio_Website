// src/constants/index.js
// const navLinks = [
//   { name: "Work", link: "#work" },
//   { name: "Experience", link: "#experience" },
//   { name: "Skills", link: "#skills" },
//   { name: "Testimonials", link: "#testimonials" },
// ];

const words = ["Ideas", "Concepts", "Designs", "Code"].map((word) => ({
  text: word,
  imgPath: `/images/${word.toLowerCase()}.svg`,
}));


const counterItems = [
  { value: 97, suffix: "%", label: "Class 10th Percentage" },
  { value: 95.4, suffix: "%", label: "Class 12th Percentage" },
  { value: 8, suffix: "", label: "CGPA" },
  { value: 10, suffix: "+", label: "Projects" },
];

const logoIconsList = Array.from({ length: 11 }, (_, i) => ({
  imgPath: `/images/logos/company-logo-${i + 1}.png`,
}));

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = ["react", "python", "node", "three", "git"].map((name) => ({
  name: `${name.charAt(0).toUpperCase() + name.slice(1)} Developer`,
  imgPath: `/images/logos/${name}.png`,
}));

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];



const expLogos = [1, 2, 3].map((i) => ({
  name: `logo${i}`,
  imgPath: `/images/logo${i}.png`,
}));


const socialImgs = ["insta", "fb", "x", "linkedin"].map((name) => ({
  name,
  imgPath: `/images/${name}.png`,
}));

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  // navLinks,
};
