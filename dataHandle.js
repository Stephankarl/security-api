const fs = require('fs')
const dataPath = './data.json'

class Data {
    get() {
        const rawData = fs.readFileSync(dataPath)
        const data = JSON.parse(rawData)
        return data
    }
    update(data) {
        this.store(data)
    }

    store(data) {
        const rawdata = JSON.stringify(data, null, 2);
        fs.writeFile(dataPath, rawdata, (err) => {
            if (err) throw err;
            console.log('Data saved');
        });
    }
}

module.exports = Data