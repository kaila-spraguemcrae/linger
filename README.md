<br>
<h1 align = "center">
  <b>LINGER</b>
</h1>

<p align = "center">
  An interactive 3D web application built with three.js using react-three-fiber.
</p>

<p align = "center"> 
  Created March 5, 2021 
</p>

<p align = "center">
  By Kaila Sprague McRae
</p>

<a align = "center" href="https://kaila-spraguemcrae.github.io/linger/">Live Site</a>

--------------------

## 🛠️ Technologies Used

This project uses the following technologies:

- React
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [three.js](https://threejs.org/)
- [drei](https://github.com/pmndrs/drei)
- [component-material](https://github.com/pmndrs/component-material)
- [babel-plugin-glsl](https://github.com/onnovisser/babel-plugin-glsl)
- [use-tweaks](https://github.com/pmndrs/use-tweaks)
- WebGL
- glsl
- JSX
- JavaScript ES6
- git/GitHub
- VS Code

-------------------

## 📓 MVP & Future Goals

### MVP
| ⬜️ | Goal | 
| :------------- | :------------- | 
| ✅ | create a 3D environment using React/JavaScript |
| ✅ | allow a user to look around in the environment with a mouse |
| ✅ | allow user to edit the object |

### Stretch Goals
| ⬜️ | Goal | 
| :------------- | :------------- | 
| ⬜️ | create splash page |
| ⬜️ | add more slider options |
| ✅ | make object reflective |
| ⬜️ | add atmospheric music |
| ✅ | create shadow  |
| ⬜️ | create loading page |

-------------------

## 🔧 Setup & Requirements

### 📋 Necessary Specifications

#### To run this project locally you will need:

- **Node.js :** You can check if you have Node.js by running `node -v` in the command line. If you do not have Node.js please find more information and download [here](https://nodejs.org/en/)
* you can also install node through Homebrew by running `brew install node` in the command line.
- **Jest :** If your testing does not run, you may need to install Jest, you can do this by running `npm install jest@24.9.0 --save-dev` in the command line.
- **Prefered Code Editor**

### ⚙️ Clone or Download

#### To Download:

Go to my GitHub repository here, [https://guthub.com/kaila.spraguemcrae/linger](https://guthub.com/kaila.spraguemcrae/linger), and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file

#### To clone (my prefered method):

1. Push the green 'Clone' button and copy the URL.
2. Open Terminal or GitBash and input the command: `git clone https://github.com/kaila-spraguemcrae/linger`
3. To view the code, open the copied directory with Visual Studio Code or your preferred text editor by inputing the command `code .` in your terminal.

### 🧰  Setup Options

#### `npm install` 

This insures you have all of the necessary files to run the program.

#### `npm test`

This allows you to test the applications action creators and reducers.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

--------------------------

## 🐛 Known Bugs

| Date | Error | Handled | Solution |
| :------------- | :------------- | :------------- | :------------- |
| 03.05.2021 | 'THREE.WebGLProgram: shader error'// 'there is no texture bound to the unit 0' | ✅ | typo |
| 03.09.2021 | unable to map CustomSky as a reflection on sphere | ✅  | implemented a cubeCamera |

-------------------

## 📫 Support and contact details

If you run into any problems or have any questions please contact me:
- [Kaila Sprague McRae](mailto:kaila.sprague@icloud.com)

-------------------

## 📘 License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 Kaila Sprague McRae