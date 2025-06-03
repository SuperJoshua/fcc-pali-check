"use strict"

const text_input_area = document.getElementById("text-input")
const check_button = document.getElementById("check-btn")
const result_area = document.getElementById("result")

const check_palindrome = function(stripped_text) {
   const limit = Math.floor(stripped_text.length / 2)
   for (let i = 0; i < limit; i += 1) {
      if (stripped_text[i] != stripped_text[stripped_text.length - 1 - i]) {
         return false
      }
   }
   
   return true
}

const check_result = function() {
   const user_text = text_input_area.value || ''
   if (user_text) {
      const re = /[ _\-.,:\/\\()]*/g
      const stripped_text = user_text.replaceAll(re, '').toLowerCase()
      if (check_palindrome(stripped_text)) {
         result_area.innerText = `${user_text} is a palindrome`
      } else {
         result_area.innerText = `${user_text} is not a palindrome`
      }
   } else {
      alert("Please input a value")
   }
}

check_button.addEventListener('click', check_result)
