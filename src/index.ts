import cli from 'cli-color';
import * as dotenv from 'dotenv';
import path from 'path';
import { app } from "./app";
import { connectDB } from './database/connectDB';


dotenv.config({
      path: path.resolve(__dirname, './.env'),
});

const port = process.env.PORT || 8000;

(async () => {
      try {
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
