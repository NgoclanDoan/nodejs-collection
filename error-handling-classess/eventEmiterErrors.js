const { EventEmitter } = require("events");

class Divisible extends Error {
  constructor(count) {
    super(`${count} is divisible by 3`);
    this.count = count;
  }
}

function doSomeThingAsync() {
  const emitter = new EventEmitter();
 
  // mock asynchronous operation
  let count = 0;
  const numberingInterval = setInterval(() => {
    count++;
    if (count % 3 === 0) {
      emitter.emit("error", new DivisibleByThreeError(count));
      return;
    }
    emitter.emit("success", count);
 
    if (count === 10) {
      clearInterval(numberingInterval);
      emitter.emit("end");
    }
  }, 500);
 
  return emitter;
}
 
const numberingEvent = doSomeThingAsync();
 
numberingEvent.on("success", (count) => {
  console.log("SUCCESS: ", count);
});
 
numberingEvent.on("error", (err) => {
  if (err instanceof DivisibleByThreeError) {
    console.error("ERROR: ", err.message);
  }
 
  // other error instances
});
