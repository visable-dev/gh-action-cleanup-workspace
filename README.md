# Cleanup GitHub Workspace Action
This GitHub action will clean up the runner workspace to avoid dirty filesystem issues on the self-hosted runners.

Open GitHub issues:
- https://github.com/actions/runner/issues/691
- https://github.com/actions/checkout/issues/211

## Example Usage
This GitHub action should be defined before the `actions/checkout` and the `actions/cache` to clean up the workspace.

```yaml
name: Pull Request Pipeline

on:
  pull_request:
    branches:
      - main
jobs:
  test:
    runs-on: self-hosted
    steps:
      - uses: visable-dev/gh-action-cleanup-workspace@v1
      - uses: actions/checkout@v2
      - uses: actions/cache@v2
      ...
```
