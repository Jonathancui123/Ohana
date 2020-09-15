const crypto = require("crypto");

function hash58() {
  const alphabet = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";

  let datetime = Buffer.allocUnsafe(4);
  datetime.writeUInt32BE(Math.trunc(Date.now() / 1000));
  let data = Buffer.concat([datetime, crypto.randomBytes(6)]);

  let hash = crypto.createHash("md5").update(data).digest();

  let bigInt = hash.readBigUInt64BE(8); // get last 64 bits

  let id = "";

  for (let i = 0; i < 7; i++) {
    id = alphabet[bigInt % 58n] + id;
    bigInt /= 58n; // BigInts round to decimals
  }

  return id;
}

module.exports = { hash58 };
