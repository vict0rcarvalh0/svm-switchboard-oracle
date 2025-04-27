# SVM Switchboard Oracle

#### Running simulation

```bash
bun run simulation.ts
```

#### Expected Output:
```
Running simulation...

{"jobs":[{"tasks":[{"httpTask":{"url":"https://binance.com/api/v3/ticker/price"}},{"jsonParseTask":{"path":"$[?(@.symbol == 'BTCUSDT')].price"}}]}]}

Response is good (200)
{
  "receipts": [],
  "result": "94909.76000000",
  "results": [
    "94909.76000000"
  ],
  "version": "RC_25_04_14_19_54"
}
```

#### Running the project

```bash
solana-keygen new --outfile solana-keypair.json 

bun run converter.ts 

# Pick the output and paste into the address for the next command(removing "<" and ">")
solana airdrop 2 <address> --url https://api.devnet.solana.com

bun run index.ts
```

#### Expected Output:
```
Running oracle job...

{"jobs":[{"tasks":[{"httpTask":{"url":"https://binance.com/api/v3/ticker/price"}},{"jsonParseTask":{"path":"$[?(@.symbol == 'BTCUSDT')].price"}}]}]}

Response is good (200)
{
  "receipts": [],
  "result": "94931.97000000",
  "results": [
    "94931.97000000"
  ],
  "version": "RC_25_04_14_19_54"
}
Storing and creating the feed...

Using Payer: As6rvpfhUc2kqQzqZV9T8eNnrpHpXfSB4TUFYHJ4Frob 

{
  context: {
    apiVersion: "2.2.7",
    slot: 376968612,
  },
  value: {
    accounts: null,
    err: null,
    innerInstructions: null,
    logs: [
      "Program Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2 invoke [1]", "Program log: Instruction: PullFeedInit",
      "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]", "Program log: Create",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]", "Program log: Instruction: GetAccountDataSize",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1569 of 133034 compute units",
      "Program return: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA pQAAAAAAAAA=", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success",
      "Program log: Initialize the associated token account", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: InitializeImmutableOwner", "Program log: Please upgrade to SPL Token 2022 for immutable owner support",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1405 of 126447 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: InitializeAccount3", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3158 of 122563 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 22408 of 141509 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: SetAuthority", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2795 of 108919 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program log: Creating LUT with slot: JAMCQJ79NKivqFtLmVRZRaYuLjJvYE47NfrDjJYLmyCE, 376968579",
      "Program AddressLookupTab1e1111111111111111111111111 invoke [2]", "Program log: Instruction: CreateLookupTable",
      "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success",
      "Program AddressLookupTab1e1111111111111111111111111 consumed 10647 of 85244 compute units",
      "Program AddressLookupTab1e1111111111111111111111111 success", "Program AddressLookupTab1e1111111111111111111111111 invoke [2]",
      "Program log: Instruction: ExtendLookupTable", "Program 11111111111111111111111111111111 invoke [3]",
      "Program 11111111111111111111111111111111 success", "Program AddressLookupTab1e1111111111111111111111111 consumed 6556 of 64806 compute units",
      "Program AddressLookupTab1e1111111111111111111111111 success", "Program Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2 consumed 112736 of 169554 compute units",
      "Program Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2 success", "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success", "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success"
    ],
    replacementBlockhash: null,
    returnData: null,
    unitsConsumed: 113036,
  },
}
Feed B466bR1yhbFjZUFWEbDDbUgVsXH6ponTaihmrPkANVom initialized: 1U2PJspv2N9bF1nJHCJPcS2UYU6WCcJZb7k3xvST3FV4pXxfMohMj2tsB2LnrJkrTid7QH4M1Sn2ybLpzWP491n
```