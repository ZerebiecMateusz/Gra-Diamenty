class Media {
    constructor() {
        this._backgroundImage = null;
        this._diamondsSprite = null;
        this.musicVolume = 0.3;
        this.soundVolume = 0.5;
        this.allowedMusic = true;
        this.allowedSound = true;
        this._swapSound = null;
        this._backgroundMusic = null;
        this.isInLevel = false;
    }

    increaseMusicVolume() {
        this.musicVolume += 0.1;
        if (this.musicVolume > 1) {
            this.musicVolume = 1;
        }
        this._backgroundMusic.volume = this.musicVolume;
    }
    decreaseMusicVolume() {
        this.musicVolume -= 0.1;
        if (this.musicVolume < 0) {
            this.musicVolume = 0;
        }
        this._backgroundMusic.volume = this.musicVolume;
    }

    increaseSoundVolume() {
        this.soundVolume += 0.1;
        if (this.soundVolume > 1) {
            this.soundVolume = 1;
        }
        this._swapSound.volume = this.soundVolume
    }
    decreaseSoundVolume() {
        this.soundVolume -= 0.1;
        if (this.soundVolume < 0) {
            this.soundVolume = 0;
        }
        this._swapSound.volume = this.soundVolume
    }
    playBackgroundMusic() {
        if(!this.allowedMusic) {
            return;
        }
        this._backgroundMusic.loop = true;
        this._backgroundMusic.play();
    }
    stopBackgroundMusic() {
        this._backgroundMusic.pause();
    }
    set backgroundImage(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._backgroundImage = imageObject;
    }

    get backgroundImage() {
        return this._backgroundImage;
    }

    set diamondsSprite(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._diamondsSprite = imageObject;
    }

    get diamondsSprite() {
        return this._diamondsSprite;
    }
}

export const media = new Media();