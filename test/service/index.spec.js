import { expect } from "chai";
import hello from "../../src/service";

describe('service test', () => {
    it("should be a string", () => {
        expect(hello()).to.be.a('string');
    })
})