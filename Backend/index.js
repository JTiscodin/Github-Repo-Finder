import  express  from "express";
import { Octokit } from "octokit";
import cors from "cors";
const app = express();
app.use(cors());

const octokit = new Octokit({
  auth: "githubAuthToken",
});

app.get("/:id", (req, res) => {
  const id = req.params.id;

  const repos = []
  const  result =  octokit.request(`GET /users/${id}/repos`, {
    username: "octokit",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((result) => {
    result.data.forEach(async (repo) => {
      const repoDetails = {
        name: repo.name,
        forks: repo.forks,
        stars: repo.stargazers_count,
      }
        await repos.push(repoDetails)
        
    });
    res.send(repos)
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
