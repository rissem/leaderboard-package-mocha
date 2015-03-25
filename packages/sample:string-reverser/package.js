Package.onTest(function (api) {
  api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"]);

  api.addFiles('tests/shared/shared.js', ['client', 'server']);
  api.addFiles('tests/client/client.js', ['client']);
  api.addFiles('tests/server/server.js', ['server']);
});
