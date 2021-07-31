import { IUpdatable } from "../../IUpdatable";
import { Updater } from "../../Updater";
import { Colony } from "./Colony";

/**
 * Класс игры, тут собираем все стартовые объекты в месте, задаем нужные нам параметры и запускаем игру
 */
export class Game extends IUpdatable {
	constructor() {
		super();

		this.colony = new Colony();
		this.updater = new Updater();

		let a;
		if (this) {
			a = console.log[1];
		}

		console.log(a);

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
