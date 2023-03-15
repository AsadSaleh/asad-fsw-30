sendMoneyPromise({ amount: 1_000_000, destination: "akmal", sender: "asad" })
  .then(() => {
    sendNotification({ destination: "akmal", message: "money received" });
  })
  .catch(() => {
    sendNotification({
      destination: "asad",
      message: "transfer money failed!",
    });
  });
