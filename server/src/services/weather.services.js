require('../../environment/index');
const axios = require('axios');

const weatherService = {
    getInfoByName: async function (name) {
        let woeid;
        let url = `${process.env.API_SERVICE_URL}/search/?query=${name.query}`;
        await axios.get(url)
            .then(data => woeid = data.data[0].woeid)
            .catch(e => console.log("Error get data", e));
        let info = await this.getInfoByWoeid(woeid)
        return info;
    },

    getInfoByLatlong: async function (latt, long) {
        let woeid;
        let url = `${process.env.API_SERVICE_URL}/search/?lattlong=${latt},${long}`;
        await axios.get(url)
            .then(data => woeid = data.data[0].woeid)
            .catch(e => console.log("Error get data", e));
        let info = await this.getInfoByWoeid(woeid)
        return info;
    },

    getInfoByWoeid: async function (woeidId) {
        let info
        let url = `${process.env.API_SERVICE_URL}/${woeidId}`;
        await axios.get(url)
            .then(data => info = data.data)
            .catch(e => console.log("Error get data", e));
        return info;
    }
}

module.exports = weatherService;