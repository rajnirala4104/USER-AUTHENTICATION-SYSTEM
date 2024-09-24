import dotenv from "dotenv";
import { app } from "./app";
dotenv.config({
      path: "./.env",
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
      console.log(`server is running:-  http://127.0.0.1:${port}/`.yellow.bold);
})
