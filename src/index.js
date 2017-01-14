const electron = require('electron');
const co = require('co');
const pify = require('pify');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');

const PORT = 8081;

const { app, BrowserWindow } = electron;

webpackConfig.entry = [
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server',
].concat(webpackConfig.entry);
webpackConfig.plugins = [new webpack.HotModuleReplacementPlugin()].concat(webpackConfig.plugins);
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true,
  },
});
const listening = pify(fn => server.listen(PORT, fn));

let mainWindow;

const createWindow = co.wrap(function* createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 500,
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  yield listening;
  mainWindow.loadURL(`http://localhost:${PORT}`);
  // mainWindow.openDevTools();
});

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    createWindow();
  }
});
