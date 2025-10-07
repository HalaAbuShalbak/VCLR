// Resource data for each session
const sessionResources = {
  "week1-day1-1": {
    title: "Think as coder",
    resources: [
      {
        type: "link",
        name: "Logic Concepts (Mind Map Game)",
        url: "https://www.helpfulgames.com/subjects/brain-training/memory.html",
        icon: "📄",
      },
      {
        type: "pdf",
        name: "Logic Concepts (Mind Map).pdf",
        url: "assets/_resource_mind_map_-_memory_card_20250701114400_ZQWyMOB.pdf",
        icon: "📄",
      },
      {
        type: "link",
        name: "Wireframe Design (Canva)",
        url: "https://canva.com",
        icon: "🎨",
      },
      // {
      //   type: "link",
      //   name: "Installation Guide",
      //   url: "https://jeelcode.com/vibe/Installaion/",
      //   icon: "⚙️",
      // },
    ],
  },

  "week1-day2-1": {
    title: "Solve It Smartly",
    resources: [
      // {
      //   type: "pdf",
      //   name: "Problem Solving.pdf",
      //   url: "assets/Problem Solving.pdf",
      //   icon: "🧩",
      // },
      // {
      //   type: "link",
      //   name: "Problem Solving Game - Maze ",
      //   url: "https://blockly.games/maze?lang=en",
      //   icon: "🧩",
      // },
      // {
      //   type: "link",
      //   name: "Problem Solving Game - Turtle ",
      //   url: "https://blockly.games/turtle?lang=en",
      //   icon: "🧩",
      // },
      {
        type: "pdf",
        name: "Intro To AI.pdf",
        url: "assets/Intro_To_AI.pdf",
        icon: "🤖",
      },
      {
        type: "pdf",
        name: "Prompting.pdf",
        url: "assets/prompting.pdf",
        icon: "💬",
      },
      {
        type: "pdf",
        name: "Prompting Exercises.pdf",
        url: "assets/prompting-exercises.pdf",
        icon: "📝",
      },
    ],
  },
  "week1-day3-1": {
    title: "Behind The Scenes Of Websites & AI",
    resources: [
      {
        type: "link",
        name: " Page Layout Flexbox Froggy",
        url: "https://flexboxfroggy.com/",
        icon: "🐸",
      },
      {
        type: "link",
        name: " Page Layout CSS Grid Garden",
        url: "https://cssgridgarden.com/",
        icon: "🌱",
      },
      {
        type: "link",
        name: "Structuring Your Webpage: The Power of HTML",
        url: "https://jeelcode.com/vibe/HTML/",
        icon: "🌐",
      },
         {
        type: "link",
        name: "Adding logic and fucntionality to your dynamic web page",
        url: "assets/JavaScript_Material.pdf",
        icon: "🧠",
      },                                   
      {
        type: "pdf",
        name: "Build your Memory Card Game",
        url: "assets/Memory Card Game Guide.pdf",
        icon: "🎮",
      },
     
      {
        type: "link",
        name: " Launching Your Webpage to the World: Netlify ",
        url: "https://www.netlify.com/",
        icon: "🚀",
      },
    ],
  },
  "week1-day4-1": {
    title: "Build & Debug Like a Boss",
    resources: [
      {
        type: "pdf",
        name: "Git Started: Your First Step into Version Control",
        url: "assets/Git Vs Github (2).pdf",
        icon: "📚",
      },
      {
        type: "pdf",
        name: "Fix It Like A Pro : Debugging",
        url: "assets/_resource_Debugging_20250715194033.pdf",
        icon: "🐛",
      },
      {
        type: "pdf",
        name: "Introduce Yourself To The World! : Portfolio",
        url: "assets/Portfolio (1).pdf",
        icon: "💼",
      },
    ],
  },
  "week1-day5-1": {
    title: "Code Cart",
    resources: [
      {
        type: "pdf",
        name: "Introduction To Full-Stack Development ",
        url: "assets/_resource_Full_Stack_Development_1_20250715190607_lEEEgCz.pdf",
        icon: "🔄",
      },
      {
        type: "pdf",
        name: "Vibe Code and Sell (E-commerce Website) Main Requirements",
        url: "assets/E-commerce Website Requirements  (2).pdf",
        icon: "📋",
      },
      {
        type: "pdf",
        name: "Vibe Code and Sell (E-commerce Website) Extra Features",
        url: "assets/E-commerce Website Extra Features.pdf",
        icon: "✨",
      },
    ],
  },
  "week2-day3-1": {
    title: "Final Hackathon",
    resources: [
      {
        type: "pdf",
        name: "Hackathon Challenge Brief",
        url: "assets/Hackathon_Future_Brief.pdf",
        icon: "🏆",
      },
      {
        type: "pdf",
        name: "Team Planning Sheet",
        url: "assets/Hackathon_Team_Plan.pdf.pdf",
        icon: "💡",
      },
    ],
  },
  "week2-day4-1": {
    title: "Prepare Presentation & Train",
    resources: [],
  },
  "week2-day5-1": {
    title: "Final Day Presentation",
    resources: [],
  },
};

// DOM elements
const modal = document.getElementById("resourceModal");
const modalTitle = document.getElementById("modalTitle");
const resourceList = document.getElementById("resourceList");
const closeModal = document.getElementById("closeModal");

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Add click listeners to all session titles
  const sessionTitles = document.querySelectorAll(".session-title");
  sessionTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const sessionId = this.getAttribute("data-session");
      openModal(sessionId);
    });
  });

  // Close modal when clicking the close button
  closeModal.addEventListener("click", closeModalFunction);

  // Close modal when clicking outside the modal content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModalFunction();
    }
  });
});

// Function to open modal and display resources
function openModal(sessionId) {
  const sessionData = sessionResources[sessionId];

  if (!sessionData) {
    console.error("Session data not found for:", sessionId);
    return;
  }

  // Set modal title
  modalTitle.textContent = sessionData.title;

  // Clear previous resources
  resourceList.innerHTML = "";

  // Add resources to modal
  if (sessionData.resources.length === 0) {
    const noResourceMsg = document.createElement("div");
    noResourceMsg.className = "no-resources";
    noResourceMsg.textContent = "No resources available";
    resourceList.appendChild(noResourceMsg);
  } else {
    sessionData.resources.forEach((resource) => {
      const resourceItem = document.createElement("div");
      resourceItem.className = `resource-item ${resource.type}`;

      const icon = document.createElement("span");
      icon.className = "resource-icon";
      icon.textContent = resource.icon;

      const link = document.createElement("a");
      link.href = resource.url;
      link.textContent = resource.name;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Add special handling for PDFs - open in new tab
      if (resource.type === "pdf") {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          // Open PDF in new tab
          window.open(resource.url, "_blank");
        });
      }

      resourceItem.appendChild(icon);
      resourceItem.appendChild(link);
      resourceList.appendChild(resourceItem);
    });
  }

  // Show modal with animation
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Function to close modal
function closeModalFunction() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add staggered animation to timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 200);
  });

  // Add click feedback to session titles
  const sessionTitles = document.querySelectorAll(".session-title");
  sessionTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // Add a brief visual feedback
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });
});
