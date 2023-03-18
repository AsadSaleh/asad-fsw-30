const { heavyComputationCb, smallComputationCb } = require("../../utils");

// 1. Bisa running secara paralel
heavyComputationCb();
smallComputationCb();

// 2. Bisa running secara serial (satu per satu)
heavyComputationCb(() => {
  smallComputationCb();
});
