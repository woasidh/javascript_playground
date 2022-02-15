const { TestWatcher } = require("jest");

const fetchDataCallback = (callback) => {
    setTimeout(() => {
        data = 1;
        callback(data);
    }, 1000);
}
// done으로 async 끝나는거 알림
// done 호출안되면 timeout error 남
test('fetch Data by Callback is 1', done => {
    const callback = (data) => {
        // expect statement 테스트 통과못하면 done 호출이 안되므로 try / catch문으로 감쌈
        try{ 
            expect(data).toBe(1);
            done();
        } catch (e) {
            done(e);
        }
    }

    fetchDataCallback(callback);
})

const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}
// return 없으면 promise 반환하기 전에 테스트 끝남 
test('fetch Data by Promise is 1', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe(1);
    })
})

const fetchPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error1');
        })
    })
}
// reject Promise 잡고 싶으면 아래처럼
test('fetch Data by Promise reject by error message "error1"', () => {
    expect.assertions(1);
    return fetchPromiseError().catch(e => expect(e).toMatch('error1'));
})

// resolve 값 테스트 가능
test('fetch Data by Promise resolves 1', () => {
    return expect(fetchDataPromise()).resolves.toBe(1); // await으로도 가능
})
// reject 값 테스트 가능
test('fetch Data by Promise reject by message "error1"', () => {
    return expect(fetchPromiseError()).rejects.toMatch('error1'); //await으로도 가능
})

// await으로 resolve 값 받기
test('await data to be 1', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe(1);
})

// await으로 reject 값 받기
test('await data to reject "error1" error', async () => {
    try {
        const data = await fetchPromiseError();
    } catch (e) {
        expect(e).toMatch('error1');
    }
})