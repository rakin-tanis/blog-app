import app from "./app";
import { serverConfig } from "./config/databaseConfig";

const PORT = serverConfig.host || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
