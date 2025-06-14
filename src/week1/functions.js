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
