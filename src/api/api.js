const axios = require('axios').default;

const baseUrl = 'localhost:8080' 

const login = (email,password )  => {

}

const register = (userdata) => {
    
}

export const getUserMainScreen = (user) => {
    return {
        username: 'mponsa',
        balanceLC: 50123.12,
        balanceDAI: 378.766,
        userLC: 'ARS',
        movements:[
            {
                date: '2020-07-23T02:38:55+00:00',
                type: 'bank-transfer',
                typeDesc: 'Depósito de dinero',
                amountLC: 23000.00,
                amountDAI: 164.90,
                userLC: 'ARS',
                extra:{
                    from: 'Santander Rio'
                }
            },
            {
                date: '2020-07-23T02:38:55+00:00',
                type: 'money-sent',
                typeDesc: 'Envío de dinero',
                amountLC: -3000.00,
                amountDAI: -21.43,
                userLC: 'ARS',
                extra:{
                    from: 'DAI Wallet',
                    to: '0x4ac862034d0c4a9860483044836fb1f882b4ccd7',
                    link: 'https://etherscan.io/tx/0xd6bb8b8ded2f2551cb0f0f83bf2885beb8480d7e14fec86caa2e75370895c5dd'
                }
            },
            {
                date: '2020-07-23T02:38:55+00:00',
                type: 'payment',
                typeDesc: 'Pago',
                amountLC: 130,
                amountDAI: 0.92,
                userLC: 'ARS',
                extra:{
                    to: 'UADE'
                }
            },
            {
                date: '2020-07-23T02:38:55+00:00',
                type: 'investment',
                typeDesc: 'Inversión',
                amountLC: 5505,
                amountDAI: 39.29,
                userLC: 'ARS',
                extra:{
                    to: 'UADE'
                }
            }
        ] 

    }
}


export const getUserInvestmentScreen = (user) => {
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