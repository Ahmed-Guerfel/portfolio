// Données des projets pour chaque section
const projectsData = {
  artistic: [
    {
      title: "Spectacle LEBLAD",
      category: "Spectacle",
      date: "2024",
      image:
        "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901698/rezrzrze_fwp4wq.png",
      description:
        "Un spectacle contemporain qui explore les thèmes de l'identité tunisienne et de l'appartenance culturelle. Cette œuvre mélange danse contemporaine, musique traditionnelle et éléments visuels modernes pour créer une expérience artistique unique.",
      details: [
        "Chorégraphie originale inspirée des traditions tunisiennes",
        "Collaboration avec des musiciens locaux",
        "Représentations dans plusieurs villes de Tunisie",
        "Public de plus de 2000 spectateurs",
      ],
    },
    {
      title: "J'ai dansé partout où j'ai trouvé",
      category: "Performance",
      date: "2023",
      image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901820/gffgdfgd_fxqmo9.png",
      description:
        "Une performance itinérante qui transforme les espaces urbains en scènes de danse. Ce projet explore la relation entre le corps, l'espace public et l'expression artistique spontanée.",
      details: [
        "Performances dans 15 lieux différents",
        "Interaction directe avec le public",
        "Documentation vidéo complète",
        "Participation de danseurs amateurs",
      ],
    },
    {
      title: "Floor Wars",
      category: "Compétition",
      date: "2023",
      image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749889717/floor_n4k6i0.png",
      description:
        "Un événement de danse urbaine qui rassemble les meilleurs danseurs de breaking et de hip-hop de la région. Floor Wars célèbre la culture urbaine et offre une plateforme d'expression aux jeunes talents.",
      details: [
        "Plus de 50 participants de différents pays",
        "Jury international reconnu",
        "Ateliers de formation inclus",
        "Couverture médiatique nationale",
      ],
    },
    
  ],
  social: [
    {
      title: "We are Tunisia",
      category: "Projet Social",
      date: "2024",
      image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749901973/gfdgfdgfd_lmtccw.png",
      description:
        "Un projet d'inclusion sociale qui utilise la danse et les arts pour rassembler les communautés et promouvoir l'unité nationale. Ce programme vise à créer des ponts entre différents groupes sociaux.",
      details: [
        "Ateliers dans 10 régions de Tunisie",
        "Participation de plus de 500 jeunes",
        "Formation d'animateurs locaux",
        "Spectacle final collaboratif",
      ],
    },
    {
      title: "Next Génération",
      category: "Formation",
      date: "2023",
      image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749902185/fdggfdgfd_naxfnu.png",
      description:
        "Un programme de formation destiné aux jeunes leaders culturels. Next Génération offre des outils et des compétences pour développer des projets artistiques et culturels innovants.",
      details: [
        "Formation de 30 jeunes leaders",
        "Modules sur la gestion de projet",
        "Accompagnement personnalisé",
        "Réseau de mentors professionnels",
      ],
    },
    {
      title: "C'ART",
      category: "Art Thérapie",
      date: "2023",
      image: "https://res.cloudinary.com/dxftqgx5t/image/upload/v1749902693/e_ezrterztre_vtigec.png",
      description:
        "Un projet qui utilise l'art comme outil thérapeutique et de développement personnel. C'ART s'adresse aux personnes en situation de vulnérabilité et offre un espace d'expression et de guérison.",
      details: [
        "Séances hebdomadaires sur 6 mois",
        "Approche multidisciplinaire",
        "Suivi psychologique inclus",
        "Exposition des œuvres créées",
      ],
    },
  ],
  culture: [
    {
      title: "CAMP D'ÉTÉ 24",
      category: "Festival",
      date: "2024",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
      description:
        "Un camp d'été culturel intensif qui rassemble des artistes, des formateurs et des participants pour une expérience immersive dans les arts et la culture contemporaine.",
      details: [
        "Programme de 2 semaines",
        "Ateliers multidisciplinaires",
        "Artistes internationaux invités",
        "Production collective finale",
      ],
    },
    {
      title: "Festival Paysages d'Espoir",
      category: "Festival",
      date: "2023",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
      description:
        "Un festival qui célèbre la diversité culturelle et artistique tout en portant un message d'espoir et de résilience. Le festival présente des œuvres qui explorent les thèmes de l'avenir et du changement positif.",
      details: [
        "3 jours de programmation",
        "Plus de 20 artistes participants",
        "Ateliers pour le grand public",
        "Conférences et débats",
      ],
    },
    {
      title: "Atelier de Formation en Gestion Culturelle",
      category: "Formation",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
      description:
        "Un programme de formation spécialisé dans la gestion de projets culturels. Cet atelier forme les professionnels aux meilleures pratiques du secteur culturel.",
      details: [
        "Formation certifiante de 40 heures",
        "Modules théoriques et pratiques",
        "Études de cas réels",
        "Réseau professionnel",
      ],
    },
    {
      title: "Lieux Civiques Culturels dans les Institutions Éducatives",
      category: "Projet Éducatif",
      date: "2022",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
      description:
        "Un projet qui vise à intégrer la culture dans les espaces éducatifs en créant des lieux dédiés à l'expression artistique et au dialogue interculturel.",
      details: [
        "Partenariat avec 5 établissements",
        "Aménagement d'espaces culturels",
        "Formation des enseignants",
        "Programme d'activités régulières",
      ],
    },
  ],
  speaking: [
    {
      title: "Conférence TEDx Tunis",
      category: "Conférence",
      date: "2024",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      description:
        "Une présentation inspirante sur le rôle de l'art dans la transformation sociale. Cette conférence explore comment les pratiques artistiques peuvent catalyser le changement positif dans les communautés.",
      details: [
        "Audience de 500 personnes",
        "Diffusion en ligne",
        "Thème : 'L'Art comme Catalyseur Social'",
        "Retombées médiatiques importantes",
      ],
    },
    {
      title: "Panel International sur la Culture",
      category: "Panel",
      date: "2023",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop",
      description:
        "Participation à un panel international sur les politiques culturelles et leur impact sur le développement social. Discussion avec des experts de différents pays.",
      details: [
        "Experts de 8 pays participants",
        "Thématiques multiculturelles",
        "Recommandations politiques",
        "Publication des actes",
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
