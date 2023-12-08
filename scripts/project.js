let image = document.querySelector("#resume_photo");
image.setAttribute("src","../images/photo.jpeg");
image.setAttribute("alt","myphoto");


let name = document.querySelector("#name");
name.textContent = "Dereck Romero Moscoso";
let nationality = document.querySelector("#Nationality");
nationality.textContent = "Bolivian";



const experience = document.querySelector("#experience");
let experienceList = [];

function displayJobs(jobs){
    jobs.forEach(job => 
    {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        h2.textContent=job.company;
        let h3 = document.createElement("h3");
        h3.innerHTML=`<h3>${job.start_date} - ${job.end_date}</h3>`;
        let h3c = document.createElement("h3");
        h3c.textContent=`Location: ${job.location}`;
        let h3d = document.createElement("h3")
        h3d.textContent = job.job_position;
        let h3e = document.createElement("h3");
        h3e.textContent = job.short_explanation;
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h3c);
        article.appendChild(h3d);
        article.appendChild(h3e);
        experience.appendChild(article);    
    })};

let getjobs = async()=>
{
    const response = await fetch("../data/data.json");
    if (response.ok)
    {
        experienceList = await response.json();
        displayJobs(experienceList);
    }
}
getjobs();


