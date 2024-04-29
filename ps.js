input = 9474;

Evensum = 0;
Oddsum = 0;

for (i = 0; i < input.length; i = i + 1) {
  if (input[i] % 2 == 0) {
    Evensum = Evensum + Number(input[i]);
  } else {
    Oddsum = Oddsum + Number(input[i]);
  }
}

if (Evensum > Oddsum) {
  console.log("Even sum is bigger");
} else {
  console.log("Odd sum is bigger");
}
