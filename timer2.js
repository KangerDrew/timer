const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (Number.isInteger(parseInt(key))) {
    process.stdout.write('pop in ' + key + ' second(s)...');
    setTimeout(()=>{
      process.stdout.write('\x07');
    }, parseInt(key)*1000);
  }

  if (key === '\u0003') {
    process.exit();
  }
});

console.log('after callback');