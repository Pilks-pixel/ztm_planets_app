import { createServer } from "node:http";

import app from "./app.ts";

const port = process.env.PORT || 8000;
const server = createServer(app);

server.listen(port, function () {
  console.log(`Example server listening on port ${port}`);
});
