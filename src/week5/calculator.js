// --------------------------------------------------------------------------
// 📌 iPhone calculator
// --------------------------------------------------------------------------

// 숫자 버튼: 숫자 입력
// AC 버튼: 모든 값 초기화 0
// % 버튼: 나머지를 구하는 연산자 (9%4 = 1)
// ÷ 버튼: 나누기 연산자 설정
// × 버튼: 곱하기 연산자 설정
// - 버튼: 빼기 연산자 설정
// + 버튼: 더하기 연산자 설정
// = 버튼: 계산 수행 후 결과 출력
// . 버튼: 소수점 입력 (중복 입력 방지)
// +/- 버튼: 	현재 값의 부호 반전 (3 → (-3), -5 → 5)
// ⌫ 버튼: 마지막 숫자 삭제 (123 → 12, 1 → 0)

const formulaDisplay = document.querySelector(".formula");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0"; // 현재 입력 중인 숫자
let expression = ""; // 흰색 영역에 표시될 수식
let finalizedFormula = ""; // 회색 영역에 표시될 수식
let justEvaluated = false; // = 버튼 눌렀는지 여부

// 화면 표시 업데이트
function updateDisplay() {
  if (expression) {
    resultDisplay.textContent = expression;
  } else {
    resultDisplay.textContent = "0";
  }

  formulaDisplay.textContent = finalizedFormula;
}

// AC 버튼 처리
function clearAll() {
  currentInput = "0";
  expression = "";
  finalizedFormula = "";
  justEvaluated = false;
  updateDisplay();
}

// 숫자 및 소수점 입력
function inputNumber(value) {
  if (justEvaluated) {
    expression = "";
    justEvaluated = false;
  }

  // 소수점 중복 방지
  if (value === "." && currentInput.includes(".")) {
    return;
  }

  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  expression += value;
  updateDisplay();
}

// 연산자 입력 처리
function inputOperator(op) {
  if (justEvaluated) {
    justEvaluated = false;
  }

  const trimmed = expression.trim();
  const lastChar = trimmed.charAt(trimmed.length - 1);

  if ("+-×÷%".includes(lastChar)) {
    expression = trimmed.slice(0, -1) + op;
  } else {
    expression += op;
  }

  currentInput = "";
  updateDisplay();
}

// = 버튼 계산
function calculateResult() {
  let formula = expression.trim();

  // 수식이 없거나, 마지막이 연산자인 경우 계산 안함
  const lastChar = formula.charAt(formula.length - 1);
  if (formula === "" || "+-×÷%".includes(lastChar)) {
    return;
  }

  formula = formula.replace(/×/g, "*").replace(/÷/g, "/");

  let result = eval(formula);
  result = parseFloat(result.toFixed(10)); // 부동소수점 오차 방지

  finalizedFormula = expression;
  expression = result.toString();
  currentInput = expression;
  justEvaluated = true;

  updateDisplay();
}

// 버튼 클릭 이벤트 연결
buttons.forEach((btn) => {
  const value = btn.textContent;

  btn.addEventListener("click", () => {
    if (btn.classList.contains("number")) {
      inputNumber(value);
    } else if (btn.classList.contains("operator")) {
      inputOperator(value);
    } else if (btn.classList.contains("equal")) {
      calculateResult();
    } else if (btn.classList.contains("function") && value === "AC") {
      clearAll();
    }
  });
});
