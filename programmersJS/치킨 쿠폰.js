function solution(chicken) {
  const COUPON_NEED = 10;
  const getNumberOfServiceChiken = (coupon) => parseInt(coupon / COUPON_NEED);
  let coupon = chicken;
  let maxServiceChicken = 0;
  while (coupon >= COUPON_NEED) {
    const NumberOfServiceChiken = getNumberOfServiceChiken(coupon);
    maxServiceChicken += NumberOfServiceChiken;
    coupon =
      coupon - NumberOfServiceChiken * COUPON_NEED + NumberOfServiceChiken;
  }
  return maxServiceChicken;
}
