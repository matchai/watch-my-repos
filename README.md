<p align="center">
  <h3 align="center">watch-my-repos</h3>
  <p align="center">Automatically watch my newly created repos</p>
</p>

---

## Setup

### Prep work

1. Create a token with the `repo` scope and copy it. (https://github.com/settings/tokens/new)

### Project setup

1. Fork this repo
1. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
1. Click on "Add Projects" on the sidebar
1. Set up a project with the newly created fork
1. Go to Project Settings > Environment Variables
1. Add the following environment variable:

- **GITHUB_TOKEN:** The GitHub token generated above.
