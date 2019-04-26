const csv = require("csvtojson");
const path = require('path')
var fs = require('fs');

const parseData = (filePath) => {

    const loadData = (filePathF, callback) => {
        csv()
            .fromFile(filePathF)
            .then((jsonObj) => {
                callback(jsonObj);
            })
    }

    loadData(filePath, (jsonData) => {
        try {
            fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonData, null, 4))
        } catch (e) {
            console.log(e)
        }

    });
}


parseData(path.join(__dirname, 'customer-data.csv'));