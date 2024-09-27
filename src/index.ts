import cli from 'cli-color';
import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from './database/connectDB';
dotenv.config({
      path: "./.env",
});

const port = process.env.PORT || 8000;

(async () => {
      try {
            // BUG: i'm not getting the .env's data.
            console.log(process.env.PORT, process.env.MONGO_URI);

            await connectDB();

            app.on("error", (error: any) => {
                  console.error(error);
                  throw new Error(error);
            });

            app.listen(port, () => {
                  console.log(cli.yellow(`Server is running on port: ${port}`));
            });
      } catch (error: any) {
            console.log("MONGODB connection failed: ", error);
            throw new Error(error);
      }
})();
