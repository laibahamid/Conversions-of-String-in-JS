document.write("-----Conversion of string to integers and numbers-----<br><br>")

//Number() : converts string to number
var a = "99" //string
var num = Number(a) //num
document.write("Number: "+num)

//parseInt() : returns first integer val
var b = "99 88 77"
var num1 = parseInt(b)
document.write("<br>parseInt val: "+num1)

//parseFloat() : return val with decimal
var c = "50.38"
var num2 = parseFloat(c)
document.write("<br>parseFloat val: "+num2) //float means decimal val

//isFinite() : checks if finite or infinite
var d = "100"
var num3 = isFinite(d)
document.write("<br>Finite number: "+num3)

//isInteger() :  checks if input is int or not 
var e = "100" //string, if input without "" then a num
var num4 = Number.isInteger(e)  //will not consider deciml value
document.write("<br>Checking integer or not: "+num4)

//toFixed
var f = 5.5348457
var num5 = f.toFixed(3) //print the given parameter digits after decimal
document.write("<br>3 decimal nums: "+num5)

//toPrecision() : return round about value means print the no. of int given
var g = 5.789686
var num6 = g.toPrecision(2)
document.write("<br>Precised value: "+num6)
