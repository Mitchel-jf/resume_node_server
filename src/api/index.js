import { Router } from 'express';
import path from 'path';

export default () => {
    let api = Router();
    api.get('/', function (req, res) {
        console.log(path.join(__dirname, 'flutter_web'))
        res.sendFile(__dirname.split('dist')[0], 'flutter_web', 'index.html')
    });
    return api;
}