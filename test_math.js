const fs = require('fs');
// const wasmCode = fs.readFileSync('./build/libcalc.wasm');
const wasmCode = fs.readFileSync('./bin/base_math.wasm');

var wasm_api;
var wasm_heap;

var asmLibraryArg = {
    "proc_exit": function () { },
}
var infoEnv = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
};


infoEnv = undefined;


WebAssembly.instantiate(wasmCode, infoEnv).then(({ instance }) => {
    wasm_api = instance.exports;
    wasm_heap = new Uint8Array(instance.exports.memory.buffer);
    test_run();
});



function test_run() {
    console.log("wasm library is instantiated");
    var result;


    console.log("Calc :  1 + 1 ... ");
    result = wasm_api.add(1,1);
    console.log( "result = ", result);


    console.log("Calc rect(2:3) perimeter... ");
    result = wasm_api.rectangle_perimeter(2,3);
    console.log( "result = ", result);

}

