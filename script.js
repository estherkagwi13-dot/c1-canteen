for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Chai & Mandazi");
  } else if (i % 3 === 0) {
    console.log("Chai");
  } else if (i % 5 === 0) {
    console.log("Mandazi");
  } else {
    console.log(i);
  }
}