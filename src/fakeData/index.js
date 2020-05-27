import employee from "./employee";

const fakeData = [...employee];

const shuffle = item => {
    for (let i = item.length; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [item[i - 1], item[j]] = [item[j], item[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;