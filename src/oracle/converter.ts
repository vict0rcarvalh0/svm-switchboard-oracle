import { Keypair, PublicKey } from "@solana/web3.js";
import * as fs from "fs";

/**
 * Parses a Solana keypair JSON file into a PublicKey.
 * @param filePath - The path to the Solana keypair JSON file.
 * @returns The public key derived from the keypair.
 */
export function parseKeypairFileToPublicKey(filePath: string): PublicKey {
  try {
    // Read the JSON file
    const keypairJson = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Create a Keypair from the byte array
    const keypair = Keypair.fromSecretKey(Uint8Array.from(keypairJson));

    // Return the public key
    return keypair.publicKey;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to parse keypair file: " + error.message);
    } else {
      throw new Error("Failed to parse keypair file: Unknown error");
    }
  }
}

// Usage
const filePath = "./solana-keypair.json";
try {
  const publicKey = parseKeypairFileToPublicKey(filePath);
  console.log("Public Key:", publicKey.toBase58());
} catch (error) {
  if (error instanceof Error) {
    throw new Error("Failed to parse keypair file: " + error.message);
  } else {
    throw new Error("Failed to parse keypair file: Unknown error");
  }
}