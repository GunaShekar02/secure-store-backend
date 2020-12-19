export const address = "0x1fe6e9cff24577e7f6d9a4c00e4fd2422fca706e";
export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_hash",
        type: "string",
      },
      {
        name: "_sem",
        type: "uint256",
      },
      {
        name: "_roll",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_roll",
        type: "string",
      },
      {
        name: "_sem",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
