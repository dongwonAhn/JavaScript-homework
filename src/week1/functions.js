// ---------------------------------------------------------------------
// 함수 작성 과제
// ---------------------------------------------------------------------

// 1. 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return "안녕하세요! " + username + "님. 좋은 하루되세요!"
}
console.log(greetUser("동원"))

// 2. 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
const calculateOriginalPrice = function(priceWithTax) {
  return Math.round(priceWithTax / 1.033)
}
console.log(calculateOriginalPrice(10330))

// 3. 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
const registrationCard = {
  name: "동원",
  age: 18,
  gender: "남"
}
const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19
}
console.log(canSellAlcohol(registrationCard))

// 4. 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
function getDiscountedPrice(originalPrice, discountPercent) {
  return Math.round(originalPrice * (1 - discountPercent / 100))
}
console.log(getDiscountedPrice(18700, 20))
