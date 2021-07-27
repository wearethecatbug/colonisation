/**
 * Объект который умеет представлять себя в текстовом виде
 */
class PrintableObject {
    toString() {
        return this.constructor.name;
    }
}

/**
 * Объект Тик содержит в себе текущее время, время предидущего тика, разницу времени между тиками
 */
class Tick extends PrintableObject {
    constructor() {
        super();

        this.currentTime = 0;
        this.deltaTime = 0;
        this.lastTime = 0;
    }

    /**
     * Обновляет параметры тика, устаналвивает текущее время, время предидущего тика, и дельту между ними
     * @param newTimeValue
     */
    updateTime(newTimeValue) {
        this.lastTime = this.currentTime
        this.currentTime = newTimeValue;
        this.deltaTime = this.currentTime - this.lastTime;
    }
}

/**
 * Объект который умеет обновлять свой статус, раз в какой то заданный интервал вызвается функция update
 * в которую в виде аргумента передается Tick, используется как родительский класс для тех объектов которым нужна
 * возможность обновления
 */
class Updatable {

    /**
     * update function
     * @param tick {Tick} - value that contain previous tick time, current tick time and delta time
     */
    update(tick) {

    }
}

/**
 * Класс который вызвает обновления с каким то заданным интервалом и рачитывает Tick
 */
class Updater extends Updatable {

    /**
     * @type {Tick}
     */
    tick

    /**
     * @type {Function}
     */
    onUpdate;

    constructor() {
        super();

        //Создаем объект тик
        this.tick = new Tick();
    }

    run() {
        //С заданным интервалом в данном случае 1000 вызваем нужную нам фунцию в данном случае update
        setInterval(() => this.update(this.tick), 1000);
    }

    /**
     * Функция обновления в которую попадает тик, и тут же он расычитывается
     * @param tick
     */
    update(tick) {
        tick.updateTime(Date.now());
        super.update(tick);
    }
}

/**
 * Класс контейнер который моежт в себе хранить список объектов которые могут обнавлятся Updatable
 */
class UpdatableContainer extends Updatable {

    /**
     * Список объектов типа Updatable которые могут обновлять свой статус
     * @type {Array<Updatable>}
     */
    childs;

    constructor() {
        super();
        this.childs = [];
    }

    /**
     * Добавляет новый объект child в контейнер, и добалвяет его в список childs
     * @param child
     */
    addChild(child) {
        this.childs.push(child);
    }

    /**
     * Удаляет объект из контейнера
     * @param child
     */
    removeChild(child) {
        let indexToRemove = this.childs.findIndex(child);
        if (indexToRemove === -1) return;
        this.childs.splice(indexToRemove, 1);
    }

    /**
     * Апдейт чилдов
     * @param tick
     */
    update(tick) {
        super.update(tick);

        for (let child of this.childs) {
            child.update(tick);
        }
    }
}

/**
 * Класс игры, тут собираем все стартовые объекты в месте, задаем нужные нам параметры и запускаем игру
 */
class Game extends Updatable {
    constructor() {
        super();

        this.colony = new Colony();
        this.updater = new Updater();

        this.updater.onUpdate = () => this.update;
    }

    /**
     * Запус игры, запускаем апдейтер после чего он начинает вызвает обновления, и вызваем в колонии старт
     * чтобы она могла определить свое начальное состояние
     */
    startGame() {
        this.updater.run();
        this.colony.start();
    }

    update(tick) {
        this.colony.update(tick);
    }
}

class Colony extends Updatable {
    constructor() {
        super();
    }

    /**
     * Старт игры в колонии, тут определим начальное состояние
     * сколько есть колонистов сразу, сколько есть ресурсов и т.д
     */
    start() {
        console.log('game should start');
    }
}

/**
 * Шахта
 */
class Mine extends Updatable {
    constructor() {
        super();
    }
}

class CloneStation extends Updatable {
    constructor() {
        super();
    }
}

class ColonyStorage extends Updatable {
    constructor() {
        super();
    }
}

class Worker extends Updatable {
    constructor() {
        super();
    }
}

new Game().startGame();