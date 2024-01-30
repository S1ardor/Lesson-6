// Sinf ishii //
// 1-Task // input value ni hamma joyidan probel ni olib tashlashh yani replceAll() qilish //
// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function(evt){
//   evt.preventDefault();
//   var inputValue = elInput.value.replaceAll(" ", "");
//   elResult.textContent = inputValue;
// });

// 2-Task // textareage kritilgan sozdan input ga kiritilgan value ni index ni topish. indexOf() foydalanib //

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elTextArea = elForm.querySelector(".js-textarea");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function(evt){
//   evt.preventDefault();
//   var inputValue = elInput.value.trim();
//   var textAreaValue = elTextArea.value.trim();
//   var resulValue = textAreaValue.indexOf(inputValue);
//   elResult.textContent = resulValue;
// });

// 3-Task // textareage kritilgan sozdan input ga kiritilgan value bo'lsa true aks holda false ni qaytarsin. includes() foydalanib //

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elTextArea = elForm.querySelector(".js-textarea");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();

//   var inputValue = elInput.value.trim();
//   var textAreaValue = elTextArea.value.trim();
//   var resultBool = textAreaValue.includes(inputValue);
//   elResult.textContent = resultBool;
// });

// 4-Task // kesish yani slice(), substri() vhk foydalanib.

var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elTwoInput = elForm.querySelector(".js-twoinput");
var elTextArea = elForm.querySelector(".js-textarea");
var elResult = document.querySelector(".js-result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var wordIndex = elTextArea.value.indexOf(elInput.value);
  var wordTwoIndex = elTextArea.value.indexOf(elTwoInput.value);
  var result = elTextArea.value.slice(wordIndex, wordTwoIndex);
  elResult.textContent = result;
});
