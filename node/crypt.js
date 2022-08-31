const { pbkdf2, pbkdf2Sync } = require("crypto");

console.time("sync");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
console.timeEnd("sync");

let counter = 4;

const callback = () => {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.timeEnd('async');
  }
};

console.time("async")
pbkdf2("secret", "salt", 100000, 64, "sha512", callback);
pbkdf2("secret", "salt", 100000, 64, "sha512", callback);
pbkdf2("secret", "salt", 100000, 64, "sha512", callback);
pbkdf2("secret", "salt", 100000, 64, "sha512", callback);
console.log('Here start the async');