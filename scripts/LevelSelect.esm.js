 import { Common, HIDDEN_SCREEN } from "./Common.esm.js";

 const gameLevels = [
    {
        level: 1,
    },
    {
        level: 2,
    },
    {
        level: 3,
    },
 ];
 const LEVEL_SELECT_BUTTON_ID = 'level-select__button';
 const LEVEL_SELECT_ID = 'js-level-select-screen';

class LevelSelect extends Common {
	constructor() {
		super(LEVEL_SELECT_ID);
        gameLevels.forEach(gameLevel => this.createButton(gameLevel.level))
	}

    createButton(value) {
		

		const button = document.createElement('button');

		button.type = 'button';
		button.classList.add(LEVEL_SELECT_BUTTON_ID);
		button.textContent = value;
		button.value = value;
		button.addEventListener('click', event => this.buttonOnClickHanlder(event));
		this.element.appendChild(button);
	}

    buttonOnClickHanlder(event) {
        this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
        //pokaż plansze z grą
    }

	createButtons() {
		while(this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		}

		// gameLevels.some(gameLevel => this.createButton(gameLevel.level));
	}
}
 export const levelSelect = new LevelSelect();