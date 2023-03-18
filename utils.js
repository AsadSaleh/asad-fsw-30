function fibonacci(index) {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  // console.log(index);
  return fibonacci(index - 1) + fibonacci(index - 2);
}

function heavyComputationSync() {
  console.log("memulai heavy computation");
  const result = fibonacci(44);
  console.log("selesai heavy computation. Result: ", result);
}

function smallComputationSync() {
  console.log("memulai small computation");
  const result = fibonacci(20);
  console.log("selesai small computation. Result: ", result);
}

function heavyComputationCb(callback) {
  console.log("memulai heavy computation");
  setTimeout(() => {
    console.log("selesai heavy computation");
    callback?.();
  }, 10000);
}

function smallComputationCb(callback) {
  console.log("memulai small computation");
  setTimeout(() => {
    console.log("selesai small computation");
    callback?.();
  }, 1500);
}

module.exports = {
  heavyComputationSync,
  smallComputationSync,
  heavyComputationCb,
  smallComputationCb,
};
