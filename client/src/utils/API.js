import axios from "axios";

export default {
    
    getStock: function(stock) {
        return axios.get("https://api.iextrading.com/1.0/stock/" + stock + "/batch?types=quote,logo,news,chart&range=1y")
    },

    getCrypto: function(coin) {
        return axios.get("https://api.iextrading.com/1.0/stock/" + coin + "/batch?types=quote,logo,news,chart&range=1y")
    }
} 