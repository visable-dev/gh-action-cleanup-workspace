const core = require('@actions/core');

try {
  const { exec } = require("child_process");

  async function cleanup() {
    const directory = core.getInput('directory');

    exec(`rm -rf ${directory}*`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          core.setFailed(error.message)
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }
    
  cleanup();
} catch (error) {
  core.setFailed(error.message);
}
