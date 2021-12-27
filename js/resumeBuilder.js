/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* bio 
    name : string
    role : string
    contacts : an object with
          mobile: string
          email: string
          github: string
          twitter: string (optional)
          location: string
    welcomeMessage: string
    skills: array of strings
    biopic: string url
    display: function taking no parameters

    */


const bio = {
    name : 'Tamer Maarouf',
    role : 'Front End Web Developer | Senior Graphic Designer',
    contacts : {
        mobile: '00201553572154',
        email: 'tamermaarouf@gmail.com',
        github: 'tamermaarouf',
        twitter: 'tamermaarouf',
        location: 'Shoupra, Cairo',
    },
    welcomeMessage: `I am a hard-working and articulate front end web developer and senior graphic designer.`,
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'jQuery Basics', 'AJAX Basics'],
    biopic: 'images/tamer maarouf.jpg',
    display: function(){
        $('#topContacts').prepend(HTMLskillsStart);
        $('#topContacts').prepend(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
        $('#topContacts').prepend(HTMLbioPic.replace('%data%', this.biopic));
        $('#topContacts').prepend(HTMLlocation.replace('%data%', this.contacts.location));
        $('#topContacts').prepend(HTMLtwitter.replace('%data%', this.contacts.twitter));
        $('#topContacts').prepend(HTMLgithub.replace('%data%', this.contacts.github));
        $('#topContacts').prepend(HTMLemail.replace('%data%', this.contacts.email));
        $('#topContacts').prepend(HTMLmobile.replace('%data%', this.contacts.mobile));
        $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
        this.skills.forEach(skill => {
            $('#skills').append(HTMLskills.replace('%data%', skill));            
        });
    },
};

bio.display();