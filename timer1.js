const inputs = process.argv.slice(2);

// The incoming arguments will be in strings, so first check
// if they are indeed numbers first.
const numInput = []
for (let input of inputs) {
  if (parseInt(input) !== NaN) {
    numInput.push(parseInt(input));
  }
}

for (let input of numInput){
  if (input >= 0) {
    setTimeout(()=>{
      process.stdout.write('\x07');
    }, input*1000);
  }
}