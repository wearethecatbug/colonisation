import { IUpdatable } from "../../IUpdatable";

class Storage extends IUpdatable {
	resourcesCount = 0;

	constructor() {
		super();
	}

	putResources(amountOfResources) {
		this.resourcesCount += amountOfResources;
	}

	getResources(amountOfResources) {
		if (amountOfResources > this.resourcesCount) {
			this.resourcesCount = 0;
			return amountOfResources - this.resourcesCount;
		} else {
			this.resourcesCount -= amountOfResources;
			return amountOfResources;
		}
	}
}
