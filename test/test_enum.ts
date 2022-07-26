import { BungieMembershipType, DestinyClass } from "../output/enum";

console.log(DestinyClass.Warlock);

type test = keyof typeof BungieMembershipType;
