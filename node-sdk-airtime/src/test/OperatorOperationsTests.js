"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AirtimeApi_1 = require("../AirtimeApi");
const OperatorFilter_1 = require("../filter/OperatorFilter");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('Operator Operations Tests', function () {
    it('Auto Detect', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var req = operation.autoDetect("+905435554433", "TR");
        var res = await req.execute();
        assert.ok("Turkey" === res.country.name);
    });
    it('Calculate FX Rate', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var req1 = operation.listByCountryCode("GB");
        var res1 = await req1.execute();
        var req2 = operation.calculateFxRate(res1[0].id, 1);
        var res2 = await req2.execute();
        assert.ok(res2.fxRate > 0.5);
        assert.ok(res2.fxRate < 1.5);
    });
    it('Get By ID', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var req1 = operation.listByCountryCode("GB");
        var res1 = await req1.execute();
        var req2 = operation.getById(res1[0].id);
        var res2 = await req2.execute();
        assert.ok(res1[0].id === res2.id);
    });
    it('List', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var req1 = operation.list();
        var res1 = await req1.execute();
        assert.ok(res1.content.length > 0);
    });
    it('List With Filters', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var filter = new OperatorFilter_1.OperatorFilter()
            .includeData(true)
            .includeBundles(true)
            .includeFixedDenominationType(true)
            .includePin(true)
            .includeRangeDenominationType(true)
            .includeSuggestedAmounts(true)
            .includeSuggestedAmountsMap(true);
        var req1 = operation.list(filter);
        var res1 = await req1.execute();
        assert.ok(res1.content.length > 0);
    });
    it('List By Country Code', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId, TestCredentials_1.TestCredentials.ClientSecret);
        var operation = await airtimeApi.operators();
        var req1 = operation.listByCountryCode("TR");
        var res1 = await req1.execute();
        assert.ok("Turkey" === res1[0].country.name);
    });
});
//# sourceMappingURL=OperatorOperationsTests.js.map