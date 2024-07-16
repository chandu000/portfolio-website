import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with 3 years of hands-on experience in building robust and scalable web and mobile applications. My expertise spans front-end technologies such as React, Next.js, and React Native, complemented by back-end skills in Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I am proficient in AWS cloud technologies, enabling me to design and deploy dynamic, cloud-based solutions. My objective is to leverage these capabilities to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with 3 years of professional experience, specializing in creating efficient and user-friendly web and mobile applications. My technical expertise includes front-end technologies like React, Next.js, and React Native, alongside back-end skills in Node.js, MySQL, PostgreSQL, MongoDB, and AWS cloud technologies. My passion for web development was sparked by a deep curiosity about how digital solutions are crafted, leading to a fulfilling career where I continuously seek out new challenges and advancements in technology. I excel in collaborative settings, taking on complex problems with a creative approach to deliver superior solutions. Beyond coding, I am active in exploring cutting-edge technologies, contributing to open-source communities, and maintaining a healthy, active lifestyle.






`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Stagewood Consortium",
    description: `I spearheaded the development of scalable, responsive web and mobile applications, enhancing user experience across platforms. I led the integration of back-end services with GraphQL and front-end interfaces using modern JavaScript frameworks like React and React Native, which significantly boosted application efficiency and user engagement. My work included engineering RESTful APIs and implementing security best practices such as OAuth and JWT to secure data transmission and authentication. I also introduced social login capabilities using Firebase for Facebook, Google, and Apple, streamlined the backend into microservices using Domain Driven Design, and implemented a single sign-on page complemented by QR code authentication with Branch. Additionally, I optimized mobile application performance, notably reducing load times and enhancing responsiveness on iOS and Android platforms.`,
    technologies: ["ReactNative", "React.js","GraphQl","AWS","MySql","DynamoDb"],
  },
  
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `I implemented native mobile applications for Android and iOS using Android Studio and XCode, and spearheaded the CI/CD flow using GitHub and Fastlane to enhance software quality and increase code profitability in production. I integrated secure authentication in RESTful APIs using OAuth2 tokens and JWT. Additionally, I developed the front end of applications according to client requirements using HTML, CSS, Bootstrap, JavaScript, jQuery, JSON, and ReactJS, which significantly increased user retention and reduced manual errors.`,
    technologies: ["Javascript", "Sql","React-native", "React.js", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Book Management System App",
    image: project1,
    description:
      "I developed a comprehensive Book Management System designed to streamline the organization and handling of books. The system features a sophisticated GraphQL setup with Apollo Client for robust API communication, enabling users to perform a wide range of operations such as creating, reading, updating, and deleting (CRUD) book entries. It includes key functionalities like a user-friendly interface for displaying book listings, a detailed form for adding books with validation, and capabilities for editing and removing existing books, all designed with meticulous error handling to enhance user interaction.      ",
    technologies: ["JavaScript", "ReactNative", "React", "Node.js", "Prisma","GraphQl"],
  },
  {
    title: "Cloud-Based Storage Application",
    image: project2,
    description:
      "I utilized Java to engineer advanced functionalities such as File Sync and Delta Sync using UDP packets as the networking protocol, which achieved a 40% reduction in latency. By segmenting files into 4MB blocks and implementing concurrency, coupled with ensuring proper sequencing through buffered packet transfers, I achieved a 50% increase in data accessibility and transfer velocity.      ",
    technologies: ["Java", "UDP/TCP", "Multithreading", "Buffer Management"],
  },
  {
    title: "ETL Pipeline",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Apache Airflow", "Amazon EC2", "Amazon S3"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Developed a personal portfolio website that serves as a comprehensive showcase of my projects, skills, and contact information",
    technologies: ["HTML", "CSS", "React", "Vite"],
  },
];

export const CONTACT = {
  address: "4505 Pantheon way, Denton, Tx-76208 ",
  phoneNo: "+1817 716 6939 ",
  email: "chandu.edu2020@gmail.com",
};
