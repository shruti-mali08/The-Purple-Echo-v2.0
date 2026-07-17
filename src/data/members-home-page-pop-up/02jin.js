import { calculateAge } from "./util/calculateAge.js";

const jinBio = `Jin, born Kim Seok-jin, is a South Korean singer, songwriter, and a vocalist in BTS. 
                As the group's eldest member, he is recognized for fostering a supportive atmosphere and contributing 
                to the team's unity through his dependable and encouraging presence. He is also known for his playful 
                sense of humor and energetic personality, often lightening the mood with jokes and spontaneous antics. 
                Although he is the oldest member by age, fans and fellow members have occasionally described him as seeming 
                like the youngest because of his carefree and mischievous behavior. Alongside his vocal performances, Jin 
                has participated in songwriting for both BTS and his solo projects, exploring themes of hope, resilience, 
                love, and personal growth. Through his performances and creative work, Jin has established a distinctive 
                musical identity that complements BTS's diverse sound and continues to resonate with audiences worldwide.`


const rjBio = `RJ is the lovable alpaca created for BT21 by Jin, capturing his warm, gentle personality and comforting charm. 
               Known for his fluffy white coat, kind heart, and signature parka, RJ enjoys cooking, eating, and caring for friends. 
               Fans adore his calming presence, adorable expressions, and unwavering loyalty. Whether starring in merchandise, animations, 
               or collaborations, RJ represents kindness, coziness, and quiet confidence, making him a treasured favorite among BT21 
               enthusiasts around the world with timeless appeal that continues delighting fans everywhere.`

const details = [
    {
        // header
        id: 2,
        stageName: "Jin",
        role: "Vocalist and Visual",

        // hero
        quote: "\"I'm the one I should love in this world.\" ",
        quoteSaidWhen: "Epiphany | Love Yourself: Answer",

        // general info
        name: "Kim Seok-jin (김석진)",
        age: calculateAge("1992-12-04"),
        birthday: "December 04, 1992",
        height: "179.5 cm",

        // who? 
        whoIsHe: jinBio,

        // discography - highlights!
        discography: ["Echo (2025) - Album", "Close To You (2025) - OST Single",
            "Happy (2024) - Album", "Super Tuna (2024) - Single",
            "The Astronaut (2022) - Single"],

        // achievements 
        achievements: ["Jin served as torchbearer at the 2024 Paris Olympics. ",
            "Jin's #RUNSEOKJIN_EP.TOUR ranked No. 7 on Billboard's 2025 year-end K-Pop tours chart. ",
            "Hosted Run Jin (달려라 석진), a hit variety show showcasing variety content and viral moments including surprise cameo from Tom Cruise. ",
            "First BTS member and only Korean soloist to receive RIAJ Gold Ceertification in Japan",
            "Second Solo EP \"Echo\" peaked at #3 on Billboard 200 and the lead single \"Don't Say You Love Me\" debuted at #90 on Hot 100",
            "The episode \"Happy\" sold 845,690 copies on day 1 and 953,886 first-week sales on Hanteo and topped 2024's Hanteo solo artist rankings. ",
            "The title track of \"Happy\", \"Running Wild\" debuted at #53 on Billboard Hot 100. ",
            "First K-Pop soloist to have 2 separate albums each spend 10 weeks on Spotify Weekly Top Albums Global Chart. "],

        awards: [
            {
                id: 1,
                award: "Hwagwan Order of Cultural Merit",
                year: 2018,
                category: "5th Class Cultural Merit Order",
                recipient: "Jin",
                result: "Awarded",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 2,
                award: "Special Presidential Envoy for Future Generations and Culture",
                year: 2021,
                category: "Government Appointment",
                recipient: "Jin",
                result: "Awarded",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 3,
                award: "World Expo 2030 Busan Honorary Ambassador",
                year: 2022,
                category: "Government Appointment",
                recipient: "Jin",
                result: "Awarded",
                type: "National Honor",
                featured: false,
                selected: false
            },
            {
                id: 4,
                award: "Presidential Commendation (Korea Good Donation Awards)",
                year: 2025,
                category: "Presidential Commendation",
                recipient: "Jin",
                result: "Awarded",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 5,
                award: "Golden Disc Awards",
                year: 2026,
                category: "Album Bonsang",
                recipient: "Happy",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 6,
                award: "Golden Disc Awards",
                year: 2026,
                category: "Most Popular Artist - Male",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 7,
                award: "iHeartRadio Music Awards",
                year: 2026,
                category: "K-pop Artist of the Year",
                recipient: "Jin",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 8,
                award: "Music Awards Japan",
                year: 2026,
                category: "International Song powered by Spotify",
                recipient: "\"Don't Say You Love Me\"",
                result: "Won",
                type: "Music Awards",
                featured: true,
                selected: false
            },
            {
                id: 9,
                award: "SEC Awards",
                year: 2026,
                category: "International Song of the Year",
                recipient: "\"Don't Say You Love Me\"",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 10,
                award: "SEC Awards",
                year: 2026,
                category: "Asian Artist of the Year",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 11,
                award: "SEC Awards",
                year: 2026,
                category: "International Male Artist of the Year",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 12,
                award: "Korea First Brand Awards",
                year: 2025,
                category: "Male Solo Artist (Vietnam)",
                recipient: "Jin",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 13,
                award: "Asian Pop Music Awards",
                year: 2025,
                category: "Record of the Year",
                recipient: "\"Don't Say You Love Me\"",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 14,
                award: "Asian Pop Music Awards",
                year: 2025,
                category: "Top 20 Song of the Year",
                recipient: "\"Don't Say You Love Me\"",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 15,
                award: "Asia Star Entertainer Awards",
                year: 2025,
                category: "The Best OST",
                recipient: "\"Close to You\"",
                result: "Won",
                type: "OST & Television",
                featured: false,
                selected: true
            },
            {
                id: 16,
                award: "Brand of the Year Awards",
                year: 2025,
                category: "Best Male Variety Show Idol",
                recipient: "Jin",
                result: "Won",
                type: "Entertainment & Variety",
                featured: false,
                selected: true
            },
            {
                id: 17,
                award: "Global Fan's Choice Awards",
                year: 2025,
                category: "Best K-Pop Performer",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 18,
                award: "Mega Champ Awards",
                year: 2025,
                category: "Best Entertainer Award",
                recipient: "Jin",
                result: "Won",
                type: "Entertainment & Variety",
                featured: false,
                selected: false
            },
            {
                id: 19,
                award: "MAMA Awards",
                year: 2025,
                category: "Album of the Year",
                recipient: "\"Happy\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 20,
                award: "MAMA Awards",
                year: 2025,
                category: "Artist of The Year",
                recipient: "Jin",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 21,
                award: "MAMA Awards",
                year: 2025,
                category: "Best Male Artist",
                recipient: "Jin",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 22,
                award: "MAMA Awards",
                year: 2025,
                category: "Fans' Choice Top 10",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: true,
                selected: false
            },
            {
                id: 23,
                award: "Melon Music Awards",
                year: 2025,
                category: "Millions Top 10",
                recipient: "\"Happy\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 24,
                award: "The Fact Music Awards",
                year: 2025,
                category: "Best Music: Summer",
                recipient: "\"Don't Say You Love Me\"",
                result: "Won",
                type: "Music Awards",
                featured: true,
                selected: false
            },
            {
                id: 25,
                award: "The Fact Music Awards",
                year: 2025,
                category: "Fan N Star Choice <Solo>",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 26,
                award: "Music Mundial Awards",
                year: 2025,
                category: "Visual of the Year",
                recipient: "Jin",
                result: "Won",
                type: "Entertainment & Variety",
                featured: false,
                selected: false
            },
            {
                id: 27,
                award: "Asia Artist Awards",
                year: 2023,
                category: "Popularity Award - Male Singer",
                recipient: "Jin",
                result: "Nominated",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 28,
                award: "Circle Chart Music Awards",
                year: 2023,
                category: "Album of the Year - 4th Quarter",
                recipient: "\"The Astronaut\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 29,
                award: "Circle Chart Music Awards",
                year: 2023,
                category: "Song of the Year - October",
                recipient: "\"The Astronaut\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 30,
                award: "Hanteo Music Awards",
                year: 2023,
                category: "Global Artist (Africa)",
                recipient: "Jin",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 31,
                award: "K-Star MVA",
                year: 2023,
                category: "Best Artist - Men",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 32,
                award: "Seoul Music Awards",
                year: 2023,
                category: "Bonsang Award",
                recipient: "\"The Astronaut\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 33,
                award: "Seoul Music Awards",
                year: 2023,
                category: "K-wave Award",
                recipient: "Jin",
                result: "Nominated",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 34,
                award: "Seoul Music Awards",
                year: 2023,
                category: "Popularity Award",
                recipient: "Jin",
                result: "Nominated",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 35,
                award: "Seoul Music Awards",
                year: 2023,
                category: "Fan Choice of the Year - April",
                recipient: "Jin",
                result: "Nominated",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 36,
                award: "Seoul Music Awards",
                year: 2023,
                category: "OST Award",
                recipient: "\"Yours\"",
                result: "Nominated",
                type: "OST & Television",
                featured: false,
                selected: false
            },
            {
                id: 37,
                award: "Asian Academy Creative Awards",
                year: 2022,
                category: "Best Theme Song or Title Theme",
                recipient: "\"Yours\"",
                result: "Nominated",
                type: "OST & Television",
                featured: false,
                selected: false
            },
            {
                id: 38,
                award: "The Fact Music Awards",
                year: 2022,
                category: "Fan N Star Choice Award - Individual",
                recipient: "Jin",
                result: "Won",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: true
            },
            {
                id: 39,
                award: "The Fact Music Awards",
                year: 2022,
                category: "Most Voted Artist - Individual",
                recipient: "Jin",
                result: "Nominated",
                type: "Popularity & Fan Choice",
                featured: false,
                selected: false
            },
            {
                id: 40,
                award: "Asian Pop Music Awards",
                year: 2021,
                category: "Best Film and Television Song (Overseas)",
                recipient: "\"Yours\"",
                result: "Nominated",
                type: "OST & Television",
                featured: false,
                selected: false
            },
            {
                id: 41,
                award: "Melon Music Awards",
                year: 2017,
                category: "Best OST",
                recipient: "\"It's Definitely You\"",
                result: "Nominated",
                type: "OST & Television",
                featured: false,
                selected: false
            }
        ],

        // BT21 character
        bt21: {
            name: "RJ",
            animal: "Alpaca",
            description: rjBio
        },

        // philanthropic history 
        philanthropy: ["Donated 100 million Korean Won (approx. $74,000 (USD)) to Asan Medical Center - Children's Hospital, for Children's Day (2025)",
            "Donated 100 million Korean Won (approx. $69,000 (USD)) to Korea University Medicine to help patients with incurable diseases in developing nations (2025)",
            "For his 33rd birthday, Jin donated 100 million Korean Won (approx. $68,000 (USD)) to the Busan Nam Gwang Social Welfare Society (부산 남광사회복지회) to support underprivileged children and youth (2025)",
            "For his 26th birthday, Jin personally bought and donated essential items to the Korean Animal Freedom Association and animal shelters to care for abandoned dogs (2018)",
            "Fixed monthly donations contributions to UNICEF for an entire year (without disclosing it publically), accumulating a total over 100 million Korean Won (approx. $88,000 (USD)) eventually UNICEF Korea officially inducted him into the UNICEF Honors Club (2018-19) ",
            "Contributed 10 million Korean Won (approx. $8,500 (USD)) to Sewol Ferry Tragedy Support (2014)"
        ],

        endorsements: [
            {
                organization: "IGIN (Premium Liquor & Lifestyle Brand) - Co-Founder, Co-Owner, & Global Brand Ambassador (Produced via his corporation, Jini's Lamp). ",
                year: 2025
            },
            {
                organization: "Dongwon Tuna - Brand Campaign Partner",
                year: 2025
            },
            {
                organization: "Lucido-L - Global Ambassador",
                year: 2025
            },
            {
                organization: "Gucci - Global Brand Ambassador",
                year: 2024
            },
            {
                organization: "Fred Jewelry - Global Ambassador",
                year: 2024
            },
            {
                organization: "Laniege - Global Ambassador",
                year: 2024
            },
            {
                organization: "Alo Yoga - Global Ambassador",
                year: 2024
            },
            {
                organization: "Gelato Pique - Collection Designer & Campaign Model",
                year: 2024
            },
            {
                organization: "Seoul Tourism Organization \"Feel Seoul Good\" - Honorary Tourism Ambassador",
                year: 2024
            },
            {
                organization: "Dolby Atmos - Campaign Collaboration",
                year: 2024
            },
            {
                organization: "Ottogi Jin Ramen - Model & Endorser",
                year: 2022
            },
            {
                organization: "MapleStory - Game Planner",
                year: 2022
            }
        ],

        images: [
            "", ""
        ]
    }
]

export default details;