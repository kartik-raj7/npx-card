# NPX_CARD

The NPX Card project is a terminal-based tool designed to showcase user profiles in an aesthetically pleasing and functional manner. Leveraging Node.js and various libraries, this project aims to create a personalized, interactive terminal card that presents essential information in a concise and visually appealing format.

## Project Goals:

- Showcase Professional Information : Provide a clear, organized display of a user’s professional profile, including education, experience, and skills.
- Enhance Terminal Usability: Improve the way users present their profiles in the terminal, making it easy to read and visually appealing.
- Personalization: Allow users to customize their cards with various details and styling options to match their personal branding.

### Libraries Used
- chalk: For styling and coloring terminal output.
- boxen: To create stylized boxes for the terminal output.
- inquirer: Provides interactive command-line prompts.
- ora: Displays loading spinners during asynchronous operations.
- path: For handling file paths.
- open: Opens URLs and files.
- request: For HTTP requests to download files.
- fs: To handle file system operations.
- wrap-ansi: Wraps long lines of text to fit within a specified width.

### Commands

- See my Resume 📄: Displays the user's resume in the terminal.
- Send me an Email 📧: Opens the default email client to send an email to the user.
- Download my Resume ⬇️: Downloads the resume PDF from a specified URL.
- exit: Exits the application.

### Functions

- generateOutput: Creates the main profile card output.
- generateResume: Assembles and centers the full resume content in a box with a green border.
- downloadResume: Handles the download of the resume PDF.
- handleCommand: Processes user commands and performs actions such as viewing the resume or sending an email.

## Screenshots

![](/Images/image1.png)
![](/Images/image2.png)
![](/Images/image3.png)
![](/Images/image4.png)

## Getting Started

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kartik-raj7/npx-card
   
### Support the Project

If you found this project useful, please consider giving it a star on GitHub. Your support helps to keep the project alive and encourages further development.

⭐️ Star this repository

Thank you for your support!

Special thanks to [Jack Boberg](https://github.com/jackboberg) for the insightful article, [Open Source OSS NPX Business Card](/https://studioelsa.se/blog/open-source-oss-npx-business-card/), which served as a valuable resource and inspiration for developing this project. Your work greatly contributed to the creation of the NPX Card.
