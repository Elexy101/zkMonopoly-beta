pragma circom 2.0.0;

include "circomlib-master/circuits/comparators.circom";

template SufficientFunds() {
    signal input funds; // Private input: player's total funds in SMONO units
    signal input nextRequiredSMONO; // Private input: current required SMONO in SMONO units
    signal input xmonoPoints; // Private input: player's current claim count
    signal output isSufficient; // Output: 1 if funds >= nextRequiredSMONO, 0 otherwise

    // Define base threshold: 500 SMONO
    var BASE_THRESHOLD = 500; // Initial threshold in SMONO units

    // Verify nextRequiredSMONO matches expected formula: 500 * (claimCount + 1)
    signal expectedThreshold;
    expectedThreshold <== BASE_THRESHOLD * (xmonoPoints + 1);
    nextRequiredSMONO === expectedThreshold; // Constraint: ensure input threshold is correct

    // Use Circomlib's GreaterEqThan with 252 bits to check if funds >= nextRequiredSMONO
    component geq = GreaterEqThan(252);
    geq.in[0] <== funds;
    geq.in[1] <== nextRequiredSMONO;
    isSufficient <== geq.out;
}

component main { public [nextRequiredSMONO, xmonoPoints] } = SufficientFunds();