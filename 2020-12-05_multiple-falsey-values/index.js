// checking if one of multiple values are falsey like this?
if (!firstName && !lastName && !email && !password) {
  console.log('one or more fields are missing!');
}

// try this instead!
if (!(firstName && lastName && email && password)) {
  console.log('one or more fields are missing!');
}
