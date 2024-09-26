import cli from 'cli-color';
import dotenv from "dotenv";
import { app } from "./app";
dotenv.config({
      path: "./.env",
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
      console.log(cli.yellow(`server is running:-  http://127.0.0.1:${port}/`));
})
