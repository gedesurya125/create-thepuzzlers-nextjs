// index.js

const { execSync } = require("child_process");
const { program } = require("commander");
const packageJson = require("./package.json");

const repoUrl =
  "https://github.com/gedesurya125/thepuzzlers-next-js-starter.git";

program
  .version(packageJson.version)
  .arguments("<project-name>")
  .action((projectName) => {
    if (!projectName) {
      console.error("Please provide a project name");
      process.exit(1);
    }

    console.log(
      `Creating a new The Puzzlers Next.js project in ${projectName}`
    );
    execSync(`git clone ${repoUrl} ${projectName}`);
    execSync(`rm -rf ${projectName}/.git`);
    execSync(`cd ${projectName} && yarn install`);
    console.log(`Project ${projectName} created from boilerplate`);
  });

program.parse(process.argv);
