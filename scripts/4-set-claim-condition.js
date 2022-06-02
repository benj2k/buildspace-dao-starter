import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0xD731d33aA4158Cfb7b89f06dA6B76e98C7320548");

(async () => {
    try {
        const claimConditions = [{
            startTime: new Date(),
            maxQuantity: 50_000,
            price: 0,
            quantityLimitPerTransaction: 1, // max claim per tx
            waitInSeconds: MaxUint256, // wait = max value so user will only claim once
        }]

        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("Successfully set claim conditions!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})();