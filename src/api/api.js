const axios = require('axios');

const baseUrl = 'https://alas-backend-eu.herokuapp.com'

const getAuthorizationHeader = (token) => {
    return `Bearer ${token}`
}


async function getUserMainScreen(token){
    let config = {
        method: 'get',
        url: baseUrl + '/users/mainScreen',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        }
    }
    try{
        response = await axios(config)
        console.log(`Retrieved main screen data for user: ${response.data.result.username}`)
        return response.data.result
    }catch(error){
        console.log(error.message)
        throw Error("No pudimos cargar tus datos de entrada.")
    }
}


const getUserInvestmentScreen = async (token) => {
    let config = {
        method: 'get',
        url: baseUrl + '/users/investmentsScreen',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        }
    }
    try{
        response = await axios(config)
        console.log(`Retrieved investment screen data for user: ${response.data.result.username}`)
        return response.data.result
    }catch(error){
        console.log(error.message)
        throw Error("No pudimos cargar tus datos de inversiones.")
    }
}

const getInvestmentProviders = async () => {
    let config = {
        method: 'get',
        url: baseUrl + '/rates'
    }
    try{
        response = await axios(config)
        console.log(`Retrieved rates`)
        return response.data.data
    }catch(error){
        console.log(error.message)
        throw Error("No pudimos cargar investment rates.")
    }
}

async function getDaiValue(token){
    let config = {
        method: 'get',
        url: baseUrl + '/price/daiars',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        }
    }
    try{
        response = await axios(config)
        console.log(`Retrieved DAI price: ${response.data.data.buy}`)
        return response.data.data.buy
    }catch(error){
        console.log(error.message)
        return undefined
    }
}

async function assignEthWallet(token){
    console.log("Assigning ETH wallet for User.")
    let config = {
        method: 'post',
        url: baseUrl + '/wallet/assign',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        },
        body:{}
    }
    try{
        response = await axios(config)
        console.log(`ETH Wallet assigned successfully: ${response.data.data.wallet}`)
        return response.data.data.address
    }catch(error){
        console.log(error.message)
        return undefined
    }
}

async function makeTransaction(token,paymentData){
    const config = {
        method: 'post',
        url: baseUrl + '/transactions',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        },
        data:paymentData
    }
    try{
        response = await axios(config)
        return response.data
    }catch(error){
        console.log(error.message)
        return 500
    }
}

async function getUserBankAccounts(user){
    return [{
       owner: user.userData.fullName,
       entity: 'Santander Rio',
       cbu: '3220001823000055910025',
       alias: 'BOCHA.NUEZ.DURO'
    }]
    
}


async function getUserWallet(token, accountData){
    let config = {
        method: 'get',
        url: baseUrl + '/wallet',
        headers: {
            'Authorization': getAuthorizationHeader(token)
        }
    }
    try{
        response = await axios(config)
        console.log('Retrieved user wallet')
        return response.data.data.wallet
    }catch(error){
        console.log(error.message)
        return undefined
    }
}

module.exports = { getDaiValue,getUserMainScreen,getUserInvestmentScreen,makeTransaction,getInvestmentProviders, assignEthWallet, getUserBankAccounts, getUserWallet}