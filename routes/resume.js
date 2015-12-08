var express = require('express');

var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });

var router = express.Router();

var contentObj = {
  summary: {
    text: "I'm a front end software engineer who develops fast, accessible user interfaces with a mix of JavaScript, jQuery, RequireJS, Backbone.js, Bootstrap, CSS, HTML, and other front end technologies.  With a focus on performance and usability, I take care in choosing the right tools for the job."
  },
  technologies: {
    skillSets: [
      {name: "Javascript", skills: ["JavaScript", "jQuery", "Backbone.js", "Node.js", "Express", "Gulp", "Grunt", "QUnit"]},
      {name: "CSS", skills: ["CSS2/3", "Bootstrap", "SASS", "Responsive Web Design"]},
      {name: "Java", skills: ["Java", "Tomcat", "Spring", "Velocity", "JSP"]}
    ]
  },
  work: {
    jobs: [
      {
        title: "Lead UI Developer", company: "AOL | Identity Services", date: "February 2011 - Present", 
        tasks: [
          "Re-architected identity products’ client-side code base and build process using JavaScript, RequireJS modules, jQuery, SASS, Bootstrap, Grunt, and Bower.",
          "Increased identity UI rendering performance by an average of 15% (according to WebPagetest).",
          "Created identity systems dashboard UI using Backbone.js.",
          "Implemented responsive UIs for registration, authentication, and account management products.",
          "Mentored intern with regard to UI development by teaching them CSS and JavaScript best practices and giving them a project to complete.",
          "Improved SDLC process by instituting Git Flow procedures for UI code base.",
          "Created adaptive delivery solution for advertising on authentication pages.",
          "Worked with marketing team to create an opt-in solution for texting promotions to new users. Utilized Java knowledge to implement HTTP interface to SMS application."
        ]
      },
      {
        title: "Senior Software Engineer", company: "AOL | Online Marketing", date: "March 2008 - February 2011", 
        tasks: [
          "Re-wrote registration UI using Velocity templates, JavaScript, jQuery, and CSS.",
          "Designed and implemented a flexible, configurable solution for customizing registration flows across all of AOL’s products.",
          "Streamlined registration flow provisioning process by writing a tool that allowed business partners to create new registration configurations.",
          "Assisted migration of AOL’s registration application from WebLogic to Apache Tomcat.",
          "Worked with marketing team to create a flexible, configuration-driven solution for toolbar promotions."
        ]
      }
    ]
  }
}

router.route('/')
  .get(function(request, response){

      console.log('Root route requested.');

      response.render('show.ejs',
                      { resume:
                        { name: "Dan Voss", description: "Front End Software Engineer" }
                      });
  })

  .post(urlencode, function(request, response){
    response.status(201).json({status: "success"});
  });


router.route('/:name')
  .get(function(request, response) {

      console.log('Non-root route requested.');

      var name = request.params.name;
      var returnObj = contentObj[name];
      response.status(201).json(returnObj);
  });


module.exports = router;