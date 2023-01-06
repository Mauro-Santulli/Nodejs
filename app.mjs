import express from "express";
import "express-async-errors";

const app = express();

//route
app.get("/games", (request, response) => {
  response.json([
    { name: "World of Warcraft" },
    { name: "Diablo 4" }]);
});

export default app;
