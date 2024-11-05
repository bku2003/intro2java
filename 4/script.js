function weatherAdvice(weather) {
    if (weather.toLowerCase() === "sunny") {
        console.log("Yay! It's sunny! Wear sunscreen, don't burn!");
    } else if (weather.toLowerCase() === "rainy") {
        console.log("Hey...I like the rain... Time for that goretex");
    } else if (weather.toLowerCase() === "snowy") {
        console.log("Snow!!! It's back!!!");
    } else if (weather.toLowerCase() === "windy") {
        console.log("Ew it's windy...windbraker time...");
    } else {
        console.log("Error. Please enter 'sunny', 'rainy', 'snowy', or 'windy'.");
    }
}

weatherAdvice("sunny");
weatherAdvice("rainy");
weatherAdvice("snowy");
weatherAdvice("windy");
weatherAdvice("cloudy");