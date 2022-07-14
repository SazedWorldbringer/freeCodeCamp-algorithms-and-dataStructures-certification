function spinalCase(str) {
  // regex for whitespaces and underscores
  const regex = /\s+|_+/g;
  
  // replace low-uppercase to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');