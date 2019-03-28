require("dotenv").config();
const Octokit = require("@octokit/rest");
const differenceInMinutes = require("date-fns/differenceInMinutes");

// Date that CI started
const startingDate = new Date();
const cronFrequency = 15; // in minutes

const octokit = new Octokit({
  auth: `token ${process.env.GITHUB_TOKEN}`
});

async function main() {
  const myRepos = await octokit.repos.list({
    affiliation: "owner",
    sort: "created"
  });

  for (const repo of myRepos.data) {
    if (minutesSinceRepoCreation(repo) > cronFrequency) {
      console.log(`${repo.full_name} is more than ${cronFrequency} minutes old.`);
      break;
    }
    try {
      await watchRepo(repo);
      console.log(`${repo.full_name} is now being watched.`);
    } catch (error) {
      console.error(`Unable to update repo subscription.\n${error}`);
    }
  }
}

function minutesSinceRepoCreation(repo) {
  const repoCreatedDate = new Date(repo.created_at);
  return differenceInMinutes(startingDate, repoCreatedDate);
}

async function watchRepo(repo) {
  return octokit.activity.setRepoSubscription({
    owner: repo.owner.login,
    repo: repo.name,
    subscribed: true
  });
}

(async () => {
  await main();
})();
