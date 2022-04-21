// PHRASES TO BE DISPLAYED
const keys = {
    Q:{ text: "Axe!"},
    W:{ text: "Axe is ready!"},
    E:{ text: "Axe here!"},
    A:{ text: "Axe charges!"},
    S:{ text: "Here comes the Axe!"},
    D:{ text: "The Axe-Man comes!"},
    Z:{ text: "There is no team in Axe!"},
    X:{ text: "Axe swings his blade."},
    C:{ text: "Axe is a cut above!"}
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".drum-pad");

// FUNCTION TO PLAY THE SOURCE AUDIO
function playaudio(str){
    const samples = document.getElementById(str);
    samples.play();
}

// KEYBOARD INPUT TRIGGER CORRESPONDING "PAD"
document.addEventListener("keydown", e=>{
    // IF INPUT UPPERCASE
    if (keys[e.key]){
        display.innerHTML = keys[e.key].text
        playaudio([e.key])
    }
    // IF INPUT LOWERCASE
    else if(keys[(e.key).toUpperCase()])
    {
        display.innerHTML = keys[(e.key).toUpperCase()].text
        playaudio([e.key].toString().toUpperCase())
    }
})

// CLICKS TO TRIGGER DISPLACE PHRASES
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        display.innerHTML = keys[button.innerText].text
        console.log(button.innerText)
    })
});




