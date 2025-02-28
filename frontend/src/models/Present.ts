import TargetMarket from "./TargetMarket";

export default interface Present extends TargetMarket {
    name: string,
    description: string,
    price: number,
    discount: number
}