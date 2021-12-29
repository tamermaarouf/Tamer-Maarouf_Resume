/*
This is empty on purpose! Your code to build the resume will go here.
 */

// ------------------------MODEL--------------------------------//

const model = {
    bio: {
        name : 'Tamer Maarouf',
        role : 'Front End Web Developer | Senior Graphic Designer',
        contacts : {
            mobile: '00201553572154',
            email: 'tamermaarouf@gmail.com',
            github: 'tamermaarouf',
            twitter: 'tamermaarouf',
            location: 'Shoupra, Cairo',
        },
        welcomeMessage: 'I am a hard-working and articulate front end web developer and senior graphic designer.',
        skills: ['HTML | CSS', 'JavaScript | Object-Oriented JavaScript', 'jQuery Basics', 'Node.js Basics | npm Basics', 'Corel Draw', 'Adobe Photoshop | Adobe illustrator', ''],
        biopic: 'https://res.cloudinary.com/dkwx75me4/image/upload/v1640573326/tamer_maarouf_is6wwf.jpg',
    },

    education: {
          schools: {//array of objects with
             name: 'AIN SHAMS UNIVERSITY',
             location: 'Cairo, Egypt',
             degree: 'BACHELOR OF COMMERCE (B.COM.)',
             majors: 'Accountant', //array of strings
             dates: 'May-2002', //string (works with a hyphen between them) 
          },
        onlineCourses: [{ //array of objects with
             title: 'Front End Web Development Professional',
             school: 'Udacity',
             dates: '10-2021',  //(works with a hyphen between them)
             url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Object-Oriented JavaScript',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'JavaScript Design Patterns',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Responsive Images',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Intro to HTML and CSS',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Asynchronous JavaScript Requests',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Intro to JQuery',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Responsive Web Design Fundamentals',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        },
        { //array of objects with
            title: 'Version Control with Git',
            school: 'Udacity',
            dates: '2021',  //(works with a hyphen between them)
            url: 'https://udacity.com'
        }],
    }
};


// ------------------------octopus--------------------------------//
const octopus = {
    init: function(){
        bioView.init();
        educationView.init();
    },
    getBio: function(){
        return model.bio;
    },
    getEducation: function(){
        return model.education;
    }        
};

// ------------------------VIEW--------------------------------//

const bioView = {
    init: function(){
        this.HTMLheaderName = '<h1 id="name">%data%</h1>';
        this.HTMLheaderRole = '<span>%data%</span><hr>';

        this.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        this.HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile: </span><span class="white-text">%data%</span></li>';
        this.HTMLemail = '<li class="flex-item"><span class="orange-text">Email: </span><span class="white-text">%data%</span></li>';
        this.HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter: </span><span class="white-text">%data%</span></li>';
        this.HTMLgithub = '<li class="flex-item"><span class="orange-text">github: </span><span class="white-text">%data%</span></li>';
        this.HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
        this.HTMLlocation = '<li class="flex-item"><span class="orange-text">location: </span><span class="white-text">%data%</span></li>';

        this.HTMLbioPic = '<img src="%data%" class="biopic">';
        this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
        this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
        this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
        this.getBio = octopus.getBio();
        this.render();
    },
    render: function(){
        $('#header').append(this.HTMLwelcomeMsg.replace('%data%', this.getBio.welcomeMessage));
        $('#header').append(this.HTMLbioPic.replace('%data%', this.getBio.biopic));
        $('#header').append(this.HTMLskillsStart);
        $('#topContacts').prepend(this.HTMLlocation.replace('%data%', this.getBio.contacts.location));
        $('#topContacts').prepend(this.HTMLtwitter.replace('%data%', this.getBio.contacts.twitter));
        $('#topContacts').prepend(this.HTMLgithub.replace('%data%', this.getBio.contacts.github));
        $('#topContacts').prepend(this.HTMLemail.replace('%data%', this.getBio.contacts.email));
        $('#topContacts').prepend(this.HTMLmobile.replace('%data%', this.getBio.contacts.mobile));     
        $('#header').prepend(this.HTMLheaderRole.replace('%data%', this.getBio.role));
        $('#header').prepend(this.HTMLheaderName.replace('%data%', this.getBio.name));
        this.getBio.skills.forEach(skill => {
            let formattedSkills = this.HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkills);
        });
        $('#footerContacts').prepend(this.HTMLlocation.replace('%data%', this.getBio.contacts.location));
        $('#footerContacts').prepend(this.HTMLtwitter.replace('%data%', this.getBio.contacts.twitter));
        $('#footerContacts').prepend(this.HTMLgithub.replace('%data%', this.getBio.contacts.github));
        $('#footerContacts').prepend(this.HTMLemail.replace('%data%', this.getBio.contacts.email));
        $('#footerContacts').prepend(this.HTMLmobile.replace('%data%', this.getBio.contacts.mobile));   

    }
};

const educationView = {
    init: function() {
        this.HTMLschoolStart = '<div class="education-entry"></div>';
        this.HTMLschoolName = '<a href="#">%data%';
        this.HTMLschoolDegree = ' -- %data%</a>';
        this.HTMLschoolDates = '<div class="date-text">%data%</div>';
        this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
        this.HTMLschoolMajor = '<em><br>Major: %data%</em>';
        
        this.HTMLonlineClasses = '<h3>Online Classes</h3>';
        this.HTMLonlineTitle = '<a href="#">%data%';
        this.HTMLonlineSchool = ' - %data%</a>';
        this.HTMLonlineDates = '<div class="date-text">%data%</div>';
        this.HTMLonlineURL = '<br><a href="#">%data%</a><hr>';
        
        this.getEducation = octopus.getEducation();
        this.render();
        
    },
    render: function() {
        let formattedEntry = this.HTMLschoolName.replace('%data%', this.getEducation.schools.name);
        formattedEntry += this.HTMLschoolDegree.replace('%data%', this.getEducation.schools.majors);
        $('#education').append(this.HTMLschoolStart);
        $('.education-entry').append(formattedEntry);
        $('.education-entry').append(this.HTMLschoolDates.replace('%data%', this.getEducation.schools.dates));
        $('.education-entry').append(this.HTMLschoolLocation.replace('%data%', this.getEducation.schools.location));
        $('.education-entry').append(this.HTMLschoolMajor.replace('%data%', this.getEducation.schools.majors));
        $('.education-entry').append(this.HTMLonlineClasses);
        this.getEducation.onlineCourses.forEach(onlineCourse => {
            let formattedOnline = this.HTMLonlineTitle.replace('%data%', onlineCourse.title);
            formattedOnline += this.HTMLonlineSchool.replace('%data%', onlineCourse.school);
            $('.education-entry').append(formattedOnline);
            $('.education-entry').append(this.HTMLonlineDates.replace('%data%',onlineCourse.dates));
            $('.education-entry').append(this.HTMLonlineURL.replace('%data%',onlineCourse.url));

        });      

    }
}

// GO octopus
octopus.init();