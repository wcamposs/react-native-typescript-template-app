## React Native Typescript Template App

<!-- ![](https://imgur.com/mqlQYyF) -->

## Description:

An typescript configured React Native template app, created to speed up the development of new applications

## Prerequisites:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**Cloning the repository:**

Assuming you have your machine pre-configured to clone github repositories (if you have not configured it, visit [this documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)), clone the repository using the following command in the terminal:

```
git clone git@github.com:wcamposs/react-native-typescript-template-app.git
```

**Installation and configuration:**

Install and configure the environment to run the application, following [this tutorial](https://medium.com/@jeancabral/instalando-e-configurando-react-native-no-ubuntu-18-04-e3329ac090a0).

**Yarn Installation (optional):**

Yarn is a dependency manager, it is used to install the dependencies required for the project (it has the same role as **npm**). If you want to use it (personally I prefer), install it through [this tutorial](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

**Project dependencies installation:**

To install the dependency packages used in this project, follow the steps below:

After cloning the repository, access its root folder using the terminal and execute one of the commands below according to the package manager you use (npm or yarn):

1. Using Yarn:

```
yarn install
```

2. Using NPM:

```
npm install
```

After installation, the project can be considered configured and ready to run.

## Getting Started:

Assuming you are in the root directory via a terminal, run the following command to run the installation app command:

1. Using Yarn:

```
yarn android
```

or

```
yarn ios
```

2. Using NPM:

```
npm android
```

or

```
npm ios
```

## Configuring device port:

### On emulator

Assuming that you started the android emulator:

- click on emulator and press **CTRL + M** (for android) or **Command + D** (for iOS) to open the dev menu;
- Click on **settings** option
- Click on **Debug server host && port for device**
- Put **10.0.2.2:8081** or **your-machine-ip:8081**

### On physical device (Android or iOS):

- Shake the device 2 or 3 times, until the dev menu appears;
- Click on **settings** option
- Click on **Debug server host && port for device**
- Put **10.0.2.2:8081** or **your-machine-ip:8081**

**Obs:** Is recommended to use the same wi-fi network for the machine running and physical device

## Running application:

Once you successfully installed the app on configurated the correct ip and port, run on terminal:

If you're using Yarn

```
yarn start
```

Or if you're using NPM

```
npm start
```

**Obs:** If you opened the app before running the **start** command, close the app and re-open. If the bundle progress bars appears, the app should compile and run correctly.

## Built With:

- [React Native](https://reactnative.dev/) - The framework used.
