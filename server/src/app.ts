import express from 'express';
import bodyParser from 'body-parser';
import course from '../src/controller/course.controller';
import user from '../src/controller/user.controller';
import api from '../src/controller/api.controller';

const app = express();

app.use(bodyParser.json());
app.use('/course', course);
app.use('/user', user);
app.use('/api', api);

app.use((error, req, res, _next) => res.send(error.message));

export default app;