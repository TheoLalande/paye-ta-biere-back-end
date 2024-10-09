type data = {
  id: number;
  type: number;
  difficulty: number;
  question: string;
}

// ID 0 = Question ouverte
// ID 1 = Question texte à trou

// Difficulty 0 = Facile
// Difficulty 1 = Spicy

const dataToTry: data[] = [
  // ! FACILE ET QUESTION OUVERTE
  {
    id: 1,
    difficulty: 0,
    type: 1,
    question: "Si tu pouvais échanger ta vie avec quelqu’un pendant une journée, qui choisirais-tu et pourquoi?"
  },
  {
    id: 2,
    difficulty: 0,
    type: 1,
    question: "Quel est le pire cadeau que tu aies jamais reçu?"
  },
  {
    id: 3,
    difficulty: 0,
    type: 1,
    question: "Quelle chanson te met immédiatement de bonne humeur, même si tu ne veux pas l’admettre?"
  },
  {
    id: 4,
    difficulty: 0,
    type: 1,
    question: "Si tu étais un personnage de dessin animé, qui serais-tu?"
  },
  {
    id: 5,
    difficulty: 0,
    type: 1,
    question: "Quelle est la pire tenue que tu aies jamais portée en public?"
  },
  {
    id: 6,
    difficulty: 0,
    type: 1,
    question: "Si tu devais te téléporter quelque part maintenant, où irais-tu?"
  },
  {
    id: 7,
    difficulty: 0,
    type: 1,
    question: "As-tu déjà inventé une excuse improbable pour éviter de sortir avec des amis?"
  },
  {
    id: 8,
    difficulty: 0,
    type: 1,
    question: "Si tu devais échanger ton prénom avec un objet que tu vois dans la pièce, lequel choisirais-tu?"
  },
  {
    id: 9,
    difficulty: 0,
    type: 1,
    question: "Quel est ton plat réconfortant coupable que personne d'autre n'aime?"
  },
  {
    id: 10,
    difficulty: 0,
    type: 1,
    question: "Si tu pouvais avoir un super-pouvoir pendant une journée, lequel choisirais-tu et pourquoi"
  },
  // ! SPICY ET QUESTION OUVERTE
  {
    id: 11,
    difficulty: 1,
    type: 1,
    question: "As-tu déjà menti lors d'un jeu pour éviter une pénalité ? Donne un exemple."
  },
  {
    id: 12,
    difficulty: 1,
    type: 1,
    question: "Quel est le secret le plus embarrassant que tu as gardé jusqu'à maintenant ?"
  },
  {
    id: 13,
    difficulty: 1,
    type: 1,
    question: "Si tu devais envoyer un message compromettant à l'un de tes contacts au hasard, que dirais-tu ?"
  },
  {
    id: 14,
    difficulty: 1,
    type: 1,
    question: "Quelle est la chose la plus bizarre que tu aies googlé récemment ?"
  },
  {
    id: 15,
    difficulty: 1,
    type: 1,
    question: 'As-tu déjà eu un crush sur un(e) ami(e) proche sans lui dire ?'
  },
  {
    id: 16,
    difficulty: 1,
    type: 1,
    question: "Quel est le défi le plus fou que tu aies accepté lors d'une soirée ?"
  },
  {
    id: 17,
    difficulty: 1,
    type: 1,
    question: "Si tu devais choisir un(e) ami(e) pour un baiser surprise ici, qui ce serait ?"
  },
  {
    id: 18,
    difficulty: 1,
    type: 1,
    question: "As-tu déjà été surpris(e) en train de faire quelque chose d'embarrassant ? Que faisais-tu ?"
  },
  {
    id: 19,
    difficulty: 1,
    type: 1,
    question: "Raconte-nous ton pire rendez-vous amoureux."
  },
  {
    id: 20,
    difficulty: 1,
    type: 1,
    question: "Si tu devais révéler un de tes secrets les plus honteux, lequel choisirais-tu ?"
  },
  // ! FACILE ET QUESTION A TROU
  {
    id: 21,
    difficulty: 0,
    type: 2,
    question: "Mon plat préféré à préparer pour impressionner quelqu’un est ______."
  },
  {
    id: 22,
    difficulty: 0,
    type: 2,
    question: "Quand je suis stressé(e), j’ai tendance à ______."
  },
  {
    id: 23,
    difficulty: 0,
    type: 2,
    question: "Le super-pouvoir que j’aimerais avoir pendant une journée est ______."
  },
  {
    id: 24,
    difficulty: 0,
    type: 2,
    question: "Si je devais adopter un animal exotique, je choisirais ______."
  },
  {
    id: 25,
    difficulty: 0,
    type: 2,
    question: "Si je gagnais à la loterie, la première chose que j’achèterais serait ______."
  },
  {
    id: 26,
    difficulty: 0,
    type: 2,
    question: "Le truc le plus bizarre que j’ai caché dans mon sac/ma poche est ______."
  },
  {
    id: 27,
    difficulty: 0,
    type: 2,
    question: "Mon talent caché (mais inutile) est ______."
  },
  {
    id: 28,
    difficulty: 0,
    type: 2,
    question: "Si je devais chanter au karaoké en ce moment, je choisirais la chanson ______."
  },
  {
    id: 29,
    difficulty: 0,
    type: 2,
    question: "Le personnage de film ou série auquel je m’identifie le plus est ______."
  },
  {
    id: 30,
    difficulty: 0,
    type: 2,
    question: "Mon expression favorite que personne d'autre ne comprend est ______."
  },
  // ! SPICY ET QUESTION A TROU
  {
    id: 31,
    difficulty: 1,
    type: 2,
    question: "Si je devais envoyer un message compromettant, il dirait : “Hey ______, on se voit ce soir pour ______ ?”"
  },
  {
    id: 32,
    difficulty: 1,
    type: 2,
    question: "La chose la plus embarrassante que j’ai faite sous l’effet de l'alcool était ______."
  },
  {
    id: 33,
    difficulty: 1,
    type: 2,
    question: "Si je devais avouer mon crush à quelqu’un dans cette pièce, je dirais ______."
  },
  {
    id: 34,
    difficulty: 1,
    type: 2,
    question: "Le pire endroit où j'ai failli m'endormir était ______."
  },
  {
    id: 35,
    difficulty: 1,
    type: 2,
    question: "Mon dernier texto gênant envoyé par erreur disait : “______”"
  },
  {
    id: 36,
    difficulty: 1,
    type: 2,
    question: "Le surnom bizarre qu'on m'a donné une fois est ______."
  },
  {
    id: 37,
    difficulty: 1,
    type: 2,
    question: "La personne pour qui je serais prêt(e) à faire ______ est dans cette pièce."
  },
  {
    id: 38,
    difficulty: 1,
    type: 2,
    question: "Si je devais sortir déguisé(e) aujourd'hui, je choisirais de me déguiser en ______."
  },
  {
    id: 39,
    difficulty: 1,
    type: 2,
    question: "La pire idée que j’ai eue lors d’un rendez-vous galant était ______."
  },
  {
    id: 40,
    difficulty: 1,
    type: 2,
    question: "Le rêve le plus étrange que j’aie jamais fait impliquait ______ et ______."
  }
]

export default dataToTry