// Sample project data
const projects = [
    {
      title: "Project 1",
      description: "TSA - Resume",
      image: "Assets/picture/Resume.png",
      link: "TSA1/MallariTSA1/Resume/index.html"
    },
    {
      title: "Project 2",
      description: "TSA 2 - 9 days in a week",
      image: "Assets/picture/color.png",
      link: "Mallari_Tsa2/9 days in a week/index.html"
    },
    {
        title: "Project 3",
        description: "TSA 3 - Calculator",
        image: "Assets/picture/calculator.png",
        link: "Mallari_TSA3/Calculator/index.html"
      },
    {
        title: "Project 4",
        description:  "Notification Bell",
        image: "Assets/picture/Screenshot 2024-03-12 180253.png",
        link: "notif bell/index.html"
    },
    {
        title: "Project 5",
        description:  "Individual Project ",
        image: "Assets/picture/tracker.PNG",
        link: "Individual Proj/index.html"
    },
  ];
  
  // Function to dynamically create project elements
  function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
  
    const imageElement = document.createElement('img');
    imageElement.src = project.image;
    projectElement.appendChild(imageElement);
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    projectElement.appendChild(titleElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);
  
    const linkElement = document.createElement('a');
    linkElement.textContent = "View Project";
    linkElement.href = project.link;
    projectElement.appendChild(linkElement);
  
    return projectElement;
  }
  
  // Function to initialize the projects
  function initProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
      const projectElement = createProjectElement(project);
      projectsContainer.appendChild(projectElement);
    });
  }
  
  // Function to dynamically create project elements
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
  
    const imageElement = document.createElement('img');
    imageElement.src = project.image;
    imageElement.alt = project.title; // Set alt attribute for accessibility
    imageElement.addEventListener('click', () => {
      window.location.href = project.link; // Redirect to project link on image click
    });
    projectElement.appendChild(imageElement);
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    projectElement.appendChild(titleElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);
  
    const linkElement = document.createElement('a');
    linkElement.textContent = "View Project";
    linkElement.href = project.link;
    projectElement.appendChild(linkElement);
  
    return projectElement;
  }
  


  // Initialize projects when the page loads
  window.addEventListener('DOMContentLoaded', initProjects);
  