import Validator from "validatorjs";
import RESPONSE from '../../helpers/@response';
class Validation {
    constructor() {
        this.rules;
        this.apiResp;
    }
    setRules(rules) {
        this.rules = rules
    }
    validate(data) {
        let input = new Validator(data, this.rules)
        if (input.passes()) {
            this.apiResp = RESPONSE.passed();
            return true
        } else {
            let errorObject = this.arrangeError(input.errors.errors);
            this.apiResp = RESPONSE.failed(errorObject);
            this.apiResp.data.message = 'Invalid request body';
            return false
        }
    }
    arrangeError(error) {
        let resp = {};
        for (let key in error) { resp[key] = `${error[key]}`; }
        return resp;
    }
}
export default Validation
