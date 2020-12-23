const note = document.getElementById("note");
const mode = document.getElementById("mode");
const notes =[
"A","B","C","D","E","F","G",

"A♭","B♭","C♭","D♭","E♭","G♭",

"C♯","F♯"
];
const modes = ["Ionian",
"Ionian",
"Dorian",
"Phrygian",
"Lydian",
"Mixolydian",
"Aeolian",
"Locrian",
]
function onRandomButtonClick(){
	const randomNote =notes[Math.floor(Math.random() * notes.length)];
const randomMode =modes[Math.floor(Math.random() * modes.length)];
note.innerHTML = randomNote;
mode.innerHTML = randomMode;
}
onRandomButtonClick();
