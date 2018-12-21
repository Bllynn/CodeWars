function rentalCarCost(d) {
  let cost = 40;
  let discount = 0;
  if (d >= 3 && d < 7) {
    discount = 20;
  }
  if (d >= 7) {
    discount = 50;
  }
  console.log({ Cost: cost, Discount: discount, Days: d });
  return d * cost - discount;
}
