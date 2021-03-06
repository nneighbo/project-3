import axios from "axios";

export default {
    
    getStock: function(stock) {
        return axios.get("https://api.iextrading.com/1.0/stock/" + stock + "/batch?types=quote,logo,news")
    },

    getCrypto: function(coin) {
        return axios.get("https://api.iextrading.com/1.0/stock/market/crypto")
    },

    getTodaysEarnings: function() {
        return axios.get("https://api.iextrading.com/1.0/stock/market/today-earnings")
    },

    topFive: function() {
        return axios.get("https://api.iextrading.com/1.0/stock/market/list/gainers")
    },

    botFive: function() {
        return axios.get("https://api.iextrading.com/1.0/stock/market/list/losers")
    },

    userStocks: function(user) {
        return axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=" + user + "&types=quote,news")
    },

    getNews: function() {
        return axios.get("https://api.iextrading.com/1.0/stock/market/news/last/5")
    },

    createAccount: function(userData) {
        return axios.post("/api/stocks", userData);
    },

    login: function(userData) {
        return axios.post("/api/login", userData);
    },

    getuser: function(){
        return axios.get("/api/getuser")
    },

    logout: function(){
        return axios.get("/api/logout")
    },

    addStock: function(stockData){
        return axios.post("/api/addstock", stockData)
    },

    addCoin: function(coinData){
        return axios.post("/api/addcoin", coinData)
    },

    getSaved: function(id){
        return axios.get("/api/getsaved", id)
    },

    removeStock: function(savedData){
        return axios.delete("/api/removestock", { params: savedData })
    }
    
} 