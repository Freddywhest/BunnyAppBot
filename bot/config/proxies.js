//Currently only socks5,4 and MTProto proxies are supported.
//HTTP proxies are not supported as they required a completely different connection type.

const proxies = [
  // EXAMPLE:
  {
    ip: "123.456.789.123", // Proxy host (IP or hostname)
    port: 8080, // Proxy port
    socksType: 5, // If use Socks you can choose 4 or 5.
    username: "username", // If use Socks with auth then you need to provide a username.
    password: "password", // If use Socks with auth then you need to provide a password.
  },
];

module.exports = proxies;
