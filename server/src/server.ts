import { createServer } from "node:http";

import app from "./app.ts";

const port = process.env.PORT || 8000;
const server = createServer(app);

server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
