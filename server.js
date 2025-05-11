const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;



const artistes = [
"The Beatles",
"bob dylan",
"Elvis Presley",
"The Rolling Stones",
"Jimi Hendrix",
"Bob Marley",
"Marvin Gaye",
"Prince",
"The Doors",
"The Who",
"Nirvana",
"Madonna",
"John Lennon",
"David Bowie",
"Pink Floyd",
"Queen",
"Metallica",
"The Police",
"Radiohead",
"Eminem",
"Celine Dion",
"Daft Punk",
"Ice Cube",
"Nicki Minaj",
"Drake",
"Lil Wayne",
"Kendrick Lamar",
"Diplo",
"Skrillex",
"Dua Lipa",
"Stevie Wonder",
"Aretha Franklin",
"Michael Jackson",
"Whitney Houston",
"Beyonce",
"Taylor Swift",
"Ed Sheeran",
"Billie Eilish",
"Ariana Grande",
"Shakira",
"Justin Bieber",
"Lady Gaga",
"Snoop Dogg",
"Travis Scott",
"Post Malone",
"Alicia Keys",
"The Weeknd",
"Bruno Mars",
"Harry Styles",
"Rosalia",
"Bad Bunny",
"BLACKPINK",
"Rihanna",
"Adele",
"Coldplay",
"Katy Perry",
"Mariah Carey",
"Green Day",
"Linkin Park",
"Bon Jovi",
"Phil Collins",
"Elton John",
"Usher",
"Janet Jackson",
"Tina Turner",
"George Michael",
"Pitbull",
"Daddy Yankee",
"Avicii",
"Calvin Harris",
"Mika",
"Lenny Kravitz",
];
  


app.listen(PORT, () => {
    console.log('server is working')
})

app.get('/randomArtist', (req, res) =>{

    const random = Math.floor(Math.random() * artistes.length)

    res.status(200).json({artist: artistes[random]})

})