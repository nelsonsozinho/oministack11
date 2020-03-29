const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique id', () => {
    it('Shold generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});