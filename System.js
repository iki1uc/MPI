import { calcMPIState } from "./Math.js";
import { mapMPIto4u } from "./Resp.js";

export function runSystem(temp, pressure, soll, ist) {

  const mpi = calcMPIState(temp, pressure, soll, ist);
  const fourU = mapMPIto4u(mpi.bet);

  // KIpi (einfacher Platzhalter)
  const KIpi = {
    cause: soll,
    effect: ist,
    delta: ist - soll,
    vector: (ist - soll) * 0.5
  };

  // MAIN (Ergebnis)
  const MAIN = {
    state: mpi.mpi,
    response: fourU,
    score: mpi.score
  };

  // MAU (Ursache)
  const MAU = {
    temp,
    pressure,
    soll,
    ist
  };

  // ICOME (Organisator)
  const ICOME = {
    timestamp: Date.now(),
    cycle: Math.floor(mpi.score / 10),
    bet: mpi.bet
  };

  return {
    mpi,
    fourU,
    KIpi,
    MAIN,
    MAU,
    ICOME
  };
}
