const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
  const winWidth = 420;
  const winHeight = 240;

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    frame: false,
    transparent: false,
    resizable: true,
    alwaysOnTop: true,
    backgroundColor: "#000000",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
    }
  });

  win.setPosition(width - winWidth - 20, height - winHeight - 20);

  win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);
