import { calcMPIState } from "./Math.js";
import { mapMPIto4u } from "./Resp.js";

export function runSystem(temp, pressure, soll, ist) {

  const mpi = calcMPIState(temp, pressure, soll, ist);
  const fourU = mapMPIto4u(mpi.bet);

  const KIpi = {
    cause: soll,
    effect: ist,
    delta: ist - soll,
    vector: (ist - soll) * 0.5
  };

  const MAIN = {
    state: mpi.mpi,
    response: fourU,
    score: mpi.score
  };

  const MAU = { temp, pressure, soll, ist };

  const ICOME = {
    timestamp: Date.now(),
    cycle: Math.floor(mpi.score / 10),
    bet: mpi.bet
  };

  return { mpi, fourU, KIpi, MAIN, MAU, ICOME };
}
