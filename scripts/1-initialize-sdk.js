import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";

import dotenv from "dotenv";
dotenv.config();

// some basic checks
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("Error, private key not found.");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("Error, Alchemy API URL not found.");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("Error, Wallet address not found");
}

// use alchemy as provider
const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
const wallet = new ethers.Wallet(process.env.WALLET_ADDRESS, provider);
const sdk = new ThirdwebSDK(wallet);

(async () => {
    try {
        const address = await sdk.getSigner().getAddress();
        console.log("SDK initialized by address:", address);
    } catch (error) {
        console.error("Failed to get app from the sdk", err);
        process.exit(1);
    }
})();

export default sdk;