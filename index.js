#!/usr/bin/env node

'use strict';

import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import ora from 'ora';
import path from 'path';
import open from 'open';
import request from 'request';
import fs from 'fs';

// Define the options for boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  float:'center'
};
const Resumeoptions = {
  padding: 1,
  borderStyle: 'round',
  float:'center',
  color:'green'
};

// Define the profile data
const data = {
  name: chalk.white('Kartikey Gupta /'),
  handle: chalk.cyan('kartikey'),
  work: chalk.white('Software Developer'),
  twitter: chalk.cyan('https://twitter.com/kartikey20gupta'),
  github: chalk.cyan('https://github.com/kartikey20gupta'),
  linkedin: chalk.cyan('https://linkedin.com/in/kartikey20gupta'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
};

// Define the introduction text
const intro = `${chalk.bold("Hi there! I'm Kartikey, I'm a passionate software")}
${chalk.bold("developer with a knack for solving complex problems and")}
${chalk.bold("creating impactful web solutions. My journey in technology")}
${chalk.bold("began with a deep curiosity and has grown into a career where")}
${chalk.bold("I thrive on tackling challenges and delivering results. I have")}
${chalk.bold("a strong foundation in web development, particularly with")}
${chalk.bold("technologies like HTML, CSS, JavaScript, TypeScript, React,")}
${chalk.bold("Next.js, and Redux.")}`;

///
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
      "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");

//resume//
const resume = `

==============================================================================================================================================================
| Kartikey Gupta                                                                                                                              +91 8475008968 |
| Bachelor of Technology                                                                                                          kartikeygupta201@gmail.com |
| Guru Gobind Singh Indraprastha University                                                                               Github: github.com/kartikey20gupta |
==============================================================================================================================================================
|Education                                                                                                                                                   |         
|Bachelor of Technology in Information Technology'                                                                                                  2020-2024|             
|Guru Gobind Singh Indraprastha University'                                                                                                          9.2/10.0|
-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                            |
|${chalk.bold('Links')}                                                                                                                                                       | 
|                                                                                                                                                            |
|  - ${chalk.white('GitHub:')} https://github.com/kartikey20gupta                                                                                                              |
|  - ${chalk.white('LinkedIn:')} https://linkedin.com/in/kartikey20gupta                                                                                                       |
|  - ${chalk.white('LeetCode')}  https://leetcode.com/u/kartik-raj7/                                                                                                           |
|  - ${chalk.white('GFG')} https://www.geeksforgeeks.org/user/kartikeyrajgupta007/                                                                                             |
|  - ${chalk.white('Codeforces')} https://codeforces.com/profile/kartik_raj7                                                                                                   |
|  - ${chalk.white('Codechef')} https://www.codechef.com/users/kartik_raj7                                                                                                     |
|                                                                                                                                                            |
|${chalk.bold('Personal Projects')}                                                                                                                                           |
|                                                                                                                                                            |
|${chalk.white('AdvantageHub')}                                                                                                                                                |                       
|                                                                                                                                                            |
|  - ${chalk.white('Designed a platform for all Ad related needs with intuitive UI for clients, advertisers, and content creators.')}                                          |
|  - ${chalk.white('Implemented an admin console for user management.')}                                                                                                       |
|  - ${chalk.white('Integrated Cloudinary to reduce load time, enabling seamless upload capabilities for advertisers and content creators.')}                                  |
|  - ${chalk.white('Integrated NodeCron for automating ad management processes and utilized JWT for authentication.')}                                                         |
|  - ${chalk.white('Technology Used: HTML, SCSS, Javascript, React, Redux, Thunk, AntDesign, ExpressJS, MongoDB & Nodejs.')}                                                   |
|                                                                                                                                                            |
|                                                                                                                                                            |
|============================================================================================================================================================|
|${chalk.bold('Experience')}                                                                                                                                                  |
|                                                                                                                                                            |
| ${chalk.white('SDE1, Yoxaz, Remote (March 2024 - June 2024)')}                                                                                                               |
|                                                                                                                                                            |
|  - ${chalk.white('Developed a matrimonial website featuring persistent login, OTP verification, Razorpay payment integration, and caching')},                                |
|    ${chalk.white('using TanStack’s useQuery and integrated Google and Facebook authentication for')}                                                                         |
|    ${chalk.white('seamless signup and login functionality leveraging Firebase.')}                                                                                            |
|  - ${chalk.white('Engineered an Administrative Portal within the Matrimonial Website, empowering functionalities such as profile approval,')},                               |
|    ${chalk.white('notification management, user blocking, and data visualizations.')},                                                                                       |
|  - ${chalk.white('Engineered an interactive website featuring a custom request form')}                                                                                       |
|  - ${chalk.white('interactive website featuring a custom request form, comprehensive past project showcase, and client-specific history')}                                   |
|    ${chalk.white(' display, resulting in a 40% increase in user engagement and a 25% boost in lead generation.')}                                                            |
|                                                                                                                                                            |
|${chalk.white('Software Engineering Internship, Grull, Remote (Nov 2023 - Jan 2024)')}                                                                                        |
|                                                                                                                                                            |
|  - ${chalk.white('Crafted a visually compelling website with Framer Motion and Three.js, showcasing Grull’s client projects,')}                                              |
|     ${chalk.white( 'resulting in 32% improvement in user interactions.')}                                                                                                     |
|  - ${chalk.white('Resolved bugs and conducted API integrations to ensure seamless functionality and user experience on the existing website.')}                              |
|     ${chalk.white(' Improved SEO and reduced load time by 26%.')}                                                                                                            |
|                                                                                                                                                            |
|${chalk.white('Software Engineering Internship, Enalo, Remote (July 2023 - Nov 2023)')}                                                                                       |
|                                                                                                                                                            |
|  - ${chalk.white('Developed Chrome Extension which generates Guidesteps by tracking user clicks and capturing screenshots real-time.')}                                      |
|  - ${chalk.white('Implemented content scripting strategies using message passing to capture and analyze user clicks across various tab pages.')}                             |
|  - ${chalk.white('Revamped the Login Page, Payouts Dashboard completely and resolved bugs affecting 38% of users.')}                                                         |
|  - ${chalk.white('Crafted the Contacts Module and rectified bugs across the entire frontend codebase.')}                                                                     |
|                                                                                                                                                            |
==============================================================================================================================================================
|${chalk.bold('Technical Skills and Interests')}                                                                                                                              |
|                                                                                                                                                            |
|  - ${chalk.white('Languages: C/C++, Javascript, HTML+CSS, Typescript')}                                                                                                      |
|  - ${chalk.white('Libraries: ReactJs, Redux, NextJS, MaterialUI, Antdesign, NextUI, TailwindCss, ChakraUI, Framermotion, Tansstack')}                                        |
|  - ${chalk.white('Web Dev Tools: Nodejs, ExpressJs, VScode, Git, Github')}                                                                                                   |
|  - ${chalk.white('Frameworks: ReactJs, NextJs')}                                                                                                                             |
|  - ${chalk.white('Cloud/Databases: MongoDb, Firebase')}                                                                                                                      |
|  - ${chalk.white('Relevant Coursework: Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System')}                           |
|  - ${chalk.white('Areas of Interest: Web Design and Development')}                                                                                                           |
|  - ${chalk.white('Soft Skills: Analytical thinking, Self-learning, Presentation, Leadership, Teamwork')}                                                                     |
|                                                                                                                                                            |
|${chalk.bold('Positions of Responsibility')}                                                                                                                                 |
|                                                                                                                                                            |
|${chalk.white('President, Codechef ADGITM (August 2022 - September 2023)')}                                                                                                   |
|- ${chalk.white('Organized Live The Code and DSA Carnival events, attracting over 5k participants.')}                                                                         |
|- ${chalk.white('Spearheaded the growth of the Codechef ADGITM YouTube channel from 70 to 2.5k+ subscribers, cultivating a robust coding culture')}                           |
|${chalk.white('within the college community.')}                                                                                                                               |
==============================================================================================================================================================                 
`;

// Generate the profile card output
const generateOutput = () => {
  const heading = `${data.name} ${data.handle}`;
  const working = `${data.labelWork}  ${data.work}`;
  const twittering = `${data.labelTwitter}  ${data.twitter}`;
  const githubing = `${data.labelGitHub}  ${data.github}`;
  const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
  const output = heading + '\n\n' +
    working + '\n' +
    twittering + '\n' +
    githubing + '\n' +
    linkedining + '\n\n' +
    intro;
  return chalk.green(boxen(output, options));
  
};
// Function to handle commands
const handleCommand = async (command) => {
  switch (command) {
    case 'See my resume':
      const spinner = ora('Fetching Resume.......').start();
      await new Promise(resolve => setTimeout(resolve, 2000));
      spinner.stop();
      console.log(resume);
      // console.log(boxen(chalk.white(resume)));
      break;
    case 'Send me an email':
      const spinnerEmail = ora('Fetching Email.......').start();
      await new Promise(resolve => setTimeout(resolve, 2000));
      spinnerEmail.stop();
      open("mailto:kartikey@example.com");
      console.log("\nDone, see you soon at inbox.\n");
      break;
    case 'Download my resume':
    const spinnerResume = ora('Preparing Resume For Download').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1ndRtp0fj3yGA66Fg3LbcZX6SE0sfiY0I';
    const localFileName = 'kartikey-resume.pdf';
    const localFilePath = path.join(process.cwd(), localFileName);
    request(resumeUrl)
        .pipe(fs.createWriteStream(localFilePath))
        .on('finish', () => {
            spinnerResume.stop();
            console.log(`\nResume Downloaded at ${localFilePath} \n`);
            open(localFilePath);
            return ;
        })
        .on('error', (err) => {
            spinnerResume.stop();
            console.error(`\nFailed to download resume: ${err.message}\n`);
        });
        break;
  }
};

// Main function to run the application
const main = async () => {
  console.log(generateOutput());
  console.log(tip)
  while (true) {
    // Prompt user to choose a command
    const { command } = await inquirer.prompt([{
      type: 'list',
      name: 'command',
      message: 'Select a command:',
      choices: [
        'See my resume',
        'Send me an email',
        'Download my resume',
        'help',
        'exit'
      ],
    }]);

    // Handle the selected command
    if (command === 'exit') {
      console.log(chalk.green('Exiting...'));
      break;
    }
    await handleCommand(command);
  }
};

// Run the main function
main();
