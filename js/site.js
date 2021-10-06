function getUserString() {
  // Get input
  let userString = document.getElementById("userString").value;

  //validations??
  if (userString.length === 0) {
    Swal.fire("Enter Somthing...Anything!!!");
    return;
  } else if (userString.length === 1) {
    Swal.fire("You gotta put more than one character!!!");
    return;
  }
  // use RegEx to remove special char 
  let filteredUserString = userString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  // normalize the case
  let casedFilteredUserString = filteredUserString.toLowerCase();

  // Reverse the user's input - separate function
  let revString = reverseString(casedFilteredUserString);

  // compare the inputs - separate function
  let result = comparedStrings(casedFilteredUserString, revString);

  // output result - sep func
  displayData(result);

}

function reverseString(str) {
  // declare new string
  let reversedStr = "";

  let start = str.length - 1
  let end = 0

  // concat an new string with char in reverse
  for (let i = start; i >= end; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

function comparedStrings(userString, revString) {
  
  let isPal = isPalindrome(userString, revString);
  // returned an object with values 
  return {
    pal: isPal,
    usr: userString,
    rev: revString
  };

}

function isPalindrome(userString, revString) {
  let bool = true;

  revString.split('').some((l, i) => {

    if (bool === true) {
      let a = userString.charAt(i);
      let b = revString.charAt(i);
      a === b ? bool = true : bool = false;
    }
    return bool === false;
  })
  return bool;
}

function displayData(result) {
  // output 3 things
  let tableBody = document.getElementById("results")
  tableBody.innerHTML = ""
  let rowTemplate = document.getElementById("tableTemplate");
  const tableRow = document.importNode(rowTemplate.content, true)
  let rowCols = tableRow.querySelectorAll("td");
  
  // the original
  rowCols[0].textContent = result.usr.toUpperCase();
  // the reversed
  rowCols[1].textContent = result.rev.toUpperCase();;
  // was it a palindrome
  rowCols[2].textContent = result.pal ? "PALINDROME" : "Not a Palindrome";

  tableBody.appendChild(tableRow);
}