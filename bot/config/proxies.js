//Currently only socks5,4 and MTProto proxies are supported.
//HTTP proxies are not supported as they required a completely different connection type.

const proxies = [
  // EXAMPLE:
  {
    ip: "38.154.227.167", // Proxy host (IP or hostname)
    port: 5868, // Proxy port
    socksType: 5, // If use Socks you can choose 4 or 5.
    username: "qnrwgaop", // If use Socks with auth then you need to provide a username.
    password: "aj5nvs24wqbz", // If use Socks with auth then you need to provide a password.
  },
];

module.exports = proxies;
