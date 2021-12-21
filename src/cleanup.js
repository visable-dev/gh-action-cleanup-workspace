const core = require('@actions/core');

try {
  const { exec } = require("child_process");

  async function cleanup() {

    exec(`ls -la && echo 'Start clean up ...' && find . -mindepth 1 -delete && echo 'Finished' && ls -la`, (error, stdout, stderr) => {
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
