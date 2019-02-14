var value=function(x, h, w) {
return x, h, w ;
}
var x=parseInt(prompt("Select units: 1.Metres(M) and KG, 2.CM and KG; 3.Pounds(Ib) and Inches(in) 4.Feet(ft) and pounds(ib)"));
var h=parseInt(prompt("Input height;"));
var w=parseInt(prompt("Input Weight;"));
if(x===4) {
var bmi=(w/((h*h)*(144)))*703;
} else if(x===3) {
var bmi=(w/(h*h))*703;
} else if(x===2) {
var bmi=(w)/((h/100)*(h/100));
} else if(x===1) {
  var bmi=w/((h)*(h));
} else {
alert("WARNING! Invalid selection. Kindly refresh your browser and make a valid selection!")
}
if(bmi>40) {
alert("Your BMI is:"+bmi+"!You are very obese; Kindly visit a doctor for medication!")
} else if(bmi>=35) {
alert("Your BMI is:"+bmi+"!You are serverely obese; Kindly visit a doctor for medication!")
} else if(bmi>=30) {
alert("Your BMI is:"+bmi+"!You are moderately obese; kindly visit a doctor for medication")
} else if(bmi>=25) {
alert("Your BMI is:"+bmi+"!You are overweight; Do some more excercise to reduce your weight")
} else if(bmi>=19) {
alert("Your BMI is:"+bmi+"!Your BMI is normal(You are healthy); Maintain your good health") ;
} else if(bmi>=16) {
alert("Your BMI is:"+bmi+"You are underweigt; Kindly improve on your diet")
} else {
alert("Your BMI is:"+bmi+"!You are severly underweight; kindly visit a doctor for medication")
}
