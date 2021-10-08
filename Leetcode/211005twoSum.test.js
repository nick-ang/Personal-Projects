const rewire = require("rewire")
const _211005twoSum = rewire("./211005twoSum")
const twoSum = _211005twoSum.__get__("twoSum")
// @ponicode
describe("twoSum", () => {
    test("0", () => {
        let result = twoSum([10, 0, -10], 0)
        expect(result).toEqual([1])
    })
})
