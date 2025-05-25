const countryRecords = [
    {
        id: 1,
        flagImage: "/Flags/US.png",
        countryName: "United States",
        backgroundImg: "/CountryBanners/US.png",
        desc: "The United States is a vast and diverse country located in North America. Known for its economic power, cultural influence, and democratic ideals, the U.S. is home to major cities like New York, Los Angeles, and Chicago, as well as natural wonders such as the Grand Canyon and Yellowstone. It embraces a melting pot of cultures, values individual freedom, and promotes innovation across industries.",
        greetings: [
            "Hello: Standard, informal greeting",
            "Hi / Hey: Very casual and common",
            "Good morning / Good afternoon / Good evening: Time-based formal greetings",
            "Nice to meet you: Used when meeting someone for the first time",
            "How are you?: A friendly way to begin conversation, often rhetorical",
        ],
        tippings: [
            "Tipping is expected in most service industries.",
            "Restaurants: 15%–20% of the bill is standard.",
            "Taxis / Uber: 10%–15% is common.",
            "Hotels: Tip bellhops ($1–$2 per bag) and housekeeping ($2–$5 per night).",
            "Barbers/Salons: Tip around 15%–20% of the total cost.",
        ],
        dressCode: [
            "Casual attire is widely accepted in most settings.",
            "Business casual is common in workplaces.",
            "Formal wear is expected at special events and ceremonies.",
            "Avoid wearing hats indoors.",
            "Dress modestly when visiting religious or government buildings.",
        ],
        taboos: [
            "Avoid discussing politics and religion in casual conversations.",
            "Don’t interrupt when someone is speaking.",
            "Avoid tipping too little or not at all, as it is considered rude.",
            "Do not make direct physical contact with strangers.",
            "Avoid discussing personal income or finances.",
        ],
    },
    {
        id: 2,
        flagImage: "/Flags/UK.png",
        countryName: "United Kingdom",
        backgroundImg: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "The United Kingdom is a country rich in history and culture. It is made up of England, Scotland, Wales, and Northern Ireland. The UK is known for its monarchy, iconic landmarks like Big Ben and Stonehenge, and contributions to literature, music, and politics.",
        greetings: [
            "Hello: Formal and polite greeting",
            "Hi: Common informal greeting",
            "Good morning / Good afternoon / Good evening: Time-based formal greetings",
            "How do you do?: Traditional formal greeting",
            "Cheers: Informal way to say thanks or goodbye",
        ],
        tippings: [
            "Tipping is appreciated but not mandatory.",
            "Restaurants: Around 10%-15% if service is good.",
            "Pubs: Tipping is less common.",
            "Taxis: Round up the fare or add 10%.",
            "Hotels: Tip porters £1–£2 per bag.",
        ],
        dressCode: [
            "Smart casual is common in social and work settings.",
            "Formal wear is expected for special occasions.",
            "Avoid wearing overly casual clothing in business meetings.",
            "Wear dark, conservative colors for formal events.",
            "Modest dress is preferred in religious settings.",
        ],
        taboos: [
            "Avoid talking about politics, especially Brexit.",
            "Don’t discuss personal finances openly.",
            "Avoid loud behavior in public.",
            "Avoid discussing the monarchy negatively.",
            "Don’t jump queues; queuing etiquette is important.",
        ],
    },
    {
        id: 3,
        flagImage: "/Flags/Canada.png",
        countryName: "Canada",
        backgroundImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Canada is the second-largest country in the world, known for its vast wilderness, multicultural population, and politeness. It has two official languages, English and French, and is famous for natural beauty and ice hockey.",
        greetings: [
            "Hello / Hi: Common and informal greetings",
            "Good morning / Good afternoon: Polite and formal greetings",
            "How are you?: Friendly, often rhetorical",
            "Nice to meet you: Polite greeting when introduced",
            "Sorry: Used frequently to apologize or get attention",
        ],
        tippings: [
            "Tipping is expected in restaurants and services.",
            "Restaurants: 15%-20% of the bill.",
            "Taxis: 10%-15% is common.",
            "Hotels: Tip bellhops $1–$2 per bag.",
            "Barbers/Salons: Tip about 15%-20%.",
        ],
        dressCode: [
            "Casual wear is acceptable in most social situations.",
            "Business casual is typical in the workplace.",
            "Layered clothing is advisable due to varying climates.",
            "Dress formally for important events.",
            "Avoid overly revealing clothes in public places.",
        ],
        taboos: [
            "Avoid discussing politics and religion.",
            "Don’t brag or show off.",
            "Avoid interrupting others during conversations.",
            "Don’t make negative comments about indigenous peoples.",
            "Avoid being overly loud in public.",
        ],
    },
    {
        id: 4,
        flagImage: "/Flags/France.png",
        countryName: "France",
        backgroundImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "France is renowned for its rich history, culture, cuisine, and art. Paris, its capital, is known as the City of Light. The French value their language and traditions highly and are famous for fashion, wine, and gourmet food.",
        greetings: [
            "Bonjour: Hello, formal daytime greeting",
            "Salut: Informal hi/hello",
            "Bonsoir: Good evening",
            "La bise: Light cheek kisses used as a greeting",
            "Enchanté: Nice to meet you",
        ],
        tippings: [
            "Tipping is included in restaurant bills but extra small tips are appreciated.",
            "Restaurants: Around 5%-10% for good service.",
            "Cafes: Leave small change.",
            "Hotels: Tip porters €1–€2 per bag.",
            "Taxis: No tipping expected, but rounding up is polite.",
        ],
        dressCode: [
            "Dress elegantly and with style; French fashion is important.",
            "Avoid overly casual clothing in urban areas.",
            "Dark, neutral colors are preferred.",
            "Formal attire for dinners and cultural events.",
            "Modesty is appreciated in religious buildings.",
        ],
        taboos: [
            "Avoid speaking loudly in public.",
            "Don’t assume everyone speaks English.",
            "Avoid discussing politics or religion at length.",
            "Don’t criticize French culture or food.",
            "Avoid public displays of affection in rural areas.",
        ],
    },
    {
        id: 5,
        flagImage: "/Flags/Germany.png",
        countryName: "Germany",
        backgroundImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Germany is known for its rich history, engineering, and cultural contributions. It boasts beautiful landscapes, castles, and is famous for its beer, sausages, and Oktoberfest celebrations.",
        greetings: [
            "Guten Tag: Good day, formal greeting",
            "Hallo: Informal hello",
            "Guten Morgen: Good morning",
            "Grüß Gott: Common greeting in southern Germany",
            "Wie geht’s?: How are you?",
        ],
        tippings: [
            "Tipping is customary but modest.",
            "Restaurants: 5%-10% tip is usual.",
            "Taxis: Round up the fare.",
            "Hotels: Tip porters €1–€2 per bag.",
            "Bars: No tipping expected but rounding up is appreciated.",
        ],
        dressCode: [
            "Dress neatly and modestly.",
            "Business attire is formal.",
            "Casual clothes are acceptable but clean and tidy.",
            "Avoid overly bright colors in formal settings.",
            "Wear appropriate clothing for Oktoberfest and other festivals.",
        ],
        taboos: [
            "Avoid being late.",
            "Don’t joke about WWII in public.",
            "Avoid loud and boisterous behavior.",
            "Don’t discuss personal finances openly.",
            "Avoid cutting in line.",
        ],
    },
    {
        id: 6,
        flagImage: "/Flags/Australia.webp",
        countryName: "Australia",
        backgroundImg: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Australia is known for its diverse landscapes, beaches, and unique wildlife. Its culture is laid-back and friendly, with a strong sporting tradition and outdoor lifestyle.",
        greetings: [
            "G’day: Informal hello",
            "Hello / Hi: Common greetings",
            "How are you?: Friendly inquiry",
            "Nice to meet you: Polite introduction",
            "Cheers: Informal thanks or goodbye",
        ],
        tippings: [
            "Tipping is not compulsory but appreciated.",
            "Restaurants: Around 10% if service is good.",
            "Taxis: Rounding up the fare is common.",
            "Hotels: Tip porters $1–$2 per bag.",
            "Barbers/Salons: Optional tipping.",
        ],
        dressCode: [
            "Casual and comfortable clothes are typical.",
            "Smart casual for business settings.",
            "Swimwear only at beaches and pools.",
            "Avoid wearing shoes indoors in some homes.",
            "Formal attire for events and ceremonies.",
        ],
        taboos: [
            "Avoid talking about Aboriginal issues without knowledge.",
            "Don’t be overly boastful or arrogant.",
            "Avoid discussing politics loudly.",
            "Avoid swearing excessively in public.",
            "Don’t make negative comments about the environment.",
        ],
    },
    {
        id: 7,
        flagImage: "/Flags/Brazil.webp",
        countryName: "Brazil",
        backgroundImg: "/CountryBanners/Brazil.png",
        desc: "Brazil is famous for its vibrant culture, Carnival festival, football passion, and vast Amazon rainforest. It is a melting pot of indigenous, Portuguese, African, and other influences.",
        greetings: [
            "Olá: Hello",
            "Oi: Informal hi",
            "Bom dia: Good morning",
            "Boa tarde: Good afternoon",
            "Tudo bem?: How are you?",
        ],
        tippings: [
            "Tipping is appreciated but not mandatory.",
            "Restaurants: Around 10% tip.",
            "Taxis: No tipping expected.",
            "Hotels: Tip porters R$2–R$5 per bag.",
            "Bars: Tipping is uncommon.",
        ],
        dressCode: [
            "Casual and colorful clothing is common.",
            "Dress lightly due to warm climate.",
            "Smart casual for social gatherings.",
            "Avoid overly revealing outfits outside beaches.",
            "Formal attire for business and official events.",
        ],
        taboos: [
            "Avoid discussing politics or religion.",
            "Don’t joke about social inequality.",
            "Avoid making negative remarks about football teams.",
            "Avoid discussing personal finances.",
            "Don’t criticize Brazilian culture or food.",
        ],
    },
    {
        id: 8,
        flagImage: "/Flags/Japan.webp",
        countryName: "Japan",
        backgroundImg: "/CountryBanners/Japan.png",
        desc: "Japan is a country known for its blend of ancient traditions and cutting-edge technology. It has a rich cultural heritage with tea ceremonies, anime, and cherry blossoms.",
        greetings: [
            "Konnichiwa: Hello / Good afternoon",
            "Ohayou gozaimasu: Good morning",
            "Konbanwa: Good evening",
            "Hajimemashite: Nice to meet you",
            "Ogenki desu ka?: How are you?",
        ],
        tippings: [
            "Tipping is not customary and can be considered rude.",
            "Exceptional service is already included in the culture.",
            "Always show appreciation with a polite bow instead.",
            "Small gifts are preferred over money tips.",
            "Business cards are exchanged with both hands respectfully.",
        ],
        dressCode: [
            "Dress conservatively and neatly.",
            "Formal business attire is common.",
            "Remove shoes when entering homes or certain buildings.",
            "Avoid bright colors in formal settings.",
            "Wear dark suits for business occasions.",
        ],
        taboos: [
            "Avoid loud conversations on public transport.",
            "Don’t point with your chopsticks.",
            "Never stick chopsticks vertically into rice.",
            "Avoid touching someone’s head or shoulders.",
            "Don’t tip waitstaff or taxi drivers.",
        ],
    },
    {
        id: 9,
        flagImage: "/Flags/China.webp",
        countryName: "China",
        backgroundImg: "/CountryBanners/China.png",
        desc: "China is a land of diverse cultures, languages, and traditions. Known for its historical monuments, festivals, and spiritual heritage, it has a vibrant and colorful society.",
        greetings: [
            "你好 (Nǐ hǎo): Hello",
            "您好 (Nín hǎo): Formal hello",
            "早上好 (Zǎoshang hǎo): Good morning",
            "再见 (Zàijiàn): Goodbye"
        ],
        tippings: [
            "Tipping is not customary and often not expected.",
            "In some tourist or high-end places, small tips may be appreciated.",
            "Avoid tipping in taxis or local restaurants."
        ],
        dressCode: [
            "Dress modestly and respectfully.",
            "Business attire is formal.",
            "Avoid overly casual or revealing clothing.",
            "Remove shoes when entering homes."
        ],
        taboos: [
            "Avoid sticking chopsticks upright in rice.",
            "Avoid public displays of affection.",
            "Avoid discussing sensitive political topics.",
            "Don’t point with your finger.",
            "Show respect to elders."
        ],
    },
    {
        id: 10,
        flagImage: "/Flags/Italy.webp",
        countryName: "Italy",
        backgroundImg: "/CountryBanners/Italy.png",
        desc: "Italy is famous for its rich history, art, cuisine, and fashion. Italian culture is warm and expressive, with strong family ties and appreciation for traditions.",
        greetings: [
            "Ciao: Hi / Bye (informal)",
            "Buongiorno: Good morning",
            "Buonasera: Good evening",
            "Arrivederci: Goodbye",
            "Piacere di conoscerti: Nice to meet you"
        ],
        tippings: [
            "Tipping is appreciated but not mandatory.",
            "Restaurants: 5-10% tip is common if service is good.",
            "Taxis: Round up the fare.",
            "Hotels: Tip porters and housekeeping modestly."
        ],
        dressCode: [
            "Dress elegantly, Italians value fashion.",
            "Smart casual or formal attire for dining and business.",
            "Avoid overly casual or athletic wear outside sports.",
            "Neat and stylish clothes are appreciated."
        ],
        taboos: [
            "Avoid discussing politics or religion with strangers.",
            "Don’t criticize Italian food or culture.",
            "Avoid talking loudly in public.",
            "Don’t gesture excessively, but Italians do use hand gestures naturally.",
            "Avoid being late for appointments."
        ],
    },

    {
        id: 11,
        flagImage: "/Flags/Spain.webp",
        countryName: "Spain",
        backgroundImg: "/CountryBanners/Spain.png",
        desc: "Spain is known for its rich history, vibrant culture, flamenco music, and delicious cuisine. Famous cities include Madrid, Barcelona, and Seville. Spain celebrates numerous festivals like La Tomatina and Running of the Bulls. The Spanish lifestyle is generally relaxed and social.",
        greetings: [
            "Hola: Standard informal greeting",
            "Buenos días / Buenas tardes / Buenas noches: Formal time-based greetings",
            "¿Qué tal?: Casual way to ask 'How are you?'",
            "Encantado/a: Nice to meet you",
            "Adiós: Goodbye"
        ],
        tippings: [
            "Tipping is not mandatory but appreciated.",
            "Restaurants: Around 5-10% if service is good.",
            "Bars/Cafés: Usually rounding up the bill is enough.",
            "Taxis: Small tip or rounding up the fare.",
            "Hotels: Tip bellhops and housekeeping if desired."
        ],
        dressCode: [
            "Dress smart casual for most occasions.",
            "Women often dress elegantly, especially in cities.",
            "Avoid overly casual wear in restaurants and churches.",
            "Swimwear is only appropriate at the beach or pool.",
            "Comfortable shoes recommended for walking on cobblestone streets."
        ],
        taboos: [
            "Avoid discussing the Spanish Civil War and politics unless you know the person well.",
            "Don’t arrive too early for social events; Spaniards tend to be late.",
            "Avoid loud behavior in public places.",
            "Don’t put your elbows on the table during meals.",
            "Avoid criticizing bullfighting as it’s a sensitive cultural tradition."
        ]
    },
    {
        id: 12,
        flagImage: "/Flags/SouthKorea.webp",
        countryName: "South Korea",
        backgroundImg: "/CountryBanners/SouthKorea.png",
        desc: "South Korea is a technologically advanced country known for its pop culture (K-pop), traditional palaces, and delicious cuisine like kimchi and bibimbap. It values respect, harmony, and hierarchy in social and business interactions.",
        greetings: [
            "안녕하세요 (Annyeonghaseyo): Formal hello",
            "안녕 (Annyeong): Casual hello/goodbye",
            "처음 뵙겠습니다 (Cheoeum boepgesseumnida): Nice to meet you (formal)",
            "감사합니다 (Gamsahamnida): Thank you (formal)",
            "잘 가요 (Jal gayo): Goodbye (casual)"
        ],
        tippings: [
            "Tipping is generally not practiced and can sometimes be considered rude.",
            "Exceptional service may be rewarded discreetly.",
            "Hotels or high-end restaurants might accept tips but it's not expected.",
            "Taxi drivers usually do not expect tips."
        ],
        dressCode: [
            "Dress conservatively and neatly, especially in business settings.",
            "Avoid flashy clothing or excessive jewelry in formal contexts.",
            "Modest and clean appearance is highly valued.",
            "Casual wear is fine for everyday situations.",
            "Avoid wearing shoes indoors at homes or traditional places."
        ],
        taboos: [
            "Avoid pointing with your finger; use your whole hand to gesture.",
            "Never write someone's name in red ink (associated with death).",
            "Do not tip service staff unless absolutely necessary.",
            "Avoid touching someone's head, especially elders.",
            "Don't blow your nose in public."
        ]
    },
    {
        id: 13,
        flagImage: "/Flags/Mexico.webp",
        countryName: "Mexico",
        backgroundImg: "/CountryBanners/Mexico.png",
        desc: "Mexico is rich in culture, history, and cuisine. Known for its vibrant festivals like Día de los Muertos, and natural wonders like cenotes and beaches. Family, tradition, and religion play an important role in daily life.",
        greetings: [
            "Hola: Hello",
            "Buenos días / Buenas tardes / Buenas noches: Time-based formal greetings",
            "¿Cómo estás?: How are you? (informal)",
            "Mucho gusto: Nice to meet you",
            "Adiós / Nos vemos: Goodbye / See you"
        ],
        tippings: [
            "Tipping is customary in most service sectors.",
            "Restaurants: 10-15% is standard.",
            "Taxis: Usually no tip expected but rounding up is polite.",
            "Hotel staff: Tip bellhops and housekeepers a few pesos.",
            "Barbers/Salons: 10-15% tip is common."
        ],
        dressCode: [
            "Casual and comfortable attire is common.",
            "Dress modestly when visiting religious sites.",
            "In business, formal attire is expected.",
            "Bright colors and patterns are popular in casual wear.",
            "Avoid wearing shorts or sleeveless shirts in formal settings."
        ],
        taboos: [
            "Avoid discussing drug-related violence openly.",
            "Do not criticize the country or culture in public.",
            "Avoid using your feet to point or touch objects.",
            "Avoid rushing conversations; Mexicans value politeness and patience.",
            "Avoid discussing politics or religion with strangers."
        ]
    },
    {
        id: 14,
        flagImage: "/Flags/Ireland.webp",
        countryName: "Ireland",
        backgroundImg: "/CountryBanners/Ireland.png",
        desc: "Ireland is known for its lush green landscapes, rich Celtic history, and warm hospitality. It is famous for its music, literature, and folklore, as well as landmarks like the Cliffs of Moher and the Giant's Causeway.",
        greetings: [
            "Hello / Hi: Common informal greetings",
            "Good morning / Good afternoon / Good evening: Formal greetings",
            "What's the craic?: Informal way of asking 'What's up?'",
            "Nice to meet you",
            "Slán: Goodbye"
        ],
        tippings: [
            "Tipping is customary but not mandatory.",
            "Restaurants: 10-15% tip is common.",
            "Pubs: Not usually expected but appreciated.",
            "Taxis: Round up the fare or tip small amounts.",
            "Hotel staff: Tip if service is good."
        ],
        dressCode: [
            "Casual and smart casual attire is widely accepted.",
            "In business, wear formal suits or dresses.",
            "Avoid overly casual clothes in churches or formal events.",
            "Wear waterproof clothing due to frequent rain.",
            "Comfortable shoes for walking are recommended."
        ],
        taboos: [
            "Avoid sensitive topics like Northern Ireland politics unless well known.",
            "Don't make fun of Irish accents or culture.",
            "Avoid discussing religion openly.",
            "Avoid calling Ireland part of the UK.",
            "Don't interrupt people while they speak."
        ]
    },
    {
        id: 15,
        flagImage: "/Flags/Switzerland.webp",
        countryName: "Switzerland",
        backgroundImg: "/CountryBanners/Switzerland.png",
        desc: "Switzerland is famous for its stunning Alpine scenery, precision watches, and neutrality in global politics. It is home to multiple languages and rich cultural diversity, emphasizing punctuality and cleanliness.",
        greetings: [
            "Grüezi: Hello (Swiss German)",
            "Bonjour / Salut: Hello (French)",
            "Buongiorno: Hello (Italian)",
            "Guten Tag: Good day (German)",
            "Auf Wiedersehen: Goodbye"
        ],
        tippings: [
            "Tipping is appreciated but not compulsory.",
            "Restaurants: 5-10% tip included in the bill, but leaving extra is nice.",
            "Taxi drivers: Round up the fare.",
            "Hotel staff: Tip if service is exceptional.",
            "Barbers and salons: Tip 10%."
        ],
        dressCode: [
            "Dress neatly and conservatively.",
            "Business attire is formal and well-tailored.",
            "Casual wear is accepted in informal settings.",
            "Avoid overly flashy or loud clothing.",
            "Dress appropriately for outdoor activities and weather."
        ],
        taboos: [
            "Avoid discussing politics and religion in casual conversations.",
            "Don’t be late; punctuality is very important.",
            "Avoid loud conversations in public places.",
            "Don’t litter or damage public property.",
            "Avoid discussing personal wealth or income."
        ]
    }
];


export default countryRecords;
