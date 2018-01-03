# this is a presentation on Contributing to React

Notes on contributing to react. See the presentation live at <https://sw-yx.github.io/react-contributing/#/> or with server sync at <http://react-contribute.surge.sh>

## EDIT from the future: [this Talk](https://www.youtube.com/watch?v=GWCcZ6fnpn4) Now As Seen On [Reactjs.org](https://reactjs.org/docs/how-to-contribute.html)!

add a `?presenter` to your route to see in presenter mode. keyboard shortcut `alt+O` or `P`, more docs [here](https://github.com/FormidableLabs/spectacle/blob/master/README.md#presenting)

Please contact me on twitter if you want mentorship on your first React contribution.

# This project is built on Spectacle Boilerplate. what follows is their readme.

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```
if you're about that life.

Next, run 
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```
