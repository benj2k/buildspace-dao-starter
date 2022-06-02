import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        // properties for the drop
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "PilouPilouDAO",
            description: "DAO for pilou-pilou lovers",
            image: readFileSync("scripts/assets/pilou-pilou.png"),
            primary_sale_recipient: AddressZero,
        });

        // drop init
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // retreive metadatas
        const metadata = await editionDrop.metadata.get();
        
        console.log("Sucessfully deployed editionDrop contract. Address : ", editionDropAddress);
        console.log("✅ editionDrop metadata:", metadata);
    } catch (error) {
        console.log("Failed to deploy editionDrop contract", error);
    }
}) ();