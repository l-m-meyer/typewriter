const typewriter = () => {
  const sentence = 'hello there from lighthouse labs\n';
  
  let ms = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, ms += 50);
  }
};
typewriter();