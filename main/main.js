function main(number) {
    if(number === 0)
    {
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall."
    }

    if (number === 1)
    {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n"+
            "Take one down and pass it around, no more bottles of beer on the wall.\n"
    }

    if (number === 2)
    {
        return  "2 bottles of beer on the wall, 2 bottles of beer.\n"+
            "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    }

    if (number > 2)
    {
        return number + " bottles of beer on the wall, " + number + " bottles of beer.\n"+
            "Take one down and pass it around, " + (number-1) + " bottles of beer on the wall.\n"
    }

    var result = '';
    for (number = 99;number > -1;number--)
    {
        result = result + main(number);
    }
    return result;
}
module.exports = main;


