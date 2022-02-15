const mod = require('./mod');

test('1 + 2 = 3', () => {
    expect(mod.add(1, 2)).toBe(3);
})

// not.toBe
test('1 + 2 != 4', () => {
    expect(mod.add(1, 2)).not.toBe(5);
})

// object 비교하려면 toEqual 써야함
test('compare object', () => {
    const obj = {
        name: 'choi',
        age: 27
    }
    expect(mod.createObj()).toEqual(obj);
})

// 정규식 - toMatch
test('is I in String', () => {
    expect('I am Korean').toMatch(/I .+/);
})

test('is throwing error', () => {
    const throwError = () => {
        throw new Error('aaaa');
    }

    expect(() => throwError()).toThrow(); // pass
    expect(() => throwError()).not.toThrow('bbbb'); // fail
    expect(() => throwError()).toThrow('aaaa'); // pass
})

/**
 * matchers
 * 이 외에도
 * toBeNull
 * toBeUndefined
 * toBeDefined
 * toBeTruthy
 * toBeFalsy
 * 
 * [numbers]
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 * toBeLessThan
 * toBeLessThanOrEqual
 * 
 * [float]
 * toBeCloseTo
 * 
 * [regex]
 * toMatch
 * 
 * [iter / array]
 * toContain
 */