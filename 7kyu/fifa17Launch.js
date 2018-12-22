function fifa(ticket, results) {
  let earnings = 0;

  let betOrder = [];
  let gw1 = "";
  let gw2 = "";
  let gw3 = "";
  let gs1 = results[0].split("-");
  let gs2 = results[1].split("-");
  let gs3 = results[2].split("-");
  ////calculating game 1 winner///
  console.log(gs1, gs2, gs3);
  if (gs1[0] == gs1[1]) {
    gw1 = "Draw";
  } else if (gs1[0] > gs1[1]) {
    gw1 = "Home";
  } else {
    gw1 = "Away";
  }
  ////calculating game 2 winner///
  if (gs2[0] == gs2[1]) {
    gw2 = "Draw";
  } else if (gs2[0] > gs2[1]) {
    gw2 = "Home";
  } else {
    gw2 = "Away";
  }
  ////calculating game 3 winner///
  if (gs3[0] == gs3[1]) {
    gw3 = "Draw";
  } else if (gs3[0] > gs3[1]) {
    gw3 = "Home";
  } else {
    gw3 = "Away";
  }
  //calculating if bet is correct///

  Object.keys(ticket).forEach(function(bet) {
    betOrder.push(bet);
  });
  if (betOrder[0] === gw1) {
    earnings += parseFloat(ticket[gw1].replace(/[^0-9\.]+/g, ""));
  }
  if (betOrder[1] === gw2) {
    earnings += parseFloat(ticket[gw2].replace(/[^0-9\.]+/g, ""));
  }
  if (betOrder[2] === gw3) {
    earnings += parseFloat(ticket[gw3].replace(/[^0-9\.]+/g, ""));
  }
  return "£" + earnings.toString();
}
