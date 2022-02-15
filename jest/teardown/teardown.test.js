describe('test1', () => {
    // test 통틀어서 전 후에 실행됨
    beforeAll(() => {
        console.log('t1 before All')
    })
    // test 전 후에 각각 실행됨
    beforeEach(() => {
        console.log('t1 before each');
    })
    afterEach((() => {
        console.log('t1 after each');
    }))

    test('test1-1', () => {
        expect(1).toBe(1);
    })

    test('test1-2', () => {
        expect(1).toBe(1);
    })
})

describe('test2', () => {
    test('test2-1', () => {
        expect(1).toBe(1);
    })

    test('test2-2', () => {
        expect(1).toBe(1);
    })
})

// 하나만 실행할 때
test.only('this will be the only test that runs', () => {
    expect(true).toBeTruthy();
  });