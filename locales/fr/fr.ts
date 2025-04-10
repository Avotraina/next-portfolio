// locales/fr.ts

import labels from './labels.json';


export default {
    // experience: {...experience},
    labels: { ...labels },
    'hello': 'Salut',
    'hello.world': 'Hello world!',
    'welcome': 'Hello {name}!',
    'about': {
        p1: "Je suis développeur full-stack. Je ne me contente pas d'écrire du code, je conçois des solutions. Passionné par le développement logiciel, je suis convaincu que du code propre, structuré et maintenable est la base des applications évolutives. Mon attention aux détails me pousse à créer des systèmes qui ne sont pas seulement fonctionnels, mais également élégants dans leur simplicité.",
        p2: "Pour moi, le développement logiciel ne consiste pas seulement à implémenter des fonctionnalités ; il s'agit de résoudre des problèmes de manière réfléchie, d'optimiser les performances et de s'améliorer continuellement. Je suis toujours à la recherche de nouvelles bonnes pratiques et de modèles architecturaux pour affiner mon approche et construire des logiciels qui résistent à l'épreuve du temps.",
        p3: "Actuellement, je cherche une nouvelle opportunité pour travailler avec une équipe de personnes talentueuses passionnées par la création de produits logiciels de qualité.",
        p4: "Lorsque je ne code pas, vous pouvez me trouver en train de regarder des films avec ma femme ou de jouer à des jeux vidéo."
    }
} as const