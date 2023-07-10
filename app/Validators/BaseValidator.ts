export default class BaseValidator {

    static messages = {
        '*':(field, rule) => {
            return `${rule} validation error on ${field}`
          },
          required: '{{ field }} is required',
          number:'EmpId||OrgId can only contain Number type Value!',
          
         
        }
}