import {
    ApiCredentials
} from "../ApiCredentials";

import {
    AirtimeApi
} from "../../node-sdk-airtime/src/Airtime";

import {
    Environment
} from "../../node-sdk-core/src/Core";

import express = require('express');
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);

    try {
        var operation = await api.promotions()
    } catch (err) {
        res.send(err);
    }

    var request = operation.getById(BigInt(5665))

    var result = await request.execute();
    res.send(result);
});

export default router;
