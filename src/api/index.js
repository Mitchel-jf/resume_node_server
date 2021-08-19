import { Router } from 'express';
import path from 'path';

export default () => {
    let api = Router();
    api.get('/resume', function (req, res) {
        res.sendFile('/Users/mac/Documents/Projects/Node.js/HNG/resume_node_server/flutter_web/index.html')
    });
    api.get('/error', function (req, res) {
        console.log('hello sam')
        throw new Error('BROKEN');
    });
    return api;
}