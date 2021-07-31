import {IUpdatable} from "../../IUpdatable";

/**
 * Класс контейнер который моежт в себе хранить список объектов которые могут обнавлятся Updatable
 */
class GameComponentContainer extends IUpdatable {

    /**
     * Список объектов типа Updatable которые могут обновлять свой статус
     * @type {Array<IUpdatable>}
     */
    elementsList;

    constructor() {
        super();
        this.elementsList = [];
    }

    /**
     * Добавляет новый объект child в контейнер, и добалвяет его в список elementsList
     * @param child {IUpdatable}
     */
    add(child) {
        this.elementsList.push(child);
    }

    /**
     * Удаляет объект из контейнера
     * @param child
     */
    remove(child) {
        const indexToRemove = this.elementsList.findIndex(child);
        if (indexToRemove === -1) return;
        this.elementsList.splice(indexToRemove, 1);
    }

    /**
     * Апдейт чилдов
     * @param tick
     */
    update(tick) {
        super.update(tick);

        for (const child of this.elementsList) {
            child.update(tick);
        }
    }
}