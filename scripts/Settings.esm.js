import { Common, HIDDEN_SCREEN, cha } from "./Common.esm";

const MUSIC_ON_OFF_BUTTON_ID = 'js-music-on-off';
const MUSIC_VOLUME_DECREASE_BUTTON_ID = 'js-music-volume-decrease';
const MUSIC_VOLUME_INCREASE_BUTTON_ID = 'js-music-volume-increase';
const SETTINGS_EXIT_BUTTON_ID = 'js-settings-screen-exit-button';
const SETTINGS_SCREEN_ID = 'js-settings-screen';
const SOUND_ON_OFF_BUTTON_ID = 'js-sound-on-off';
const SOUND_VOLUME_DECREASE_BUTTON_ID = 'js-sound-volume-decrease';
const SOUND_VOLUME_INCREASE_BUTTON_ID = 'js-sound-volume-increase';


class Settings extends Common {
    constructor() {
    super(SETTINGS_SCREEN_ID);
}

bindToElements() {
    const exitSettingsElement = this.bindToElements(SETTINGS_EXIT_BUTTON_ID);
    exitSettingsElement.addEventListener('click', () => this.changeVisibilityScreen(this.element, HIDDEN_SCREEN))
}
}

export const settings = new Settings();