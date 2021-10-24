// import { Building } from 'typings/Building';

const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev:
            'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text:
                'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        appendableList: {
            unique: {
                title: 'double value',
                text:
                    'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text:
                'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text:
                'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text:
                'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

export default {
    modules,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'If this error occurs frequently, please report it to the LSSM team!',
    },
    warnings: {
        version: {
            title: 'Wrong LSS Manager version',
            text:
                'Dear user, unfortunately we had to discover that you do not have the latest version of LSS Manager. The latest version is {version}, but you have {curver} first. Please reload the game without cache (with Ctrl + F5, on Apple devices command + R), this should fix the bug. If the error persists, please report it to the team! If you use a wrong version we cannot guarantee the full functionality of the LSS-Manager.',
            close: 'Close message and reload game (recommended)',
            abort: 'Close message without reloading game',
        },
    },
    globalSettings: {
        name: 'General Settings',
        labelInMenu: {
            title: 'Label instead of icon in menu',
            description:
                'Displays a simple label in the navigation bar instead of the LSSM logo',
        },
        allowTelemetry: {
            description:
                'Controls whether LSS-Manager is allowed to send Data which helps us in developing this extension.',
            title: 'Allow Telemetry',
        },
        iconBg: {
            description: 'Change the background of LSSM-Icon!',
            title: 'LSSM-Icon Background',
        },
        iconBgAsNavBg: {
            description:
                'Color the whole navbar in the color of LSSM-Icon Background!',
            title: 'colorize navbar',
        },
        osmDarkTooltip: {
            description:
                'This settings darkens tooltips on map if you have enabled the dark mode',
            title: 'Dark tooltips on map',
        },
    },
    vehicles: {
        0: {
            caption: 'Water Ladder',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 9,
            special: 'A standard pump used for fighting fires.',
        },
        1: {
            caption: 'Light 4X4 Pump (L4P)',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            special: 'A smaller pump used in ruarl areas, will act as a pump.',
        },
        2: {
            caption: 'Aerial Appliance',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Required once you have built 3 fire stations. An Aerial Asset, very useful for fighting fires in high rises and rescuing people.',
        },
        3: {
            caption: 'Fire Officer',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Required once you have built 6 fire stations. A small car used for transporting Station Managers+ to calls, not uncommon to see 6-8 of these at Major Incidents.',
        },
        4: {
            caption: 'Rescue Support Unit (RSU)',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 5,
            special:
                'Required once you have built 4 fire stations. A big lorry with specialist rescue equipment, use full for Road Traffic Collisions.',
        },
        5: {
            caption: 'Ambulance',
            color: '#9c871c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            special:
                'A standard ambulance for tackling your medical emergencys.',
        },
        6: {
            caption: 'Water Carrier',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Required once you have built 7 fire stations. Used for conveying water to a fire, Very useful for rural fires.',
        },
        7: {
            caption: 'HazMat Unit',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: {
                'Fire Station': {
                    HazMat: {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 11 fire stations. A HazMat unit which can be used for a range of hazardous calls. ',
        },
        8: {
            caption: 'Incident response vehicle (IRV)',
            color: '#188b35',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            special: 'A standard patrol car for tackling your police calls.',
        },
        9: {
            caption: 'HEMS',
            color: '#e68319',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            schooling: {
                Rescue: {
                    'Critical care': {
                        all: true,
                    },
                },
            },
            special: 'An Air Ambulance for the most serious cases.',
        },
        10: {
            caption: 'Rapid Response Vehicle',
            color: '#b89d14',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            special:
                'A fast and angile ambulance car, very useful when a ambulance has a long response. ',
        },
        11: {
            caption: 'Police Helicopter',
            color: '#0a7c16',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            schooling: {
                Police: {
                    'Police aviation': {
                        all: true,
                    },
                },
            },
            special:
                'A Police Helicopter, useful for pursuits and firearms attacks.',
        },
        12: {
            caption: 'Dog Support Unit (DSU)',
            color: '#1f7915',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Police: {
                    'Dog handling': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 6 police stations. Acts as a Dog Support Unit (DSU) and Incident Response Vehicle. A dog for tracking and chasing criminals.',
        },
        13: {
            caption: 'Armed Response Vehicle (ARV)',
            color: '#438a17',
            coins: 23,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 8 police stations. Acts as a Armed Response Vehicle and Incident Response Vehicle. Firearms unit for the worst calls.',
        },
        14: {
            caption: 'BASU',
            color: '#ca1616',
            credits: 11_680,
            coins: 25,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Required from 5 fire stations. Carrys air tanks to a call.',
        },
        15: {
            caption: 'ICCU',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: {
                'Fire Station': {
                    'Mobile command': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 13 fire stations. A command post for Major Incidents.',
        },
        16: {
            caption: 'Rescue Pump',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 9,
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. A Pump with extraction tools. Perfect for your Road Traffic Collisions.',
        },
        17: {
            caption: 'CARP',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. A Pump with an Aerial Asset on top, perfect for high rise fires and rescuing people form tall buildings ',
        },
        18: {
            caption: 'Co-Responder Vehicle',
            color: '#bb2222',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: {
                'Fire Station': {
                    'Co-Responder Training': {
                        all: true,
                    },
                },
            },
            special:
                'A Rapid Response Vehicle operated by the fire service where there is little to no ambulance coverage.',
        },
        19: {
            caption: 'Joint Response Unit',
            color: '#48832e',
            coins: 30,
            credits: 6_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Acts as a Rapid Response Vehicle and Incident Response Vehicle. Perfect for calls that need police and alot of ambulances.',
        },
        20: {
            caption: 'Operational Team Leader',
            color: '#997122',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            special:
                'Required from 6 ambulance stations. A medical command unit, usefull for co-ordinating scenes.',
        },
        21: {
            caption: 'General Practitioner',
            color: '#99631f',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: {
                Rescue: {
                    'Critical care': {
                        all: true,
                    },
                },
            },
            special:
                'Can only be placed at the Home Response Location. A General Practitioner that can respond as a on call doctor currently. ',
        },
        22: {
            caption: 'Community First Responder',
            color: '#996719',
            coins: 12,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            special:
                'Can only be placed at the Home Response Location. A ambulance Rapid Response Vehicle but staffed with volunteers',
        },
        23: {
            caption: 'Crew Carrier',
            color: '#662222',
            coins: 10,
            credits: 8_000,
            minPersonnel: 1,
            maxPersonnel: 12,
            special:
                'Can be placed at HART bases and Fire Stations. Transporting many staff to a scene.',
        },
        24: {
            caption: 'Traffic Car',
            color: '#3a5522',
            coins: 35,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Police: {
                    'Roads Policing Officer Training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Traffic Car and Incident Response Vehicle. A pursuit vehicle for high speed chases.',
        },
        25: {
            caption: 'Armed Traffic Car',
            color: '#577529',
            coins: 35,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                },
            },
            special:
                'Requires both, Firearms training and Roads Policing Officer Training. Works as a Traffic Car, Armed Response Vehicle and an Incident Response Vehicle. For highspeed chases and firearms incidents. ',
        },
        26: {
            caption: 'Heavy 4x4 Tanker',
            color: '#aa0000',
            coins: 25,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Work as a Water Carrier and Water Ladder. Used in rural areas to save money.',
        },
        27: {
            caption: 'PRV',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Responds to the most serious of calls, where lives are in serious danger.',
        },
        28: {
            caption: 'SRV',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Responds to the most serious of calls, where lives are in serious danger.',
        },
        29: {
            caption: 'Welfare Vehicle',
            color: '#99631f',
            coins: 25,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Responds to the most serious of calls, Used for Major Fires.',
        },
        30: {
            caption: 'ATV Carrier',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Responds to the most serious of calls, where lives are in serious danger in ruarl areas.',
        },
        31: {
            caption: 'Ambulance Control Unit',
            color: '#99631f',
            coins: 25,
            credits: 50_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'Tactical Command Course': {
                        all: true,
                    },
                },
            },
            special:
                'Command Post run by the ambulance service for the most serious of calls.',
        },
        32: {
            caption: 'CBRN Vehicle',
            color: '#99631f',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'SORT Training': {
                        all: true,
                    },
                },
            },
            special: 'A HazMat run by the ambulance service.',
        },
        33: {
            caption: 'Mass Casualty Equipment',
            color: '#99631f',
            coins: 15,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                Rescue: {
                    'SORT Training': {
                        all: true,
                    },
                },
            },
            special:
                'You can buy 1 Mass Casualty Equipment for every 20 ambulance stations (respectively 15 with premium account). It is required for missions that can spawn with over 30 patients',
        },
        34: {
            caption: 'Ambulance Officer',
            color: '#99631f',
            coins: 15,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: {
                Rescue: {
                    'Ambulance Officer': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 15 Rescue stations. It is required for missions that can spawn with over 20 patients to help command the scene. It is a dual unit between an OTL and an Ambulance Officer Requirements',
        },
    },
    buildings: {
        0: {
            caption: 'Fire station',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulance extension',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
                {
                    caption: 'Airport extension',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
                {
                    caption: 'Water rescue expansion',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
            maxBuildings: '5.000 together with small fire stations',
            maxLevel: 24,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
            schoolingType: 'Fire Station',
            maxBuildingsFunction: (): number => 5_000,
        },
        1: {
            caption: 'Fire academy',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Ambulance station',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Mass Casualty Extension',
                    credits: 150_000,
                    coins: 20,
                    duration: '5 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-19. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 19,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
            schoolingType: 'Rescue',
        },
        3: {
            caption: 'Rescue (EMS) Academy',
            color: '#8c852c',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Additional classroom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) association rescue schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association rescue schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Hospital',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'General Internal',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'General Surgeon',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Gynecology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Urology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Traumatology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurosurgery',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cardiology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cardiac Surgery',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special:
                'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Medical Helicopter station',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1.000.000 / 50 Coins'],
            maxBuildings: 'see specials',
            maxLevel: 2,
            special:
                'Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
            startPersonnel: 1,
            startVehicles: [],
            schoolingType: 'Rescue',
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Police station',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(9).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '1.700 together with small police stations',
            maxLevel: 19,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Incident response vehicle (IRV)'],
            schoolingType: 'Police',
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Dispatch Center',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'All 25 buildings one control center',
            maxLevel: 0,
            special: 'The control center is the administrative center.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Police training centre',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Additional classroom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) association police schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association police schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Police Aviation',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1-5. 1.000.000 Credits / 50 Coins'],
            maxBuildings: 'see specials',
            maxLevel: 5,
            special:
                'Up to 6 landing sites can be built per station (expansion stages). Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
            startPersonnel: 3,
            startVehicles: [],
            schoolingType: 'Police',
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Staging area',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 4,
            maxLevel: 0,
            special:
                'You can station as many of your own vehicles as you like at a staging area, members of the alliance can use the staging area. A staging area remains for 24 hours, but you can reset it to 24 hours at any time.With Premium Account you can have 8 staging areas at the same time',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 4,
        },
        16: {
            caption: 'Prison',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(9).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Fire station (Small station) ',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '5.000 together with fire stations',
            maxLevel: 5,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
            schoolingType: 'Fire Station',
            maxBuildingsFunction: (): number => 5_000,
        },
        19: {
            caption: 'Police station (Small station)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(1).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '1.700 together with police stations',
            maxLevel: 5,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Incident response vehicle (IRV)'],
            schoolingType: 'Police',
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Ambulance station (Small station)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: 'No limit',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
            schoolingType: 'Rescue',
        },
        21: {
            caption: 'Clinic',
            color: '#e2e53b',
            coins: 25,
            credits: 100_000,
            extensions: [
                {
                    caption: 'General Internal',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 5,
            special: '',
            startPersonnel: 0,
            startVehicles: ['None. You can buy max. 2 Vehicles'],
            schoolingType: 'Rescue',
        },
        22: {
            caption: 'Home Response Location',
            color: '#eeb611',
            coins: 10,
            credits: 100_000,
            extensions: [],
            levelcost: ['not expandeble'],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                'It can only Store: Fire Officer, Rapid Response Vehicle, Operational Team Leader, General Practitioner, Community First Responder, Ambulance Officer, Dog Support Unit (DSU)',
            startPersonnel: 1,
            startVehicles: [''],
        },
        25: {
            caption: 'HART Base',
            color: '#eeb611',
            coins: 25,
            credits: 400_000,
            extensions: [
                {
                    caption: 'Mass Casualty Extension',
                    credits: 150_000,
                    coins: 20,
                    duration: '5 Days',
                },
            ],
            levelcost: [
                '1. 10.000',
                '2. 25.000',
                '3. 50.000',
                '4.-9. 100.000',
                '10.-14. 150.000',
                '15.-20. 200.000',
            ],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special: '',
            startPersonnel: 10,
            startVehicles: [],
        },
    },
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Ambulance Stations': {
            buildings: [2, 3, 5, 20, 21, 25],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'Other': {
            buildings: [7, 4, 14, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Fire Fighting Vehicles': {
            vehicles: {
                'Pumps': [0, 1, 16, 26, 17],
                'Special Vehicles': [4, 7, 14, 18, 6, 2],
                'Command Vehicles': [15, 3],
            },
            color: '#ff2d2d',
        },
        'Ambulance Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'HEMS': [9],
                'Rapid Response Vehicles': [10, 19, 20, 21, 22],
                'HART': [23, 27, 28, 29, 30, 31, 32, 33, 34],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'ARV': [13],
                'Police Helicopter': [11],
                'DSU': [12],
                'Traffic Cars': [24, 25],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 18, 19, 20, 21, 22, 25],
    cellBuildings: [6, 19],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
        '19_1',
        '19_2',
    ],
    bedBuildings: [4, 21],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Fire Station': [
            {
                caption: 'HazMat',
                duration: '3 Days',
                staffList: 'HazMat Unit',
            },
            {
                caption: 'Mobile command',
                duration: '5 Days',
                staffList: 'Level 1 Incident Commander Training',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 Days',
            },
            {
                caption: 'Swift water rescue',
                duration: '4 Days',
            },
            {
                caption: 'Ocean Navigation',
                duration: '5 Days',
            },
            {
                caption: 'Co-Responder Training',
                duration: '3 Days',
                staffList: 'Co-Responder',
            },
        ],
        'Police': [
            {
                caption: 'Police aviation',
                duration: '7 Days',
                staffList: 'Police aviation',
            },
            {
                caption: 'Firearms training',
                duration: '5 Days',
                staffList: 'Firearms training',
            },
            {
                caption: 'Dog handling',
                duration: '5 Days',
                staffList: 'Dog handling',
            },
            {
                caption: 'Roads Policing Officer Training',
                duration: '3 Days',
                staffList: 'Roads Policing Officer',
            },
        ],
        'Rescue': [
            {
                caption: 'Critical care',
                duration: '5 Days',
                staffList: 'Critical care',
            },
            {
                caption: 'HART Training',
                duration: '5 Days',
                staffList: 'HART Training',
            },
            {
                caption: 'Tactical Command Course',
                duration: '5 Days',
                staffList: 'Tactical Command Course',
            },
            {
                caption: 'SORT Training',
                duration: '3 Days',
                staffList: 'SORT',
            },
            {
                caption: 'Ambulance Officer',
                duration: '5 Days',
                staffList: 'Ambulance Officer',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
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
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'clinic-medical',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'helicopter',
        'building',
        '',
        'ship',
        'ship',
        'fire',
        'stethoscope',
        'shield-alt',
        'clinic-medical',
        'plane',
        'shield-alt',
    ],
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Plant',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Silo',
        'Heathland',
        'Intersection with lights',
        'High Rise with Cladding',
        'Major Road Standby Point',
        'Nuclear power station',
        'Munition dump',
        'Restaurant',
        'Market place',
        'Dirt Race Track',
        'Sheltered housing schem',
        'University',
        'Golf course',
        'Moorland',
        'Theme Park',
        'Abandoned Building',
        'Festival',
    ],
    only_alliance_missions: [57, 74, 89],
    transfer_missions: [77],
};
