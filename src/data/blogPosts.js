export const blogPosts = [
  {
    id: 1,
    title: "Les bases du pentest : Comment débuter en cybersécurité offensive",
    excerpt: "Découvrez les fondamentaux du test d'intrusion, les outils essentiels et comment se former pour devenir pentester.",
    content: `
      <h2>Qu'est-ce que le pentest ?</h2>
      <p>Le test d'intrusion (ou pentest) est une simulation d'attaque informatique réalisée avec l'autorisation du propriétaire du système. L'objectif est d'identifier les vulnérabilités avant qu'elles ne soient exploitées par des attaquants malveillants.</p>
      
      <h2>Les compétences nécessaires</h2>
      <ul>
        <li><strong>Réseaux</strong> : Comprendre TCP/IP, DNS, HTTP/HTTPS</li>
        <li><strong>Systèmes</strong> : Maîtriser Linux (Kali Linux) et Windows</li>
        <li><strong>Programmation</strong> : Bash, Python pour l'automatisation</li>
        <li><strong>Web</strong> : Connaître OWASP Top 10, SQLi, XSS</li>
      </ul>
      
      <h2>Les outils incontournables</h2>
      <ul>
        <li><strong>Nmap</strong> : Découverte de réseau et scan de ports</li>
        <li><strong>Burp Suite</strong> : Tests d'intrusion web</li>
        <li><strong>Metasploit</strong> : Framework d'exploitation</li>
        <li><strong>Wireshark</strong> : Analyse de trafic réseau</li>
      </ul>
    `,
    date: "2025-06-01",
    readTime: 8,
    category: "Cybersécurité",
    tags: ["Pentest", "Sécurité offensive", "Hacking éthique", "OWASP"],
    image: "/images/blog/pentest.jpg"
  },
  {
    id: 2,
    title: "Docker pour les développeurs fullstack : Guide pratique",
    excerpt: "Apprenez à containeriser vos applications React, Node.js et Django pour faciliter le développement et le déploiement.",
    content: `
      <h2>Pourquoi utiliser Docker ?</h2>
      <p>Docker permet de créer des environnements de développement isolés et reproductibles. Fini les problèmes de "ça marche sur ma machine" !</p>
      
      <h2>Les commandes essentielles</h2>
      <ul>
        <li><code>docker build -t mon-app .</code> : Construire une image</li>
        <li><code>docker run -p 8080:80 mon-app</code> : Exécuter un conteneur</li>
        <li><code>docker-compose up -d</code> : Démarrer tous les services</li>
        <li><code>docker ps</code> : Lister les conteneurs actifs</li>
      </ul>
    `,
    date: "2025-05-25",
    readTime: 7,
    category: "DevOps",
    tags: ["Docker", "DevOps", "Fullstack", "Containerisation"],
    image: "/images/blog/docker.jpg"
  },
  {
    id: 3,
    title: "React.js vs Next.js : Lequel choisir en 2025 ?",
    excerpt: "Analyse comparative des deux frameworks React pour vous aider à faire le bon choix selon votre projet.",
    content: `
      <h2>React.js : La bibliothèque flexible</h2>
      <p>React.js reste la bibliothèque JavaScript la plus populaire pour construire des interfaces utilisateur.</p>
      
      <h2>Next.js : Le framework complet</h2>
      <p>Next.js ajoute des fonctionnalités puissantes comme le rendu côté serveur (SSR) et la génération de sites statiques (SSG).</p>
      
      <h2>Quand choisir React ?</h2>
      <ul>
        <li>Application web simple sans besoin SEO</li>
        <li>Interface utilisateur complexe avec beaucoup d'interactions</li>
      </ul>
      
      <h2>Quand choisir Next.js ?</h2>
      <ul>
        <li>Site e-commerce ou blog nécessitant un bon SEO</li>
        <li>Application avec des pages statiques et dynamiques</li>
      </ul>
    `,
    date: "2025-05-20",
    readTime: 6,
    category: "Développement",
    tags: ["React", "Next.js", "JavaScript", "Frontend"],
    image: "/images/blog/react-nextjs.jpg"
  },
  {
    id: 4,
    title: "Comprendre l'OWASP Top 10 : Les vulnérabilités web",
    excerpt: "Découvrez les 10 vulnérabilités web les plus dangereuses selon l'OWASP et apprenez à vous en protéger.",
    content: `
      <h2>Les 10 vulnérabilités principales</h2>
      <ul>
        <li><strong>Broken Access Control</strong> : Mauvaise gestion des droits d'accès</li>
        <li><strong>Cryptographic Failures</strong> : Mauvaise protection des données</li>
        <li><strong>Injection</strong> : Injections SQL, commandes</li>
        <li><strong>Insecure Design</strong> : Défauts de conception</li>
        <li><strong>Security Misconfiguration</strong> : Configuration par défaut</li>
      </ul>
      
      <h2>Comment se protéger ?</h2>
      <ul>
        <li>Utiliser des requêtes paramétrées</li>
        <li>Valider et échapper les entrées utilisateur</li>
        <li>Mettre en place une authentification multifacteur</li>
      </ul>
    `,
    date: "2025-05-15",
    readTime: 10,
    category: "Sécurité",
    tags: ["OWASP", "Sécurité web", "Vulnérabilités"],
    image: "/images/blog/owasp.jpg"
  },
  {
    id: 5,
    title: "5 bonnes pratiques pour sécuriser votre API REST",
    excerpt: "Guide complet pour protéger vos API contre les attaques courantes (injections, DDoS, brute force).",
    content: `
      <h2>1. Authentification robuste</h2>
      <p>Utilisez JWT avec une durée de vie limitée et implémentez OAuth2.</p>
      
      <h2>2. Validation stricte des entrées</h2>
      <p>Validez tous les paramètres d'entrée avec des schémas (Joi, Yup, Zod).</p>
      
      <h2>3. Rate limiting</h2>
      <p>Limitez le nombre de requêtes par IP (ex: 100 requêtes/minute).</p>
      
      <h2>4. Chiffrement des communications</h2>
      <p>Toutes les communications doivent passer par HTTPS avec TLS 1.2 ou 1.3.</p>
      
      <h2>5. Logs et monitoring</h2>
      <p>Journalisez les requêtes suspectes et mettez en place des alertes.</p>
    `,
    date: "2025-05-10",
    readTime: 7,
    category: "Sécurité",
    tags: ["API", "REST", "Sécurité", "Backend"],
    image: "/images/blog/api-security.jpg"
  },
  {
    id: 6,
    title: "Débuter en Intelligence Artificielle : Par où commencer ?",
    excerpt: "Guide pour débutants en IA : concepts clés, outils, ressources et premiers projets.",
    content: `
      <h2>Les bases de l'IA</h2>
      <p>L'IA englobe le machine learning, le deep learning, le NLP et la vision par ordinateur.</p>
      
      <h2>Prérequis</h2>
      <ul>
        <li>Mathématiques : Algèbre linéaire, calcul, probabilités</li>
        <li>Programmation : Python, NumPy, Pandas</li>
      </ul>
      
      <h2>Bibliothèques Python</h2>
      <ul>
        <li>scikit-learn pour le ML classique</li>
        <li>TensorFlow / PyTorch pour le deep learning</li>
        <li>LangChain pour les LLM</li>
        <li>Hugging Face pour les transformers</li>
      </ul>
    `,
    date: "2025-05-05",
    readTime: 9,
    category: "IA",
    tags: ["IA", "Machine Learning", "Python", "Deep Learning"],
    image: "/images/blog/ia.jpg"
  },
  {
    id: 7,
    title: "Comment j'ai réalisé mon premier audit de sécurité web",
    excerpt: "Retour d'expérience sur mon premier audit de sécurité pour XoboEvent : méthodologie, outils et résultats.",
    content: `
      <h2>Le contexte</h2>
      <p>XoboEvent m'a confié la mission d'auditer la sécurité de leur plateforme de réservation de tickets.</p>
      
      <h2>La méthodologie</h2>
      <ul>
        <li>Reconnaissance et collecte d'informations</li>
        <li>Analyse des vulnérabilités</li>
        <li>Tests d'intrusion web</li>
        <li>Rédaction du rapport d'audit</li>
      </ul>
      
      <h2>Les outils utilisés</h2>
      <ul>
        <li>Burp Suite pour les tests web</li>
        <li>Nmap pour le scan réseau</li>
        <li>OWASP ZAP pour la détection automatique</li>
      </ul>
      
      <h2>Les recommandations</h2>
      <p>J'ai formulé des recommandations concrètes pour corriger les vulnérabilités identifiées.</p>
    `,
    date: "2025-06-07",
    readTime: 6,
    category: "Expérience",
    tags: ["Audit", "Pentest", "XoboEvent", "Retour d'expérience"],
    image: "/images/blog/audit.jpg"
  },
  {
    id: 8,
    title: "Mon parcours autodidacte en cybersécurité",
    excerpt: "Comment je suis passé de l'informatique générale à la cybersécurité en autodidacte.",
    content: `
      <h2>Le début</h2>
      <p>Après un Bac+2 en sécurité informatique à l'IFRI, j'ai choisi la voie de l'autodidaxie.</p>
      
      <h2>Les plateformes d'apprentissage</h2>
      <ul>
        <li>OpenClassrooms pour les bases</li>
        <li>Force-N pour les certifications</li>
        <li>Dclic OIF pour le bootcamp cybersécurité</li>
      </ul>
      
      <h2>Les projets pratiques</h2>
      <p>J'ai réalisé plusieurs projets concrets : audit pour XoboEvent, développement de plateformes sécurisées, etc.</p>
      
      <h2>Conseils pour les débutants</h2>
      <ul>
        <li>Pratiquer sur HackTheBox et TryHackMe</li>
        <li>Rejoindre des communautés</li>
        <li>Ne jamais cesser d'apprendre</li>
      </ul>
    `,
    date: "2025-06-05",
    readTime: 5,
    category: "Parcours",
    tags: ["Autodidacte", "Formation", "Cybersécurité", "Conseils"],
    image: "/images/blog/parcours.jpg"
  }
]

export default blogPosts
