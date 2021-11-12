// import { Building } from 'typings/Building';

const modules = {
    appstore: {
        save: 'Guardar',
        reset: 'Restablecer',
        noMapkit:
            '¡Este módulo no funciona con el tipo de mapa "Mapkit" debido a las limitaciones de Mapkit!',
        dev:
            'Este módulo aún se encuentra en desarrollo. ¡Activarlo puede provocar funciones incompletas y defectuosas!',
        closeWarning: {
            title: 'Cambios no guardados',
            text:
                'Hizo cambios en la AppStore que aún no se han guardado. Reinícielos o guárdelos para cerrar la AppStore.',
            close: 'Cerrar mensaje',
        },
    },
    settings: {
        name: 'Ajustes',
        save: 'Guardar',
        discard: 'Descartar cambios',
        reset: 'Restablecer',
        export: 'Exportar',
        import: 'Importar',
        resetWarning: {
            title: 'Restablecer la configuración',
            text:
                '¿Realmente desea restablecer la configuración a sus valores predeterminados? ¡Esto no se puede deshacer!',
            close: 'Cancelar',
            total: 'Todos los ajustes',
            module: 'Sólo de éste módulo',
        },
        resetWarningSetting: {
            title: 'Restablecer ajustes',
            text:
                '¿Quiere restablecer esta configuración <b>{setting}</b> del modulo <b>{module}</b> a su valor predeterminado?',
            close: 'Cancelar',
            reset: 'Restablecer',
        },
        closeWarning: {
            title: 'Cambios no guardados',
            text:
                'Ha realizado cambios en la configuración que aún no se han guardado. Restablecerlos, descartarlos o guardarlos para cerrar la configuración.',
            close: 'Cerrar mensaje',
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
            'Si este error ocurre con frecuencia, ¡Infórmelo al equipo de LSSM!',
    },
    warnings: {
        version: {
            title: 'Versión de LSS Manager incorrecta',
            text:
                'Estimado usuario, lamentablemente tuvimos que descubrir que no tiene la última versión de LSS Manager. La última versión es {version}, pero primero tienes {curver}. Vuelva a cargar el juego sin caché (con Ctrl + F5, en dispositivos Apple comando + R), esto debería corregir el error. Si el error persiste, ¡Infórmalo al equipo! Si usa una versión incorrecta, no podemos garantizar la funcionalidad completa del LSS-Manager.',
            close: 'Cerrar mensaje y recargar el juego (recomendado)',
            abort: 'Cerrar el mensaje sin recargar el juego',
        },
    },
    globalSettings: {
        name: 'Ajustes generales',
        labelInMenu: {
            title: 'Etiqueta en lugar de icono en el menú',
            description:
                'Muestra una etiqueta simple en la barra de navegación en lugar del logotipo de LSSM',
        },
        allowTelemetry: {
            description:
                'Controla si LSS Manager puede enviar datos, lo que nos ayuda a desarrollar esta extensión.',
            title: 'Permitir Telemetría',
        },
        iconBg: {
            description: 'Cambiar el fondo de icono de LSSM',
            title: 'Fondo de icono LSSM',
        },
        iconBgAsNavBg: {
            description:
                '¡Colorea toda la barra de navegación con el color del fondo del icono LSSM!',
            title: 'Colorear barra de navegación',
        },
        osmDarkTooltip: {
            description:
                'Esta configuración oscurece la información sobre herramientas en el mapa si ha habilitado el modo oscuro',
            title: 'Información sobre herramienta oscura en el mapa',
        },
    },
    vehicles: {
        0: {
            caption: 'Camión BUP',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 3000,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        1: {
            caption: 'Camión BUL',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 1500,
            ftank: 250,
            possibleBuildings: [0, 18],
        },
        2: {
            caption: 'Camión AE',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 3 parques de bomberos',
        },
        3: {
            caption: 'Vehículo UMC',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 6 parques de bomberos',
        },
        4: {
            caption: 'FUV',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 4 parques de bomberos',
        },
        5: {
            caption: 'Ambulancia',
            color: '#9c6d1c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        6: {
            caption: 'Camión BNP',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 6000,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 7 parques de bomberos',
        },
        7: {
            caption: 'Camión TPP',
            color: '#990000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            schooling: {
                'Parque de bomberos': {
                    Hazmat: {
                        all: true,
                    },
                },
            },
            special: 'Necesario cuando hayas construido 11 parques de bomberos',
        },
        8: {
            caption: 'Coche Patrulla',
            color: '#880000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
        },
        9: {
            caption: 'HEMS',
            color: '#770000',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [5],
        },
        10: {
            caption: 'Vehículo aéreo',
            color: '#488b18',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 5 parques de bomberos',
        },
        11: {
            caption: 'Vehículo de mando móvil',
            color: '#e68319',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            schooling: {
                'Parque de bomberos': {
                    ['Mando móvil']: {
                        all: true,
                    },
                },
            },
            special: 'Necesario cuando hayas construido 13 parques de bomberos',
        },
        12: {
            caption: 'Vehículo de rescate',
            color: '#791515',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 3000,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        13: {
            caption: 'Helicóptero de Policía',
            color: '#dc1818',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [13],
            schooling: {
                ['Policía']: {
                    ['Piloto de Helicóptero']: {
                        all: true,
                    },
                },
            },
        },
        14: {
            caption: 'Unidad Antidisturbios',
            color: '#70ca16',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    'Fuerzas Especiales': {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 8 comisarías de policía',
        },
        15: {
            caption: 'Unidad GEO',
            color: '#b88f14',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    'Fuerzas Especiales': {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 8 comisarías de policía',
        },
        16: {
            caption: 'Unidad Canina',
            color: '#68a512',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    ['Guía Canino']: {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 6 comisarías de policía',
        },
        17: {
            caption: 'Moto de Policía',
            color: '#cc2222',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    Motorista: {
                        all: true,
                    },
                },
            },
        },
        18: {
            caption: 'VIR',
            color: '#770000',
            coins: 20,
            credits: 4_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        19: {
            caption: 'Unidad logística de AMV',
            color: '#770000',
            coins: 25,
            credits: 20_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            possibleBuildings: [2, 20],
            special:
                'Necesario cuando hayas construido 6 estaciones de rescate',
        },
        20: {
            caption: 'Médico de cabecera',
            color: '#770000',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2],
            schooling: {
                Rescate: {
                    ['Formación en cuidados intensivos']: {
                        all: true,
                    },
                },
            },
        },
        21: {
            caption: 'Motocicleta de intervención rápida',
            color: '#770000',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2, 20],
            schooling: {
                Rescate: {
                    ['Motocicleta de intervención rápida']: {
                        all: true,
                    },
                },
            },
        },
        22: {
            caption: 'Ambulancia SVB',
            color: '#770000',
            coins: 12,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        23: {
            caption: 'Vehículo de extinción por espuma',
            color: '#791515',
            coins: 15,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            ftank: 3000,
            possibleBuildings: [0],
        },
        24: {
            caption: 'Remolque con bomba accionada por motor',
            color: '#791515',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
            special:
                'Se necesita un vehículo de remolque (Camión BUP, Camión BUL, Camión BNP, Vehículo de extinción por espuma)',
        },
    },
    buildings: {
        0: {
            caption: 'Parque de bomberos',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Extensión de ambulancia',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 días',
                },
                {
                    caption: 'Ampliación de apoyo en incendios',
                    credits: 150_000,
                    coins: 15,
                    duration: '5 días',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
            maxBuildings:
                '5.000 edificios junto con pequeñas estaciones de bomberos',
            maxLevel: 25,
            special:
                'A partir del 24º parque de bomberos en adelante, el coste de construcción de un nuevo parque de bomberos aumenta según la siguiente fórmula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. ¡El precio de las monedas es constante!',
            startPersonnel: 10,
            startVehicles: ['Camión BUP', 'Camión BUL', 'Vehículo de rescate'],
            schoolingTypes: ['Parque de bomberos'],
            maxBuildingsFunction: (): number => 5_000,
        },
        1: {
            caption: 'Academia de bomberos',
            color: '#24c3ae',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Más aulas',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Días',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No hay límite',
            maxLevel: 0,
            special:
                'Los ministros y administradores de finanzas pueden (expandir) las escuelas del departamento de bomberos con la ayuda de créditos de la tesorería de la asociación. Los maestros y administradores de cursos de capacitación pueden comenzar cursos de capacitación en las escuelas del cuerpo de bomberos de la asociación.',
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Parque de ambulancias',
            color: '#bbe944',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Expansión de cuidados de emergencia',
                    credits: 200_000,
                    coins: 25,
                    duration: '7 Días',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
            maxBuildings: 'No hay límite',
            maxLevel: 14,
            special: '',
            startPersonnel: 0,
            startVehicles: ['Ambulancia'],
            schoolingTypes: ['Rescate'],
        },
        3: {
            caption: 'Academia de servicios de emergencia',
            color: '#24c3ae',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Más aulas',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Días',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No hay límite',
            maxLevel: 0,
            special:
                'Los ministros y administradores de finanzas pueden (expandir) las escuelas del departamento de bomberos con la ayuda de créditos de la tesorería de la asociación. Los maestros y administradores de cursos de capacitación pueden comenzar cursos de capacitación en las escuelas del cuerpo de bomberos de la asociación.',
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Hospital',
            color: '#ffa500',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Medicina interna general',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Cirugía general',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Ginecología',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Urología',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Traumatología',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurología',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurocirugía',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cardiología',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cirugía cardiovascular',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1.-20. 19.000 / 11 Monedas'],
            maxBuildings: 'No hay límite',
            maxLevel: 20,
            special:
                'Los ministros de finanzas y los administradores pueden (ampliar) los hospitales de la alianza con la ayuda de créditos de la tesorería de la alianza.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Helipuerto médico',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Ver especialidades',
            maxLevel: 0,
            special:
                'Hasta el edificio 125 (de todos los tipos) un total de máx. 4 helipuertos médicos se pueden construir. Después de eso, el número aumenta en 1 cada 25 edificios (comenzando en el 125).',
            startPersonnel: 0,
            startVehicles: [],
            schoolingTypes: ['Rescate'],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Comisaría de policía',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Calabozo',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Días',
                },
                ...new Array(9).fill({
                    caption: 'Más celdas',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Días',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
            maxBuildings:
                '1.700 comisarías de policía junto con pequeñas comisarías',
            maxLevel: 14,
            special:
                'A partir de la comisaría 24 en adelante, los costes de la nueva construcción de una comisaría aumentan según la siguiente fórmula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. ¡El precio de las monedas es constante!',
            startPersonnel: 2,
            startVehicles: ['Coche patrulla'],
            schoolingTypes: ['Policía'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Centralita',
            color: '#225522',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Cada 25 edificios una centralita',
            maxLevel: 0,
            special: 'La centralita es el centro administrativo',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Academia de Policía',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Más aulas',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Días',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No hay límite',
            maxLevel: 0,
            special:
                'Los ministros y administradores de finanzas pueden (expandir) las escuelas de policía de la alianza con la ayuda de créditos de la tesorería de la alianza. Los maestros y administradores de cursos de formación pueden comenzar cursos de formación en las escuelas de policía de la alianza.',
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Helipuerto Policial',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 Créditos / 50 Monedas'],
            maxBuildings: 'Ver especialidades',
            maxLevel: 1,
            special:
                'Se pueden construir hasta 2 sitios de aterrizaje por estación (etapas de expansión). Hasta el edificio 125 (de todos los tipos) un total de máx. 4 lugares de aterrizaje se pueden construir. Después de eso, el número aumenta en 1 cada 25 edificios (comenzando en el 125).',
            startPersonnel: 3,
            startVehicles: [],
            schoolingTypes: ['Policía'],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Zona de preparación',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                'Puede estacionar tantos vehículos propios como desee en un área de preparación, los miembros de la alianza pueden usar la zona de preparación. Un área de preparación permanece durante 24 horas, pero puede restablecerla a 24 horas en cualquier momento.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        16: {
            caption: 'Prisión',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Calabozo',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Días',
                },
                ...new Array(9).fill({
                    caption: 'Más celdas',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Días',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No hay límite',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Parque de bomberos (pequeño) ',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Convertir a parque de bombero normal: precio de la diferencia a parque de bombero normal',
            ],
            maxBuildings:
                '5.000 parques de bomberos junto con parques de bomberos pequeños',
            maxLevel: 5,
            special:
                'A partir del 24º parque de bomberos en adelante, el coste de construcción de un nuevo parque de bomberos aumenta según la siguiente fórmula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. ¡El precio de las monedas es constante!',
            startPersonnel: 10,
            startVehicles: ['Camión BUP', 'Camión BUL', 'Vehículo de rescate'],
            schoolingTypes: ['Parque de bomberos'],
            maxBuildingsFunction: (): number => 5_000,
        },
        19: {
            caption: 'Comisaría de policía (pequeño)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Convertir a comisaria de policía normal: precio de la diferencia a comisaría de policía normal',
            ],
            maxBuildings:
                '1.700 comisarías de polcía junto con comisarías de policías pequeños',
            maxLevel: 4,
            special:
                'A partir de la comisaría 24º en adelante, los costes de la nueva construcción de una comisaría se calculan de acuerdo con la siguiente fórmula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. ¡El precio de las monedas es constante!',
            startPersonnel: 2,
            startVehicles: ['Coche patrulla'],
            schoolingTypes: ['Policía'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Parque de ambulancias (pequeño)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Convertir a parque de ambulancia normal: precio de la diferencia a parque de ambulancia normal',
            ],
            maxBuildings: 'No hay límite',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulancia'],
            schoolingTypes: ['Rescate'],
        },
        21: {
            caption: 'Gran complejo',
            color: '#8B4513',
            coins: 'Demasiado caro',
            credits: 'Demasiado caro',
            extensions: [],
            levelcost: ['Demasiado caro'],
            maxBuildings: 'Keine Grenze',
            maxLevel: 5,
            special: 'Demasiado caro, NO LO COMPRES, NO LO AMPLÍES',
            startPersonnel: 'there is none',
            startVehicles: [''],
        },
        22: {
            caption: 'Pequeño complejo',
            color: '#8B4513',
            coins: 'Demasiado caro',
            credits: 'Demasiado caro',
            extensions: [],
            levelcost: ['Demasiado caro'],
            maxBuildings: 'Keine Grenze',
            maxLevel: 5,
            special: 'Demasiado caro, NO LO COMPRES, NO LO AMPLÍES',
            startPersonnel: 'there is none',
            startVehicles: [''],
        },
    },
    buildingCategories: {
        'Parques de bomberos': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Parques de ambulancias': {
            buildings: [2, 3, 5, 20],
            color: '#ffa500',
        },
        ['Parques de policías']: {
            buildings: [6, 8, 13, 16, 19],
            color: '#00ac00',
        },
        'Otros': {
            buildings: [4, 7, 14, 21, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Bomberos: {
            vehicles: {
                'Camiones de bomberos': [0, 1, 12],
                ['Vehículos especiales']: [2, 3, 4, 6, 7, 10, 11, 23, 24],
            },
            color: '#ff2d2d',
        },
        ['Vehículos de ambulancias']: {
            vehicles: {
                Ambulancias: [5, 18, 19, 20, 21, 22],
                HEMS: [9],
            },
            color: '#ffa500',
        },
        ['Vehículos de policías']: {
            vehicles: {
                'Coche patrulla': [8],
                ['Moto de policía']: [17],
                ['Helicóptero de policía']: [13],
                'Vehiculos especiales': [14, 15, 16],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 18, 19, 20],
    cellBuildings: [6],
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
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Parque de bomberos': [
            {
                caption: 'Hazmat',
                duration: '3 Días',
                staffList: 'Hazmat',
            },
            {
                caption: 'Mando móvil',
                duration: '5 Días',
                staffList: 'Mando móvil',
            },
            {
                caption: 'Formación CBA',
                duration: '3 Días',
            },
            {
                caption: 'Rescate acuático rápido',
                duration: '4 Días',
            },
            {
                caption: 'Navegación en océano',
                duration: '5 Días',
            },
        ],
        ['Policía']: [
            {
                caption: 'Piloto de Helicóptero',
                duration: '7 Días',
                staffList: 'Piloto de Helicóptero',
            },
            {
                caption: 'Fuerzas Especiales',
                duration: '5 Días',
                staffList: 'Fuerzas Especiales',
            },
            {
                caption: 'Guía Canino',
                duration: '5 Días',
                staffList: 'Guía Canino',
            },
            {
                caption: 'Motorista',
                duration: '3 Días',
                staffList: 'Motorista',
            },
        ],
        'Rescate': [
            {
                caption: 'Formación en cuidados intensivos',
                duration: '5 Días',
                staffList: 'Formación en cuidados intensivos',
            },
            {
                caption: 'Motocicleta de intervención rápida',
                duration: '3 Días',
                staffList: 'Motocicleta de intervención rápida',
            },
        ],
    },
    amount: 'Cantidad',
    search: 'Buscar',
    mapSearch: 'Búsqueda de ubicación',
    alliance: 'Alianza',
    premiumNotice:
        '¡Esta función amplía una función premium del juego y, por lo tanto, solo está disponible para jugadores con una cuenta premium del juego Centro de Mando!',
    credits: 'Créditos',
    coins: 'Monedas',
    close: 'Cerrar',
    fullscreen: {
        expand: 'Activar el modo pantalla completa',
        compress: 'Desactivar el modo pantalla completa',
    },
    hideTitle: 'Mostrar título | Ocultar título',
    vehicle: 'Coches | Coche | Coches',
    building: 'Edificios',
    station: 'Estaciones | Estación | Estaciones',
    distance: 'Distancia | Distancias',
    vehicleType: 'Tipo de vehículo',
    noOptions: 'Lo sentimos, no hay opciones que coincidan.',
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
        'Parque',
        'Lago',
        'Hospital',
        'Bosque',
        'Parada de autobús',
        'Parada de tranvía',
        'Parada de tren (cercanías)',
        'Parada de tren (cercanías y larga distancia)',
        'Estación de mercanías',
        'Supermercado (pequeño)',
        'Supermercado (grande)',
        'Gasolinera',
        'Escuela',
        'Museo',
        'Centro comercial',
        'Taller',
        'Salida de autopista',
        'Mercado navideño',
        'Depósito',
        'Discoteca',
        'Estadio',
        'Granja',
        'Edificio de oficinas',
        'Piscina',
        'Cine',
        'Feria',
        'Río',
        'Aeropuerto pequeño (pista)',
        'Aeropuerto grande (pista)',
        'Terminal de aeropuerto',
        'Banco',
        'Almacén',
        'Puente',
        'Restaurante de comida rápida',
        'Puerto de mercancías',
        'Centro de reciclaje',
        'Rascacielos',
        'Cubierta de yate',
        'Puerto deportivo',
        'Paso a nivel',
        'Túnel',
        'Almacén frigorífico',
        'Central eléctrica',
        'Fábrica',
        'Chatarrería',
        'Estación de metro',
        'Almacén químico pequeño',
        'Almacén químico grande',
        'Hotel',
        'Bar',
        'Vertedero',
        'Aparcamiento',
        'Granero',
        'Intersección con semáforos',
        'Taller de carpintería',
        'Restaurante',
        'Centro de la ciudad',
        'Montaña',
        'Muelle',
        'Zona de juegos',
        'Pista de carreras de tierra',
        'Residencia',
        'Central Nuclear',
        'Acantilado',
        'Aserradero',
        'Refinería petrolera',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
    ranks: {
        missionchief: {
            0: 'Novato',
            200: 'Bombero',
            10_000: 'Bombero sénior',
            100_000: 'Operador de vehículos antiincendios',
            1_000_000: 'Teniente',
            5_000_000: 'Capitán',
            20_000_000: 'Capitán de personal',
            50_000_000: 'Jefe de batallón',
            1_000_000_000: 'Jefe de división',
            2_000_000_000: 'Subjefe',
            5_000_000_000: 'Jefe de bomberos',
        },
    },
};
