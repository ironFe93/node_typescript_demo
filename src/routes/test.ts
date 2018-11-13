import Express from "express";
const routes = Express.Router();
import Comercio from '../models/comercio';

routes.post('/internalError', async (req, res, next) => {
    try {
        //triggers an internal error
        throw new Error('testing errors');

    } catch (error) {
        next(error);
    }
});

routes.post('/getById', async (req, res, next) => {
    try {
        const id = req.body.id;
        const comercio = await Comercio.findByPrimary(id);
        res.send(comercio);
    } catch (error) {
        next(error);
    }
});

export default routes;