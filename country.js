class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello, world!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai!", ["red", "white", "red"])
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]);
let italy = new Country("Italy", "Italian", "Ciao mondo!", ["green", "white", "red"]);



function SwitchCountry() {
    let input = CountryList.value;
    let country;
    console.log(input)
    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "Italy") {
        country = italy;
    }
    document.getElementById('CountryName').innerText = country.name
    document.getElementById('OfficialLanguage').innerText = country.lang
    document.getElementById('HelloWorld').innerText = country.greeting

    DisplayColors(country)

}

function DisplayColors(country) {
    // document.body.style.backgroundColor = country.colors[0]
    // document.getElementById('Color1').style.color = country.colors[1]
    // //document.getElementsByClassName('Color2').style.color = country.colors[2]
    // console.log(document.getElementById(`Color1`).style.color)

    let color1 = document.querySelector("#Color1");
    color1.style.backgroundColor = country.colors[0];

    let color2 = document.querySelector("#Color2");
    color2.style.backgroundColor = country.colors[1];

    let color3 = document.querySelector("#Color3");
    color3.style.backgroundColor = country.colors[2];
}