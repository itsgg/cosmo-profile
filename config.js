const cryptoHash = require("./crypto-hash");

const INITIAL_DIFFICULTY = 3; 

const timestamp = 1;
const lastHash = null;
const data = [];
const nonce = 0;
const difficulty = INITIAL_DIFFICULTY;

const hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);

const GENESIS_DATA = {
  timestamp,
  lastHash,
  hash,
  data,
  nonce,
  difficulty,
};

module.exports = { GENESIS_DATA };
