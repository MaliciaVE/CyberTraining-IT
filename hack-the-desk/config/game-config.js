// Contenu debrief/facilitateur modifiable.
window.GAME_CONFIG = {
  "game": {
    "title": "Hack the Desk",
    "subtitle": "Operation Intrusion",
    "theme": "dark",
    "startScene": "briefing"
  },
  "evidence": {
    "postit": {
      "number": "01",
      "title": "Post-it credentials",
      "kind": "Credential exposure",
      "question": "Vous avez trouvé des mots de passe sur un post-it. Que faites-vous maintenant ?",
      "loot": [
        "Laptop: P@ssword123",
        "HelpDesk: Abc12345!",
        "M365: 1Password!",
        "PIN: 1234",
        "Phone: 4096",
        "ShareSpace: Password!1"
      ],
      "advice": [
        "Ne laissez jamais de mots de passe visibles.",
        "Utilisez des phrases de passe longues et uniques.",
        "Stockez-les dans un gestionnaire de mots de passe approuvé."
      ],
      "risk": "CRITICAL",
      "attacks": [
        "Identifier le schéma utilisé pour créer les mots de passe",
        "Voler les identifiants",
        "Se connecter à un compte puis changer son mot de passe",
        "Voler le smartphone et les données qu’il contient",
        "Voler le laptop et les données qu’il contient",
        "Ajouter son propre téléphone comme méthode MFA Microsoft 365"
      ]
    },
    "badge": {
      "number": "02",
      "title": "Access badge",
      "kind": "Physical access",
      "question": "Un badge employé est laissé sans surveillance. Jusqu’où pourriez-vous aller ?",
      "loot": [
        "Employee access badge",
        "Building access enabled",
        "Identity exposed"
      ],
      "advice": [
        "Gardez votre badge sur vous.",
        "Signalez immédiatement toute perte ou tout vol.",
        "Vérifiez l’identité avant d’ouvrir une zone sécurisée."
      ],
      "risk": "HIGH",
      "attacks": [
        "Copier le badge à l’aide d’un Flipper Zero, Raspberry Pi ou Arduino afin de tenter d’accéder au bâtiment / aux zones sécurisées",
        "Voler le badge et l’utiliser avant sa désactivation après signalement"
      ]
    },
    "usb": {
      "number": "03",
      "title": "External device",
      "kind": "Untrusted media",
      "question": "Une clé USB inconnue est accessible. La brancheriez-vous sur le poste ?",
      "loot": [
        "Unencrypted removable media",
        "Unknown origin",
        "Potential malware vector"
      ],
      "advice": [
        "Ne branchez jamais de périphérique inconnu.",
        "Chiffrez les supports contenant des données sensibles.",
        "Gardez vos supports sous surveillance."
      ],
      "risk": "HIGH",
      "attacks": [
        "Voler le périphérique et les données qu’il contient",
        "Tenter de copier des données, avec la limite potentielle de politiques imposant le chiffrement avant copie USB",
        "Corrompre le périphérique afin de propager un malware sur l’ordinateur",
        "Remplacer le périphérique par un autre capable d’envoyer des données à distance",
        "Détruire la clé et provoquer une perte de données"
      ]
    },
    "document": {
      "number": "04",
      "title": "Sensitive document",
      "kind": "Information disclosure",
      "question": "Un document confidentiel est abandonné sur le bureau. Que peut-il révéler ?",
      "loot": [
        "Sensitive printed information",
        "Visible to visitors",
        "No secure disposal"
      ],
      "advice": [
        "Récupérez immédiatement les impressions sensibles.",
        "Rangez les documents hors de vue.",
        "Utilisez un bac sécurisé ou un destructeur."
      ],
      "risk": "HIGH",
      "attacks": [
        "Récupérer des informations permettant de préparer un spear phishing ciblé contre un nouvel arrivant",
        "Modifier les informations utilisées lors de la création d’une identité afin de détourner la réception des identifiants"
      ]
    },
    "laptop": {
      "number": "05",
      "title": "Unlocked workstation",
      "kind": "Endpoint compromise",
      "question": "Le poste est déverrouillé. Explorez les applications ouvertes et identifiez les données accessibles.",
      "loot": [
        "Active user session",
        "Browser sessions available",
        "Mailbox and files exposed"
      ],
      "advice": [
        "Verrouillez toujours votre poste en vous absentant.",
        "Installez les mises à jour de sécurité.",
        "Protégez l’écran des regards indiscrets."
      ],
      "risk": "CRITICAL",
      "attacks": [
        "Voler le laptop",
        "Voler ou modifier des mots de passe",
        "Voler des données ou imprimer des informations confidentielles",
        "Connecter une clé USB et tenter de propager un malware",
        "Envoyer du phishing depuis la messagerie du collaborateur",
        "Compromettre le laptop pour l’utiliser comme backdoor"
      ]
    },
    "phone": {
      "number": "06",
      "title": "Mobile phone",
      "kind": "Mobile exposure",
      "question": "Le téléphone est disponible, mais ce scénario n’est pas encore configuré.",
      "loot": [
        "Interaction configurable",
        "Ready for a future scenario"
      ],
      "advice": [
        "Ajoutez ici une nouvelle interaction depuis config/game-config.js."
      ],
      "risk": "PENDING",
      "attacks": [
        "Scénario à définir avec le facilitateur"
      ]
    }
  },
  "apps": {
    "social": {
      "label": "Social",
      "icon": "@",
      "title": "Public profile intelligence",
      "tag": "OSINT",
      "facts": [
        "338 contacts visible",
        "Employment history exposed",
        "Public posts and photos",
        "Useful details for social engineering"
      ],
      "attacks": [
        "Publier ou diffuser de fausses informations",
        "Collecter des informations pour préparer un spear phishing",
        "Diffuser du phishing aux contacts du réseau social",
        "Voler ou modifier les identifiants",
        "Récupérer des informations confidentielles"
      ]
    },
    "travel": {
      "label": "Travel",
      "icon": "↗",
      "title": "Travel information",
      "tag": "MOVEMENT",
      "facts": [
        "Booking reference: BXS-LUX456",
        "Traveller identity visible",
        "Route and schedule accessible",
        "Absence window can be inferred"
      ],
      "attacks": [
        "Identifier quand la personne part et où elle se rend",
        "Collecter des informations pour préparer un spear phishing",
        "Récupérer la confirmation de réservation et tenter de voyager à sa place",
        "Annuler la réservation",
        "Si un moyen de paiement est enregistré, tenter d’effectuer une autre réservation"
      ]
    },
    "files": {
      "label": "ShareSpace",
      "icon": "◇",
      "title": "Corporate files",
      "tag": "DATA",
      "facts": [
        "Shared workspace already authenticated",
        "Internal names and documents visible",
        "Potential download and exfiltration path",
        "Access inherited from active session"
      ],
      "attacks": [
        "Accéder à des informations restreintes ou sensibles et les extraire",
        "Corrompre des données",
        "Téléverser un fichier malveillant et tenter sa propagation via SharePoint",
        "Si le compte est propriétaire du site, modifier les droits d’accès",
        "Effacer des données et provoquer un impact opérationnel malgré les sauvegardes",
        "Imprimer un document"
      ]
    },
    "mail": {
      "label": "Mail",
      "icon": "✉",
      "title": "Mailbox access",
      "tag": "IDENTITY",
      "facts": [
        "Corporate and personal addresses visible",
        "Password reset channel accessible",
        "Contacts and conversations exposed",
        "Impersonation opportunity"
      ],
      "attacks": [
        "Exploiter le mélange entre messagerie personnelle et professionnelle",
        "Voler des identifiants ou modifier les réponses aux questions secrètes",
        "Extraire des données privées ou professionnelles, y compris adresse et informations de facturation",
        "Diffuser de fausses informations",
        "Envoyer du phishing aux contacts",
        "Préparer un spear phishing",
        "Changer le mot de passe"
      ]
    }
  }
};
