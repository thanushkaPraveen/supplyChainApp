# Supply Chain Smart Contract Project

A decentralized supply chain management system built on Ethereum blockchain using Solidity.

## 🌟 Features
- Product tracking through supply chain stages
- Role-based access control (Manufacturer, Distributor, Retailer)
- Immutable record of transactions
- Event logging for all state changes
- Smart contract ownership management

## 🛠 Tech Stack
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity (0.8.21)
- **Development Framework**: Truffle Suite
- **Local Blockchain**: Ganache
- **IDE**: Visual Studio Code
- **Testing**: Mocha/Chai
- **Wallet Integration**: MetaMask

## 📦 Prerequisites
- Node.js (v18.x recommended)
- npm (v9.x+) or yarn
- Git
- MetaMask browser extension

## 💻 Installation

### 1. Install Core Tools
```bash
# Install Ethereum tools (MacOS)
brew tap ethereum/ethereum
brew install ethereum

# Verify Geth installation
geth version

# Install Node.js (via nvm recommended)
nvm install 18
nvm use 18

# Install Truffle and Ganache globally
npm install -g truffle ganache
```

### 2. VS Code Setup
1. Install [VS Code](https://code.visualstudio.com/)
2. Add these extensions:
   - Solidity by Juan Blanco
   - Ethereum Remix by Remix Project
   - Truffle for VS Code

## 🚀 Project Setup

### 1. Initialize Project
```bash
mkdir supply-chain-project
cd supply-chain-project
truffle init
```

### 2. Configure Truffle
Edit `truffle-config.js`:
```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache default
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
      ),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.21",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
```

### 3. Start Ganache
1. Launch Ganache GUI
2. Create new workspace:
   - Set port to 7545
   - Add project truffle-config.js
3. Copy mnemonic for MetaMask setup

## 🔄 Development Workflow

### 1. Compile Contracts
```bash
truffle compile
```
Or in VS Code: `Cmd+Shift+P` → "Solidity: Compile Current Solidity Contract"

### 2. Run Migrations
```bash
truffle migrate --network development --reset
```

### 3. Start Console
```bash
truffle console --network development
> const instance = await SupplyChain.deployed()
> instance.methods()
```

## 🧪 Testing

### Run Test Suite
```bash
truffle test
```

### Sample Test Structure
```javascript
const SupplyChain = artifacts.require("SupplyChain");

contract("SupplyChain", (accounts) => {
  let [owner, manufacturer, distributor] = accounts;

  beforeEach(async () => {
    instance = await SupplyChain.new();
  });

  it("should create a new product", async () => {
    await instance.createProduct("iPhone15", { from: manufacturer });
    const product = await instance.products(0);
    assert.equal(product.name, "iPhone15");
  });
});
```

## 🌍 Deployment

### 1. Prepare for Live Network
```bash
npm install @truffle/hdwallet-provider dotenv
```

Create `.env` file:
```
MNEMONIC="your wallet mnemonic"
INFURA_API_KEY="your infura key"
ETHERSCAN_API_KEY="your etherscan key"
```

### 2. Deploy to Sepolia
```bash
truffle deploy --network sepolia --reset
```

### 3. Verify on Etherscan
```bash
truffle run verify SupplyChain --network sepolia
```

## 📂 Folder Structure
```
├── contracts/               # Solidity smart contracts
│   ├── SupplyChain.sol      # Main contract
│   └── Migrations.sol       # Truffle migrations
├── migrations/              # Deployment scripts
├── test/                    # Test files
├── build/                   # Compiled artifacts
├── scripts/                 # Utility scripts
├── .gitignore
├── truffle-config.js
└── README.md
```

## 🚨 Troubleshooting

### Common Issues
1. **Port Conflicts**:
   - Ensure Ganache is running on port 7545
   - Check `truffle-config.js` matches Ganache settings

2. **Version Mismatches**:
```bash
# Reset dependencies
rm -rf node_modules package-lock.json
npm install
```

3. **MetaMask Connection**:
   - Use Ganache's network ID (usually 1337)
   - Import accounts using Ganache's private keys

4. **Gas Limit Errors**:
   - Increase gas limit in `truffle-config.js`
   - Reset Ganache workspace

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



---

**Note**: Remember to never commit your `.env` file or sensitive information to version control!
```
