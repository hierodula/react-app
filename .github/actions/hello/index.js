const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug('Debugging action');
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());
  core.startGroup('github');
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
} catch (e) {
  core.setFailed(e.message);
}
