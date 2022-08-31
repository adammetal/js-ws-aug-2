const dns = require("dns");

dns.lookup("facebook.com", (err, address, family) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("address: %j family: IPv%s", address, family);
});

console.log('Elobb ez fog lefutni');
