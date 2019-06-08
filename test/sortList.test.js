const { sortList } = require('../index');
const chai = require('chai');
const expect = chai.expect;


describe('Sort List function', () => {
    it('should sort an array correctly', () => {
        // define inputs
        const inputArray = [4, 3, 5, 2, 6, 1];

        // invoke the function
        const arr1 = sortList(inputArray);

        // define expected answer
        const arr2 = [1, 2, 3, 4, 5, 6];

        expect(arr1).to.deep.equal(arr2)
    });

    // The function in index.js throws an error but
    // this test does not catch it. Why why why???
    it('should throw an error when array has less than two items', () => {
        // define inputs
        const inputArray = [4];

        // set up the function call
        const fn = () => { sortList(inputArray) };

        // assert that exception is thrown
        expect(fn).to.throw();
    });    
});