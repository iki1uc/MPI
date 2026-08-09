export function mapMPIto4u(bet) {

    const map = {
        fix: "ROOT",
        flow: "FLOW",
        expand: "OK",
        charge: "ECHO",
        shield: "VOID",
        release: "BREAK"
    };

    return map[bet] || "NOK";
}
