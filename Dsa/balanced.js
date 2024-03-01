function matchingBraces(braces) {
    const result = [];
      for (const string of braces) {
          const stack = [];
          let balanced = true;
          for (const char of string) {
              if (char === '(' || char === '[' || char === '{') {
                  stack.push(char);
              } else if (char === ')' || char === ']' || char === '}') {
                  if (stack.length === 0) {
                      balanced = false;
                      break;
                  }
                  const top = stack.pop();
                  if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
                      balanced = false;
                      break;
                  }
              }
          }
          if (balanced && stack.length === 0) {
              result.push("YES");
          } else {
              result.push("NO");
          }
      }
      return result;
  
  
  }