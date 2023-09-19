import { Common, VISIBLE_SCREEN } from "./Common.esm.js";

const RESULT_SCREEN_GAME_WIN_CLASS = 'end-screen--is-win'
const RESULT_SCREEN_END_SCREEN_ID = 'js-end-screen';
const RESULT_SCREEN_HEADER_ID = 'js-game-result';
const RESULT_SCREEN_USER_POINTS_ID = 'js-user-points';
const RESULT_SCREEN_HIGH_SCORES_ID = 'js-high-scores';
const RESULT_SCREEN_BACK_BUTTON_ID = 'js-back-to-levels';
const RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID = 'js-restart-level';


class ResultScreen extends Common {
    constructor() {
        super(RESULT_SCREEN_END_SCREEN_ID)
    }

    bindToElement() {
        this.resultTextElement = this.bindToElement(RESULT_SCREEN_HEADER_ID);
        this.userPoints = this.bindToElement(RESULT_SCREEN_USER_POINTS_ID);
        this.highScoresElement = this.bindToElement(RESULT_SCREEN_HIGH_SCORES_ID);

        const backButtonElement = this.bindToElement(RESULT_SCREEN_BACK_BUTTON_ID);
        const restartButtonElement = this.bindToElement(RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID);

        backButtonElement.addEventListener('click', () => console.log("click"));
        restartButtonElement.addEventListener('click', () => console.log("click"));
    }

    viewResultScreen(isGameWin, playerPoints, level) {
        if (isGameWin) {
            this.element.classList.add(RESULT_SCREEN_GAME_WIN_CLASS);
        } else {
            this.element.classList.remove(RESULT_SCREEN_GAME_WIN_CLASS);
        }

        this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
        this.resultTextElement.textContent = isGameWin ? "wygrałes" : "przegrałeś";
        this.userPointsElement.textContent = String(playerPoints);
        this.highScoresElement.textContent = 7000;
    }

}

export const resultScreen = new ResultScreen();