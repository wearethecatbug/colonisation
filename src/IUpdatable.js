/**
 * Interface represent object that can update over time
 */
export class IUpdatable {

  constructor() {
  }

  /**
    * Update function call every tick of the application
    * @param tick {Tick} - value that contain previous tick time, current tick time and delta time
  */
  // eslint-disable-next-line no-unused-vars
  update (tick) {
  }


  /**
   * @NOTE
   * Объект который умеет обновлять свой статус, раз в какой то заданный интервал вызвается функция update
   * в которую в виде аргумента передается Tick, используется как родительский класс для тех объектов которым нужна
   * возможность обновления
   */
}