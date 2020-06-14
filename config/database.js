module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://ramprit:3IiAFI5ryD0EaAl5@sahani-dev-shard-00-00-g9doc.mongodb.net:27017,sahani-dev-shard-00-01-g9doc.mongodb.net:27017,sahani-dev-shard-00-02-g9doc.mongodb.net:27017/flutterDb?ssl=true&replicaSet=sahani-dev-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: true,
      },
    },
  },
});
