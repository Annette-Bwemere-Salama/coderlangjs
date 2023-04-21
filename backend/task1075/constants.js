export const CONFIG =
{
    "title": "EVIL EMPIRE",
    "currency": {
        "title": "gold",
        "bigPictureURL": "https://learn.coderslang.com/gold.svg",
        "smallPictureURL": "https://learn.coderslang.com/gold.svg",
        "bankPictureURL": "https://learn.coderslang.com/castle.svg"
    },
    "producers": [
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
            "title": "Mummy",
            "baseCost": 100,
            "growthRate": 1.17,
            "baseProduction": 1,
            "pictureURL": "https://learn.coderslang.com/mummy.svg"
        },
        {
            "id": 3,
            "title": "Zombie",
            "baseCost": 1200,
            "growthRate": 1.19,
            "baseProduction": 12,
            "pictureURL": "https://learn.coderslang.com/zombie.svg"
        },
        {
            "id": 4,
            "title": "Vampire",
            "baseCost": 12000,
            "growthRate": 1.22,
            "baseProduction": 120,
            "pictureURL": "https://learn.coderslang.com/vampire.svg"
        },
        {
            "id": 5,
            "title": "Ghost",
            "baseCost": 120000,
            "growthRate": 1.25,
            "baseProduction": 1200,
            "pictureURL": "https://learn.coderslang.com/ghost.svg"
        },
        {
            "id": 6,
            "title": "Demon",
            "baseCost": 1200000,
            "growthRate": 1.28,
            "baseProduction": 9600,
            "pictureURL": "https://learn.coderslang.com/demon.svg"
        },
        {
            "id": 7,
            "title": "Werewolf",
            "baseCost": 12000000,
            "growthRate": 1.31,
            "baseProduction": 67000,
            "pictureURL": "https://learn.coderslang.com/werewolf.svg"
        },
        {
            "id": 8,
            "title": "Dragon",
            "baseCost": 150000000,
            "growthRate": 1.34,
            "baseProduction": 400000,
            "pictureURL": "https://learn.coderslang.com/dragon.svg"
        }
    ],
    "upgrades": [
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
    "achievements": [
        {
            "id": 1,
            "title": "Tarot cards",
            "description": "The first million gold collected.",
            "condition": {
                "currency": 1000000
            },
            "pictureURL": "https://learn.coderslang.com/tarot.svg"
        },
        {
            "id": 2,
            "title": "Staff of Power",
            "description": "Tamed 10 dragons!",
            "condition": {
                "producers": [
                    {
                        "id": 8,
                        "quantity": 10
                    }
                ]
            },
            "pictureURL": "https://learn.coderslang.com/staff.svg"
        },
        {
            "id": 3,
            "title": "Treasure chest",
            "description": "Collected 100M gold",
            "condition": {
                "currency": 100000000
            },
            "pictureURL": "https://learn.coderslang.com/treasure.svg"
        },
        {
            "id": 4,
            "title": "Dragonborn",
            "description": "Tamed 100 dragons!",
            "condition": {
                "producers": [
                    {
                        "id": 8,
                        "quantity": 100
                    }
                ]
            },
            "pictureURL": "https://learn.coderslang.com/dragonborn.svg"
        }
    ],
    "chitChat": [
        {
            "message": "We need more gold"
        },
        {
            "message": "Would you like to know the secret to eternal happiness? Page 246."
        },
        {
            "message": "More souls for the master!",
            "condition": {
                "currency": 1000
            }
        },
        {
            "message": "Do you think that you can click your way to the win?",
            "condition": {
                "clicks": 100
            }
        },
        {
            "message": "The universe is at your feet, my lord!",
            "condition": {
                "achievementId": 2
            }
        }
    ],
    "prestigeLevels": [
        {
            "id": 1,
            "title": "Beginner",
            "pictureURL": "https://learn.coderslang.com/beginner_medal.svg",
            "multiplier": 1,
            "condition": {
                "currency": 0
            }
        },
        {
            "id": 2,
            "title": "Pro",
            "pictureURL": "https://learn.coderslang.com/cup_pro.svg",
            "multiplier": 2,
            "condition": {
                "currency": 100000000000000000000
            }
        },
        {
            "id": 3,
            "title": "Expert",
            "pictureURL": "https://learn.coderslang.com/cup_expert.svg",
            "multiplier": 4,
            "condition": {
                "currency": 1e+30
            }
        },
        {
            "id": 4,
            "title": "Master",
            "pictureURL": "https://learn.coderslang.com/cup_master.svg",
            "multiplier": 8,
            "condition": {
                "currency": 1e+40
            }
        }
    ]
}

// {
//     title: '',

//     currency: {},

//     producers: [
//         {
//             "id": 1,
//             "title": "Skeleton",
//             "baseCost": 10,
//             "growthRate": 1.11,
//             "baseProduction": 0.1,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg"
//         },
//         {
//             "id": 2,
//             "title": "Skeleton",
//             "baseCost": 10,
//             "growthRate": 1.11,
//             "baseProduction": 0.1,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg"
//         }, {
//             "id": 3,
//             "title": "Skeleton",
//             "baseCost": 10,
//             "growthRate": 1.11,
//             "baseProduction": 0.1,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg"
//         }, {
//             "id": 4,
//             "title": "Skeleton",
//             "baseCost": 10,
//             "growthRate": 1.11,
//             "baseProduction": 0.1,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg"
//         }, {
//             "id": 5,
//             "title": "Skeleton",
//             "baseCost": 10,
//             "growthRate": 1.11,
//             "baseProduction": 0.1,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg"
//         }, 
//     ],

//     upgrades: [
//         {
//             "id": 1,
//             "title": "Bones armor",
//             "description": "Collect 1000 coins to improve your Skeletons and double their performance!",
//             "multiplier": 2,
//             "pictureURL": "https://learn.coderslang.com/skeleton.svg",
//             "availabilityCondition": {
//                 "currency": 1000
//             },
//             "appliesTo": [
//                 1
//             ],
//             "price": 2000
//         },
//         {
//             "id": 2,
//             "title": "Vampirism",
//             "description": "Collect 100 Mummies and 100 Zombies to upgrade them and double their productivity.",
//             "multiplier": 2,
//             "pictureURL": "https://learn.coderslang.com/vampirism.svg",
//             "availabilityCondition": {
//                 "producers": [
//                     {
//                         "id": 2,
//                         "quantity": 100
//                     },
//                     {
//                         "id": 3,
//                         "quantity": 100
//                     }
//                 ]
//             },
//             "price": 1000000,
//             "appliesTo": [
//                 2,
//                 3
//             ]
//         },
//         {
//             "id": 3,
//             "title": "Immortality",
//             "description": "Collect 500 million coins to upgrade your Werewolfes and triple their productivity",
//             "multiplier": 3,
//             "pictureURL": "https://learn.coderslang.com/vampire.svg",
//             "availabilityCondition": {
//                 "currency": 500000000
//             },
//             "price": 200000000,
//             "appliesTo": [
//                 7
//             ]
//         },
//         {
//             "id": 4,
//             "title": "Ghostbuster",
//             "description": "Create 100 Ghosts and 100 Vapmires to upgrade them and triple their productivity",
//             "multiplier": 3,
//             "pictureURL": "https://learn.coderslang.com/evil.svg",
//             "availabilityCondition": {
//                 "producers": [
//                     {
//                         "id": 4,
//                         "quantity": 100
//                     },
//                     {
//                         "id": 5,
//                         "quantity": 100
//                     }
//                 ]
//             },
//             "appliesTo": [
//                 4,
//                 5
//             ],
//             "price": 60000000
//         },
//         {
//             "id": 5,
//             "title": "Army of dragons",
//             "description": "Collect 100 Dragons to upgrade them and double their performance!",
//             "multiplier": 2,
//             "pictureURL": "https://learn.coderslang.com/dragons.svg",
//             "availabilityCondition": {
//                 "producers": [
//                     {
//                         "id": 8,
//                         "quantity": 100
//                     }
//                 ]
//             },
//             "appliesTo": [
//                 8
//             ],
//             "price": 1000000000
//         }
//     ],

//     achievements: [
//         {
//             "id": 1,
//             "title": "Tarot cards",
//             "description": "The first million gold collected.",
//             "condition": {
//                 "currency": 1000000
//             },
//             "pictureURL": "https://learn.coderslang.com/tarot.svg"
//         },
//         {
//             "id": 2,
//             "title": "Staff of Power",
//             "description": "Tamed 10 dragons!",
//             "condition": {
//                 "producers": [
//                     {
//                         "id": 8,
//                         "quantity": 10
//                     }
//                 ]
//             },
//             "pictureURL": "https://learn.coderslang.com/staff.svg"
//         },
//         {
//             "id": 3,
//             "title": "Treasure chest",
//             "description": "Collected 100M gold",
//             "condition": {
//                 "currency": 100000000
//             },
//             "pictureURL": "https://learn.coderslang.com/treasure.svg"
//         },
//     ],

//     chitChat: [
//         {
//             "message": "We need more gold"
//         },
//         {
//             "message": "Would you like to know the secret to eternal happiness? Page 246."
//         },
//         {
//             "message": "More souls for the master!",
//             // "condition": {
//                 "currency": {
//                     "title": "gold",
//                     "bigPictureURL": "https://learn.coderslang.com/gold.svg",
//                     "smallPictureURL": "https://learn.coderslang.com/gold.svg",
//                     "bankPictureURL": "https://learn.coderslang.com/castle.svg"
//                 },
//             // }
//         },
//         {
//             "message": "Do you think that you can click your way to the win?",
//             "condition": {
//                 "clicks": 100
//             }
//         },
//         {
//             "message": "The universe is at your feet, my lord!",
//             "condition": {
//                 "achievementId": 2
//             }
//         }
//     ],

//     prestigeLevels: [
//         {
//             "id": 1,
//             "title": "Beginner",
//             "pictureURL": "https://learn.coderslang.com/beginner_medal.svg",
//             "multiplier": 1,
//             "condition": {
//                 "currency": 0
//             }
//         },
//         {
//             "id": 2,
//             "title": "Pro",
//             "pictureURL": "https://learn.coderslang.com/cup_pro.svg",
//             "multiplier": 2,
//             "condition": {
//                 "currency": 100000000000000000000
//             }
//         },
//         {
//             "id": 3,
//             "title": "Expert",
//             "pictureURL": "https://learn.coderslang.com/cup_expert.svg",
//             "multiplier": 4,
//             "condition": {
//                 "currency": 1e+30
//             }
//         },
//         {
//             "id": 4,
//             "title": "Master",
//             "pictureURL": "https://learn.coderslang.com/cup_master.svg",
//             "multiplier": 8,
//             "condition": {
//                 "currency": 1e+40
//             }
//         }
//     ],
// };




