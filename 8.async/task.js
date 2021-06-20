class AlarmClock {
  
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  };

  findId (id) {
    let result = this.alarmCollection.findIndex(item => item.id === id);
    return result 
  }
    
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text');
    }
    let result = this.findId(id);
    if (result != -1) {
      console.error(`Звонок с id:${id} уже есть в коллекции`);
      return;
    }
    this.alarmCollection.push({id, time, callback});
  };

  removeClock(id) {
    let index = this.findId(id);
    if (index != -1) {
      this.alarmCollection.splice(index, 1);
    }
  };

  getCurrentFormattedTime() {
    let data = new Date();
    return data.toTimeString().slice(0, 5);
  };

  checkClock(time, func) {
    if (time === this.getCurrentFormattedTime()) {
      func();
    }
  } 

  // startAlarm() {
  //   this.alarmCollection.forEach(item => this.checkClock(item.time, item.callback));
  // }

  start() {
    if (this.timerId === null) {
 //   this.timerId = setInterval(() => this.startAlarm(), 1000);
      this.timerId = setInterval(() => this.alarmCollection.forEach(item => this.checkClock(item.time, item.callback)), 1000);
      console.log(`Интервал создан - ${this.timerId}`);
    }
  };

  stop() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      console.log(`Интервал удален - ${this.timerId}`);
      this.timerId = null;
    }
  };

  printAlarms() {
    this.alarmCollection.forEach(key => console.log(key.id + ' ' + key.time));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
  } 


}

function showLog() {
  console.log('Работает !!!');
}

let clock = new AlarmClock();

console.log(`Текущее время: ${clock.getCurrentFormattedTime()}`);

clock.addClock('17:37', showLog, 10);
clock.addClock('18:22', showLog, 20);
clock.printAlarms();

clock.start();
//clock.stop();