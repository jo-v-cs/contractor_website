// Returns a quote value based on number of players and duration
function getQuote(numPlayers, duration) {
    return numPlayers * duration * 50;
}

export { getQuote };