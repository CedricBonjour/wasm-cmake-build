# wasm-emsdk-ninja-cmake-poc


A template to build a WASM lib using Emscripten, ninja and cmake


## Prerequisits 

- [Emscripten EMSDK](https://emscripten.org/)
- [Ninja](https://ninja-build.org/) 
- [Cmake](https://cmake.org/)
- [Nodejs](https://nodejs.org/en)



For a fast install, use winget on windows from the command line : 

```sh
winget install -e --id Ninja-build.Ninja
winget install -e --id OpenJS.NodeJS
winget install -e --id Kitware.CMake
```

The Emscripten winget install is not available, check the home website for instructions. 
Make sure the env PATH includes the `EMSDK` var as the path to the Emscripten directory.


On Windows, Visual studio C++ BuildTools may also be required. 

```sh
winget install -e --id Microsoft.VisualStudio.2022.BuildTools
```



## Build and Test



Run the following commands from the repo root : 

```sh
emcmake cmake -G Ninja -B build  
cmake --build ./build --target wasm_base_math
node ./test_math.js
```


alternative:

```sh
cmake --preset wasm
cmake --build --preset wasm --target wasm_base_math
node ./test_math.js
```



