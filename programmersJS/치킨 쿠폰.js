function solution(chicken) {
  const COUPON_NEED = 10;
  const getNumberOfServiceChiken = (coupon) => parseInt(coupon / COUPON_NEED);
  let coupon = chicken;
  let maxServiceChicken = 0;
  while (getNumberOfServiceChiken(coupon) > 0) {
    const numberOfServiceChiken = getNumberOfServiceChiken(coupon);
    const numberOfUsedCoupon = numberOfServiceChiken * COUPON_NEED;
    maxServiceChicken += numberOfServiceChiken;
    coupon = coupon - numberOfUsedCoupon + numberOfServiceChiken;
  }
  return maxServiceChicken;
}
