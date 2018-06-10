var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('It should generated correct message', () => {
        var from = 'Sai';
        var text = 'Hello';
        var message = generateMessage('Sai', 'Hello');
        expect(message.createdAt).toBeA('number');

        expect(message).toInclude({
            from,
            text
        });
    })
})