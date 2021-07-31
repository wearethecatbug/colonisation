import { IUpdatable } from "../../IUpdatable";

export class Colony extends IUpdatable {
	constructor() {
		super();
	}

	/**
	 * Старт игры в колонии, тут определим начальное состояние
	 * сколько есть колонистов сразу, сколько есть ресурсов и т.д
	 */
	start() {
		console.log("game should start");
	}
}
