import express from 'express';
import bodyParser from 'body-parser';
import course from '../src/controller/course.controller';
import user from '../src/controller/user.controller';
import api from '../src/controller/api.controller';
import lesson from '../src/controller/lesson.controller';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/course', course);
app.use('/user', user);
app.use('/api', api);
app.use('/lesson', lesson);

app.use((error, req, res, _next) => res.send(error.message));

export default app;
