// Write your JavaScript code here!
      

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let thisPilotName = document.getElementById("pilotName");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
       
      if ( thisPilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission   
      }
   });
});

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
   let thisPilotName = document.getElementById("pilotName");
   let copilotName = document.querySelector("input[name=copilotName]");
   let lettersOnly = /^[a-zA-Z]+$/;
   if (thisPilotName.value.match(lettersOnly)) {
   } else { alert ("Make sure to enter valid information for each field.");
}

   if (copilotName.value.match(lettersOnly)) {
} else { alert ("Make sure to enter valid information for each field.");

}
       
      
   });
});


window.addEventListener("load" , function(){
   let formSubmit = document.getElementById("formSubmit");
   let thisPilotName = document.getElementById("pilotName");
   formSubmit.addEventListener("click", function(event) {
   document.getElementById("pilotStatus").innerHTML = `Pilot, ${thisPilotName.value} is ready for Launch.`
   }); 
});

window.addEventListener("load", function() {
   let formSubmit = document.getElementById("formSubmit");
   let copilotName = document.querySelector("input[name=copilotName]");
   formSubmit.addEventListener("click", function(event) {
   document.getElementById("copilotStatus").innerHTML = `Co-pilot, ${copilotName.value} is ready for Launch.`  
   });
  
});

window.addEventListener("load" , function(){
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let formSubmit = document.getElementById("formSubmit");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   formSubmit.addEventListener("click", function(event) {
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey"
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("launchStatus").style.color = "red"
      }

      if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("cargoStatus").innerHTML = "there is too much mass for the shuttle to take off."
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("launchStatus").style.color = "red"
      }

      if (cargoMass.value < 10000 && fuelLevel.value > 10000 ) {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.color = "green"
      }
  });
});
window.addEventListener ("load" , function(){
   fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         let div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         
         <img src=${json[0].image}>
          `;

      });
   });
})




