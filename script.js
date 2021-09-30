const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const btnClicked = document.querySelector("#btnClick");
const output = document.querySelector(".output-text");

btnClicked.addEventListener("click", () => {
  findLuckyBirthday();
});

function findLuckyBirthday() {
  let dob = dateOfBirth.value;
  let number = Number(luckyNumber.value);
  let result = evluateDOB(dob);
  if (dob !== "" && number > 0) {
    isBirthDayLucky(result, number);
  } else {
    output.innerHTML = "Please Enter the valid input 😠";
    alert("Please Enter the valid input 😠");
  }
}

function evluateDOB(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function isBirthDayLucky(result, number) {
  if (result % number === 0) {
    output.innerHTML = "Yayy! you'r B'day is Lucky 🥳";
  } else {
    output.innerHTML = "oops! you'r B'day is unLucky 😭";
  }
}
