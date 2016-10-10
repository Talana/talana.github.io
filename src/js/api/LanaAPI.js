 const LanaAPI = {

    lanas: [],

    removeLana: (lana) => {
        LanaAPI.lanas.splice(LanaAPI.lanas.findIndex(i => i === lana), 1);
    },

    findLana: (lana) => {
        return LanaAPI.lanas.findIndex(_lana => +_lana.id === +lana.id);
    },

    findLanaWithId: (id) => {
        let idx = LanaAPI.lanas.findIndex(_lana => +_lana.id === +id);
        return LanaAPI.lanas[idx];
    },

    addLana: (lana) => {
        const _lana = LanaAPI.findLana(lana);
        if(_lana === -1) {
            LanaAPI.lanas.push(Object.assign({size: 1}, lana));
        }
    },

    getLanas() {
        return LanaAPI.lanas.map( lana => {
            return Object.assign({}, lana, LanaAPI.lanas.find(cLana => cLana.id === lana.id))
        })
    },

    init() {
    }
}

LanaAPI.init();

export default LanaAPI;
