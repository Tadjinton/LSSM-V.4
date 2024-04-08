const modules = {
    appstore: {
        save: 'Sauvegarder',
        reset: 'Reset',
        noMapkit:
            'Ce module ne fonctionne pas avec "Mapkit" à cause des limitations de Mapkit !',
        dev: 'Ce module est encore en développement. Son activation peut causer des erreurs !',
        closeWarning: {
            title: 'Changements non sauvegardés',
            text: "Des changements ont été faits dans l'AppStore qui n'ont pas été sauvegardés. Sauvegardez ou faites un Reset pour fermer l'Appstore.",
            abort: 'Annuler',
            saveAndExit: 'Sauvegarder et quitter',
            exit: 'Quitter sans sauvegarder',
        },
    },
    settings: {
        name: 'Paramètres',
        save: 'Sauvegarder',
        discard: 'Annuler changements',
        reset: 'Reset',
        export: 'Exporter',
        import: 'Importer',
        donate: 'faire un don volontaire',
        appendableList: {
            unique: {
                title: 'Valeur en double',
                text: 'Il ne doit pas y avoir de valeurs en double dans la colonne **{title}**. La valeur **{valeur}** existe déjà !',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset des paramètres',
            text: 'Voulez-vous remettre les paramètres par défaut ? Cela ne peut pas être annulé !',
            close: 'Annuler',
            total: 'Tous les paramètres',
            module: 'Seulement pour ce module',
        },
        resetWarningSetting: {
            title: 'Réinitialisation des paramètres',
            text: 'Voulez-vous vraiment remettre ce paramètre <b>{setting}</b> du module <b>{module}</b> à sa valeur par défaut ?',
            close: 'Annuler',
            reset: 'Réinitialiser',
        },
        closeWarning: {
            title: 'Changements non sauvegardés',
            text: "Des changements ont été faits dans les paramètres qui n'ont pas été sauvegardés. Faites un Reset, une annulation ou une sauvegarde pour fermer les paramètres.",
            abort: 'Annuler',
            saveAndExit: 'Sauvegarder et quitter',
            exit: 'Quitter sans sauvegarder',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Sélectionnez une position',
            zoom: 'Sélectionner la position et le zoom',
            sync: 'Utiliser la position actuelle',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Pompiers': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Ambulances': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Police': {
            buildings: [6, 8, 11, 13, 19, 27, 28, 29],
            color: '#00ac00',
        },
        'Secours nautique': {
            buildings: [23, 24, 25, 26],
            color: '#00ac00',
        },
        'Autre': {
            buildings: [7, 14, 21, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Incendie': {
            vehicles: {
                ["Fourgons d'incendie"]: [0, 1, 12, 13],
                ['Échelles']: [2, 15],
                ['Véhicules spéciaux']: [4, 6, 7, 10, 14, 31, 36, 37, 38],
                ['Chefs de groupe']: [3, 11],
                ['Ambulances']: [25, 26],
                ['Nautique']: [16, 17],
                ['Feux de Forêt']: [21, 22, 23, 24, 32, 33, 34, 35],
                ['Aéroport']: [51, 52, 53, 54, 55],
                ["Bombardier d'eau"]: [58, 59, 60],
                ['Autres véhicules']: [56, 57, 78],
            },
            color: '#ff2d2d',
        },
        'Ambulances': {
            vehicles: {
                Ambulances: [5, 27, 28, 29, 30],
                ['HéliSMUR']: [9],
            },
            color: '#ffa500',
        },
        'Police': {
            vehicles: {
                ['Véhicules de patrouille']: [8],
                ['Unités motocyclistes']: [20],
                ['Choucas']: [18],
                ['Équipes cynophiles']: [19],
                ["Maintien de l'Ordre"]: [39, 40, 41, 42, 43, 44, 45],
                ['U.I.I.S.C']: [
                    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                ],
                ['GIGN']: [74, 75, 76],
                ['GIH']: [77],
            },
            color: '#00ac00',
        },
        'Secours nautique': {
            vehicles: {
                ['Secours nautique']: [46, 47, 48, 49, 50],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Quantité',
    search: 'Rechercher',
    alliance: 'Alliance',
    premiumNotice: 'Compte premium de Opérateur112 nécessaire.',
    credits: 'Crédits',
    coins: 'Pièces',
    close: 'Fermer',
    fullscreen: {
        expand: 'Active le mode plein écran',
        compress: 'désactive le mode plein écran',
    },
    hideTitle: 'Montrer titre | Cacher titre',
    vehicle: 'Véhicules | Véhicule | Véhicules',
    building: 'Bâtiments',
    station: 'Casernes | Caserne | Casernes',
    distance: 'Distance | Distances',
    vehicleType: 'Type de véhicule',
    noOptions: "Désolé, pas d'options correspondantes.",
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Parc',
        'Lac',
        'Hôpital',
        'Forêt',
        'Arrêt de bus',
        'Arrêt de tram',
        'Gare ferroviaire (trajets régionaux)',
        'Gare ferroviaire (trajets régionaux et grandes lignes)',
        'Gare de marchandises',
        'Supermarché (petit)',
        'Supermarché (grand)',
        'Station-service',
        'École',
        'Musée',
        'Centre commercial',
        'Garage automobile',
        'Sortie d’autoroute',
        'Marché de Noël',
        'Hangar',
        'Discothèque',
        'Stade',
        'Ferme',
        'Bureaux',
        'Piscine',
        'Passage à niveau',
        'Théâtre',
        'Fête foraine',
        'Rivière',
        'Petit aéroport (piste)',
        'Grand aéroport (piste)',
        'Terminal d’aéroport',
        'Banque',
        'Entrepôt',
        'Pont',
        'Restauration rapide',
        'Port de fret',
        'Centre de recyclage',
        'Gratte-ciel',
        'Quai de navire de croisière',
        'Marina',
        'Passage à niveau piéton',
        'Tunnel',
        'Entrepôt frigorifique',
        'Centrale électrique',
        'Usine',
        'Casse',
        'Station de métro',
        'Petite citerne de produits chimiques',
        'Grande citerne de produits chimiques',
        'Hôtel',
        'Bar',
        'Décharge',
        'Parking couvert',
        'Silo',
        'Eolienne',
        'Voie navigable',
        'Camping',
        'Atelier de menuiserie',
        'Centre-ville',
        'Colline',
        'Quai',
        'Terrain de jeux',
        'Circuit de cross',
        'Résidence Protégée',
        'Falaise',
        'Raffinerie de pétrole',
        'Lieu de culte',
        'Plage',
        'Hangar à avions',
        'Bibliothèque',
        'Aquarium',
        'Prison',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [325, 326],
    ranks: {
        missionchief: {
            0: 'Auxiliaire',
            200: 'Sapeur',
            10_000: 'Caporal',
            100_000: 'Caporal-chef',
            1_000_000: 'Sergent',
            5_000_000: 'Sergent-chef',
            20_000_000: 'Adjudant',
            50_000_000: 'Adjudant-chef',
            1_000_000_000: 'Lieutenant',
            2_000_000_000: 'Capitaine',
            5_000_000_000: 'Commandant',
        },
        policechief: {
            0: 'Adjoint/e de sécurité',
            200: 'Gardien/ne de la paix',
            10_000: 'Brigadier/ère de police',
            100_000: 'Brigadier/ère chef de police',
            1_000_000: 'Major de police',
            5_000_000: 'Lieutenant de police',
            20_000_000: 'Capitaine de police',
            50_000_000: 'Commandant de police',
            1_000_000_000: 'Commissaire de police',
            2_000_000_000: 'Commissaire divisionnaire de police',
            5_000_000_000: 'Directeur/trice général/e de la police',
        },
    },
};
