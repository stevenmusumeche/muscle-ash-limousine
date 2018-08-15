import * as crypto from "crypto";

var id = crypto.randomBytes(40 * 1000).toString("hex");
console.log(id);
