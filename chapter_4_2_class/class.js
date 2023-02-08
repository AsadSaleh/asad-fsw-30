"use strict";

class Rumah {
  luasTanah;
  luasBangunan;

  constructor(lt, lb) {
    this.luasTanah = lt;
    this.luasBangunan = lb;
  }

  printLtDanLb() {
    console.log(
      `Rumah ini memiliki luas `,
      `bangunan ${this.luasBangunan} m2 `,
      `dan luas tanah ${this.luasTanah} m2.`
    );
  }

  printLtDanLbAW = () => {
    console.log(
      `Rumah ini memiliki luas `,
      `bangunan ${this.luasBangunan} m2 `,
      `dan luas tanah ${this.luasTanah} m2.`
    );
  };
}

const rumahFulan = new Rumah(200, 150);

rumahFulan.printLtDanLb();
rumahFulan.printLtDanLbAW();
