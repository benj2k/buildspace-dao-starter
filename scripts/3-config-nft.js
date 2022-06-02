import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD731d33aA4158Cfb7b89f06dA6B76e98C7320548");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Pilou-Pilou Token",
                description: "Grants access to PilouPilouDAO !",
                image: readFileSync("scripts/assets/pilou-pilou.png"),
            }
        ]);

        console.log("Successfully created the NFT in the drop.");
    } catch (error) {
        console.log("Failed to create the NFT", error);
    }
}) ();