// Données des projets pour chaque section
const projectsData = {
artistic: [
  {
  title: "Noon – WADE into Activism Opening Performance",
  category: "Performance",
  date: "2023",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750427916/480919449_683982540625378_7359566320123871292_n_gfuo6n.jpg",
  description:
    "As part of the 16-day WADE into Activism performing arts festival, artist Ahmed Guerfel was invited to open the event with his performance titled 'Noon', presented twice at Arts On Site studio in New York City.",
  details: [
    "Performed on November 25th, 2023, at Arts On Site, NYC",
    "A multidisciplinary fusion of dance, visuals, and sound",
    "Choreography & Direction: Ahmed Guerfel",
    "Text: Zayneb Dhieb",
    "Background Voice: Assem Bettouhami",
    "Music: Ayman Goubaa",
    "Video Art: Zeineb Kaabi, Jucebkwards",
    "Photography: Jilani Ben Cheikh",
    "Produced by: Danseurs Citoyens Sud",
    "Part of the WADE into Activism international festival"
  ],
},
  {
    title: "LEBLAD Show",
    category: "Show",
    date: "2024",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901698/rezrzrze_fwp4wq.png",
    description:
      "A contemporary show exploring themes of Tunisian identity and cultural belonging. This piece blends contemporary dance, traditional music, and modern visual elements to create a unique artistic experience.",
    details: [
      "Original choreography inspired by Tunisian traditions",
      "Collaboration with local musicians",
      "Performed in several cities across Tunisia",
      "Audience of over 2,000 spectators"
    ],
  },
  {
    title: "I Danced Everywhere I Found",
    category: "Performance",
    date: "2023",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901820/gffgdfgd_fxqmo9.png",
    description:
      "A traveling performance that transforms urban spaces into dance stages. This project explores the relationship between the body, public space, and spontaneous artistic expression.",
    details: [
      "Performances in 15 different locations",
      "Direct interaction with the public",
      "Full video documentation",
      "Participation of amateur dancers"
    ],
  },
  {
    title: "Floor Wars",
    category: "Competition",
    date: "2023",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749889717/floor_n4k6i0.png",
    description:
      "An urban dance event bringing together the best breaking and hip-hop dancers in the region. Floor Wars celebrates urban culture and provides a platform for young talent to shine.",
    details: [
      "Over 50 participants from different countries",
      "Renowned international jury",
      "Included training workshops",
      "National media coverage"
    ],
  },
],

social: [
  {
    title: "We are Tunisia",
    category: "Social Project",
    date: "2024",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901973/gfdgfdgfd_lmtccw.png",
    description:
      "A social inclusion project that uses dance and the arts to bring communities together and promote national unity. The program aims to build bridges between different social groups.",
    details: [
      "Workshops in 10 regions of Tunisia",
      "Involvement of over 500 young people",
      "Training of local facilitators",
      "Collaborative final performance"
    ],
  },
  {
    title: "Next Generation",
    category: "Training",
    date: "2023",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749902185/fdggfdgfd_naxfnu.png",
    description:
      "A training program for young cultural leaders. Next Generation provides tools and skills to develop innovative artistic and cultural projects.",
    details: [
      "Training of 30 young leaders",
      "Modules on project management",
      "Personalized mentoring",
      "Professional mentor network"
    ],
  },
  {
    title: "C'ART",
    category: "Art Therapy",
    date: "2023",
    image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749902693/e_ezrterztre_vtigec.png",
    description:
      "A project using art as a therapeutic tool and means of personal development. C'ART is designed for vulnerable individuals and offers a space for expression and healing.",
    details: [
      "Weekly sessions over 6 months",
      "Multidisciplinary approach",
      "Psychological support included",
      "Exhibition of created artworks"
    ],
  },

      {
  title: "Art for Climate Justice Program",
  category: "Art & Environment",
  date: "2024",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750343886/481506112_688456050178027_4220429861001929016_n_nazhax.jpg",
  description:
    "An artistic residency exploring climate justice through creative and sustainable practices. This program highlights the connection between art, the environment, and collective responsibility in addressing the climate crisis.",
  details: [
    "Artistic residency held in Gabès, Tunisia, at NO NAME A.S.L",
    "Featured a jury including key figures from the Creative Tunisia Program",
    "Focused on rethinking ecological relationships and human interaction with the land and living beings",
    "Supervised by Mr. Mohamed Amine Hammouda, Head of Visual Arts at Danseurs Citoyens Sud"
  ],
},
{
  title: "AT HAND",
  category: "Visual Arts Exhibition",
  date: "2024",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750345102/481009497_686623983694567_8136345343044241557_n_drtubn.jpg", 
  description:
    "A visual art exhibition that tells stories without words or images, using only raw materials. AT HAND brought together 11 Tunisian female artists to explore environmental, social, and economic concerns through matter and form.",
  details: [
    "Held from July 6th to July 31st, 2024, at No Name - Artistic Studio Lab",
    "Curated by Mr. Mohamed Amine Hamouda, Director of the Visual Arts Department",
    "Featured works by 11 female students/graduates from the Higher Institute of Arts and Crafts in Gabès",
    "Artworks created using oasis waste, wild plants, burlap, paper, bricks, cement, and wool",
    "Focused on local environmental, economic, and social issues",
    "Included an open discussion on July 6th hosted by Danseurs Citoyens Sud exploring the concept of 'at hand' in creative processes"
  ],
},
{
  title: "Cultural Journalism Bootcamp 01",
  category: "Training",
  date: "2024",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750257081/02_yqsode.webp", 
  description:
    "A training camp that brought together journalists, media professionals, and students to explore techniques and practices that empower cultural journalism in southern Tunisia.",
  details: [
    "Held from January 29th to February 1st, 2024, at No Name Artistic Studio Lab in Gabes, Tunisia",
    "Focused on strengthening the role of journalists in promoting the cultural and artistic scene",
    "Workshops included practical exercises and knowledge-sharing",
    "Encouraged collaboration and exchange between professionals and aspiring cultural journalists"
  ],
},

  ],
culture: [
  {
  title: "4000 KM ",
  category: "Residency / Workshop",
  date: "2024",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750346455/480752872_684699073887058_26892724096903814_n_ct5say.jpg",
  description:
    "An interdisciplinary art bootcamp hosted at 'No Name' Artistic Studio Lab, where five exceptional artists came together to share and blend their expertise in performing, visual, and artisanal arts.",
  details: [
    "Held at 'No Name' Artistic Studio Lab",
    "Focused on collaborative artistic exploration",
    "Blended disciplines: performance, visual, and craft arts",
    "Featured artists: Assem Bettouhami, Malek Zouaidi, Nabil Dkhil, Haifa Ouerfelli, Mohamed Amine Hamouda",
    "Bilingual experience: Arabic and English",
    "Part of the '4000 KM Untitled' artistic program"
  ],
},

  {
  title: "LOOK'IN",
  category: "Exhibition",
  date: "2024",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750431434/484215763_1081977310642101_217384789017345434_n_vspaxu.jpg", 
  description:
    "An illustrated journey featuring the works of two Tunisian 'artivists': photographer Sabra Achour and visual artist Zeineb Kaabi. This exhibition sheds light on sexual and reproductive health and rights in Tunisia, a society shaped by both tradition and a desire for change.",
  details: [
    "Focus on sexual and reproductive health and rights in Tunisia",
    "Works by Sabra Achour and Zeineb Kaabi",
    "Organized by Médecins du Monde through the Sehaty project",
    "Funded by the European Union as part of the Essaha Aziza program",
    "Aims to foster open and constructive dialogue on essential social topics"
  ],
},
{
  title: "Spontaneous Sensibility – Art Bootcamp",
  category: "Residency / Workshop",
  date: "2023",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750432371/481077024_684305047259794_7470260554520920785_n_v4risb.jpg", 
  description:
    "An artistic bootcamp focusing on mobile topology and urban presence, featuring multidisciplinary performances aimed at youth in public spaces. The program fosters spontaneous awareness and reconnection with local environments.",
  details: [
    "Scheduled from December 24th to December 27th, 2023 at No Name Artistic Studio Lab, Gabes",
    "Centered around the concept of mobile topology in urban settings",
    "Performances combining geometric forms, video art, crafts, and circus arts",
    "Designed for youth and children in public spaces",
    "Aims to strengthen the emotional and cultural bond between individuals and their neighborhoods",
    "Bilingual communication: Arabic and English"
  ],
},
  {
  title: "Masterclass at WADE into Activism Festival",
  category: "Workshop / Masterclass",
  date: "2023",
  image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1750432591/480724634_683997340623898_2376491743506703689_n_fbgfk0.jpg",
  description:
    "As part of the WADE into Activism Festival, Danseurs Citoyens Sud conducted a masterclass at the Peridance Center in New York City, engaging participants in movement, activism, and artistic expression.",
  details: [
    "Held on November 26th, 2023 at Peridance Center, NYC",
    "Led by Danseurs Citoyens Sud",
    "Part of the international WADE into Activism Festival",
    "Focused on the intersection of dance, citizenship, and activism",
    "Bilingual cultural exchange: Arabic and English",
    "Engaged a diverse group of participants in a cross-cultural experience"
  ],
},
],

speaking: [
  {
    title: "TEDx Tunis Conference",
    category: "Conference",
    date: "2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    description:
      "An inspiring talk on the role of art in social transformation. This conference explores how artistic practices can catalyze positive change in communities.",
    details: [
      "Audience of 500 people",
      "Online broadcast",
      "Theme: 'Art as a Social Catalyst'",
      "Significant media coverage"
    ],
  },
  {
    title: "International Culture Panel",
    category: "Panel",
    date: "2023",
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop",
    description:
      "Participation in an international panel on cultural policies and their impact on social development. Discussion with experts from various countries.",
    details: [
      "Experts from 8 participating countries",
      "Multicultural themes",
      "Policy recommendations",
      "Published proceedings"
    ],
  },
],

}

// Fonction pour ouvrir le modal
function openProjectModal(section, index) {
  const modal = document.getElementById("projectModal")
  const project = projectsData[section][index]

  if (!project) return

  // Remplir le contenu du modal
  document.getElementById("modalImage").src = project.image
  document.getElementById("modalImage").alt = project.title
  document.getElementById("modalTitle").textContent = project.title
  document.getElementById("modalCategory").textContent = project.category
  document.getElementById("modalDate").textContent = project.date
  document.getElementById("modalDescription").textContent = project.description

  // Remplir les détails
  const detailsContainer = document.getElementById("modalDetails")
  if (project.details && project.details.length > 0) {
    detailsContainer.innerHTML = `
            <h4>Détails du projet :</h4>
            <ul>
                ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
        `
  } else {
    detailsContainer.innerHTML = ""
  }

  // Afficher le modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Fonction pour fermer le modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Fermer le modal avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal()
  }
})

// Empêcher la fermeture du modal en cliquant sur le contenu
document.addEventListener("DOMContentLoaded", () => {
  const modalContent = document.querySelector(".modal-content")
  if (modalContent) {
    modalContent.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  }
})
