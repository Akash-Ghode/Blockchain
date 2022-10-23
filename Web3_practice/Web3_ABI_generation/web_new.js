

solc = require("solc");

fs = require("fs");

Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");


let fileContent = fs.readFileSync("demo.sol").toString();

console.log(fileContent);


var input = {
    language: "Solidity",
    sources: {
        "demo.sol": {
            content: fileContent,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
ABI = output.contracts["demo.sol"]["demo"].abi;
bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;
console.log("abi:", ABI);
console.log("bytecode:", bytecode);