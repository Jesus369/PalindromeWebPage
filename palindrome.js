let textBox = document.getElementById('palindromeText')
let submitButton = document.getElementById('submitTab')

submitButton.addEventListener('click',function(){
  let strReversed = textBox.value.split('').reverse().join('');
  if (textBox.value != strReversed)
  { alert("This is not palindrome!")
  } else {
  alert("Ths is palindrome!")
  }
  console.log(textBox.value)      // Value with grab the text entered within the textBox
})
