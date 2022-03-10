// TODO: add code here
window.addEventListener("load",function(){
    let fetchPromise=fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response){
        console.log(response);
        response.json().then(function(json){
            console.log(json[0]);
            let str=``;
            let container=document.getElementById("container");
            for(let i=0;i<json.length;i++){
                console.log(json[i]);
            str+=`<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: `;
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
        });
    });
});