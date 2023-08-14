# Introduction

At Genially, we are developing a way to enhance creations using third-party plugins, giving them first-class support.

Using this plugin feature, developers will be able to add new behavior to Geniallys, create complex escape games, and many more things.

# Getting started

If you are used to writing Javascript, all of this will sound very familiar. 

Please follow the instructions to setup a working development environment to create Genially plugins.

## Prerequisites

### A Genially account

Sign up for an account on https://genial.ly, finish the onboarding process and create an empty Genially. You'll come back to it later.

### Access to the plugin development feature
In order to develop plugins for Genially, your Genially account needs to be given access to the feature. If you are reading this, you probably already do! If you found this by accident but are interested, try to get in touch with us.

### Node.js
This repository contains Node.js packages, which will be used for development, so you should install the latest LTS version (18) [Node.js](https://nodejs.org/en/download) on your computer. We recommend using [nvm](https://github.com/nvm-sh/nvm) on Linux and Mac systems. For Windows, the official packages are fine too.

### A copy of this repository
Next, you need to have a copy of this repo on your computer. You can either [download it](https://github.com/Genially/plugins/archive/refs/heads/main.zip) and extract it somewhere.

For each plugin you develop you will need to make a copy of the subdirectory `starters/vanilla`, but for the tutorial you can use that one.

### A code editor

(This is not mandatory, but highly recommended.)

At Genially most of us use [Visual Studio Code](https://code.visualstudio.com/), but any development-focused editor (preferably with a built-in terminal) that supports Javascript will do.

Open the project's folder on your editor and open the editor's built in terminal. Alternatively, you can open a terminal manually and navigate to the project's folder.

On the terminal run:

```bash
npm i
```

This will install the project's dependencies. Then, to run the project itself run:

```bash
npm run dev
```

If everything goes right, you should see something like this on your terminal:

```
  ┌─────────────────────────────────────────┐
  │                                         │
  │   Serving!                              │
  │                                         │
  │   - Local:    http://localhost:1209     │
  │                                         │
  │   Copied local address to clipboard!    │
  │                                         │
  └─────────────────────────────────────────┘
```

You need to leave this running for as long as you want to develop the plugin. This is currently running an HTTP server that the Editor / View projects will access to import your extension.

## Adding your plugin to a Genially

Open or create some Genially on your account. If you were given access to the plugin development feature, you should see this icon on the top bar:

<screenshot of the top bar dev menu>

Click on add script, and paste the URL that came up on the console when you ran the project before. It will probably be: `http://localhost:1209`. Click accept and you should see a sidebar with your currently added extension, awesome!

<screenshot of sidebar>

Now, publish the Genially, present it and open the development tools (F12). If everything went fine, you should see a message on the console. That's it!

If you want to see some changes, just open the main.js file on your code editor, update the log message, save and reload your Genially (the view page). You should see the new message on the console.

## Where to go next

Head over to [the wiki](https://github.com/Genially/plugins/wiki), where we have some more in-depth documentation about the Plugins API.