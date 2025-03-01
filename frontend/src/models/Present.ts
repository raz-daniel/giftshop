import TargetMarket from "./TargetMarket";

export default interface Present {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    categoryId: string,
    category?: TargetMarket
}