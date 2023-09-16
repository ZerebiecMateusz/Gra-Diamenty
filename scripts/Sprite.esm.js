import { time } from "console";
import { canvas } from "./Canvas.esm.js";

export class Sprite {
    constructor(x, y, width, height, spritesImage, numbersOfSprites = 1, offSet = {x: 1, y: 0}) {
    this.alpha = 255;
    this.height = height;
    this.numbersOfSprites = numbersOfSprites;
    this.offSet = {...offSet};
    this.spritesImage = spritesImage;
    this.width = width;
    this.x = x;
    this.y = y;
}
    draw(numbersOfSprites = 0, ratio = 1) {
        if (numbersOfSprites > this.numbersOfSprites) {
            return;
        }
        if (this.alpha !== 255) {
            canvas.context.globalAlpha = this.alpha / 255;
        }
        canvas.context.drawImage(
            this.spritesImage,
            numbersOfSprites * this.width,
            0,
            this.width,
            this.height,
            this.x + this.offSet.x,
            this.y + this.offSet.y,
            this.width * ratio,
            this.height * ratio);

        if (this.alpha !== 255) {
            canvas.context.globalAlpha = 1;
        }
    }
}