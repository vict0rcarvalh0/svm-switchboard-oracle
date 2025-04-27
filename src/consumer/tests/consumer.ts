import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Consumer } from "../target/types/consumer";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";

describe("consumer", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Consumer as Program<Consumer>;

  const signerAccount = Keypair.generate();
  const feedAccount = new PublicKey("B466bR1yhbFjZUFWEbDDbUgVsXH6ponTaihmrPkANVom");

  it("Consumes feed data!", async () => {
    // Create the feed account
    const txCreate = await program.methods
      .initialize() // Replace with your actual initialization method if needed
      .accounts({
        feed: feedAccount,
        user: program.provider.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([signerAccount])
      .rpc();
    console.log("Feed account created, transaction signature:", txCreate);

    // Call the consume method
    const txConsume = await program.methods
      .consume()
      .accounts({
        feed: feedAccount,
      })
      .rpc();
    console.log("Consume method executed, transaction signature:", txConsume);
  });
});
