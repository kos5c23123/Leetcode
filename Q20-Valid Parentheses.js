var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // if the first character is ), ], }, then return false
    if (s[i] === "(") { // if the first character is (, then push ) to the stack
      stack.push(")");
    } else if (s[i] === "[") { // if the first character is [, then push ] to the stack
      stack.push("]");
    } else if (s[i] === "{") { // if the first character is {, then push } to the stack
      stack.push("}");
    } else if (stack.pop() !== s[i]) { // if the first character is ), ], }, then pop the stack and compare it with the first character
      // if the first character is ), ], }, and the stack is empty, then return false
      return false;
    }
  }
  return !stack.length;
};
