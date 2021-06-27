import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

import { authenticationRouter } from "./routes/authentication.routes";

const app = express();
app.use(cors({ origin: true }));
app.use("/v1", authenticationRouter);

exports.api = functions.region("europe-west3").https.onRequest(app);
