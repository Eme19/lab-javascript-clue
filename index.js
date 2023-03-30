// # Clue data

// Use this data to model your game cards into objects.

//<br>

const suspectsarr = [{
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
    },
    
    {   
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
     },
    
     {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
    },
    
    {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
    },
    
    {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
    },
    
    {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
    }]
    
    
    // <br>
    
    
    // ### Weapons
    
    let rope = {
    name: "rope",
    weight: 10,
    };
    let knife = {
     name: "knife",
     weight: 8,
    };
    let candlestick = {
    name: "candlestick", 
    weight: 2,
    };
    let dumbbell = {
    name: "dumbbell",
     weight: 30,
    };
    let poison = {
    name: "poison", 
    weight: 2,
    };
    let axe = {
    name: "axe", 
    weight: 15,
    };
    let bat = {
    name: "bat", 
    weight: 13,
    };
    let trophy = {
    name: "trophy",
    weight: 25,
    };
    let pistol = {
    name: "pistol", 
    weight: 20,
    };
    
    
    
    
    // ### Rooms
    
    let dinningRoom = {
       name: "Dining Room",
    };
    let conservatory = {
        name: "Conservatory",
    };
    let Kitchen = {
        name: "Kitchen",
    };
    let study = {
        name: "Study",
    };
    let library = {
       name: "Library",
    };
    let billiardRoom = {
        name: "Billiard Room",
    };
    let lounge = {
        name: "Lounge",
    };
    let ballroom ={
        name: "Ballroom",
    };
    let hall = {
        name: "Hall",
    };
    let spa = {
        name: "Spa",
    };
    let livingRoom = {
        name: "Living Room",
    };
    let Observatory = {
        name: "Observatory",
    };
    let theater ={
        name: "Theater",
    };
    let guestHouse = {
        name: "Guest House",
    };
    let Patio = {
        name: "Patio",
    };
    
    
    
    
    // let supsectbitch8 =[firstName, lastName]
    let suspectWeapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]
    let suspectROOM = [Patio, guestHouse, theater, Observatory, livingRoom, spa, hall, ballroom, lounge, billiardRoom, library, study, conservatory, Kitchen, dinningRoom ]
      
    
    /// let supsectarray = Suspectsarr[Math.floor(Math.random() * Suspectsarr.length)]
    // let randomsuspectWeapons= suspectWeapons[Math.floor(Math.random() * suspectWeapons.length)]
    // let randomsuspectROOM= suspectROOM[Math.floor(Math.random() * suspectROOM.length)]
    
    /// console.log(supsectarray, randomsuspectWeapons, randomsuspectROOM )
    
    
    
    
    function selectRandom (array) {
        
        return array[Math.floor(Math.random() * array.length)]
    }
     function pickMystery(arr, arr2, arr3)  {
    
        let fullName = selectRandom(arr);
        let firstname = fullName.firstName;
        let lastname = fullName.lastName;
        let weapon = selectRandom(arr2).suspectWeapons;
        let room = selectRandom(arr3).suspectROOM;
    
        let misteryEnvelope = []
        misteryEnvelope.push(fullName, suspectWeapons, suspectROOM)
              return misteryEnvelope; 
        // let weapon = suspectWeapons.selectRandom
       // let )rOOM = suspectROOM.selectRandom
        // let allbject = []
        // allbject.push(suspect , weapon , rOOM
        
    }
    
    function revealMystery(arr) {
        pickMystery (suspectsarr, suspectWeapons, suspectROOM);
    
      return `${arr} ${arr} killed Mr.Boddy using the ${arr} in the ${arr}`
      
    }
    console.log(revealMystery(revealMystery.misteryEnvelope))