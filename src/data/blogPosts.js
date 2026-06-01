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
        <li><strong>John the Ripper</strong> : Cassage de mots de passe</li>
      </ul>
      
      <h2>Comment se former ?</h2>
      <p>Plusieurs plateformes proposent des formations et des laboratoires pratiques : HackTheBox, TryHackMe, Root-Me. Ces sites permettent de s'entraîner dans un environnement légal et sécurisé.</p>
      
      <h2>Les certifications recommandées</h2>
      <ul>
        <li>CompTIA Security+ (débutant)</li>
        <li>CEH (Certified Ethical Hacker)</li>
        <li>OSCP (Offensive Security Certified Professional) - très respectée</li>
      </ul>
      
      <h2>L'importance de l'éthique</h2>
      <p>Un pentester doit toujours respecter un cadre légal et déontologique. Un contrat doit définir le périmètre du test et une autorisation écrite est obligatoire avant toute action.</p>
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
      
      <h2>Les concepts clés</h2>
      <ul>
        <li><strong>Image</strong> : Modèle en lecture seule contenant l'application et ses dépendances</li>
        <li><strong>Conteneur</strong> : Instance exécutable d'une image</li>
        <li><strong>Dockerfile</strong> : Fichier de configuration pour construire une image</li>
        <li><strong>Docker Compose</strong> : Outil pour définir et exécuter des applications multi-conteneurs</li>
      </ul>
      
      <h2>Exemple avec une stack React + Django</h2>
      <p>Voici un exemple de docker-compose.yml pour une application fullstack :</p>
      <pre><code>version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DEBUG=1
    volumes:
      - ./backend:/app
  
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend</code></pre>
      
      <h2>Commandes essentielles</h2>
      <ul>
        <li><code>docker build -t mon-app .</code> : Construire une image</li>
        <li><code>docker run -p 8080:80 mon-app</code> : Exécuter un conteneur</li>
        <li><code>docker-compose up -d</code> : Démarrer tous les services</li>
        <li><code>docker ps</code> : Lister les conteneurs actifs</li>
      </ul>
      
      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Utiliser des images officielles et légères (alpine)</li>
        <li>Optimiser les couches du Dockerfile</li>
        <li>Ne pas exécuter les conteneurs en root</li>
        <li>Utiliser des volumes pour persister les données</li>
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
      <p>React.js reste la bibliothèque JavaScript la plus populaire pour construire des interfaces utilisateur. Elle offre une grande flexibilité et un écosystème mature.</p>
      
      <h3>Avantages de React</h3>
      <ul>
        <li>Courbe d'apprentissage progressive</li>
        <li>Immense écosystème de bibliothèques</li>
        <li>Excellent pour les SPA (Single Page Applications)</li>
        <li>React Native pour le mobile</li>
      </ul>
      
      <h2>Next.js : Le framework complet</h2>
      <p>Next.js est un framework React qui ajoute des fonctionnalités puissantes comme le rendu côté serveur (SSR), la génération de sites statiques (SSG), et le routage basé sur les fichiers.</p>
      
      <h3>Avantages de Next.js</h3>
      <ul>
        <li>SEO amélioré grâce au SSR/SSG</li>
        <li>Performance optimisée (Image Optimization)</li>
        <li>API routes intégrées</li>
        <li>Déploiement simplifié sur Vercel</li>
        <li>Support TypeScript natif</li>
      </ul>
      
      <h2>Quand choisir React ?</h2>
      <ul>
        <li>Application web simple sans besoin SEO</li>
        <li>Interface utilisateur complexe avec beaucoup d'interactions</li>
        <li>Migration progressive vers React</li>
        <li>Projet nécessitant une configuration personnalisée</li>
      </ul>
      
      <h2>Quand choisir Next.js ?</h2>
      <ul>
        <li>Site e-commerce ou blog nécessitant un bon SEO</li>
        <li>Application avec des pages statiques et dynamiques</li>
        <li>Projet nécessitant des performances optimales</li>
        <li>Besoin d'API routes sans serveur séparé</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Pour un portfolio ou un site vitrine, Next.js est souvent le meilleur choix. Pour une application web interactive complexe, React vanilla peut être plus adapté. Dans tous les cas, les deux technologies sont solides et largement utilisées en entreprise.</p>
    `,
    date: "2025-05-20",
    readTime: 6,
    category: "Développement",
    tags: ["React", "Next.js", "JavaScript", "Frontend"],
    image: "/images/blog/react-nextjs.jpg"
  },
  {
    id: 4,
    title: "Comprendre l'OWASP Top 10 : Les vulnérabilités web les plus critiques",
    excerpt: "Découvrez les 10 vulnérabilités web les plus dangereuses selon l'OWASP et apprenez à vous en protéger.",
    content: `
      <h2>C'est quoi l'OWASP ?</h2>
      <p>L'Open Web Application Security Project (OWASP) est une communauté mondiale qui publie des ressources gratuites sur la sécurité des applications web. Leur Top 10 est la référence en matière de vulnérabilités web.</p>
      
      <h2>Les 10 vulnérabilités principales</h2>
      <ul>
        <li><strong>1. Broken Access Control</strong> : Mauvaise gestion des droits d'accès</li>
        <li><strong>2. Cryptographic Failures</strong> : Mauvaise protection des données sensibles</li>
        <li><strong>3. Injection</strong> : Injections SQL, commandes, etc.</li>
        <li><strong>4. Insecure Design</strong> : Défauts dans la conception de sécurité</li>
        <li><strong>5. Security Misconfiguration</strong> : Configuration par défaut ou incomplète</li>
        <li><strong>6. Vulnerable Components</strong> : Bibliothèques obsolètes</li>
        <li><strong>7. Identification Failures</strong> : Faiblesses dans l'authentification</li>
        <li><strong>8. Software Integrity Failures</strong> : Mise à jour non sécurisées</li>
        <li><strong>9. Monitoring Failures</strong> : Absence de logs et surveillance</li>
        <li><strong>10. SSRF</strong> : Server-Side Request Forgery</li>
      </ul>
      
      <h2>Comment se protéger ?</h2>
      <ul>
        <li>Utiliser des requêtes paramétrées contre les injections SQL</li>
        <li>Valider et échapper les entrées utilisateur contre le XSS</li>
        <li>Mettre en place une authentification multifacteur</li>
        <li>Maintenir les dépendances à jour</li>
        <li>Effectuer des tests de sécurité réguliers</li>
      </ul>
      
      <h2>Outils pour auditer votre application</h2>
      <ul>
        <li>Burp Suite / OWASP ZAP : Tests d'intrusion web</li>
        <li>Nessus / OpenVAS : Scan de vulnérabilités</li>
        <li>SonarQube : Analyse de code statique</li>
        <li>Snyk : Scan des dépendances</li>
      </ul>
    `,
    date: "2025-05-15",
    readTime: 10,
    category: "Sécurité",
    tags: ["OWASP", "Sécurité web", "Vulnérabilités", "Pentest web"],
    image: "/images/blog/owasp-top10.jpg"
  },
  {
    id: 5,
    title: "5 bonnes pratiques pour sécuriser votre API REST",
    excerpt: "Guide complet pour protéger vos API contre les attaques courantes (injections, DDoS, brute force).",
    content: `
      <h2>1. Authentification et autorisation robustes</h2>
      <p>Utilisez JWT (JSON Web Tokens) avec une durée de vie limitée, implémentez OAuth2 pour les accès tiers, et vérifiez les droits à chaque requête.</p>
      
      <h2>2. Validation stricte des entrées</h2>
      <p>Validez tous les paramètres d'entrée : types, longueurs, formats. Utilisez des schémas de validation (Joi, Yup, Zod) et rejetez les champs inattendus.</p>
      
      <h2>3. Rate limiting et protection anti-DDoS</h2>
      <p>Limitez le nombre de requêtes par IP (ex: 100 requêtes/minute). Utilisez des outils comme express-rate-limit pour Node.js ou django-ratelimit pour Python.</p>
      
      <h2>4. Chiffrement des communications</h2>
      <p>Toutes les communications doivent passer par HTTPS. Utilisez TLS 1.2 ou 1.3, et désactivez les protocoles obsolètes (SSLv3, TLS 1.0).</p>
      
      <h2>5. Logs et monitoring</h2>
      <p>Journalisez les requêtes suspectes (tentatives d'intrusion, accès non autorisés). Mettez en place des alertes pour détecter les comportements anormaux.</p>
      
      <h2>Bonnes pratiques supplémentaires</h2>
      <ul>
        <li>Évitez d'exposer les IDs internes, utilisez des UUID</li>
        <li>Limitez les données retournées (ne renvoyez que le nécessaire)</li>
        <li>Configurez des en-têtes de sécurité (CORS, CSP, X-Frame-Options)</li>
        <li>Effectuez des tests d'intrusion réguliers</li>
      </ul>
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
      <p>L'intelligence artificielle (IA) est un domaine vaste qui englobe le machine learning, le deep learning, le traitement du langage naturel (NLP), et la vision par ordinateur.</p>
      
      <h2>Prérequis nécessaires</h2>
      <ul>
        <li><strong>Mathématiques</strong> : Algèbre linéaire, calcul, probabilités</li>
        <li><strong>Programmation</strong> : Python (obligatoire), bibliothèques scientifiques (NumPy, Pandas)</li>
        <li><strong>Statistiques</strong> : Comprendre les distributions, les tests</li>
      </ul>
      
      <h2>Les bibliothèques Python à connaître</h2>
      <ul>
        <li><strong>scikit-learn</strong> : Pour le machine learning classique</li>
        <li><strong>TensorFlow / PyTorch</strong> : Pour le deep learning</li>
        <li><strong>LangChain</strong> : Pour les applications LLM</li>
        <li><strong>Hugging Face</strong> : Transformers et modèles pré-entraînés</li>
      </ul>
      
      <h2>Premiers projets pour apprendre</h2>
      <ol>
        <li>Classification d'images (MNIST, CIFAR-10)</li>
        <li>Analyse de sentiments sur des tweets</li>
        <li>Prédiction de prix (immobilier, actions)</li>
        <li>Chatbot simple avec des règles</li>
      </ol>
      
      <h2>Ressources gratuites</h2>
      <ul>
        <li>Fast.ai : Cours pratique de deep learning</li>
        <li>Kaggle : Datasets et compétitions</li>
        <li>Google Colab : Notebooks GPU gratuits</li>
        <li>Hugging Face : Modèles et datasets</li>
      </ul>
    `,
    date: "2025-05-05",
    readTime: 9,
    category: "IA",
    tags: ["IA", "Machine Learning", "Python", "Deep Learning"],
    image: "/images/blog/ia-beginner.jpg"
  }
]

export default blogPosts
