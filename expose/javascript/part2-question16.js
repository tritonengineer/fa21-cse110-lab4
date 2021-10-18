for (const property in statistics) {
    if(`${statistics[property]}`.charAt(0) == 'r') || `${statistics[property]}` % 2 == 1) {
        print(`$statistics[property]}`);
    }
}