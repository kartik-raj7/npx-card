#!/usr/bin/env node

"use strict";

import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import ora from "ora";
import path from "path";
import open from "open";
import request from "request";
import fs from "fs";
import wrapAnsi from "wrap-ansi";

//data///
var description = [
  "Designed a platform for all Ad related needs with intuitive UI for clients, advertisers, and content creators.",
  "Implemented an admin console for user management.",
  "Integrated Cloudinary to reduce load time, enabling seamless upload capabilities for advertisers and content creators.",
  "Integrated NodeCron for automating ad management processes and utilized JWT for authentication.",
  "Technology Used: HTML, SCSS, Javascript, React, Redux, Thunk, AntDesign, ExpressJS, MongoDB & Nodejs.",
];
var links = [
  { name: "LeetCode", url: "https://leetcode.com/u/kartik-raj7/" },
  { name: "Codeforces", url: "https://codeforces.com/profile/kartik_raj7" },
  { name: "CodeChef", url: "https://www.codechef.com/users/kartik_raj7" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/kartikeyrajgupta007/" },
  { name: "LinkedIn", url: "https://linkedin.com/in/kartikey20gupta" },
];
var experienceData = [
  {
    position: "SDE1",
    company: "Yoxaz, Remote",
    duration: "March 2024 - June 2024",
    details: [
      "Developed a matrimonial website featuring persistent login, OTP verification, Razorpay payment integration, and caching using TanStack’s useQuery and integrated Google and Facebook authentication for seamless signup and login functionality leveraging Firebase.",
      "Engineered an Administrative Portal within the Matrimonial Website, empowering functionalities such as profile approval, notification management, user blocking, and data visualizations.",
      "Engineered an interactive website featuring a custom request form, comprehensive past project showcase, and client-specific history display, resulting in a 40% increase in user engagement and a 25% boost in lead generation.",
    ],
  },
  {
    position: "Software Engineering Internship",
    company: "Grull, Remote",
    duration: "Nov 2023 - Jan 2024",
    details: [
      "Crafted a visually compelling website with Framer Motion and Three.js, showcasing Grull’s client projects, resulting in a 32% improvement in user interactions.",
      "Resolved bugs and conducted API integrations to ensure seamless functionality and user experience on the existing website. Improved SEO and reduced load time by 26%.",
    ],
  },
  {
    position: "Software Engineering Internship",
    company: "Enalo, Remote",
    duration: "July 2023 - Nov 2023",
    details: [
      "Developed Chrome Extension which generates Guidesteps by tracking user clicks and capturing screenshots real-time.",
      "Implemented content scripting strategies using message passing to capture and analyze user clicks across various tab pages.",
      "Revamped the Login Page, Payouts Dashboard completely and resolved bugs affecting 38% of users.",
      "Crafted the Contacts Module and rectified bugs across the entire frontend codebase.",
    ],
  },
];
var technicalSkillsAndInterests = [
  "Languages: C/C++, Javascript, HTML+CSS, Typescript",
  "Libraries: ReactJs, Redux, NextJS, MaterialUI, Antdesign, NextUI, TailwindCss, ChakraUI, Framermotion, Tansstack",
  "Web Dev Tools: Nodejs, ExpressJs, VScode, Git, Github",
  "Frameworks: ReactJs, NextJs",
  "Cloud/Databases: MongoDb, Firebase",
  "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System",
  "Areas of Interest: Web Design and Development",
  "Soft Skills: Analytical thinking, Self-learning, Presentation, Leadership, Teamwork",
];

var positionsOfResponsibility = [
  {
    title: "President, Codechef ADGITM",
    duration: "August 2022 - September 2023",
    details: [
      "Organized Live The Code and DSA Carnival events, attracting over 5k participants.",
      "Spearheaded the growth of the Codechef ADGITM YouTube channel from 70 to 2.5k+ subscribers, cultivating a robust coding culture within the college community.",
    ],
  },
];
// Define the options for boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  float: "center",
};
// Define the profile data
const data = {
  name: chalk.white("Kartikey Gupta /"),
  handle: chalk.cyan("kartikey"),
  work: chalk.white("Software Developer"),
  twitter: chalk.cyan("https://twitter.com/kartikey20gupta"),
  github: chalk.cyan("https://github.com/kartikey20gupta"),
  linkedin: chalk.cyan("https://linkedin.com/in/kartikey20gupta"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
};

// Define the introduction text
const intro = `${chalk.bold(
  "Hi there! I'm Kartikey, I'm a passionate software"
)}
${chalk.bold("developer with a knack for solving complex problems and")}
${chalk.bold("creating impactful web solutions. My journey in technology")}
${chalk.bold("began with a deep curiosity and has grown into a career where")}
${chalk.bold("I thrive on tackling challenges and delivering results. I have")}
${chalk.bold("a strong foundation in web development, particularly with")}
${chalk.bold("technologies like HTML, CSS, JavaScript, TypeScript, React,")}
${chalk.bold("Next.js, and Redux.")}`;

///
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
const tip2 = [
  `Tip: ${chalk.cyanBright.bold("Open cmd in full screen for best experience")}`,
  "",
].join("\n");
///Header
const boxWidth = 100;
const namePhone = `${chalk.bold("Kartikey Gupta")}${"".padEnd(
  boxWidth - "Kartikey Gupta".length - "+91 8475008968".length
)}${chalk.white('+91 8475008968')}`;
const courseEmail = `Bachelor of Technology${"".padEnd(
  boxWidth -
    "Bachelor of Technology".length -
    "kartikeygupta201@gmail.com".length
)}${chalk.white('kartikeygupta201@gmail.com')}`;
const universityGithub = `Guru Gobind Singh Indraprastha University${"".padEnd(
  boxWidth -
    "Guru Gobind Singh Indraprastha University".length -
    "github.com/kartikey20gupta".length
)}${chalk.white('github.com/kartikey20gupta')}`;
const header = boxen(`${namePhone}\n${courseEmail}\n${universityGithub}`, {
  padding: 1,
  margin: 0,
});

//Education
const education = `${chalk.bold('Education')}${"".padEnd(
  boxWidth - "Eduaction".length - "".length
)}`;
const degree = `Bachelor of Technology${"".padEnd(
  boxWidth - "Bachelor of Technology".length - "2020-2024".length
)}${chalk.white('2020-2024')}`;
const university = `Guru Gobind Singh Indraprastha University${"".padEnd(
  boxWidth -
    "Guru Gobind Singh Indraprastha University".length -
    "9.2/10.0".length
)}${chalk.white('9.2/10.0')}`;
const Education = boxen(`${education}\n\n${degree}\n${university}`, {
  padding: 1,
  margin: 0,
});

// Generate link display with padding
const linkDisplay = links
  .map((link) => {
    const paddedName =
      link.name + "".padEnd(boxWidth - link.name.length - link.url.length);
    return `${paddedName}${link.url}`;
  })
  .join("\n");
// Print the box with links
const linkBox = boxen(linkDisplay, {
  padding: 1,
  margin: 0,
  borderStyle: "round",
  align:'center'
});

///Project Box////

const projectName = `${chalk.bold('AdvantageHub')}${"".padEnd(
  boxWidth - "AdvantageHub".length - "".length
)}`;
const projectDescription = description.map((detail) => chalk.white(`- ${wrapAnsi(detail, boxWidth-4)}`)).join("\n");

const personalProjects = `${chalk.bold('Personal Projects')}${"".padEnd(
  boxWidth - "Personal Projects".length - "".length
)}`;
// 
const projectDetails = `${personalProjects}\n\n${projectName}\n\n${projectDescription}`;

const ProjectBox = boxen(projectDetails, {
  padding: 1,
  margin: 0,
  align:'left',
});

///experience
// Function to format each experience entry
function formatExperience(exp) {
  const position = `${chalk.bold(exp.position)}`;
  const companyAndDuration = `${chalk.white(exp.company)}${"".padEnd(
    boxWidth - exp.company.length - exp.duration.length
  )}${chalk.white(exp.duration)}`;
  const details = exp.details
    .map((detail) => chalk.white(`- ${wrapAnsi(detail, boxWidth-4)}`))
    .join("\n");
  return `${position}\n${companyAndDuration}\n\n${details}`;
}

const experienceContent = experienceData.map(formatExperience).join("\n\n");

const ExperienceBox = boxen(experienceContent, {
  padding: 1,
  margin: 0,
  borderStyle: "round",
  align: "left", // Ensure left alignment
  textAlignment: "left", // Use for older versions of boxen
});

function formatListItem(item) {
  return chalk.white(`- ${wrapAnsi(item, boxWidth-4)}`);
}

///responsibilty and technical skills

function formatResponsibility(responsibility) {
  const title = `${chalk.bold(responsibility.title)}${"".padEnd(
    boxWidth - responsibility.title.length - responsibility.duration.length
  )}${chalk.white(responsibility.duration)}`;
  const details = responsibility.details
    .map((detail) => chalk.white(`- ${wrapAnsi(detail, boxWidth-4)}`))
    .join("\n");
  return `${title}\n${details}`;
}

const technicalSkillsContent = [
  chalk.bold("Technical Skills and Interests"),
  "", // Adds a line of space after the heading
  ...technicalSkillsAndInterests.map(formatListItem),
].join("\n");

const positionsOfResponsibilityContent = [
  chalk.bold("Positions of Responsibility"),
  "", // Adds a line of space after the heading
  ...positionsOfResponsibility.map(formatResponsibility),
].join("\n");

const content = [technicalSkillsContent, positionsOfResponsibilityContent].join(
  "\n\n"
);

const SkillsAndResponsibilityBox = boxen(content, {
  padding: 1,
  margin: 0,
  borderStyle: "round",
  align: "left",
});

// Generate the profile card output
const generateOutput = () => {
  const heading = `${data.name} ${data.handle}`;
  const working = `${data.labelWork}  ${data.work}`;
  const twittering = `${data.labelTwitter}  ${data.twitter}`;
  const githubing = `${data.labelGitHub}  ${data.github}`;
  const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
  const output =
    heading +
    "\n\n" +
    working +
    "\n" +
    twittering +
    "\n" +
    githubing +
    "\n" +
    linkedining +
    "\n\n" +
    intro;
  return chalk.green(boxen(output, options));
};
const generateResume=()=>{
  const combinedContent = [
    header,
    Education,
    linkBox,
    ProjectBox,
    ExperienceBox,
    SkillsAndResponsibilityBox
  ].join('\n\n'); // Add new lines between sections
  const centeredContent = combinedContent
    .split('\n')
    .map(line => line.padStart((boxWidth + line.length) / 2).padEnd(boxWidth))
    .join('\n');
  const mainBoxOptions = {
    borderStyle: 'round',
    borderColor: 'green', // Green border
    padding:2,
    margin:1,
    float: 'center',
    // align:'center'
  };

  const mainBox = boxen(centeredContent,mainBoxOptions); 
  console.log(mainBox);
}
const downloadResume = async () => {
  const spinnerResume = ora("Preparing Resume For Download").start();

  try {
    await new Promise((resolve, reject) => {
      const resumeUrl = "https://drive.google.com/uc?export=download&id=1ndRtp0fj3yGA66Fg3LbcZX6SE0sfiY0I";
      const localFileName = "kartikey-resume.pdf";
      const localFilePath = path.join(process.cwd(), localFileName);

      const requestStream = request(resumeUrl);

      requestStream
        .pipe(fs.createWriteStream(localFilePath))
        .on("finish", () => {
          spinnerResume.stop();
          console.log(`\nResume Downloaded at ${localFilePath} \n`);
          open(localFilePath).then(() => resolve()).catch(reject);
        })
        .on("error", (err) => {
          spinnerResume.stop();
          console.error(`\nFailed to download resume: ${err.message}\n`);
          reject(err);
        });

      // Handle process exit (SIGINT)
      process.on('SIGINT', () => {
        spinnerResume.stop();
        requestStream.destroy(); // Gracefully stop download
        console.log('\nDownload interrupted. Exiting...\n');
        process.exit();
      });
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};
const handleCommand = async (command) => {
  switch (command) {
    case "See my Resume 📄":
      const spinner = ora("Fetching Resume.......").start();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      spinner.stop();
      generateResume();
      break;
    case "Send me an Email 📧":
      const spinnerEmail = ora("Fetching Email.......").start();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      spinnerEmail.stop();
      open("mailto:kartikey@example.com");
      console.log("\nDone, see you soon at inbox.\n");
      break;
  }
};

// Main function to run the application
const main = async () => {
  console.log(generateOutput());
  console.log(tip);
  console.log(tip2)
  while (true) {
    // Prompt user to choose a command
    const { command } = await inquirer.prompt([
      {
        type: "list",
        name: "command",
        message: "Select a command:",
        choices: [
          "See my Resume 📄",
          "Send me an Email 📧",
          "Download my Resume ⬇️",
          "exit",
        ],
      },
    ]);

    // Handle the selected command
    if (command === "exit") {
      console.log(chalk.green("Exiting..."));
      break;
    }
    if(command === 'Download my Resume ⬇️'){
      downloadResume();
      break;
    }
    await handleCommand(command);
  }
};

// Run the main function

///data

main();
