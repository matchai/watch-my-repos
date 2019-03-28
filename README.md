<p align="center">
  <img width="128" src="https://user-images.githubusercontent.com/4658208/55198231-97c3b400-518b-11e9-905b-024b8079add3.png">
  <h3 align="center">watch-my-repos</h3>
  <p align="center">Automatically watch my newly created repos</p>
</p>

---

GitHub notification settings don't have the granularity to be able to
automatically watch your own repos without also watching all the other repos you
are given push access to. This will only follow repos you have newly created.

## Setup

### Project setup

1. Create a token with the `repo` scope and copy it. (https://github.com/settings/tokens/new)
1. Fork this repo
1. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
1. Click on "Add Projects" on the sidebar
1. Set up a project with the newly created fork
1. Go to Project Settings > Environment Variables
1. Add the following environment variable:

- **GITHUB_TOKEN:** The GitHub token generated above.
