const axios = require('axios');

const baseUrl = 'https://alas-backend.herokuapp.com'

const getAuthorizationHeader = (token) => {
    return `Bearer ${token}`
}

// const getUserMainScreen = (user) => {
//     return {
//         username: 'mponsa',
//         balanceLC: 50123.12,
//         balanceDAI: 378.766,
//         userLC: 'ARS',
//         movements:[
//             {
//                 timestamp: '2020-07-23T02:38:55+00:00',
//                 type: 'bank-transfer',
//                 typeDesc: 'Depósito de dinero',
//                 amountLC: 23000.00,
//                 amountDAI: 164.90,
//                 userLC: 'ARS',
//                 extra:{
//                     from: 'Santander Rio'
//                 }
//             },
//             {
//                 timestamp: '2020-07-23T02:38:55+00:00',
//                 type: 'money-sent',
//                 typeDesc: 'Envío de dinero',
//                 amountLC: -3000.00,
//                 amountDAI: -21.43,
//                 userLC: 'ARS',
//                 extra:{
//                     from: 'DAI Wallet',
//                     to: '0x4ac862034d0c4a9860483044836fb1f882b4ccd7',
//                     link: 'https://etherscan.io/tx/0xd6bb8b8ded2f2551cb0f0f83bf2885beb8480d7e14fec86caa2e75370895c5dd'
//                 }
//             },
//             {
//                 timestamp: '2020-07-23T02:38:55+00:00',
//                 type: 'money-transfer',
//                 typeDesc: 'Recepción de dinero',
//                 amountLC: 3000.00,
//                 amountDAI: 21.43,
//                 userLC: 'ARS',
//                 extra:{
//                     from: 'DAI Wallet',
//                     to: '0x4ac862034d0c4a9860483044836fb1f882b4ccd7',
//                     link: 'https://etherscan.io/tx/0xd6bb8b8ded2f2551cb0f0f83bf2885beb8480d7e14fec86caa2e75370895c5dd'
//                 }
//             },
//             {
//                 timestamp: '2020-07-23T02:38:55+00:00',
//                 type: 'payment',
//                 typeDesc: 'Pago',
//                 amountLC: -130,
//                 amountDAI: -0.92,
//                 userLC: 'ARS',
//                 extra:{
//                     to: 'UADE'
//                 }
//             },
//             {
//                 timestamp: '2020-07-23T02:38:55+00:00',
//                 type: 'investment',
//                 typeDesc: 'Inversión',
//                 amountLC: 1300,
//                 amountDAI: 10.076524,
//                 userLC: 'ARS',
//                 extra:{
//                     to: 'compound'
//                 }
//             }
//         ] 

//     }
// }

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


const getUserInvestmentScreen = (user) => {
    return {
        username: 'mponsa',
        balanceLC: 1300.12,
        balanceDAI: 10.076524,
        userLC: 'ARS',
        investmentProviders:[
            {
                protocol: 'compound',
                actualRate: 0.0682,
                balanceLC: 1300,
                balanceDAI: 10.076524,
                interestLC: 3,
                interestDAI: 0.034,
                sinceDate: '2020-07-23T02:38:55+00:00',
                userLC: 'ARS'
            }
        ] 

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

async function makePayment(token,paymentData){
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

module.exports = { getDaiValue,getUserMainScreen,getUserInvestmentScreen,makePayment, assignEthWallet }