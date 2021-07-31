import {IUpdatable} from "./IUpdatable";

/**
 * Объект Тик содержит в себе текущее время, время предидущего тика, разницу времени между тиками
 */
class Tick {
    constructor() {
        this.currentTime = 0;
        this.deltaTime = 0;
        this.lastTime = 0;
    }

    init(startTimeValue) {
        this.currentTime = startTimeValue;
    }

    /**
     * Обновляет параметры тика, устаналвивает текущее время, время предидущего тика, и дельту между ними
     * @param newTimeValue
     */
    updateTime(newTimeValue) {
        this.lastTime = this.currentTime;
        this.currentTime = newTimeValue;
        this.deltaTime = this.currentTime - this.lastTime;
    }
}

/**
 * Class that calculate tick values and update with some interval
 */
export class Updater extends IUpdatable {

    /**
     * @type {Tick}
     */
    tick;

    /**
     * @type {Function}
     */
    onUpdate;

    constructor() {
        super();

        //create tick object exemplar
        this.tick = new Tick();
    }

    run() {
        //With some interval call update for example every 1000ms (1s)
        this.tick.init(Date.now());
        setInterval(() => this.update(this.tick), 1000);
    }

    /**
     * Function that calculate current tick values and call update
     * @param tick
     */
    update(tick) {
        console.log(tick);
        tick.updateTime(Date.now());
        super.update(tick);
    }
}