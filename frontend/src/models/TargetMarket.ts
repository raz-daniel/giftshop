import Present from "./Present";

export default interface TargetMarket {
    id: string,
    category: string,
    present?: Present[]
}