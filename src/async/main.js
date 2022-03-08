asyncOneSec = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(1);
        }, 1000)
    });
}

asyncTwoSec = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 5000)
    });
}

asyncOneThree = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 10000)
    });
}

const main = () => {
    Promise.all([asyncOneSec(), asyncTwoSec(), asyncOneThree()])
    .then(values => {
        console.log(values);
    })
    .catch(e => alert('server error'));
}

main();