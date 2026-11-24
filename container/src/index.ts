import express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send(`Hi! ECS + ECR + FARGATE!`);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`The app is listening on port ${PORT}.`));
