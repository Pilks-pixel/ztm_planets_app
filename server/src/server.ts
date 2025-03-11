import { createServer } from "node:http";

import app from "./app.ts";

var port = process.env.PORT || 8000;
var server = createServer(app);

server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
