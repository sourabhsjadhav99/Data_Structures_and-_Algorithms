function isValidPhoneNumber(phoneNumber) {
    let regex=/^[789]+[\d]{9}$/
       return regex.test(phoneNumber)
   }