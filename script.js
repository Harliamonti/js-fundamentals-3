function add7 (number)
{
    return number + 7;
}

function multiply (left, right)
{
    return left * right;
}

function capitalize (string)
{
    string.charAt(0).toUpperCase();

    return string;
}

function lastLetter (string)
{
    return string.charAt(string.length-1);
}


console.log(add7(13));
console.log(multiply(13, 2));
console.log(capitalize("Liam"));
console.log(lastLetter("Liam"))