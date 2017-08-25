const moment = require('moment');

module.exports.templateTags = [{
    name: 'future',
    displayName: 'Future Timestamp',
    description: 'Return Future Timestamp',
    args: [
        {
            displayName: 'Number',
            description: 'Amount',
            type: 'number',
            defaultValue: 1
        }, 
        {
            displayName: 'Unit',
            description: 'Time/Date unit',
            type: 'string',
            defaultValue: 'hour'
        }, 
        {
            displayName: 'Format',
            description: 'Time/Date format',
            type: 'string',
            defaultValue: null
        }
    ],
    async run (context, number, unit, format) {
        return moment().add(number,unit).format(format);
    }
}];
