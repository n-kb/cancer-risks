const messages = {
  en: {
     lede: 'Compare cancer risk factors in an understandable way. Currently listing {risks} risk factors.',
     'Newsletter': 'Newsletter',
     newsletter1: 'Write down your e-mail in the box below and you\'ll receive my next text directly in your inbox.',
     'Your e-mail address here': 'Your e-mail address here',
     'Submit': 'Submit',
     'An interactive database by': 'An interactive database by',
     '20 December 2018': '20 December 2018',
     'Cancer Risks': 'Cancer Risks',
     'Share': 'Share',
     'Cancer site': 'Cancer site',
     'Risk factor': 'Risk factor',
     share_text: 'Compare cancer risk factors in an understandable way.',
     factors: {
        'alcohol': 'Alcohol',
        'aluminum_deo': 'Aluminum deodorant',
        'processed_meat': 'Processed meat',
        'red_meat': 'Red meat',
        'coffee': 'Coffee',
        'air_pollution': 'Air pollution',
        'mobile_phones': 'Mobile phones',
        'cig_smoke': 'Cigarette smoke',
        'hairdresser': 'Hairdresser (work as)'
     },
     cancers: {
        "colorectum": "Colorectum",
        "oral_cavity_and_pharynx": "Oral cavity and pharynx",
        "larynx": "Larynx",
        'lung': 'Lung',
        'bladder': 'Bladder',
        'lung_smoke': 'Lung',
        'brain': 'Brain',
        "oesophagus": "Oesophagus",
        "female_breast": "Female breast",
        "all": "All"
     },
     actions: {
        "drink50g": "drink 50g of pure alcohol (half a bottle of wine or a liter of beer) per day",
        "useDeodorant": "use an aluminum deodorant every day",
        "eat50gprocessedmeat": "eat 50g of processed meat per day",
        "eat100gredmeat": "eat 100g of processed meat per day",
        "drinkCoffee": "drink coffee every day",
        "live20mug": "live in a city with a concentration of PM<sub>2.5</sub> over 20μg/m<sup>3</sup> (about the level of pollution in Berlin)",
        "cellphone": "hold a cell phone to their ear for less than 30 minutes per day",
        'smoke': 'smoke around 20 cigarettes per day',
        'work_as_hairdresser': 'work as a hairdresser for about 10 years'
     },
     comparator: {
        source: `Source: {source} <a href="{source_url}" target="_blank">Link</a>.`,
        disclaimer: "Scientists conducted several studies and could not find a link between this factor and any cancer. ",
        nonsmokers: "nonsmokers",
        males: "males",
        females: "females",
        persons: "persons",
        a_cancer: "a cancer",
        cancer_type: `a {cancer} cancer`,
        sentence_right: `Out of {amount} {persons} who {action}, <span class="big-number">{rate}</span> develop {cancer_type} over their lifetime.`,
        sentence_left: `Out of {amount} {persons} in the general population, <span class="big-number">{rate}</span> develop {cancer_type} over their lifetime.`
     },
     copy: {
        main: `
        <p>
          Aspirin <a href="https://www.dailymail.co.uk/health/article-205490/Asprin-link-cancer-risk.html" target="_blank">causes</a> cancer, said the <em>Daily Mail</em>. It also <a href="https://www.dailymail.co.uk/health/article-1174691/Taking-aspirin-40s-cuts-cancer-risk.html" target="_blank">prevents</a> it, said the same source. Onions <a href="https://www.dailymail.co.uk/health/article-207275/Onions-fight-prostate-cancer.html" target="_blank">reduce</a> cancer risk, while artificial lights <a href="https://www.dailymail.co.uk/health/article-391267/Artificial-light-increases-breast-cancer-risk.html" target="_blank">increase</a> it.
        </p>
        <p>
          These examples are taken from Paul Battley's hilarious <a href="http://kill-or-cure.herokuapp.com" target="_blank">Kill or Cure</a>, an attempt to structure the <em>Daily Mail</em>'s classification all things as either causing or preventing cancer. While the <em>Mail</em> can hardly be said to report accurate information, it is not rare to find similarly approximate reporting on the issue of cancer risks in actual newspapers.
        </p>
        <p>
          Because few journalists understand scientific articles and many universities are prone to hyping insignificant results, it can be hard to access solid evidence on cancer risks.</p>
        <img src="/graph_en.png" />
        <p>
          Several groups of scientists compile the available evidence on cancer risks, most notably the International Agency for Research on Cancer. Their monographies are comprehensive but hard to read. I extracted the risk-related data to make it easily digestible. The numbers below are not definitive (establishing the cause of a cancer is notoriously difficult) but the orders of magnitude they convey are more informative that the headlines in most news reports.
        </p>
        <p>
          Choose a risk factor and a cancer site below to see how the absolute risk changes.
        </p>`,
        limitations: `
        <h2>Limitations</h2>
        <p>
          The data for the general population are from the United States. Conditions in your country might differ.
        </p>
        <p>
          That no evidence of a link between a factor and cancer has been found does not mean that there is no link (it is impossible to prove that there is no relationship between the two). While further research might prove that a factor or another does cause cancer, the examples shown here have already undergone several serious studies on animals and on humans, non of which conclusively showed a link.
        </p>
        <p>
          Not being an oncologist, I might have made mistakes. The data is available in <a href="https://docs.google.com/spreadsheets/d/1QTflR63InxdWNeJGgpYgnd7rCC_r7SzZlOTiyGnkQHw/edit?usp=sharing">this spreadsheet</a>. Do send me an e-mail at hi@nkb.fr if something is amiss or if you would like to add data on a different risk factor.
        </p>`
     }
  },
  de: {
     lede: 'Krebsrisikofaktoren leicht verstehen. Zurzeit sind {risks} Risikofaktoren vergleichbar.',
     'Newsletter': 'Newsletter',
     newsletter1: 'Hinterlassen Sie Ihre Email Adresse um meine nächsten Essays (meistens auf Englisch) direkt per Email zu bekommen.',
     'Your e-mail address here': 'Ihre Email Adresse hier',
     'Submit': 'Abschicken',
     'An interactive database by': 'Eine Datenbank von',
     'Share': 'Teilen',
     '20 December 2018': '20. Dezember 2018',
     'Cancer Risks': 'Krebsrisiko'
    },
  fr: {
     lede: 'Comparez les risques de cancer facilement et clairement. {risks} facteurs de risque sont disponibles pour l\'instant.',
     'Newsletter': 'Newsletter',
     newsletter1: 'Abonnez-vous pour recevoir mes prochains articles par e-mail.',
     'Your e-mail address here': 'Votre adresse e-mail',
     'Submit': 'Envoyer',
     'An interactive database by': 'Une base de données par',
     '20 December 2018': '20 décembre 2018',
     'Cancer Risks': 'Risques de cancer',
     'Share': 'Partager',
     'Cancer site': 'Type de cancer',
     'Risk factor': 'Facteur de risque',
     share_text: 'Comparez les risques de cancer facilement et clairement.',
     factors: {
        'alcohol': 'Alcool',
        'aluminum_deo': 'Aluminum (déodorant)',
        'processed_meat': 'Viande transformée',
        'red_meat': 'Viande rouge',
        'coffee': 'Café',
        'air_pollution': 'Pollution atmosphérique',
        'mobile_phones': 'Téléphones portables',
        'cig_smoke': 'Cigarettes',
        'hairdresser': 'Coiffeur (profession)'
     },
     cancers: {
        "colorectum": "Côlon",
        "oral_cavity_and_pharynx": "Pharynx et bouche",
        "larynx": "Larynx",
        'lung': 'Poumon',
        'bladder': 'Vessie',
        'lung_smoke': 'Poumon',
        'brain': 'Cerveau',
        "oesophagus": "Œsophage",
        "female_breast": "Sein féminin",
        "all": "Tous"
     },
     actions: {
        "drink50g": "boivent 50g d'alcool pur (une demie bouteille de vin ou un litre de bière) par jour",
        "useDeodorant": "utilisent un déodorant à base d'aluminium tous les jours",
        "eat50gprocessedmeat": "mangent 50g de viande transformée tous les jours",
        "eat100gredmeat": "mangent 50g de viande rouge tous les jours",
        "drinkCoffee": "boivent du café tous les jours",
        "live20mug": "vivent dans une ville où la concentration en PM<sub>2.5</sub> dépasse 20μg/m<sup>3</sup> (un peu plus que la moyenne annuelle à Paris)",
        "cellphone": "ont un téléphone à l'oreille moins de 30 minutes par jour",
        'smoke': 'fument environ 20 cigarettes par jour',
        'work_as_hairdresser': 'travaillent en tant que coiffeur pendant au moins 10 ans'
     },
     comparator: {
        source: `Source: {source} <a href="{source_url}" target="_blank">Lien</a>.`,
        disclaimer: "Des scientifiques ont mené plusieurs études et n'ont pas trouvé de lien entre ce facteur de risque et le cancer. ",
        nonsmokers: "non-fumeurs",
        males: "hommes",
        females: "femmes",
        persons: "personnes",
        a_cancer: "un cancer",
        cancer_type: `un cancer ({cancer})`,
        sentence_right: `Pour {amount} {persons} qui {action}, <span class="big-number">{rate}</span> ont {cancer_type} au cours de leur vie.`,
        sentence_left: `Pour {amount} {persons} parmi l'ensemble de la population, <span class="big-number">{rate}</span> ont {cancer_type} au cours de leur vie.`
     },
     copy: {
        main: `
        <p>
          L'aspirine <a href="https://www.dailymail.co.uk/health/article-205490/Asprin-link-cancer-risk.html" target="_blank">provoque</a> le cancer, a un jour titré le <em>Daily Mail</em>. L'aspirine <a href="https://www.dailymail.co.uk/health/article-1174691/Taking-aspirin-40s-cuts-cancer-risk.html" target="_blank">prévient</a> le cancer, a-t-il titré un autre jour. Les oignons <a href="https://www.dailymail.co.uk/health/article-207275/Onions-fight-prostate-cancer.html" target="_blank">réduisent</a> le risque de cancer et les lumières artificielles <a href="https://www.dailymail.co.uk/health/article-391267/Artificial-light-increases-breast-cancer-risk.html" target="_blank">l'augmentent</a>.
        </p>
        <p>
          Ces exemples viennent du génial <a href="http://kill-or-cure.herokuapp.com" target="_blank">Kill or Cure</a> de Paul Battley, une liste de tout ce que le <em>Daily Mail</em> a un jour classé dans la catégorie «&nbsp;cancérigène&nbsp;» ou «&nbsp;anti-cancer&nbsp;» (ou les deux à la fois). On sait bien que le <em>Mail</em> a abandonné toute prétention à faire du journalisme il y a fort longtemps, mais même les journaux sérieux ont du mal avec la communication des risques, surtout quand on parle de santé.
        </p>
        <p>
          D'une part, peu de journalistes sont à l'aise avec les articles scientifiques. D'autre part, les universités n'hésitent pas à déformer des résultats pour embellir un communiqué de presse. Au final, il est très difficile de connaître l'état de la recherche sur les facteurs de risques de cancer.</p>
        <img src="/graph_fr.png" />
        <p>
          Plusieurs consortiums de scientifiques évaluent et compilent les études sur le sujet, notamment le Centre international de recherche sur le cancer. Ses monographies sont très complètes mais pas évidentes à lire. J'en ai extrait les données sur les risques pour les rendre plus facilement compréhensibles. Les chiffres ci-dessous ne sont pas définitifs (établir la cause précise d'un cancer est particulièrement difficile) mais leurs ordres de grandeur sont sans doute plus informatifs que les gros titres de certains journaux.
        </p>
        <p>
          Choisissez un facteur de risque et un type de cancer dans les listes ci-dessous et voyez comment le risque absolu change.
        </p>`,
        limitations: `
        <h2>N'oubliez pas vos pincettes</h2>
        <p>
          Les données concernant la population dans son ensemble valent pour les Etats-Unis uniquement. Les conditions dans votre pays peuvent être différentes.
        </p>
        <p>
          Lorsqu'il n'existe pas de preuve d'un lien entre un facteur de risque et un type de cancer, cela ne veut pas dire qu'il n'y a pas de lien (prouver l'inexistance d'un lien est impossible). Il est possible qu'une étude prouve un jour un tel lien. Les exemples inclus ici ont toutefois fait l'objet de nombreuses études sur des animaux et des humains et aucune n'a apporté de preuve probante.
        </p>
        <p>
          Je ne suis pas oncologue et j'ai pu faire des erreurs. Les données utilisées sont disponibles dans <a href="https://docs.google.com/spreadsheets/d/1QTflR63InxdWNeJGgpYgnd7rCC_r7SzZlOTiyGnkQHw/edit?usp=sharing">cette feuille de calcul</a>. Envoyez moi un message à hi@nkb.fr si quelque chose vous tracasse ou si vous voulez ajouter un facteur de risque.
        </p>`
     }
  }
}

export default messages