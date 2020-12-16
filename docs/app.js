const songs = ["Face of Death", "Adrenaline", "The Void Alone", "Abandon", "Scar Queen", "Dreamless", "The Prodigal Son", "Amber Gaze",
"Fidelio", "Wind For Wings", "Les Silences", "Lacuna", "Starlit Path", "Carved from Stone", "The Night Reveals", "The Flesh Prevails",
"Levitation", "Alone with You", "Allure", "Sapphire", "Chemical Cave", "Alpha Incipient", "Ritual of the Godflesh", "Become One", 
"Cerebral Hybridization", "Prison of the Mind", "The Flame Surreal", "Enslaved Eternal Phenomenon", "Hallucination", "The Harvest Wombs",
"Assemblage of Wolves", "The Dead Sea", "Silent", "Venom Upon the Blade", "Glass House", "Last Light", "Ultraviolet", "Dopamine", 
"The Ocean Above", "Hollow", "Sanctuary", "Eyes like the Sun", "Distant and Cold", "Departure"];

function select(){
    return songs[Math.floor(Math.random() * Math.floor(songs.length))];
}

function setRandomName(){
    const songText = document.getElementById("songText");
    const name = select();
    songText.innerHTML = name;
}

const button = document.getElementById("SongName");
button.addEventListener("click", setRandomName, false);