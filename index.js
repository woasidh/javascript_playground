const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}

const getData = async () => {
    const data = await fetchData();
    console.log('데이터: ', data);
}

getData();