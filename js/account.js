(function() {
  "use strict";

  const accountMaker = function(name, deposit) {
    const accntName = name;
    const balance = deposit;
    // return {
    //   getAccountName: () => accntName,
    //   getBalance: () => balance
    // };
    return {
      accountName: accntName,
      balance: balance
    };
  };

  let accntInfoList = [];

  function createHandler() {
    let newAcc = accountMaker(document.getElementById("accntName").value, document.getElementById("deposit").value);
    accntInfoList.push(newAcc);

    let str = "";
    // for (let account of accntInfoList) {
    //   str += `Account Name: ${account.getAccountName()}, Balance: ${account.getBalance()}\n`;
    // }
    for (const account of accntInfoList)
      str += `Account Name: ${account.accountName}, Balance: ${account.balance}\n`;
    document.getElementById("infoList").value = str;
  };

  window.onload = () => {
    document.getElementById("createBtn").onclick = createHandler;
  };
})();