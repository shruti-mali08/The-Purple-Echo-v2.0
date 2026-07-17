import {calculateAge} from "./util/calculateAge.js"

import main from '../../static/images/members-modal-images/rm/main.jpg';
import intro from '../../static/images/members-modal-images/rm/intro.jpg';

// discography images
import rpwp from '../../static/images/members-modal-images/rm/discography/rpwp.jpg';
import indigo from '../../static/images/members-modal-images/rm/discography/indigo.jpg';
import mono from '../../static/images/members-modal-images/rm/discography/mono.jpg';
import rm from '../../static/images/members-modal-images/rm/discography/rm.jpg';

// BT21 
import koyaHeader from '../../static/images/members-modal-images/rm/bt21.jpg';

// philanthropy images
import philanthropy from '../../static/images/members-modal-images/rm/philanthropy.jpg';

// endorsement images
import nationalCentralMuseumOfKorea from '../../static/images/members-modal-images/rm/endorsement/01NationalCentralMuseumOfKorea.jpg'; 
import bottegaVeneta from '../../static/images/members-modal-images/rm/endorsement/02BottegaVeneta.jpg'; 
import samsungArtTV from '../../static/images/members-modal-images/rm/endorsement/03SamsungArtTV.jpg'; 
import iloom from '../../static/images/members-modal-images/rm/endorsement/04iloom.jpg'; 
import makri from '../../static/images/members-modal-images/rm/endorsement/05MAKRI.jpg'; 

// ---------------------------------------------------------------------------------------

const rmBio = `RM, born Kim Nam-joon, is a South Korean rapper, songwriter, and record producer best known as the leader of BTS. 
               Since the group's debut in 2013, he has played a key role in shaping its creative direction, writing lyrics that 
               explore identity, personal growth, relationships, and social issues. Beyond BTS, RM has released acclaimed solo 
               music showcasing his introspective style and diverse influences. He is widely recognized for his leadership, 
               thoughtful lyricism, and lasting impact on contemporary music.`

const koyaBio = `KOYA is RM's BT21 character, a lovable blue koala known for intelligence, curiosity, and a sleepy personality. 
                 Often shown with removable ears, KOYA enjoys quiet moments and thoughtful adventures. The character reflects a 
                 calm, comforting charm that resonates with fans around the world. Combining a relaxed nature with quiet wisdom, 
                 KOYA has become one of the most recognizable BT21 characters, appealing to fans who appreciate creativity, 
                 kindness, and a sense of calm in everyday life.`

const details = [
    {
        // header
        id: 1,
        stageName: "RM",
        role: "Leader, Rapper, Songwriter",

        // hero
        quote: "\"No matter who you are, where you're from, your skin colour, gender identity: speak yourself\"",
        quoteSaidWhen: "— UN General Assembly | 2018",

        mainImage: main, 

        // -------------------------------------------

        // general info
        name: "Kim Namjoon (김남준)",
        age: calculateAge("1994-09-12"),
        birthdate: "September 12, 1994",
        height: "181cm",

        // who? 
        whoIsHe: rmBio,

        introSectionImages: intro,

        // -------------------------------------------

        socials: {
            spotify: "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs?si=e3dPdDBTQQume8bz6_o8_Q", 
            youtube: "https://www.youtube.com/channel/UCJCAlMsCuld3v96t-9SffdA",
            instagram: "https://www.instagram.com/rkive"
        }, 

        // -------------------------------------------
        // discography (only list)
        discography: ["Right Place, Wrong Person (2024) - Studio Album", "Indigo (2022) - Studio Album", "Mono (2018) - Mixtape", "RM (2015) - Mixtape"],

        discographyImages: [
            {
                id: 1, 
                path: rpwp
            }, 
            {
                id: 2, 
                path: indigo
            }, 
            {
                id: 3, 
                path: mono
            }, 
            {
                id: 4, 
                path: rm
            }
        ],

        // -------------------------------------------
        // BT21 character
        bt21:
        {
            name: "KOYA",
            animal: "Koala",
            description: koyaBio
        },

        bt21Images: koyaHeader,

        // -------------------------------------------

        // achievements 
        achievements: [
            "RM x SFMOMA: Between You and Me - an art exibition curated in collaboration with RM, showcasing 200 works from SFMOMA and RM's private collection. ",
            "Credited for over 230 songs, extending his record as the youngest and mose-credit Korean artist in Korea Music Copyright Association's (KOMCA) history. ",
            "Named as one of the most credited idol songwriters by the KOMCA. ",
            "Delivered speech at the UN General Assembly (2018, 2020, 2021) as the leader of BTS. ",
            "Surpassed 100 Million Views on YouTube with his song \"Wildflower\" from his album Indigo. ",
            "First Korean Artist to have multiple Top 5 albums on The Billboard 200",
            "'Indigo' is chosen as The Best K-Pop Album of 2022 by Billboard. "
        ],

        awards: [
            {
                id: 1,
                award: "Hwagwan Order of Cultural Merit",
                year: 2018,
                category: "5th Class Cultural Merit Order",
                recipient: "RM",
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
                recipient: "RM",
                result: "Awarded",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 3,
                award: "Ministry of National Defense Agency for KIA Recovery and Identification PR Ambassador",
                year: 2023,
                category: "Government Appointment",
                recipient: "RM",
                result: "Awarded",
                type: "National Honor",
                featured: false,
                selected: false
            },
            {
                id: 4,
                award: "World Expo 2030 Busan Honorary Ambassador",
                year: 2022,
                category: "Government Appointment",
                recipient: "RM",
                result: "Awarded",
                type: "National Honor",
                featured: false,
                selected: false
            },
            {
                id: 5,
                award: "Presidential Commendation (Korea Good Donation Awards)",
                year: 2025,
                category: "Presidential Commendation",
                recipient: "RM",
                result: "Awarded",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 6,
                award: "Patrons of the Arts Awards",
                year: 2020,
                category: "Art Patron of the Year",
                recipient: "Kim Nam-joon",
                result: "Won",
                type: "National Honor",
                featured: true,
                selected: false
            },
            {
                id: 7,
                award: "American Music Awards",
                year: 2025,
                category: "Favorite K-Pop Artist",
                recipient: "RM",
                result: "Won",
                type: "Music Awards",
                featured: true,
                selected: false
            },
            {
                id: 8,
                award: "The Fact Music Awards",
                year: 2025,
                category: "Best Music (Summer)",
                recipient: "\"Stop the Rain\" (with Tablo)",
                result: "Longlisted",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 9,
                award: "Hanteo Music Awards",
                year: 2025,
                category: "Special Award - Hip-hop",
                recipient: "RM",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 10,
                award: "Hanteo Music Awards",
                year: 2025,
                category: "Global Artist - Africa",
                recipient: "RM",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 11,
                award: "Korea Grand Music Awards",
                year: 2025,
                category: "Best Listener's Pick",
                recipient: "\"Stop the Rain\" (with Tablo)",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 12,
                award: "MAMA Awards",
                year: 2025,
                category: "Best Hip Hop & Rap Music",
                recipient: "\"Stop the Rain\" (with Tablo)",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 13,
                award: "MAMA Awards",
                year: 2025,
                category: "Song of the Year",
                recipient: "\"Stop the Rain\" (with Tablo)",
                result: "Longlisted",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 14,
                award: "Music Awards Japan",
                year: 2025,
                category: "Best of Listeners' Choice: International Song",
                recipient: "\"Neva Play\" (with Megan Thee Stallion)",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 15,
                award: "Seoul Music Awards",
                year: 2025,
                category: "R&B / Hip-Hop Award",
                recipient: "RM",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 16,
                award: "MAMA Awards",
                year: 2024,
                category: "Fans' Choice Top 10 - Male",
                recipient: "RM",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 17,
                award: "MAMA Awards",
                year: 2024,
                category: "Best Hip Hop & Rap Music",
                recipient: "\"Lost!\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 18,
                award: "MAMA Awards",
                year: 2024,
                category: "Song of the Year",
                recipient: "\"Lost!\"",
                result: "Longlisted",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 19,
                award: "The Fact Music Awards",
                year: 2023,
                category: "Best Music (Winter)",
                recipient: "\"Wild Flower\"",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 20,
                award: "The Fact Music Awards",
                year: 2023,
                category: "Fan N Star Choice Award - Individual",
                recipient: "RM",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: false
            },
            {
                id: 21,
                award: "Korean Hip-hop Awards",
                year: 2023,
                category: "Collaboration of the Year",
                recipient: "\"Sexy Nukim\" (with Balming Tiger)",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 22,
                award: "SEC Awards",
                year: 2023,
                category: "Asian Musical Artist of the Year",
                recipient: "RM",
                result: "Won",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 23,
                award: "Seoul Music Awards",
                year: 2023,
                category: "Fan Choice of the Year - April",
                recipient: "RM",
                result: "Nominated",
                type: "Music Awards",
                featured: false,
                selected: true
            },
            {
                id: 24,
                award: "AICP Awards",
                year: 2025,
                category: "Music Video",
                recipient: "\"Lost!\"",
                result: "Shortlisted",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 25,
                award: "AICP Awards",
                year: 2025,
                category: "Cinematography",
                recipient: "\"Lost!\"",
                result: "Shortlisted",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 26,
                award: "Creative Review Annual Awards",
                year: 2025,
                category: "Music Video - Entertainment",
                recipient: "\"Lost!\"",
                result: "Grand Prix",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 27,
                award: "Creative Circle",
                year: 2025,
                category: "Visual Effects - Music Video: Single",
                recipient: "\"Lost!\"",
                result: "Gold",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 28,
                award: "Creative Circle",
                year: 2025,
                category: "Music Video - Promo Film: Single",
                recipient: "\"Lost!\"",
                result: "Silver",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 29,
                award: "D&AD Awards",
                year: 2025,
                category: "Music Videos - Art Direction",
                recipient: "\"Lost!\"",
                result: "Graphite Pencil",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 31,
                award: "D&AD Awards",
                year: 2025,
                category: "Production Design - Long Form",
                recipient: "\"Lost!\"",
                result: "Graphite Pencil",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 32,
                award: "D&AD Awards",
                year: 2025,
                category: "Cinematography - Long Form",
                recipient: "\"Lost!\"",
                result: "Wood Pencil",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 33,
                award: "D&AD Awards",
                year: 2025,
                category: "Direction - Long Form",
                recipient: "\"Lost!\"",
                result: "Shortlisted",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 34,
                award: "1.4 Awards",
                year: 2025,
                category: "Music Video - Flying High",
                recipient: "\"Lost!\"",
                result: "Gold",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 35,
                award: "Berlin Music Video Awards",
                year: 2025,
                category: "Best Concept",
                recipient: "\"Lost!\"",
                result: "2nd Place",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 36,
                award: "Shark Awards",
                year: 2025,
                category: "Best Music Video - International",
                recipient: "\"Lost!\"",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 37,
                award: "Shark Awards",
                year: 2025,
                category: "Best R&B / Soul Video - International",
                recipient: "\"Lost!\"",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 38,
                award: "SXSW Awards",
                year: 2025,
                category: "Music Video Competition",
                recipient: "\"Lost!\"",
                result: "Nominated",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 39,
                award: "SXSW Awards",
                year: 2025,
                category: "Music Video Competition",
                recipient: "\"Neva Play\" (with Megan Thee Stallion)",
                result: "Nominated",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 40,
                award: "Ciclope Awards",
                year: 2024,
                category: "Direction",
                recipient: "\"Lost!\"",
                result: "Gold",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 41,
                award: "Ciclope Awards",
                year: 2024,
                category: "Production Design",
                recipient: "\"Lost!\"",
                result: "Gold",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 42,
                award: "Ciclope Awards",
                year: 2024,
                category: "Cinematography",
                recipient: "\"Lost!\"",
                result: "Bronze",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 43,
                award: "Ciclope Awards",
                year: 2024,
                category: "Color Grading",
                recipient: "\"Lost!\"",
                result: "Bronze",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 44,
                award: "Berlin Commercial Awards",
                year: 2024,
                category: "Craft: Cinematography",
                recipient: "\"Lost!\"",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 45,
                award: "Shots Awards EMEA",
                year: 2024,
                category: "Music Video of the Year",
                recipient: "\"Lost!\"",
                result: "Nominated",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 46,
                award: "UK Music Video Awards",
                year: 2024,
                category: "Best Alternative Video - International",
                recipient: "\"Lost!\"",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 47,
                award: "UK Music Video Awards",
                year: 2024,
                category: "Best Production Design in a Video",
                recipient: "\"Lost!\"",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: false
            },
            {
                id: 48,
                award: "Korean Hip-hop Awards",
                year: 2023,
                category: "Music Video of the Year",
                recipient: "\"Sexy Nukim\" (with Balming Tiger)",
                result: "Won",
                type: "Music Video Awards",
                featured: false,
                selected: true
            },
            {
                id: 49,
                award: "Grammy Awards",
                year: 2023,
                category: "Album of the Year",
                recipient: "Music of the Spheres (as songwriter)",
                result: "Nominated",
                type: "Songwriting",
                featured: true,
                selected: false
            }
        ],

        // -------------------------------------------


        // philanthropic history 
        philanthropy: [
            "For his 25th birthday, RM donated 100 million Korean Won (approx. $84,000 (USD) at the time of donation) to Seoul Samsung School to help fund and expand music education programs for hearing-impaired students (2019)",
            "For his 26th birthday, RM donated 100 million Korean Won (approx. $84,000 (USD) at the time of donation) to the art foundation of the National Museum of Modern and Contemporary Art (MMCA) (2020)",
            "In 2021, RM secretly donated 100 million Korean Won to the Overseas Korean Cultural Heritage Foundation to preserve, restore, and promote Korean cultural assets located abroad. He subsequently made an additional 100 million won donation to the foundation in 2022.",
            "Donated 100 million Korean Won to the National Forensic Service of South Korea (2023)",
            "For his 30th birthday, RM donated 100 million Korean Won (approx. $87,400 (USD) at the time of donation) to support veterans' welfare programs (2024)",
            "Donated 100 million Korean Won (approx. $69,000 (USD) at the time of donation) to Hope Bridge Dissaster Relief Association to aid with the wildfire in South Korea (2025)",
            "For his 31st birthday, RM donated a total of 200 million Korean Won (approx. $144,000 (USD) at the time of donation) to Seoul Asan Medical Center and Korea University Medical Center (2025)"
        ],

        philanthropicSectionImages: [
            {
                id: 1, 
                path: philanthropy
            }
        ], 

        // -------------------------------------------

        endorsements: [
            {
                organization: "National Central Museum of Korea",
                role: "Global Ambassador",
                year: 2026
            },
            {
                organization: "Bottega Veneta",
                role: "Brand Ambassador",
                year: 2023
            },
            {
                organization: "Samsung Art TV",
                role: "Global Ambassador",
                year: 2025
            },
            {
                organization: "iloom",
                role: "Brand Ambassador",
                year: 2023
            },
            {
                organization: "Ministry of National Defense Agency for Killed in Action (KIA) Recovery & Identification (MAKRI)",
                role: "Public Relations Ambassador",
                year: 2023
            }
        ],

        endorsementImages: [
            {
                id: 1, 
                path: nationalCentralMuseumOfKorea
            }, 
            {
                id: 2, 
                path: bottegaVeneta
            }, 
            {
                id: 3, 
                path: samsungArtTV
            }, 
            {
                id: 4, 
                path: iloom
            }, 
            {
                id: 5, 
                path: makri
            }, 
        ], 
    }
]

export default details;