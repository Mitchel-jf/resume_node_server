import ValidatorTemplate from '../_template';
let validate = new ValidatorTemplate();

validate.setRules({
    userId: 'required|string',
    userName: 'required|string',
});

export default (data) => new Promise((resolve, reject) => {
    validate.validate(data) ?
        resolve(validate.apiResp) :
        reject(validate.apiResp);
})