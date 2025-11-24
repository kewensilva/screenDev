const { app, Menu, Tray, BrowserWindow, screen } = require('electron');
const path = require('path');

let appIcon = null
app.whenReady().then(() => {
  appIcon = new Tray('/home/kewen/Documentos/Dev/screenDev/src/logo-major.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'sobrepor todas janelas', type: 'checkbox' },
    { label: 'Item2', type: 'checkbox' }
  ])

  contextMenu.items[1].checked = false

  appIcon.setContextMenu(contextMenu)
})


function createWindow() {

  const winWidth = 625;
  const winHeight = 540;

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    icon: '/home/kewen/Documentos/Dev/screenDev/src/logo-major.png',
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
