const { pbkdf2, pbkdf2Sync } = require("crypto");

console.time("sync");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
console.timeEnd("sync");

const pbkdf2Async = () =>
  new Promise((resolve, reject) => {
    pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });

console.time("async");
Promise.all([
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
  pbkdf2Async(),
]).then(() => {
  console.timeEnd("async");
});
