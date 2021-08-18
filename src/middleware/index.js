require('dotenv').config();
import { Router } from 'express';
import VALIDATE_TEST_DATA from './validation/route/test_data';
export default () => {
    let routes = Router();
    routes.all('/test_data', function (req, res, next) {
        VALIDATE_TEST_DATA(req.body)
            .then(() => { next(); })
            .catch(err => { res.status(err.code).send(err); })
    })
    return routes;
}