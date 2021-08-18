import { Router } from 'express';
import RESPONSE from '../helpers/@response';
import test_data from '../service/test_data';
export default () => {
    let api = Router();
    let apiResp;
    api.post('/test_data', function (req, res) {
        test_data()
        .then(data => { apiResp = RESPONSE.passed(data); res.status(apiResp.code).json(apiResp); })
        .catch(err => { apiResp = RESPONSE.failed(err); res.status(apiResp.code).json(apiResp); })
    });
    api.get('/error', function (req, res) {
        console.log('hello sam')
        throw new Error('BROKEN');
    });
    return api;
}