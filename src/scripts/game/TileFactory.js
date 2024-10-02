import { App } from "../system/App";
import { Tools } from "../system/Tools";
import { Tile } from "./Tile";


export class TileFactory {
    static generate() {
        const animal = App.config.tilesAnimals[Tools.randomNumber(0, App.config.tilesAnimals.length - 1)];
        return new Tile(animal);
    }
}