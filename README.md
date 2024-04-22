# 2fa
Blockchain-Based Two-Factor Authentcaton

Below is a template for your `README.md` file tailored to your Ethereum-based OTP Smart Contract project. This README includes sections that provide an overview of the project, detailed installation instructions, and a usage guide to help users get started with your smart contract and client application.

---

# Ethereum OTP Smart Contract

## Project Overview

This project implements a One-Time Password (OTP) system on the Ethereum blockchain using a smart contract. The smart contract is designed to manage user registrations, store public keys, and generate time-based OTPs for authentication purposes. The aim is to provide a decentralized method of authentication for applications that require secure and reliable user verification.

## Installation Instructions

### Prerequisites

Before you can run this project, you will need:
- Node.js (v14.x or above)
- npm (comes with Node.js)
- MetaMask (or another Ethereum wallet) installed in your browser for interacting with the Ethereum network
- Access to the Rinkeby test network with test ETH (available from a faucet like [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/))

### Setting Up

1. **Clone the repository**

   ```bash
   git clone https://github.com/balu6914/2fa.git
   cd 2fa
   ```

2. **Install dependencies**

   Navigate to the project directory and install the necessary Node.js packages:

   ```bash
   npm install
   ```

3. **Set up your environment variables**

   Rename `.env.example` to `.env` and update the variables to match your configuration:

   ```plaintext
   INFURA_API_KEY=YourInfuraApiKey
   WALLET_PRIVATE_KEY=YourWalletPrivateKey
   CONTRACT_ADDRESS=DeployedContractAddress
   ```

### Deploying the Smart Contract

To deploy the smart contract to the Rinkeby test network:

1. **Compile the contract**

   ```bash
   truffle compile
   ```

2. **Migrate the contract**

   Make sure your MetaMask is active and connected to the Rinkeby network.

   ```bash
   truffle migrate --network rinkeby
   ```

   Note down the contract address provided in the output.

## Usage Guide

### Registering a User

To register a user with the smart contract:

```javascript
node index.js register --username alice --publicKey 0x123... --otpSeed 1234567890
```

### Authenticating a User

To authenticate a user using an OTP:

```javascript
node index.js authenticate --userAddress 0xabc... --otp 987654321
```

### General Commands

- **Compiling the smart contract:**

  ```bash
  truffle compile
  ```

- **Deploying to Rinkeby:**

  ```bash
  truffle migrate --network sepolia
  ```

- **Running the client application:**

  ```bash
  node index.js
  ```



-------Demo------
Transaction receipt: {
  blockHash: '0x49b26c0c10422a271d6c5771826dae415ca87a8832948cefc304965e0bc4289b',
  blockNumber: 5754204,
  contractAddress: null,
  cumulativeGasUsed: 14679264,
  effectiveGasPrice: 642148072,
  from: '0x8c268ccfa6453f6b1686d27b9b98835ce9d262b2',
  gasUsed: 94751,
  logs: [
    {
      address: '0xA5835ae222c810b78Ed5305269d883fACdEc2ea4',
      blockHash: '0x49b26c0c10422a271d6c5771826dae415ca87a8832948cefc304965e0bc4289b',
      blockNumber: 5754204,
      data: '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000005616c69636500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000148c268ccfa6453f6b1686d27b9b98835ce9d262b2000000000000000000000000',
      logIndex: 121,
      removed: false,
      topics: [Array],
      transactionHash: '0x45e20482260bf47ff4facfb1dad232a832a0c80df3449176d7e2d608e91cd156',
      transactionIndex: 102,
      id: 'log_dda22b0f'
    }
  ],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004020000000001000000000000000000000000004000040000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000010000000',
  status: true,
  to: '0xa5835ae222c810b78ed5305269d883facdec2ea4',
  transactionHash: '0x45e20482260bf47ff4facfb1dad232a832a0c80df3449176d7e2d608e91cd156',
  transactionIndex: 102,
  type: '0x0'
}
Authentication receipt: {
  blockHash: '0xb182f79f3157c639fa5e8aeb19d7470af09e50f2f1fddb6a7af575855e1c80d6',
  blockNumber: 5754206,
  contractAddress: null,
  cumulativeGasUsed: 18320262,
  effectiveGasPrice: 644294828,
  from: '0x8c268ccfa6453f6b1686d27b9b98835ce9d262b2',
  gasUsed: 26709,
  logs: [
    {
      address: '0xA5835ae222c810b78Ed5305269d883fACdEc2ea4',
      blockHash: '0xb182f79f3157c639fa5e8aeb19d7470af09e50f2f1fddb6a7af575855e1c80d6',
      blockNumber: 5754206,
      data: '0x0000000000000000000000000000000000000000000000000000000000000000',
      logIndex: 133,
      removed: false,
      topics: [Array],
      transactionHash: '0x1319648a9598b3f1a4612f28c1861efb868892e0f3cc3baa8ad5546625a08473',
      transactionIndex: 74,
      id: 'log_e3ed8412'
    }
  ],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004020000000000000000000000000000000000004000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000800000000000000000000000000000000000000000000000008000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0xa5835ae222c810b78ed5305269d883facdec2ea4',
  transactionHash: '0x1319648a9598b3f1a4612f28c1861efb868892e0f3cc3baa8ad5546625a08473',
  transactionIndex: 74,
  type: '0x0'
}
