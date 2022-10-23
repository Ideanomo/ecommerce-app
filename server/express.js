import express from 'express';
import bodyParser from "body-parser";
import compress from 'compression';
import cors from 'cors';
import helmet from "helmet";
import path from 'path';
import Template from "../template";

import devBundle from "./devBundle";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

devBundle.compile(app);


app.get('/', (req, res) => {
    res.status(200).send(Template());
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

export default app;