export function calcMPIState(temp, pressure, soll, ist) {

    // Gewichtung
    const wTemp = temp * 0.4;
    const wPress = pressure * 0.3;
    const wDiff = (ist - soll) * 0.3;

    // Score (0–100)
    const score = wTemp + wPress + wDiff;

    // Wette (Vorhersage)
    let bet = "neutral";

    if (score < 10) bet = "fix";
    else if (score < 30) bet = "flow";
    else if (score < 50) bet = "expand";
    else if (score < 70) bet = "charge";
    else if (score < 90) bet = "shield";
    else bet = "release";

    // MPI‑State aus Wette
    const stateMap = {
        fix: "FIX-I",
        flow: "FLOW-I",
        expand: "EXPAND-I",
        charge: "CHARGE-I",
        shield: "SHIELD-I",
        release: "RELEASE-I"
    };

    return {
        score,
        bet,
        mpi: stateMap[bet]
    };
}
