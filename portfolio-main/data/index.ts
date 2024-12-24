export const navItems = [
  { name: "Me", link: "#me" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Journey", link: "#journey" },
  { name: "Interest", link: "#interest" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const uiTools = ["React", "Next.js", "Tailwind CSS", "Framer Motion" ,"Aceternity UI"]

export const gridItems = [
  {
    id: 1,
    title: "Connecting Hearts and Minds: Open Dialogue for Meaningful Partnerships!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full brightness-50",
    titleClassName: "justify-end",
    img: "/universe_in_hand.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Global Collaboration, Local Impact: Crafting Tomorrow's Solutions!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Here is what I use the most",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "brightness-50",
    titleClassName: "justify-center",
    img: "clock.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Committed to crafting innovative technologies that enhance lives",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "brightness-50",
    titleClassName: "justify-start",
    img: "/hand_universe.jpg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently exploring the field of FPGA",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full brightness-75",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/fpga.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to get in touch?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modeled Next-Generation Mid-Range Lattice Devices",
    des: "A breakthrough in FPGA development, successfully supporting an impressive 1.3 million Look-Up Tables (LUTs). This milestone, reached through seamless collaboration with our dedicated architecture teams, opens new horizons for complex digital designs and high-performance computing solutions.",
    img: "/avant.jpg",
    iconLists: ["/verilog.png"],
    link_name: "Nailed it!",
    link: "https://www.latticesemi.com/products/fpgaandcpld/avant-e",
  },
  {
    id: 2,
    title: "FPGA Bitstream Capability",
    des: "Supercharged Bitstream Generation: Our revamped capability slashed runtime by an astounding 4x, catapulting productivity and dramatically accelerating time-to-market for cutting-edge FPGA designs",
    img: "/bitstream.jpg",
    iconLists: ["/python.png", "/c++.png"],
    link_name: "Nailed it!",
    link: "",
  },
  {
    id: 3,
    title: "Helios Architecture",
    des: "Turbocharged Layout Verification: By implementing automated checks and verification processes in the device layout script, we reduced verification time by an astounding 40% and improved accuracy to an impressive 95%. This innovation accelerates development while ensuring near-flawless designs.",
    img: "/helios.jpg",
    iconLists: ["/python.png", "/c++.png"],
    link_name: "Nailed it!",
    link: "",
  },
  {
    id: 4,
    title: "Bit2sim Tool (Bitstream to Simulation)",
    des: "Pioneered the development of a cutting-edge bitstream simulation tool compatible with Siemens’ Questa Advanced Simulator Engine, enhancing hardware debugging capabilities for customer designs.",
    img: "/simulation.jpg",
    iconLists: ["/python.png"],
    link_name: "Nailed it!",
    link: "",
  },
  // {
  //   id: 4,
  //   title: "Bit2sim Tool (Bitstream to Simulation)",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "",
  // },
];

export const journey = [
  {
    quote:
      "This is where I started, and I'm grateful for the opportunity to continue learning and growing in the field of Computer Science.",
    name: "California State University, Fresno",
    title: "2018 - 2022",
    image: "/csu_fresno.png"
  },
  {
    quote:
      "Transforming ideas into reality by merging my software engineering expertise with hands-on hardware skills to build innovative FPGA solutions!",
    name: "Lattice Semiconductor",
    title: "2023 - Present",
    image: "/lattice_logo.png"
  },
];

export const companies = [
  {
    id: 1,
    name: "Lattice Semiconductor",
    description: "The Low Power FPGA Leader",
    img: "/lattice_logo.png",
  }
];

export const interests = [
  {
    id: 1,
    title: "Machine Learning",
    desc: "I am particularly drawn to deep learning due to its transformative impact on industries such as healthcare and autonomous driving. The ability of neural networks to process vast amounts of data and extract meaningful features is something I find incredibly powerful.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "DevOps",
    desc: "It’s all about breaking down silos between development and operations to create a dynamic, collaborative environment. I love the thrill of automating processes and using cool tools like Docker and Kubernetes to speed up software delivery while keeping everything running smoothly.What really gets me going is the concept of continuous integration and deployment (CI/CD). It’s like having a magic wand that lets teams innovate quickly without sacrificing quality! I’m all about finding ways to make tech projects more efficient and fun, helping everyone work together seamlessly. Let’s build awesome things and make tech a little more exciting!",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cybersecurity",
    desc: "What excites me most is the blend of problem-solving and creativity that cybersecurity demands. Whether it’s analyzing vulnerabilities, implementing security measures, or conducting ethical hacking, I thrive on the adrenaline of tackling complex challenges. I’m particularly interested in emerging technologies like AI and machine learning and how they can meld with security protocols.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Data Science",
    desc: "My journey began with a fascination for numbers and patterns, revealing how data can tell compelling stories and uncover hidden trends. What excites me most is the interdisciplinary nature of data science, which combines statistics, computer science, and domain expertise. Using tools like machine learning and data visualization, I enjoy tackling real-world challenges, from enhancing healthcare outcomes to optimizing supply chains.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  // {
  //   id: 1,
  //   img: "/git.svg",
  // },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 1,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/edjet99/"
  },
];
