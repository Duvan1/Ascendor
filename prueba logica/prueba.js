obj = {};

obj.arr = new Array();

obj.arr.push({ startPx: 10, endPx: 30 });
obj.arr.push({ startPx: 55, endPx: 65 });

obj.arr = obj.arr.filter(
  (value, index, self) =>
    index === self.findIndex((t) => Object.keys(t) !== Object.keys(value))
);
