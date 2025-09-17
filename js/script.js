const config = {
    initialTokens: '500000000000000000000', // 500 SMONO in wei
    refreshInterval: 5000,
    zkThreshold: '1000000000000000000000' // 1000 SMONO in wei
};

const SEPOLIA_TESTNET = {
chainId: "0xAA36A7",
chainName: "Ethereum Sepolia Testnet",
nativeCurrency: {
name: "ETH",
symbol: "ETH",
decimals: 18
},
rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/-0kvC2T8jXtU7tcws_2_C5loJbiqlBtt"], // Replace with your Infura/Alchemy RPC URL
blockExplorerUrls: ["https://sepolia.etherscan.io"]
};
const CONTRACT_ADDRESS = "0xa8B6A39e10a249aF33da173C2713e0103c3ACD7d";

const CONTRACT_ABI = [
{
"inputs": [
    {
        "internalType": "address",
        "name": "_zkvContract",
        "type": "address"
    },
    {
        "internalType": "bytes32",
        "name": "_vkHash",
        "type": "bytes32"
    }
],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "points",
        "type": "uint256"
    }
],
"name": "ClaimedXmono",
"type": "event"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "roll",
        "type": "uint256"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPosition",
        "type": "uint256"
    }
],
"name": "DiceRolled",
"type": "event"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
    }
],
"name": "GameStarted",
"type": "event"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }
],
"name": "increaseTotalXmonoSupply",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "penalty",
        "type": "uint256"
    }
],
"name": "LossLanded",
"type": "event"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "reward",
        "type": "uint256"
    }
],
"name": "ProfitLanded",
"type": "event"
},
{
"inputs": [],
"name": "rollDice",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "startGame",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }
],
"name": "Transfer",
"type": "event"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_domainId",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_attestationId",
        "type": "uint256"
    },
    {
        "internalType": "bytes32[]",
        "name": "_merklePath",
        "type": "bytes32[]"
    },
    {
        "internalType": "bytes32",
        "name": "_leaf",
        "type": "bytes32"
    },
    {
        "internalType": "uint256",
        "name": "_leafCount",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
    },
    {
        "internalType": "uint256[3]",
        "name": "input",
        "type": "uint256[3]"
    }
],
"name": "verifyAndClaimXmono",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"anonymous": false,
"inputs": [
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "newTotalSupply",
        "type": "uint256"
    }
],
"name": "XmonoSupplyIncreased",
"type": "event"
},
{
"inputs": [],
"name": "admin",
"outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
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
"name": "balanceOf",
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
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
"name": "claimCount",
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
        "internalType": "address",
        "name": "player",
        "type": "address"
    }
],
"name": "getPlayerPosition",
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
        "internalType": "uint256",
        "name": "position",
        "type": "uint256"
    }
],
"name": "getTile",
"outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    },
    {
        "internalType": "enum SoloMonopoly.TileType",
        "name": "",
        "type": "uint8"
    },
    {
        "internalType": "int256",
        "name": "",
        "type": "int256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "name",
"outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
],
"stateMutability": "view",
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
"name": "nextRequiredSMONO",
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
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
"name": "players",
"outputs": [
    {
        "internalType": "uint8",
        "name": "position",
        "type": "uint8"
    },
    {
        "internalType": "bool",
        "name": "hasStarted",
        "type": "bool"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "symbol",
"outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "totalAwardedXmonoPoints",
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
"inputs": [],
"name": "totalSupply",
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
"inputs": [],
"name": "totalXmonoSupply",
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
"inputs": [],
"name": "vkHash",
"outputs": [
    {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }
],
"stateMutability": "view",
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
"name": "xmonoPoints",
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
"inputs": [],
"name": "zkvContract",
"outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
"type": "function"
}
];

let web3, contract, accounts = [], currentPlayerPosition = 0, gameStarted = false, tileData = [], refreshInterval, autoRefreshEnabled = true;
const BOARD_SIZE = 16;
const tilePositions = [];
for (let i = 0; i < BOARD_SIZE; i++) {
    let left, top;
    if (i < 4) {
        left = 85 - (i * 20);
        top = 85;
    } else if (i < 8) {
        left = 5;
        top = 85 - ((i - 4) * 20);
    } else if (i < 12) {
        left = 5 + ((i - 8) * 20);
        top = 5;
    } else {
        left = 85;
        top = 5 + ((i - 12) * 20);
    }
    tilePositions.push({left: `${left}%`, top: `${top}%`});
}

document.addEventListener('DOMContentLoaded', async () => {
    initializeBoard();
    setupEventListeners();
    await tryAutoConnect();
});

async function tryAutoConnect() {
    if (window.ethereum && window.ethereum.selectedAddress) {
        await initializeWeb3();
    } else if (window.ethereum) {
        await initializeWeb3();
    } else {
        addLogEntry("MetaMask not detected. Please install MetaMask.", 'loss');
    }
}

function startAutoRefresh() {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(async () => {
        if (accounts.length > 0 && contract) {
            await updateGameState();
            await updateUI();
        }
    }, config.refreshInterval);
}

function stopAutoRefresh() {
    if (refreshInterval) clearInterval(refreshInterval);
}

async function initializeWeb3() {
    if (!window.ethereum) {
        alert("Please install MetaMask or another Web3 wallet!");
        addLogEntry("No Web3 wallet detected. Please install MetaMask.", 'loss');
        return;
    }
    try {
        const connectBtn = document.getElementById('connectWallet');
        connectBtn.disabled = true;
        connectBtn.textContent = "Connecting...";
        connectBtn.classList.add('loading');

        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch(err => {
            if (err.code === 4001) {
                throw new Error("User rejected connection request.");
            }
            throw err;
        });

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== SEPOLIA_TESTNET.chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: SEPOLIA_TESTNET.chainId }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [SEPOLIA_TESTNET],
                        });
                    } catch (addError) {
                        addLogEntry(`Failed to add Horizen Gobi Testnet: ${addError.message}`, 'loss');
                        resetConnectButton();
                        return;
                    }
                } else {
                    addLogEntry(`Failed to switch to Horizen Gobi Testnet: ${switchError.message}`, 'loss');
                    resetConnectButton();
                    return;
                }
            }
        }

        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        try {
            await contract.methods.name().call();
        } catch (error) {
            addLogEntry(`Contract error at ${CONTRACT_ADDRESS}: ${error.message}`, 'loss');
            resetConnectButton();
            return;
        }

        await loadTileData();
        await updateUI();
        await updateGameState();
        startAutoRefresh();

        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            updateUI();
            updateGameState();
            addLogEntry("Wallet account changed", 'neutral');
        });

        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });

        setupContractEventListeners();

        connectBtn.textContent = "CONNECTED";
        connectBtn.classList.remove('loading');
        connectBtn.style.backgroundColor = "#4CAF50";
        connectBtn.disabled = true;
        addLogEntry("Wallet connected successfully", 'neutral');
    } catch (error) {
        console.error("Web3 Error:", error);
        addLogEntry(`Error connecting wallet: ${error.message}`, 'loss');
        resetConnectButton();
    }
}

async function loadTileData() {
    tileData = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        try {
            const tile = await contract.methods.getTile(i).call();
            console.log(`Tile ${i}:`, tile);
            tileData.push({
                name: tile[0],
                type: tile[1],
                value: tile[2]
            });
            updateTileVisual(i, tile[0], tile[1]);
        } catch (error) {
            console.error(`Error loading tile ${i}:`, error);
            addLogEntry(`Error loading tile ${i}: ${error.message}`, 'loss');
        }
    }
}

function updateTileVisual(index, name, type) {
    const tile = document.getElementById(`tile-${index}`);
    if (tile) {
        tile.textContent = name || `Tile ${index}`;
        tile.className = 'tile';
        if (type === '1') {
            tile.classList.add('tile-profit');
            tile.innerHTML += ' 💰';
        } else if (type === '2') {
            tile.classList.add('tile-loss');
            tile.innerHTML += ' ⚠️';
        } else {
            tile.innerHTML += ' 🟦';
        }
        console.log(`Updated tile ${index}: name=${name}, type=${type}`);
    }
}

function setupEventListeners() {
    document.getElementById('connectWallet').addEventListener('click', initializeWeb3);
    document.getElementById('rollDiceBtn').addEventListener('click', rollDice);
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('zkClaimBtn').addEventListener('click', zkVerifyAndClaimXmono);
    document.getElementById('autoRefreshToggle').addEventListener('change', (e) => {
        autoRefreshEnabled = e.target.checked;
        if (autoRefreshEnabled) startAutoRefresh();
        else stopAutoRefresh();
    });
    document.getElementById('apiKey').addEventListener('input', updateUI);
    document.getElementById('helpBtn').addEventListener('click', () => {
        document.getElementById('helpModal').style.display = 'block';
    });
    document.getElementsByClassName('close')[0].addEventListener('click', () => {
        document.getElementById('helpModal').style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('helpModal')) {
            document.getElementById('helpModal').style.display = 'none';
        }
    });
}

function setupContractEventListeners() {
    contract.events.GameStarted({}).on('data', event => {
        if (event.returnValues.player.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`Game started! Received ${web3.utils.fromWei(config.initialTokens)} SMONO`, 'neutral');
            gameStarted = true;
            updateGameState();
            loadTileData();
        }
    }).on('error', error => addLogEntry("Error listening to game events", 'loss'));
    contract.events.DiceRolled({}).on('data', event => {
        if (event.returnValues.player.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`Rolled ${event.returnValues.roll}, moved to position ${event.returnValues.newPosition}`, 'neutral');
            updateGameState();
        }
    });
    contract.events.ProfitLanded({}).on('data', event => {
        if (event.returnValues.player.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`+${web3.utils.fromWei(event.returnValues.reward)} SMONO from landing!`, 'profit');
            updateGameState();
        }
    });
    contract.events.LossLanded({}).on('data', event => {
        if (event.returnValues.player.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`-${web3.utils.fromWei(event.returnValues.penalty)} SMONO from landing!`, 'loss');
            updateGameState();
        }
    });
    contract.events.Transfer({}).on('data', event => {
        if (event.returnValues.from === '0x0000000000000000000000000000000000000000' &&
            event.returnValues.to.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`Received ${web3.utils.fromWei(event.returnValues.value)} SMONO`, 'profit');
            updateGameState();
        }
    });
    contract.events.ClaimedXmono({}).on('data', event => {
        if (event.returnValues.player.toLowerCase() === accounts[0].toLowerCase()) {
            addLogEntry(`Claimed XMONO point! Total: ${event.returnValues.points}`, 'profit');
            updateUI();
        }
    });
}

function resetConnectButton() {
    const connectBtn = document.getElementById('connectWallet');
    connectBtn.disabled = false;
    connectBtn.textContent = "CONNECT WALLET";
    connectBtn.classList.remove('loading');
    connectBtn.style.backgroundColor = "";
}

function initializeBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < BOARD_SIZE; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.id = `tile-${i}`;
        tile.style.left = tilePositions[i].left;
        tile.style.top = tilePositions[i].top;
        tile.textContent = `Loading...`;
        tile.addEventListener('click', () => showTileDetails(i));
        board.appendChild(tile);
    }
    const token = document.createElement('div');
    token.className = 'player-token';
    token.id = 'player-token';
    token.style.display = 'none';
    board.appendChild(token);
}

async function rollDice() {
    try {
        document.getElementById('rollDiceBtn').disabled = true;
        document.getElementById('rollDiceBtn').classList.add('dice-animation');
        const diceResult = document.getElementById('diceResult');
        diceResult.style.display = 'block';
        diceResult.textContent = '🎲 Rolling...';
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => setTimeout(resolve, 300));
            diceResult.textContent = `🎲 Rolling... ${i+1}`;
        }
        await contract.methods.rollDice().send({ from: accounts[0], gas: 500000 });
        setTimeout(() => {
            diceResult.style.display = 'none';
            document.getElementById('rollDiceBtn').classList.remove('dice-animation');
        }, 2000);
    } catch (error) {
        console.error("Roll Dice Error:", error);
        addLogEntry(`Error rolling dice: ${error.message}`, 'loss');
        document.getElementById('rollDiceBtn').disabled = false;
        document.getElementById('rollDiceBtn').classList.remove('dice-animation');
        document.getElementById('diceResult').style.display = 'none';
    }
}

async function startGame() {
    try {
        document.getElementById('startGameBtn').disabled = true;
        document.getElementById('startGameBtn').textContent = "Starting...";
        document.getElementById('startGameBtn').classList.add('loading');
        await contract.methods.startGame().send({ from: accounts[0], gas: 500000 });
        document.getElementById('startGameBtn').textContent = "Game Started";
        document.getElementById('startGameBtn').style.backgroundColor = "#4CAF50";
        document.getElementById('startGameBtn').classList.remove('loading');
        document.getElementById('player-token').style.display = 'block';
    } catch (error) {
        console.error("Start Game Error:", error);
        addLogEntry(`Error starting game: ${error.message}`, 'loss');
        document.getElementById('startGameBtn').disabled = false;
        document.getElementById('startGameBtn').textContent = "🚀 START GAME";
        document.getElementById('startGameBtn').classList.remove('loading');
    }
}

async function zkVerifyAndClaimXmono() {
const zkClaimBtn = document.getElementById('zkClaimBtn');
const zkResult = document.getElementById('zkResult');
try {
zkClaimBtn.disabled = true;
zkClaimBtn.textContent = "Processing...";
zkClaimBtn.classList.add('loading');
zkResult.innerHTML = 'Generating proof...';

// Step 1: Fetch inputs from the contract
const tokenBalance = await contract.methods.balanceOf(accounts[0]).call();
const tokenBalanceSMONO = tokenBalance.toString();
const nextRequiredSMONO = (await contract.methods.nextRequiredSMONO(accounts[0]).call()).toString();
const xmonoPoints = (await contract.methods.xmonoPoints(accounts[0]).call()).toString();
console.log("Circuit Inputs:", { funds: tokenBalanceSMONO, nextRequiredSMONO, xmonoPoints });

// Step 2: Generate ZK Proof
const inputs = {
    funds: tokenBalanceSMONO,
    nextRequiredSMONO: nextRequiredSMONO,
    xmonoPoints: xmonoPoints
};
const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    inputs,
    "./monopoly_js/monopoly.wasm",
    "./monopoly_0001.zkey"
);
console.log("Public Signals:", publicSignals);
if (!Array.isArray(publicSignals)) {
    throw new Error(`publicSignals is not an array: ${JSON.stringify(publicSignals)}`);
}
addLogEntry(`Proof generated! Sufficient funds (≥ ${nextRequiredSMONO} SMONO): ${publicSignals[0] === "1" ? 'Yes' : 'No'}`, 'neutral');
if (publicSignals[0] !== "1") {
    throw new Error("Insufficient funds for ZK proof verification");
}

// Step 3: Extract proof components
const pi_a = proof.pi_a.slice(0, 2);
const pi_b = [proof.pi_b[0].slice(0, 2), proof.pi_b[1].slice(0, 2)];
const pi_c = proof.pi_c.slice(0, 2);
if (pi_a.length !== 2 || pi_b.length !== 2 || pi_b[0].length !== 2 || pi_b[1].length !== 2 || pi_c.length !== 2) {
    throw new Error(`Invalid proof format: pi_a=${JSON.stringify(pi_a)}, pi_b=${JSON.stringify(pi_b)}, pi_c=${JSON.stringify(pi_c)}`);
}
console.log("Proof Components:", { pi_a, pi_b, pi_c });

// Step 4: Load verification key and compute vkHash
zkResult.innerHTML += '<br>Loading verification key...';
const vkResponse = await axios.get('./verification_key.json');
const vk = vkResponse.data;
const vkHash = web3.utils.keccak256(JSON.stringify(vk));
console.log("vkHash:", vkHash);
zkResult.innerHTML += '<br>✅ Verification key loaded!';

// Step 5: Verify proof off-chain
zkResult.innerHTML += '<br>Verifying proof off-chain...';
const isValid = await snarkjs.groth16.verify(vk, publicSignals, proof);
if (!isValid) {
    throw new Error("Off-chain verification failed");
}
zkResult.innerHTML += '<br>✅ Off-chain verification succeeded!';

// Step 6: Download proof and public signals for debugging
const proofJson = JSON.stringify({ pi_a, pi_b, pi_c }, null, 2);
const proofBlob = new Blob([proofJson], { type: 'application/json' });
const proofLink = document.createElement('a');
proofLink.href = URL.createObjectURL(proofBlob);
proofLink.download = 'proof.json';
proofLink.click();
const publicJson = JSON.stringify(publicSignals, null, 2);
const publicBlob = new Blob([publicJson], { type: 'application/json' });
const publicLink = document.createElement('a');
publicLink.href = URL.createObjectURL(publicBlob);
publicLink.download = 'public.json';
publicLink.click();

// Step 7: Submit proof to zkVerify
const apiKey = document.getElementById('apiKey').value;
if (!apiKey) {
    throw new Error("zkVerify API key is required");
}
zkResult.innerHTML += '<br>Submitting to zkVerify...';
const params = {
    proofType: "groth16",
    vkRegistered: false,
    chainId: 11155111,
    proofOptions: { library: "snarkjs", curve: "bn128" },
    proofData: { proof: { pi_a, pi_b, pi_c }, publicSignals, vk }
};
const response = await axios.post(`https://relayer-api.horizenlabs.io/api/v1/submit-proof/${apiKey}`, params);
console.log("Proof Submission Response:", response.data);
if (response.data.optimisticVerify !== "success") {
    throw new Error("Proof verification failed, check proof artifacts");
}
const jobId = response.data.jobId;
zkResult.innerHTML += `<br>✅ zkVerify Job ID: ${jobId}`;

// Step 8: Poll zkVerify job status and retrieve attestation details
let attestationId, merklePath, leaf, leafCount, index;
try {
    await new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 36; // Poll for up to 180 seconds
        const statusInterval = setInterval(async () => {
            try {
                attempts++;
                const statusRes = await axios.get(`https://relayer-api.horizenlabs.io/api/v1/job-status/${apiKey}/${jobId}`);
                console.log("Job Status Response:", statusRes.data);
                const status = statusRes.data.status;
                zkResult.innerHTML += `<br>zkVerify Status: ${status}`;

                if (status === 'Aggregated') {
                    clearInterval(statusInterval);
                    const attestationRes = await axios.get(`https://relayer-api.horizenlabs.io/api/v1/job-status/${apiKey}/${jobId}`);
                    console.log("Attestation Response:", attestationRes.data);
                    attestationId = attestationRes.data.aggregationId;
                    merklePath = attestationRes.data.aggregationDetails.merkleProof; // Use the correct variable name
leaf = attestationRes.data.aggregationDetails.leaf;
leafCount = attestationRes.data.aggregationDetails.numberOfLeaves;
index = attestationRes.data.aggregationDetails.leafIndex;
;

                    console.log("Formatted Attestation Details:", { attestationId, merklePath, leaf, leafCount, index });

                    // Save aggregation.json client-side
                    const aggregationData = {
                        aggregationId: attestationId,
                        merkleProof: merklePath,
                        leaf: leaf,
                        numberOfLeaves: leafCount,
                        leafIndex: index
                    };
                    const aggregationJson = JSON.stringify(aggregationData, null, 2);
                    const aggregationBlob = new Blob([aggregationJson], { type: 'application/json' });
                    const aggregationLink = document.createElement('a');
                    aggregationLink.href = URL.createObjectURL(aggregationBlob);
                    aggregationLink.download = 'aggregation.json';
                    aggregationLink.click();

                    zkResult.innerHTML += `<br>✅ Attestation ready! Aggregation ID: ${attestationId}`;
                    addLogEntry(`Attestation ready! Aggregation ID: ${attestationId}`, 'profit');
                    resolve();
                } else if (status === 'Failed' || status === 'Rejected') {
                    clearInterval(statusInterval);
                    reject(new Error(`zkVerify failed: ${status}`));
                } else if (attempts >= maxAttempts) {
                    clearInterval(statusInterval);
                    reject(new Error(`Timeout waiting for zkVerify aggregation after ${attempts * 5} seconds`));
                }
            } catch (error) {
                clearInterval(statusInterval);
                reject(new Error(`Failed to poll job status: ${error.message}, Response: ${JSON.stringify(error.response?.data || {})}`));
            }
        }, 5000);
    });
} catch (error) {
    throw new Error(`Attestation retrieval failed: ${error.message}`);
}

// Step 9: Check ETH balance
const balance = await web3.eth.getBalance(accounts[0]);
console.log("ETH Balance:", web3.utils.fromWei(balance, 'ether'), "ETH");
/*
if (Number(web3.utils.fromWei(balance, 'ether')) < 0.1) {
    throw new Error("Insufficient ETH for gas");
}
*/


// Step 10: Submit to contract with attestation
zkResult.innerHTML += '<br>Submitting proof to contract...';
const inputsForContract = publicSignals.map(signal => signal.toString());

// Validate inputsForContract
if (!Array.isArray(inputsForContract)) {
throw new Error(`inputsForContract is not an array: ${JSON.stringify(inputsForContract)}`);
}
inputsForContract.forEach((input, i) => {
if (!/^\d+$/.test(input)) {
throw new Error(`inputsForContract[${i}] is not a valid number string: ${input}`);
}
});

let domainId = 0;


//let gasLimit = 1000000;

// Ensure merklePath is properly formatted for the contract
const formattedMerklePath = merklePath.map(item => {
if (!web3.utils.isHexStrict(item)) {
console.warn('Invalid hex in merklePath, using zero bytes:', item);
return '0x' + '0'.repeat(64);
}
return web3.utils.padLeft(item, 64);
});

// Manual ABI encoding to bypass web3.js bug
const functionAbi = contract.options.jsonInterface.find(
item => item.name === 'verifyAndClaimXmono' && item.type === 'function'
);

if (!functionAbi) {
throw new Error('Function ABI not found');
}

console.log("Function ABI found:", functionAbi);

// Encode the function call manually
const encodedData = web3.eth.abi.encodeFunctionCall(functionAbi, [
domainId,
attestationId,
merklePath,
leaf,
leafCount,
index,
inputsForContract
]);

console.log("Encoded data:", encodedData);

// Target gas cost of ~0.01 ETH (in Wei)
const TARGET_GAS_COST = web3.utils.toWei('0.01', 'ether'); // 0.01 ETH = 10^16 Wei

// Estimate gas and adjust for target cost
let gasLimit;
try {
const gasEstimate = await web3.eth.estimateGas({
from: accounts[0],
to: contract.options.address,
data: encodedData
});
console.log("Estimated Gas:", gasEstimate);

// Get current gas price
const gasPrice = await web3.eth.getGasPrice();
console.log("Gas Price:", web3.utils.fromWei(gasPrice, 'gwei'), "gwei");

// Calculate current gas cost
const currentGasCost = gasEstimate * gasPrice;
console.log("Estimated Gas Cost:", web3.utils.fromWei(currentGasCost.toString(), 'ether'), "ETH");

// Adjust gasLimit to meet ~0.01 ETH if needed
if (currentGasCost < TARGET_GAS_COST) {
gasLimit = Math.floor(TARGET_GAS_COST / gasPrice * 1.2); // Add 20% buffer
console.log("Adjusted Gas Limit to meet 0.01 ETH:", gasLimit);
} else {
gasLimit = Math.floor(gasEstimate * 1.2); // Use estimated gas with 20% buffer
console.log("Gas Limit (with buffer):", gasLimit);
}
} catch (error) {
console.error("Gas Estimation Error:", error);
addLogEntry(`Gas estimation failed: ${error.message}`, 'loss');
// Fallback to a high gas limit suitable for ZK proof verification
gasLimit = 2000000; // Increased fallback for complex operations
console.log("Using fallback Gas Limit:", gasLimit);
}

// Get gas price (use network average or set a minimum)
let gasPrice = await web3.eth.getGasPrice();
const MIN_GAS_PRICE = web3.utils.toWei('20', 'gwei'); // Minimum 20 Gwei
if (gasPrice < MIN_GAS_PRICE) {
gasPrice = MIN_GAS_PRICE;
console.log("Using minimum Gas Price:", web3.utils.fromWei(gasPrice, 'gwei'), "gwei");
}

// Calculate final gas cost
const finalGasCost = gasLimit * gasPrice;
console.log("Final Gas Cost:", web3.utils.fromWei(finalGasCost.toString(), 'ether'), "ETH");

// Send the raw transaction
try {
const tx = await web3.eth.sendTransaction({
from: accounts[0],
to: contract.options.address,
data: encodedData,
gas: gasLimit,
gasPrice: gasPrice
});
console.log("Transaction successful:", tx.transactionHash);
addLogEntry(`Transaction successful: ${tx.transactionHash}`, 'success');
} catch (error) {
console.error("Transaction Error:", error);
addLogEntry(`Transaction failed: ${error.message}`, 'loss');
}


addLogEntry("XMONO point claimed!", 'profit');
zkResult.innerHTML += '<br>✅ XMONO point claimed!';


zkClaimBtn.textContent = "🔥 ZKVERIFY/Claim XMONO";
zkClaimBtn.classList.remove('loading');
await updateUI();
} catch (error) {
console.error("ZK Error:", error);
let revertMessage = error.message;
if (error.data) {
    revertMessage = error.data.message || JSON.stringify(error.data);
}
if (error.receipt) {
    console.log("Gas Used:", error.receipt.gasUsed);
    console.log("Transaction Receipt:", error.receipt);
}
addLogEntry(`Error in ZK verify/claim: ${revertMessage}`, 'loss');
zkResult.innerHTML = `❌ Error: ${revertMessage}`;
zkClaimBtn.textContent = "🔥 ZKVERIFY/Claim XMONO";
zkClaimBtn.classList.remove('loading');
}
}

async function updateUI() {
    if (accounts.length > 0) {
        document.getElementById('connectWallet').style.display = 'none';
        document.getElementById('walletInfo').style.display = 'block';
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        document.getElementById('walletAddress').textContent = shortAddress;
        try {
            const balance = await web3.eth.getBalance(accounts[0]);
            document.getElementById('somBalance').textContent = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(4);
            const tokenBalance = await contract.methods.balanceOf(accounts[0]).call();
            const requiredWei1 = web3.utils.toWei(tokenBalance.toString(), 'ether');
            document.getElementById('tokenBalance').textContent = parseFloat(web3.utils.fromWei(requiredWei1)).toFixed(2);
            const xmono = await contract.methods.xmonoPoints(accounts[0]).call();
            document.getElementById('xmonoPoints').textContent = xmono;
            const nextReq = await contract.methods.nextRequiredSMONO(accounts[0]).call();
            const requiredWei = web3.utils.toWei(nextReq.toString(), 'ether');
            const zkClaimBtn = document.getElementById('zkClaimBtn');
            document.getElementById('nextRequiredSMONO').textContent = parseFloat(web3.utils.fromWei(requiredWei)).toFixed(2);
            if (new web3.utils.BN(tokenBalance).gte(new web3.utils.BN(nextReq))) {
                zkClaimBtn.disabled = false;
                zkClaimBtn.classList.remove('disabled');
                zkClaimBtn.classList.add('enabled');
            } else {
                zkClaimBtn.disabled = true;
                zkClaimBtn.classList.remove('enabled');
                zkClaimBtn.classList.add('disabled');
            }
        } catch (error) {
            console.error("Update UI Error:", error);
            addLogEntry(`Error updating balances: ${error.message}`, 'loss');
        }
    }
}

async function updateGameState() {
    if (!contract || !accounts[0]) return;
    try {
        const player = await contract.methods.players(accounts[0]).call();
        gameStarted = player.hasStarted;
        if (gameStarted) {
            currentPlayerPosition = await contract.methods.getPlayerPosition(accounts[0]).call();
            document.getElementById('playerPosition').textContent = currentPlayerPosition;
            const token = document.getElementById('player-token');
            token.style.left = tilePositions[currentPlayerPosition].left;
            token.style.top = tilePositions[currentPlayerPosition].top;
            document.getElementById('rollDiceBtn').disabled = false;
            highlightCurrentPosition(currentPlayerPosition);
        }
        document.getElementById('playerStatus').textContent = gameStarted ? "Active" : "Not Started";
        document.getElementById('playerStatus').style.color = gameStarted ? "#4CAF50" : "#F44336";
    } catch (error) {
        console.error("Update Game State Error:", error);
        addLogEntry(`Error updating game state: ${error.message}`, 'loss');
    }
}

function highlightCurrentPosition(position) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        const tile = document.getElementById(`tile-${i}`);
        tile.style.boxShadow = 'none';
        tile.style.zIndex = '1';
    }
    const currentTile = document.getElementById(`tile-${position}`);
    if (currentTile) {
        currentTile.style.boxShadow = '0 0 15px var(--somnia-pink)';
        currentTile.style.zIndex = '10';
    }
}

async function showTileDetails(tileId) {
    try {
        const tileDetails = await contract.methods.getTile(tileId).call();
        console.log(`Tile Details ${tileId}:`, tileDetails);
        const panel = document.getElementById('tileDetails');
        panel.style.display = 'block';
        document.getElementById('tileName').textContent = tileDetails[0];
        let tileType;
        switch(tileDetails[1]) {
            case '0': tileType = "NEUTRAL"; break;
            case '1': tileType = "PROFIT"; break;
            case '2': tileType = "LOSS"; break;
            default: tileType = "UNKNOWN";
        }
        document.getElementById('tileType').textContent = tileType;
        const value = web3.utils.fromWei(tileDetails[2].replace('-', ''));
        document.getElementById('tileValue').textContent = tileDetails[1] === '2' ? `-${value}` : value;
    } catch (error) {
        console.error("Tile Details Error:", error);
        addLogEntry(`Error getting tile details: ${error.message}`, 'loss');
    }
}

function addLogEntry(message, type = 'neutral') {
    const log = document.getElementById('logEntries');
    const entry = document.createElement('div');
    entry.className = `log-entry log-entry-${type}`;
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}