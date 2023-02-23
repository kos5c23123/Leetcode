var plusOne = function(digits) {
    /**
     * 1. join the digits become a string and conver to Big Int
     * becuase the number is only 8 bits
     * 2. add the 1 to the number
     * 3. Convet the Number to String and split with ""4
     */
    return String(BigInt(digits.join('')) + BigInt(1)).split('')
};