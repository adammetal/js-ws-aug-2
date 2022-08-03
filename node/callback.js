const dns = require("dns");

dns.lookup("facebook.com", (err, address, family) => {
  console.log("address: %j family: IPv%s", address, family);
});

console.log('Elobb ez fog lefutni');
