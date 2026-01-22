const users = [
  {
    fullname: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Frontend Developer",
    description: "Builds responsive and accessible web interfaces using modern JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullname: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "UI/UX Designer",
    description: "Designs clean, user-centric interfaces with a focus on usability.",
    tags: ["Figma", "UX Research", "Prototyping"]
  },
  {
    fullname: "Daniel Lee",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Backend Engineer",
    description: "Develops scalable APIs and server-side logic.",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    fullname: "Sara Williams",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Data Scientist",
    description: "Analyzes data to extract insights and build predictive models.",
    tags: ["Python", "Machine Learning", "Pandas"]
  },
  {
    fullname: "Mohit Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "DevOps Engineer",
    description: "Automates deployments and manages cloud infrastructure.",
    tags: ["AWS", "Docker", "CI/CD"]
  }
];

var main = document.querySelector('main');

var sum = '';
users.forEach(function(elem){
     
    sum = sum + `<div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullname} </h3>
        <h4>${elem.profession}</h4>
        <p> ${elem.description} </p>
       
      </div>
`
     main.innerHTML = sum;
})

    

    
    


