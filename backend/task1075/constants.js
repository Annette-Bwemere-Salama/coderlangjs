export const CONFIG = {
    title: '',

    currency: {},

    producers: [
        {
            "id": 1,
            "title": "Skeleton",
            "baseCost": 10,
            "growthRate": 1.11,
            "baseProduction": 0.1,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg"
        },
        {
            "id": 2,
            "title": "Skeleton",
            "baseCost": 10,
            "growthRate": 1.11,
            "baseProduction": 0.1,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg"
        }, {
            "id": 3,
            "title": "Skeleton",
            "baseCost": 10,
            "growthRate": 1.11,
            "baseProduction": 0.1,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg"
        }, {
            "id": 4,
            "title": "Skeleton",
            "baseCost": 10,
            "growthRate": 1.11,
            "baseProduction": 0.1,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg"
        }, {
            "id": 5,
            "title": "Skeleton",
            "baseCost": 10,
            "growthRate": 1.11,
            "baseProduction": 0.1,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg"
        }, 
    ],

    upgrades: [
        {
            "id": 1,
            "title": "Bones armor",
            "description": "Collect 1000 coins to improve your Skeletons and double their performance!",
            "multiplier": 2,
            "pictureURL": "https://learn.coderslang.com/skeleton.svg",
            "availabilityCondition": {
                "currency": 1000
            },
            "appliesTo": [
                1
            ],
            "price": 2000
        },
        {
            "id": 2,
            "title": "Vampirism",
            "description": "Collect 100 Mummies and 100 Zombies to upgrade them and double their productivity.",
            "multiplier": 2,
            "pictureURL": "https://learn.coderslang.com/vampirism.svg",
            "availabilityCondition": {
                "producers": [
                    {
                        "id": 2,
                        "quantity": 100
                    },
                    {
                        "id": 3,
                        "quantity": 100
                    }
                ]
            },
            "price": 1000000,
            "appliesTo": [
                2,
                3
            ]
        },
        {
            "id": 3,
            "title": "Immortality",
            "description": "Collect 500 million coins to upgrade your Werewolfes and triple their productivity",
            "multiplier": 3,
            "pictureURL": "https://learn.coderslang.com/vampire.svg",
            "availabilityCondition": {
                "currency": 500000000
            },
            "price": 200000000,
            "appliesTo": [
                7
            ]
        },
        {
            "id": 4,
            "title": "Ghostbuster",
            "description": "Create 100 Ghosts and 100 Vapmires to upgrade them and triple their productivity",
            "multiplier": 3,
            "pictureURL": "https://learn.coderslang.com/evil.svg",
            "availabilityCondition": {
                "producers": [
                    {
                        "id": 4,
                        "quantity": 100
                    },
                    {
                        "id": 5,
                        "quantity": 100
                    }
                ]
            },
            "appliesTo": [
                4,
                5
            ],
            "price": 60000000
        },
        {
            "id": 5,
            "title": "Army of dragons",
            "description": "Collect 100 Dragons to upgrade them and double their performance!",
            "multiplier": 2,
            "pictureURL": "https://learn.coderslang.com/dragons.svg",
            "availabilityCondition": {
                "producers": [
                    {
                        "id": 8,
                        "quantity": 100
                    }
                ]
            },
            "appliesTo": [
                8
            ],
            "price": 1000000000
        }
    ],

    achievements: [],

    chitChat: [],

    prestigeLevels: [],
};




