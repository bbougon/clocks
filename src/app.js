let Server = require('./infrastructure/server/server');
const FileRepositories = require('./infrastructure/repositories/file-repositories');

new Server(process.env.PORT || 3000, new FileRepositories()).start();