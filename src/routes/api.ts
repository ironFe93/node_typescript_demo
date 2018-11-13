import Express from "express";
const routes = Express.Router();
//const passport = require('../config/passport-config');

import testRoute from './test';
routes.use('/test', testRoute);

//routes.use('/bill', passport.authenticate('jwt', { session: false }),  testing);

export default routes;