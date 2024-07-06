const relationshipTopics = [
  {
    word: "Reisen",
    questions: [
      "Was war dein interessantestes Reiseerlebnis bisher?",
      "Welches Land würdest du gerne als nächstes besuchen und warum?",
      "Wie hat dich eine deiner Reisen persönlich verändert?"
    ]
  },
  {
    word: "Hobbys",
    questions: [
      "Welches Hobby bereitet dir am meisten Freude und warum?",
      "Gibt es ein neues Hobby, das du gerne ausprobieren möchtest?",
      "Wie hat sich eines deiner Hobbys im Laufe der Zeit entwickelt?"
    ]
  },
  {
    word: "Musik",
    questions: [
      "Welche Rolle spielt Musik in deinem Leben?",
      "An welches Konzert erinnerst du dich besonders gerne zurück?",
      "Wie hat sich dein Musikgeschmack über die Jahre verändert?"
    ]
  },
  {
    word: "Kindheit",
    questions: [
      "Was ist eine deiner schönsten Kindheitserinnerungen?",
      "Welches Buch oder welcher Film hat dich als Kind besonders geprägt?",
      "Wie würdest du dein kindliches Ich beschreiben?"
    ]
  },
  {
    word: "Zukunft",
    questions: [
      "Welche persönlichen Ziele verfolgst du in den nächsten Jahren?",
      "Wie stellst du dir dein Leben in 10 Jahren vor?",
      "Welche Veränderung in der Welt würdest du gerne erleben?"
    ]
  },
  {
    word: "Essen",
    questions: [
      "Was ist dein Lieblingsessen und warum?",
      "Welches exotische Gericht hast du schon mal probiert?",
      "Gibt es eine Familientradition, die mit Essen verbunden ist?"
    ]
  },
  {
    word: "Arbeit",
    questions: [
      "Was gefällt dir an deinem Beruf am besten?",
      "Welche berufliche Herausforderung hast du erfolgreich gemeistert?",
      "Wie sieht für dich der ideale Arbeitsplatz aus?"
    ]
  },
  {
    word: "Familie",
    questions: [
      "Welche Familientradition ist dir besonders wichtig?",
      "Wie würdest du die Dynamik in deiner Familie beschreiben?",
      "Welche Lektion hast du von deinen Eltern oder Großeltern gelernt?"
    ]
  },
  {
    word: "Natur",
    questions: [
      "Welcher Ort in der Natur beeindruckt dich am meisten?",
      "Wie verbringst du am liebsten Zeit in der Natur?",
      "Welche Erfahrung in der Natur hat dich besonders berührt?"
    ]
  },
  {
    word: "Lernen",
    questions: [
      "Welches neue Thema oder welche Fähigkeit möchtest du gerne erlernen?",
      "Was war die interessanteste Sache, die du kürzlich gelernt hast?",
      "Wie gehst du normalerweise vor, wenn du etwas Neues lernst?"
    ]
  },
  {
    word: "Humor",
    questions: [
      "Was bringt dich zum Lachen?",
      "Welche Art von Humor magst du besonders?",
      "Erzähle von einer Situation, in der du herzhaft lachen musstest."
    ]
  },
  {
    word: "Freizeitgestaltung",
    questions: [
      "Wie verbringst du am liebsten deine Freizeit?",
      "Welche Aktivität würdest du gerne öfter unternehmen?",
      "Was ist deine Idee eines perfekten Wochenendes?"
    ]
  },
  {
    word: "Reisebereitschaft",
    questions: [
      "Wie oft reist du gerne und warum?",
      "Was ist dein Traumreiseziel und was reizt dich daran?",
      "Welche Art von Reisen bevorzugst du (Abenteuer, Entspannung, Kultur)?"
    ]
  },
  {
    word: "Freundschaft",
    questions: [
      "Was macht für dich eine gute Freundschaft aus?",
      "Wie pflegst du deine Freundschaften?",
      "Welche Rolle spielen Freunde in deinem Leben?"
    ]
  },
  {
    word: "Gemeinsamkeiten",
    questions: [
      "Welche gemeinsamen Interessen sind dir in einer Beziehung wichtig?",
      "Wie wichtig findest du gemeinsame Aktivitäten mit deinem Partner?",
      "Welche Gemeinsamkeiten suchst du in einer Beziehung?"
    ]
  },
  {
    word: "Kommunikation",
    questions: [
      "Wie würdest du deinen Kommunikationsstil beschreiben?",
      "Was ist dir bei der Kommunikation in einer Beziehung besonders wichtig?",
      "Wie gehst du mit Missverständnissen um?"
    ]
  },
  {
    word: "Vertrauen",
    questions: [
      "Was bedeutet Vertrauen für dich in einer Beziehung?",
      "Wie baust du Vertrauen zu anderen Menschen auf?",
      "Welche Erfahrungen haben dein Verständnis von Vertrauen geprägt?"
    ]
  },
  {
    word: "Respekt",
    questions: [
      "Was bedeutet Respekt für dich in einer Beziehung?",
      "Wie zeigst du anderen Menschen Respekt?",
      "Wann fühlst du dich besonders respektiert?"
    ]
  },
  {
    word: "Ehrlichkeit",
    questions: [
      "Wie wichtig ist dir Ehrlichkeit in Beziehungen?",
      "Gab es Situationen, in denen Ehrlichkeit eine Herausforderung war?",
      "Wie gehst du damit um, wenn jemand nicht ehrlich zu dir ist?"
    ]
  },
  {
    word: "Unterstützung",
    questions: [
      "Wie unterstützt du Menschen, die dir wichtig sind?",
      "In welchen Bereichen wünschst du dir Unterstützung von einem Partner?",
      "Wie findest du die Balance zwischen Unterstützung und Eigenständigkeit?"
    ]
  },
  {
    word: "Empathie",
    questions: [
      "Wie zeigst du Empathie gegenüber anderen?",
      "Wann fällt es dir schwer, empathisch zu sein?",
      "Wie wichtig ist dir Empathie in einer Beziehung?"
    ]
  },
  {
    word: "Persönlichkeit",
    questions: [
      "Welche Persönlichkeitseigenschaften schätzt du an dir selbst?",
      "Welche Eigenschaften suchst du in einem Partner?",
      "Wie hat sich deine Persönlichkeit im Laufe der Zeit entwickelt?"
    ]
  },
  {
    word: "Werte",
    questions: [
      "Welche Werte sind dir im Leben besonders wichtig?",
      "Wie lebst du deine Werte im Alltag?",
      "Welche Werte möchtest du mit einem Partner teilen?"
    ]
  },
  {
    word: "Unabhängigkeit",
    questions: [
      "Was bedeutet Unabhängigkeit für dich in einer Beziehung?",
      "Wie wichtig ist dir persönlicher Freiraum?",
      "Wie findest du die Balance zwischen Nähe und Unabhängigkeit?"
    ]
  },
  {
    word: "Work-Life-Balance",
    questions: [
      "Wie sieht deine ideale Work-Life-Balance aus?",
      "Welche Herausforderungen hast du bei der Work-Life-Balance?",
      "Wie wichtig ist dir die Work-Life-Balance eines Partners?"
    ]
  },
  {
    word: "Gesundheit",
    questions: [
      "Welche Rolle spielt Gesundheit in deinem Leben?",
      "Wie sorgst du für deine körperliche und geistige Gesundheit?",
      "Welche gesundheitlichen Gewohnheiten sind dir wichtig in einer Beziehung?"
    ]
  },
  {
    word: "Lebensrhythmus",
    questions: [
      "Bist du eher ein Morgen- oder ein Nachtmensch?",
      "Wie sieht dein typischer Tagesablauf aus?",
      "Wie flexibel bist du in deinem Lebensrhythmus?"
    ]
  },
  {
    word: "Soziales Umfeld",
    questions: [
      "Wie würdest du dein soziales Umfeld beschreiben?",
      "Welche Rolle spielt dein soziales Umfeld in deinem Leben?",
      "Wie integrierst du einen Partner in dein soziales Umfeld?"
    ]
  },
  {
    word: "Technologienutzung",
    questions: [
      "Welche Rolle spielt Technologie in deinem Alltag?",
      "Wie gehst du mit der Balance zwischen Online- und Offline-Zeit um?",
      "Welche Technologien findest du besonders nützlich oder interessant?"
    ]
  },
  {
    word: "Soziale Medien",
    questions: [
      "Wie nutzt du soziale Medien?",
      "Welche Vor- und Nachteile siehst du in sozialen Medien?",
      "Wie wichtig ist dir Privatsphäre in Bezug auf soziale Medien?"
    ]
  },
  {
    word: "Umweltbewusstsein",
    questions: [
      "Welche umweltbewussten Gewohnheiten hast du?",
      "Wie wichtig ist dir Nachhaltigkeit im Alltag?",
      "Welche Umweltthemen beschäftigen dich besonders?"
    ]
  },
  {
    word: "Gemeinsame Ziele",
    questions: [
      "Welche Ziele möchtest du gerne mit einem Partner teilen?",
      "Wie wichtig sind dir gemeinsame Ziele in einer Beziehung?",
      "Wie gehst du damit um, wenn sich Ziele unterscheiden?"
    ]
  },
  {
    word: "Zukunftspläne",
    questions: [
      "Wie stellst du dir deine Zukunft vor?",
      "Welche langfristigen Pläne verfolgst du?",
      "Wie flexibel bist du bei deinen Zukunftsplänen?"
    ]
  },
  {
    word: "Persönliche Entwicklung",
    questions: [
      "Wie arbeitest du an deiner persönlichen Entwicklung?",
      "Welche Bereiche möchtest du an dir verbessern?",
      "Wie wichtig ist dir die persönliche Entwicklung in einer Beziehung?"
    ]
  },
  {
    word: "Emotionale Intelligenz",
    questions: [
      "Wie gehst du mit deinen eigenen Emotionen um?",
      "Wie reagierst du auf die Emotionen anderer?",
      "Wie wichtig findest du emotionale Intelligenz in Beziehungen?"
    ]
  },
  {
    word: "Konfliktlösung",
    questions: [
      "Wie gehst du typischerweise mit Konflikten um?",
      "Welche Erfahrungen hast du mit Konfliktlösung gemacht?",
      "Was ist dir bei der Lösung von Konflikten besonders wichtig?"
    ]
  },
  {
    word: "Kompromisse",
    questions: [
      "Wie findest du einen guten Kompromiss?",
      "In welchen Bereichen fällt es dir leicht oder schwer, Kompromisse einzugehen?",
      "Wie wichtig sind dir Kompromisse in einer Beziehung?"
    ]
  },
  {
    word: "Stressmanagement",
    questions: [
      "Wie gehst du mit Stress um?",
      "Welche Methoden zur Stressbewältigung wendest du an?",
      "Wie unterstützt du andere in stressigen Situationen?"
    ]
  },
  {
    word: "Unterschiede",
    questions: [
      "Wie gehst du mit Unterschieden in einer Beziehung um?",
      "Welche Unterschiede findest du bereichernd?",
      "Gibt es Unterschiede, die für dich schwierig zu akzeptieren sind?"
    ]
  },
  {
    word: "Akzeptanz",
    questions: [
      "Was bedeutet Akzeptanz für dich in einer Beziehung?",
      "Wie zeigst du Akzeptanz gegenüber anderen?",
      "In welchen Bereichen fällt es dir schwer, andere zu akzeptieren?"
    ]
  },
  {
    word: "Wachstum",
    questions: [
      "Was bedeutet persönliches Wachstum für dich?",
      "Wie förderst du Wachstum in deinen Beziehungen?",
      "Welche Erfahrungen haben zu deinem persönlichen Wachstum beigetragen?"
    ]
  },
  {
    word: "Verantwortung",
    questions: [
      "Wie gehst du mit Verantwortung in Beziehungen um?",
      "In welchen Bereichen übernimmst du gerne Verantwortung?",
      "Wie wichtig ist dir eine ausgewogene Verantwortungsverteilung?"
    ]
  },
  {
    word: "Aufgabenteilung",
    questions: [
      "Wie stellst du dir eine faire Aufgabenteilung in einer Beziehung vor?",
      "Welche Aufgaben übernimmst du gerne, welche weniger gern?",
      "Wie flexibel bist du bei der Aufgabenteilung?"
    ]
  },
  {
    word: "Erwartungen",
    questions: [
      "Welche Erwartungen hast du an eine Partnerschaft?",
      "Wie kommunizierst du deine Erwartungen?",
      "Wie gehst du damit um, wenn Erwartungen nicht erfüllt werden?"
    ]
  },
  {
    word: "Treue",
    questions: [
      "Was bedeutet Treue für dich in einer Beziehung?",
      "Wie wichtig ist dir Treue?",
      "Wie definierst du emotionale und physische Treue?"
    ]
  },
  {
    word: "Sexualität",
    questions: [
      "Welche Rolle spielt Sexualität in einer Beziehung für dich?",
      "Wie wichtig ist dir sexuelle Kompatibilität?",
      "Wie offen kannst du über sexuelle Wünsche und Bedürfnisse sprechen?"
    ]
  },
  {
    word: "Finanzen",
    questions: [
      "Wie gehst du mit Geld um?",
      "Wie stellst du dir finanzielle Arrangements in einer Partnerschaft vor?",
      "Welche finanziellen Ziele verfolgst du?"
    ]
  },
  {
    word: "Karriere",
    questions: [
      "Welche Rolle spielt deine Karriere in deinem Leben?",
      "Wie gehst du mit beruflichen Herausforderungen um?",
      "Wie wichtig ist dir die Karriere eines Partners?"
    ]
  },
  {
    word: "Familie",
    questions: [
      "Welche Rolle spielt Familie in deinem Leben?",
      "Wie stellst du dir deine zukünftige Familie vor?",
      "Wie wichtig sind dir Familientraditionen?"
    ]
  },
  {
    word: "Verwandtschaft",
    questions: [
      "Wie ist deine Beziehung zu deiner erweiterten Familie?",
      "Welche Rolle spielt die Familie deines Partners für dich?",
      "Wie gehst du mit familiären Verpflichtungen um?"
    ]
  },
  {
    word: "Kinderwunsch",
    questions: [
      "Möchtest du Kinder haben? Warum oder warum nicht?",
      "Wie stellst du dir deine Rolle als Elternteil vor?",
      "Wie wichtig ist dir die Übereinstimmung beim Thema Kinderwunsch?"
    ]
  },
  {
    word: "Kultur",
    questions: [
      "Welche Aspekte deiner Kultur sind dir besonders wichtig?",
      "Wie offen bist du gegenüber anderen Kulturen?",
      "Welche kulturellen Erfahrungen haben dich geprägt?"
    ]
  },
  {
    word: "Spiritualität",
    questions: [
      "Welche Rolle spielt Spiritualität oder Religion in deinem Leben?",
      "Wie praktizierst du deine spirituellen oder religiösen Überzeugungen?",
      "Wie wichtig ist dir spirituelle Kompatibilität in einer Beziehung?"
    ]
  },
  {
    word: "Politik",
    questions: [
      "Wie wichtig ist dir Politik im Alltag?",
      "Welche politischen Themen liegen dir besonders am Herzen?",
      "Wie gehst du mit unterschiedlichen politischen Ansichten um?"
    ]
  }
];