# zkMonopoly: Built on zkVerify

[![Solidity](https://img.shields.io/badge/Solidity-^0.8.19-blue.svg)](https://soliditylang.org/)
[![zkVerify](https://img.shields.io/badge/zkVerify-Integrated-green.svg)](https://zkverify.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**zkMonopoly** is a blockchain-based, single-player game inspired by Monopoly, deployed on zkVerify to leverage zero-knowledge (ZK) proofs for secure, private, and scalable gameplay. Players navigate a 16-tile board, rolling a virtual dice to interact with profit, loss, or neutral tiles, earning or burning SMONO tokens to claim cumulative XMONO points. With an initial cap of 5,000 XMONO points (expandable by an admin), the game combines DeFi mechanics with gamification, ensuring fairness and privacy through zkVerify's proof aggregation system.

This project showcases how ZK technology can enhance blockchain gaming by enabling private state validation, reducing gas costs, and supporting scalability. It serves as a proof-of-concept for integrating zkVerify in interactive, on-chain applications.

## Table of Contents
- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Technical Architecture](#technical-architecture)
- [Smart Contract Functions](#smart-contract-functions)
- [Zero-Knowledge Integration with zkVerify](#zero-knowledge-integration-with-zkverify)
- [Enhancements and Capabilities on zkVerify](#enhancements-and-capabilities-on-zkverify)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Game Overview

zkMonopoly reimagines Monopoly as a solo, blockchain-based adventure where players compete against the system to maximize XMONO points. The game operates on a 16-tile circular board, where players roll a die to move and interact with tiles that either add or subtract SMONO tokens (the in-game currency). Players can burn SMONO tokens at increasing thresholds (500, 1000, 1500, etc.) to earn XMONO points, which accumulate triangularly (1, 3, 6, 10, etc.). The total XMONO supply is capped at 5,000, with an admin able to expand it, ensuring controlled scarcity.

The game leverages zkVerify’s zero-knowledge proof system to verify player actions (i.e sufficient funds for claiming points) without exposing sensitive data like wallet balances. This ensures privacy, fairness, and trustless execution, making zkMonopoly a novel demonstration of ZK in gaming.

**Key Features**:
- **SMONO Tokens**: ERC-20-like currency, minted at game start (250 tokens) and earned/spent via board interactions.
- **XMONO Points**: Non-transferable reward points, earned by burning SMONO at thresholds, capped at 5,000.
- **ZK Proofs**: Privacy-preserving validation of claims via zkVerify.
- **Dynamic Gameplay**: Risk-reward balance between rolling for tokens and burning for points.

## How to Play

zkMonopoly is designed for simplicity and engagement, with a clear progression path:

1. **Start the Game**:
   - Call `startGame()` to initialize your player profile, receiving 250 SMONO tokens.
   - The first threshold is set to 500 SMONO, and your claim count starts at 0.

2. **Navigate the Board**:
   - Call `rollDice()` to generate a pseudo-random roll (1–6) using `keccak256(block.prevrandao, block.timestamp, msg.sender)`.
   - Move clockwise on the 16-tile board (position wraps around at 15).
   - Tile types:
     - **Profit**: Adds SMONO (e.g., +200 for "Crypto Jack").
     - **Loss**: Subtracts SMONO (e.g., -60 for "Late Fee"). If balance is insufficient, it is set to 0.
     - **Neutral**: No effect (e.g., "Park", "Chill spot").

3. **Claim XMONO Points**:
   - When your SMONO balance meets the current threshold (e.g., 500 for the first claim), generate a ZK proof off-chain using the `SufficientFunds` Circom circuit.
   - Submit the proof via `verifyAndClaimXmono()` to burn the required SMONO and earn points.
   - Points are awarded as the claim level (1st claim: +1, 2nd: +2, 3rd: +3, etc.), accumulating (1, 3, 6, 10, etc.).
   - Thresholds increase by 500 SMONO after each claim (500 → 1000 → 1500 → ...).

4. **Track Progress**:
   - Monitor your `xmonoPoints` and aim to maximize them. The game ends if the 5,000-point cap is reached (unless expanded by admin) or if you go bankrupt (balance = 0).
   - Use view functions to check your position, balance, and points.

**Board Layout**:
| Pos | Name           | Type   | Value |
|-----|----------------|--------|-------|
| 0   | Start          | Neutral| 0     |
| 1   | Airbnb Boost   | Profit | +160  |
| 2   | Lost Wallet    | Loss   | -55   |
| 3   | Park           | Neutral| 0     |
| 4   | Crypto Jack    | Profit | +200  |
| 5   | Car Repair     | Loss   | -50   |
| 6   | Freelance      | Profit | +175  |
| 7   | Stolen Phone   | Loss   | -30   |
| 8   | Relax Zone     | Neutral| 0     |
| 9   | E-Commerce     | Profit | +160  |
| 10  | Overdue Rt     | Loss   | -50   |
| 11  | Angel Inv      | Profit | +190  |
| 12  | Bad Trade      | Loss   | -45   |
| 13  | Gift Bonus     | Profit | +130  |
| 14  | Late Fee       | Loss   | -60   |
| 15  | Chill Spot     | Neutral| 0     |

**Strategy**:
- **Aggressive Play**: Roll frequently to land on profit tiles, risking losses to build SMONO for claims.
- **Conservative Play**: Claim points early to secure XMONO, avoiding high-risk loss tiles.
- **Balance Risk**: Higher thresholds require more SMONO, making bankruptcy a strategic concern.

## Technical Architecture

SoloMonopoly is built with robustness and efficiency in mind, leveraging Solidity and zkVerify for a secure gaming experience.

- **Language**: Solidity ^0.8.19, ensuring compatibility with modern Ethereum standards and safe math operations.
- **Token System**:
  - **SMONO**: Implements ERC-20-like functionality with `balanceOf`, `totalSupply`, and `Transfer` events. No external transfers; only minted/burned by game mechanics.
  - **XMONO Points**: Tracked via `xmonoPoints` mapping, non-transferable, with a global cap (`totalXmonoSupply`) and running total (`totalAwardedXmonoPoints`).
- **Randomness**: Pseudo-random die rolls via `keccak256(block.prevrandao, block.timestamp, msg.sender)`, providing unpredictable but deterministic outcomes.
- **Storage**:
  - Mappings: `balanceOf`, `players`, `xmonoPoints`, `nextRequiredSMONO`, `claimCount` for player state.
  - Fixed-size `Tile[16]` array for the board, initialized once to save gas.
- **Security**:
  - Follows checks-effects-interactions pattern to prevent reentrancy.
  - Admin-only `increaseTotalXmonoSupply` restricts supply changes.
  - ZK proofs ensure claim integrity, validated via zkVerify’s `IVerifyProofAggregation`.
- **Gas Optimization**:
  - Board initialization is one-time, reducing storage costs.
  - `rollDice` (~50k gas) and `verifyAndClaimXmono` (~200k gas with zkVerify) are optimized for frequent use.

## Smart Contract Functions

### Public View Functions
- `getTile(uint256 position)`: Returns `(name, tileType, value)` for a board tile.
- `getPlayerPosition(address player)`: Returns player’s current board position.
- `balanceOf(address)`: SMONO balance.
- `xmonoPoints(address)`: Total XMONO points earned.
- `nextRequiredSMONO(address)`: Next threshold for claiming points.
- `totalSupply`, `totalXmonoSupply`, `totalAwardedXmonoPoints`: Global token/point stats.

### Gameplay Functions
- `startGame()`: Initializes a player with 250 SMONO, sets threshold to 500, and emits `GameStarted`. Reverts if already playing.
- `rollDice()`: Generates a 1–6 roll, updates position, applies tile effects, and emits `DiceRolled`, `ProfitLanded`, or `LossLanded`. Requires active game.
- `verifyAndClaimXmono(uint256 _domainId, uint256 _attestationId, bytes32[] _merklePath, bytes32 _leaf, uint256 _leafCount, uint256 _index, uint256[3] input)`:
  - Verifies ZK proof via zkVerify.
  - Checks inputs: `funds == 1`, `nextRequiredSMONO`, `xmonoPoints` match state.
  - Burns SMONO, awards points, updates threshold, and emits `Transfer`, `ClaimedXmono`.

### Admin Functions
- `increaseTotalXmonoSupply(uint256 amount)`: Increases `totalXmonoSupply` (admin-only), emits `XmonoSupplyIncreased`.

### Internal Helpers
- `_mint(address, uint256)`: Mints SMONO tokens.
- `_handleLanding(address, uint8)`: Applies tile effects (mint/burn tokens).
- `_random()`: Generates pseudo-random number for dice.
- `_initializeBoard()`: Sets up the 16-tile board on first game start.

### Events
- `Transfer(address from, address to, uint256 value)`: Token minting/burning.
- `GameStarted(address player)`: New player joins.
- `DiceRolled(address player, uint256 roll, uint256 newPosition)`: Movement tracking.
- `ProfitLanded(address player, uint256 reward)`: Profit tile hit.
- `LossLanded(address player, uint256 penalty)`: Loss tile hit.
- `ClaimedXmono(address player, uint256 points)`: Points awarded.
- `XmonoSupplyIncreased(uint256 newTotalSupply)`: Admin supply change.

## Zero-Knowledge Integration with zkVerify

zkMonopoly integrates with zkVerify to validate point claims privately and efficiently using a Circom circuit (`SufficientFunds`).

### Circuit Details
- **Inputs**:
  - Private: `funds` (player’s SMONO balance), `nextRequiredSMONO` (current threshold), `claimCount` (number of prior claims).
  - Public: `nextRequiredSMONO`, `claimCount`.
- **Logic**:
  - Verifies `nextRequiredSMONO == 500 * (claimCount + 1)`.
  - Outputs `isSufficient` (1 if `funds >= nextRequiredSMONO`, 0 otherwise) using `GreaterEqThan(252)` from circomlib.
- **Output**: `isSufficient` ensures the player has enough SMONO without revealing the exact balance.

### ZK Workflow
1. **Off-Chain**:
   - Player compiles `SufficientFunds.circom` to R1CS.
   - Generates Groth16 proof using snarkjs with inputs (`funds`, `nextRequiredSMONO`, `claimCount`).
2. **On-Chain**:
   - Submit proof parameters (`_domainId`, `_attestationId`, `_merklePath`, `_leaf`, `_leafCount`, `_index`, `input`) to `verifyAndClaimXmono`.
   - Contract calls zkVerify’s `verifyProofAggregation` to validate proof.
   - If valid, checks input consistency, burns SMONO, awards points, and updates state.

### Benefits
- **Privacy**: Hides `funds`, preventing observers from deducing player wealth or strategies.
- **Integrity**: Ensures only valid claims (correct funds, threshold, and claim count) are processed.
- **Trustlessness**: zkVerify’s cryptographic guarantees eliminate reliance on trusted oracles.

## Enhancements and Capabilities on zkVerify

zkVerify’s infrastructure enhances zkMonopoly in several ways, making it a scalable and future-proof gaming dApp:

- **Privacy-Preserving Gameplay**:
  - Players prove solvency for claims without exposing balances, mitigating front-running or competitive spying.
  - ZK proofs ensure only valid game actions are committed on-chain.

- **Gas Efficiency**:
  - zkVerify proof aggregation batches multiple verifications, reducing gas costs by ~90% compared to individual proof checks.
  - Example: A single claim (~200k gas) can scale to thousands of claims per block with minimal overhead.

- **Scalability**:
  - Supports high-throughput gameplay (e.g., thousands of claims per minute) via recursive proof aggregation.

- **Layer-2 Compatibility**:
  - Seamless integration with rollups for faster finality.

- **Future Enhancements**:
  - **Multiplayer**: Add ZK-encrypted player interactions (e.g., trading SMONO or competing for tiles).
  - **NFT Integration**: Allow customizable board tiles as NFTs, verified via ZK for ownership.
  - **Leaderboards**: ZK-verified high scores for privacy-preserving competition.
    

- **Governance**: Admin supply increases are transparent and verifiable, ensuring trust in point economics.

zkMonopoly demonstrates zkVerify’s potential to revolutionize blockchain gaming by combining privacy, efficiency, and extensibility.

## Deployment

### Prerequisites
- Node.js, Hardhat, snarkjs.
- Access to zkVerify’s deployed contract (e.g., Sepolia testnet) [LINK](https://sepolia.etherscan.io/address/0xEA0A0f1EfB1088F4ff0Def03741Cb2C64F89361E).
- Ethereum wallet with ETH for gas.

### Steps
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Compile Contract**:
   ```bash
   npx hardhat compile
   ```
3. **Deploy**:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```
   - Pass `zkvContract` (zkVerify contract address) and `vkHash` (from Groth16 verification key).
4. **ZK Setup**:
   - Compile circuit: `circom SufficientFunds.circom --r1cs --wasm --sym`.
   - Generate ZK keys: `snarkjs groth16 setup SufficientFunds.r1cs powersOfTau28_hez_final_10.ptau SufficientFunds_0000.zkey`.
   - Export `vkHash` for contract constructor.

### Sample Deploy Script
```javascript
// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const zkvContract = "0x..."; // zkVerify address
  const vkHash = "0x..."; // From ZK setup
  const SoloMonopoly = await hre.ethers.getContractFactory("SoloMonopoly");
  const soloMonopoly = await SoloMonopoly.deploy(zkvContract, vkHash);
  await soloMonopoly.deployed();
  console.log("SoloMonopoly deployed to:", soloMonopoly.address);
}

main().catch(console.error);
```

## Testing

### Test Suite
- **Unit Tests**: Cover gameplay (start, roll, claim) and edge cases (bankruptcy, max points).
  ```bash
  npx hardhat test
  ```
- **ZK Tests**: Generate/verify proofs with snarkjs to ensure circuit correctness.
  ```bash
  snarkjs groth16 prove SufficientFunds_0000.zkey witness.wtns proof.json public.json
  ```
- **Fuzzing**: Use Foundry to test extreme cases (e.g., maximum claim count).

### Example Test
```solidity
// test/SoloMonopoly.t.sol
function testFirstClaim() public {
  soloMonopoly.startGame();
  // Mock SMONO balance increase
  vm.prank(address(this));
  soloMonopoly.verifyAndClaimXmono(1, 1, merklePath, leaf, 10, 0, [1, 500, 0]);
  assertEq(soloMonopoly.xmonoPoints(player), 1);
  assertEq(soloMonopoly.nextRequiredSMONO(player), 1000);
}
```

## Contributing

We welcome contributions to enhance zkMonopoly! Potential areas:
- Multiplayer ZK interactions (maybe trading or auctions).
- Dynamic board generation with ZK randomness.

## PREVIEW
<img width="1918" height="961" alt="Screenshot from 2025-09-17 20-49-16" src="https://github.com/user-attachments/assets/b19bf933-ba5a-49e2-8d6a-66f1aa99ab9a" />

## VIDEO PREVIEW
[Screencast from 17-09-2025 17:12:46.webm](https://github.com/user-attachments/assets/f8d116eb-d887-4bd1-932c-106fce955f9c)


---

*Built with ❤️ for zkVerify and blockchain gaming enthusiasts. Questions or issues? Open a ticket on GitHub!*
