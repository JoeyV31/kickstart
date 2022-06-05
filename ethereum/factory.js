import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x2f454fAdEa3a552b561A39F37353985bBd95436E"
);

export default instance;