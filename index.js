const Web3 = require('web3');

// Correctly instantiate Web3 with the HttpProvider
const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/2JU0ucV2GsKWA2FJNbDpW1ktGeE'));

// Inserted ABI object
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "name": "AuthenticationAttempt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            }
        ],
        "name": "UserRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "otp",
                "type": "uint256"
            }
        ],
        "name": "authenticateUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "generateOTP",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "otpSeed",
                "type": "uint256"
            }
        ],
        "name": "registerUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "otpSeed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0xA5835ae222c810b78Ed5305269d883fACdEc2ea4';
const contract = new web3.eth.Contract(contractABI, contractAddress);

const account = '0x8c268Ccfa6453F6B1686D27B9b98835CE9d262B2';
const privateKey = '1fdd8b676a85c530c0616f443aad116c81634a45c881bdcce3d8dce3af8a4630';

async function registerUser(username, publicKey, otpSeed) {
    const data = contract.methods.registerUser(username, publicKey, otpSeed).encodeABI();
    try {
        const signedTx = await web3.eth.accounts.signTransaction({
            to: contractAddress,
            data,
            gas: 2000000
        }, privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Registration failed:', error);
    }
}

async function authenticateUser(userAddress, otp) {
    const data = contract.methods.authenticateUser(userAddress, otp).encodeABI();
    try {
        const signedTx = await web3.eth.accounts.signTransaction({
            to: contractAddress,
            data,
            gas: 2000000
        }, privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Authentication receipt:', receipt);
    } catch (error) {
        console.error('Authentication failed:', error);
    }
}

(async () => {
    try {
        // Use the provided public key for the user 'alice'
        await registerUser('alice', '0x8c268Ccfa6453F6B1686D27B9b98835CE9d262B2', 1234567890);
        const otp = 987654321; // This should be generated correctly according to the smart contract logic
        await authenticateUser(account, otp);
    } catch (error) {
        console.error('Error executing script:', error);
    }
})();
