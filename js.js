
function go(){
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var name = document.getElementById('username').value;
    document.getElementById('htmlOutput').innerHTML = "Hey there " + name + "!";
    var image = ["Images/Aquarius.png", "Images/Aries.png" , "Images/Cancer.png" , "Images/Capricorn.png" , "Images/Gemini.png" , "Images/Leo.png" , "Images/Libra.png" , "Images/Pisces.png" , "Images/sagittarius.png" , "Images/Scorpio.png" , "Images/Taurus.png" , "Images/Virgo.png"]



    if(name == ""){
        document.getElementById('htmlOutput').innerHTML = "Whats your name?";
    }


    if(month == "March" && (day >= 21 && day <= 31) || month == "April" && (day >= 1 && day <= 19)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Aries";
        document.getElementById('htmlOutput3').innerHTML = "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.";
    }   document.getElementById('images').src = image[1];

    if(month == "April" && (day >= 20 && day <= 30) || month == "May" && (day >= 1 && day <= 20)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Taurus";
        document.getElementById('htmlOutput3').innerHTML = "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."
        document.getElementById('images').src = image[10];
    }

    if(month == "May" && (day >= 21 && day <= 31 ) || month == "June" && (day >= 1 && day <= 20)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Gemini";
        document.getElementById('htmlOutput3').innerHTML = "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."
        document.getElementById('images').src = image[4];
    }

    if(month == "June" && (day >= 21 && day <= 30) || month == "July" && (day >= 1 && day <= 22)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Cancer";
        document.getElementById('htmlOutput3').innerHTML = "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room."
        document.getElementById('images').src = image[2];
    }

    if(month == "July" && (day >= 23 && day <= 31) || month == "August" && (day >= 1 && day <= 22)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Leo";
        document.getElementById('htmlOutput3').innerHTML = "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves."
        document.getElementById('images').src = image[5];
    }

    if(month == "August" && (day >= 21 && day <= 31) || month == "September" && (day >= 1 && day <= 22)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Virgo";
        document.getElementById('htmlOutput3').innerHTML = "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice."
        document.getElementById('images').src = image[11];
    }

    if(month == "September" && (day >= 23 && day <= 30) || month == "October" && (day >= 1 && day <= 19)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Libra";
        document.getElementById('htmlOutput3').innerHTML = "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life."
        document.getElementById('images').src = image[6];
    }

    if(month == "October" && (day >= 23 && day <= 31) || month == "November" && (day >= 1 && day <= 21)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Scorpio";
        document.getElementById('htmlOutput3').innerHTML = "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm."
        document.getElementById('images').src = image[9];
    }

    if(month == "November" && (day >= 22 && day <= 30) || month == "December" && (day >= 1 && day <= 21)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Sagittarius";
        document.getElementById('htmlOutput3').innerHTML = "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures."
        document.getElementById('images').src = image[8];
    }

    if(month == "December" && (day >= 22 && day <= 31) || month == "January" && (day >= 1 && day <= 19)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Capricorn";
        document.getElementById('htmlOutput3').innerHTML = "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
        document.getElementById('images').src = image[3];
    }

    if(month == "January" && (day >= 20 && day <= 31) || month == "February" && (day >= 1 && day <= 18)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Aquarius";
        document.getElementById('htmlOutput3').innerHTML = "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign."
        document.getElementById('images').src = image[0];

    }

    if(month == "February" && (day >= 19 && day <= 28) || month == "March" && (day >= 1 && day <= 20)){
        document.getElementById('htmlOutput2').innerHTML = "Your zodiac sign is Pisces  ";
        document.getElementById('htmlOutput3').innerHTML = "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces's attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs."
        document.getElementById('images').src = image[7];
    }

    if((month == "February" && (day >= 29 && day <= 31)) || (month == "April" && (day == 31)) || (month == June && (day == 31)) || (month == September && (day == 31)) || (month == November && (day == 31))){
        document.getElementById('htmlOutput2').innerHTML = "Pick a real day!";
    }


}