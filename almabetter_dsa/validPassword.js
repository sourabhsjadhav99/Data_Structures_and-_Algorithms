function isValidPassword(password) {
    let regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/
  
      return regex.test(password)
  }