import { Sprite } from './Sprite.esm.js';
import { gameLevels } from './gameLevels.esm.js';

const DIAMOND_ORIGINAL_SIZE = 32;

export const DIAMOND_SIZE = 48;
export const NUMBER_OF_DIAMONDS_TYPES = 6;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORIGINAL_SIZE;

export class Diamond extends Sprite {
	constructor(x, y, row, column, kind, diamondSpriteImage) {
		const offset = {
			x: 50,
			y: 50,
		};
		
		super(
			x,
			y,
			DIAMOND_ORIGINAL_SIZE,
			DIAMOND_ORIGINAL_SIZE,
			diamondSpriteImage,
			NUMBER_OF_DIAMONDS_TYPES,
			offset
		);
		this.column = column,
		this.kind = kind;
		this.row = row;
		this.match = 0;
	}
    draw() {
		super.draw(this.kind, DIAMOND_ZOOM);
	}
}
