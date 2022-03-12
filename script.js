// TODO: add code here
window.addEventListener("load",()=>{
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(response=>response.json())
    .then(json=>{
        let numberOfAstronauts=document.getElementById("numberOfAstronauts");
        numberOfAstronauts.innerHTML=`Astronaut count: ${json.length}`;
        let container=document.getElementById("container");
        let sortedArray=json.sort((a,b)=>b.hoursInSpace-a.hoursInSpace);
            for(const key of sortedArray){
                let color=key.active?"green":"black";
                container.innerHTML+=`<div class="astronaut">
                <div class="bio">
                <h3>${key.firstName} ${key.lastName}</h3>
                <ul>
                    <li>Hours in space: ${key.hoursInSpace}</li>
                    <li style="color:${color}">Active: ${key.active}</li>
                    <li>Skills: ${key.skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${key.picture}">
            </div>`;
            };
    });
});
/*
window.addEventListener("load",function(){
    let fetchPromise=fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response){
        console.log(response);
        response.json().then(function(json){
            console.log(json);
            console.log(json[0]);
            let str=``;
            let container=document.getElementById("container");
            // json IS AN ARRAY OF OBJECTS
            // START SORT ALGORITHM
            let tempObject={};
            let tempArray=[];
            let newResponseArray=[];
            let newResponseArrayA=[];
            let newResponseArrayB=[];
            newResponseArray=json;
            let index=0;
            console.log("json",json);
            console.log("newResponseArray",newResponseArray);
            while(newResponseArray.length>0){
                tempObject=newResponseArray[0];
                index=0;
                for(let i=1;i<newResponseArray.length;i++){
                    console.log(i,newResponseArray.length);
                    if(newResponseArray[i].hoursInSpace>tempObject.hoursInSpace){
                        tempObject=newResponseArray[i];
                        index=i;
                    }
                }
                console.log("tempObject",tempObject);
                tempArray.push(tempObject);
                console.log("tempArray",tempArray);
                console.log("newResponseArray",newResponseArray);
                newResponseArrayA=newResponseArray.slice(0,index);
                newResponseArrayB=newResponseArray.slice(index+1,newResponseArray.length);
                newResponseArray=newResponseArrayA.concat(newResponseArrayB);
                console.log("newResponseArray",newResponseArray);
            }
            console.log("tempArray",tempArray);
            let sortedArray=json.sort((a,b)=>b.hoursInSpace-a.hoursInSpace);
            for(const key of sortedArray){
                let color=key.active?"green":"black";
                container.innerHTML+=`<div class="astronaut">
                <div class="bio">
                <h3>${key.firstName} ${key.lastName}</h3>
                <ul>
                    <li>Hours in space: ${key.hoursInSpace}</li>
                    <li style="color:${color}"">Active: ${key.active}</li>
                    <li>Skills: ${key.skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${key.picture}">
            </div>`;
            }
            console.log("sortedArray",sortedArray);
            /*
            // START DYNAMIC MOD OF WEB PAGE
            for(let i=0;i<json.length;i++){
                console.log(json[i]);
            str+=`<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li class="active">Active: ${json[i].active}</li>
                    <li>Skills: `;
                    // LOOP THRU SKILLS ARRAY
                    for(let n=0;n<(json[i].skills).length;n++){
                        str+=`${json[i].skills[n]}`;
                        if(n<(((json[i].skills).length-1))){
                            str+=`, `;
                        }
                    }
                    str+=`</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`;
            container.innerHTML+=str;
            str=``;
            }
            let active=document.getElementsByClassName("active");
            console.log("active",active.length);
            console.log("active",active[0].value);
            console.log("active",active[6].textContent);
            for(let i=0;i<active.length;i++){
                let text=active[i].textContent;
                
                if(text.includes("true")){
                    console.log("i",i);
                    active[i].style.color="green";
                }
                
            }
            
        });
    });
});
*/