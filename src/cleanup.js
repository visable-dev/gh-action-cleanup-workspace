import core from '@actions/core';
import fs from 'fs';

try {
  fs.readdirSync('.').forEach(file => {
    fs.rmSync(file, { force: true, recursive: true })
  });
} catch(error) {
  core.setFailed(error.message);
}
