const fs = require('fs')
const dataPath = './Control.json'

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
        fs.writeFileSync(dataPath, rawdata);
    }
}

module.exports = Data