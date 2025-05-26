const blogRecords = [
    {
        id: 1,
        thumbnailPath: "https://images.pexels.com/photos/1428347/pexels-photo-1428347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "10 Common Cultural Mistakes Travelers Make (And How to Avoid Them)",
        blogContent: "Traveling can be a thrilling experience, but small cultural misunderstandings can turn an amazing trip awkward. This blog explores 10 common mistakes travelers unknowingly make — from inappropriate gestures to insensitive dress choices. For example, pointing with your finger is considered rude in some Asian countries, while arriving late might be acceptable in parts of Latin America but disrespectful in Germany. We also discuss assumptions about tipping, touching heads, or wearing shoes indoors. These mistakes can seem minor, but they often reflect deeper cultural values. To avoid embarrassment or offense, this blog provides practical tips on how to research local customs, ask polite questions, and observe behavior before acting. It emphasizes empathy, curiosity, and the willingness to adapt. Remember: being a respectful guest is more important than being a perfect one."
    },
    {
        id: 2,
        thumbnailPath: "https://images.pexels.com/photos/8112177/pexels-photo-8112177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "How to Say Hello Around the World",
        blogContent: "Greeting someone properly can open doors to meaningful conversations and friendships across cultures. This blog dives into fascinating greeting customs from different parts of the world. In Japan, a bow shows respect; in France, cheek kisses are common; in the Middle East, a handshake might be followed by placing the hand on the heart. We also explore how greetings vary based on gender, age, or setting. Understanding these customs not only shows cultural respect but also prevents awkward moments. Whether it’s a handshake in the U.S., a “Namaste” in India, or a “Jambo” in Kenya, greetings reflect a country’s traditions and values. This blog offers pronunciation tips, visual cues, and etiquette guidelines so you can confidently say hello anywhere. It’s a small gesture that leaves a lasting impression."
    },
    {
        id: 3,
        thumbnailPath: "https://images.pexels.com/photos/6950747/pexels-photo-6950747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "Dining Etiquette from 12 Countries",
        blogContent: "Sharing a meal is a universal way to bond, but dining manners vary widely. In this blog, we explore dining etiquette across 12 countries — from Italy to South Korea. In China, slurping noodles is encouraged, while in the UK, it’s frowned upon. In Ethiopia, meals are communal and utensils are rarely used. In France, bread goes on the table, not the plate. We guide you through seating arrangements, table manners, tipping norms, and local rituals like toasting or saying grace. Each country’s dining etiquette reveals insights into their values — like respect for elders, community, or tradition. Knowing the right way to eat, when to start, and how to show appreciation can elevate your experience and deepen your cultural connection. Bon appétit!"
    },
    {
        id: 4,
        thumbnailPath: "https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "Cultural Faux Pas in Japan, France, and Pakistan",
        blogContent: "Every culture has unspoken rules—and breaking them, even unintentionally, can lead to uncomfortable situations. This blog highlights common cultural faux pas in Japan, France, and Pakistan. In Japan, speaking loudly, not removing shoes indoors, or not bowing appropriately can seem disrespectful. Silence and subtlety are valued in public and social spaces. In France, cutting salad with a knife or asking for ketchup in fine dining restaurants might earn you a disapproving glance. French people often appreciate culinary tradition and table etiquette. In Pakistan, religious customs play a strong role; dressing modestly, avoiding public displays of affection, and showing respect to elders are essential. Even a casual comment or gesture can be misinterpreted if you're unaware of the local context. This blog walks you through what to avoid, why it matters, and how to recover gracefully if you make a mistake. Knowing these cultural sensitivities helps you build better relationships and avoid embarrassment. When in doubt, observe, ask, and adapt. Respect is always appreciated."
    },
    {
        id: 5,
        thumbnailPath: "https://images.pexels.com/photos/585292/pexels-photo-585292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "Why Tipping in Some Countries Is Rude",
        blogContent: "Tipping is a sign of appreciation in many parts of the world—but in some countries, it can come off as offensive or confusing. In this blog, we explore why tipping norms vary so drastically across cultures. In the United States, tipping 15–20% is expected and often makes up a large part of a service worker’s income. In Japan and South Korea, however, tipping can be seen as unnecessary or even rude—it suggests the staff aren’t paid adequately or that you're trying to give them charity. In countries like Australia and New Zealand, tipping is appreciated but not expected. This blog explains how tipping is linked to the local economy, wage systems, and service culture. We’ll guide you through when and how much to tip (or not tip) in different regions. Knowing the tipping etiquette ensures you don’t accidentally offend someone or cause confusion. When in doubt, follow the locals’ lead or simply ask discreetly. Gratitude is universal, but the way it’s expressed varies—and a culturally aware traveler learns to spot the difference."

    },
    {
        id: 6,
        thumbnailPath: "https://images.unsplash.com/photo-1667960733385-4ae873550943?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogTitle: "Dress Codes Around the World",
        blogContent: "Clothing isn't just fashion—it's cultural expression. In this blog, we explore dress codes from different regions and how they reflect local values. For instance, in many Middle Eastern countries, dressing modestly is essential, especially for women, even in hot climates. In contrast, beachwear is acceptable in places like Brazil or Australia, but not when away from the beach. In South Korea, showing shoulders is often frowned upon, but short skirts are common. In Europe, dressing well is often a sign of self-respect. Some countries require head coverings in places of worship, while others may ban religious symbols in public spaces. Dressing appropriately signals respect, avoids unwanted attention, and helps you blend in. This blog includes tips on how to research dress codes before your trip, and how to pack culturally sensitive clothing. From headscarves to business attire, what you wear can help you avoid judgment and foster positive interactions. Always remember: when you respect the culture, the culture respects you back."

    },
    {
        id: 7,
        thumbnailPath: "https://images.pexels.com/photos/32239774/pexels-photo-32239774/free-photo-of-stunning-interior-of-mosque-in-istanbul-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "What to Wear to Religious Sites",
        blogContent: "Visiting religious sites offers deep insight into a culture’s spiritual and historical roots. But these places often come with strict dress expectations. This blog guides you through what to wear when visiting mosques, temples, churches, and synagogues around the world. In mosques, modest clothing is essential—long sleeves, long pants, and head coverings for women. Shoes are removed before entering prayer halls. In Buddhist temples, revealing clothes are discouraged and shoulders and knees should be covered. In Orthodox churches, both men and women are expected to dress conservatively, with headscarves for women in some places. The blog also highlights symbolic meaning behind some attire—like headscarves, shawls, or sarongs. We provide practical packing tips and how to adapt with scarves or wraps. Dressing appropriately shows respect for the sacredness of the space and the people who worship there. Before visiting, it’s best to check the site’s rules or ask a local guide. When in doubt, modesty is always a safe bet."

    },
    {
        id: 8,
        thumbnailPath: "https://images.unsplash.com/photo-1728290838813-9c94d553d988?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogTitle: "How to Behave as a Guest in a Foreign Home",
        blogContent: "Being invited into a local home is a special honor—but each culture has unique expectations for guests. In this blog, we explore how to be a respectful visitor around the world. In Japan, it's customary to bring a small gift and remove your shoes at the entrance. In India or the Middle East, declining food or drink might seem impolite, even if you're full. In the U.K. or Germany, punctuality is key, while in many Latin American cultures, a relaxed arrival time is acceptable. We'll explore common do’s and don’ts—like where to sit, when to eat, whether to bring flowers, or how to compliment the host. Understanding the role of hierarchy and hospitality customs helps you leave a positive impression. We also touch on non-verbal cues and gift-giving etiquette. Being a gracious guest involves more than politeness—it’s about adapting to the host’s culture and making them feel appreciated for welcoming you. Kindness, curiosity, and a little preparation go a long way."

    },
    {
        id: 9,
        thumbnailPath: "https://images.pexels.com/photos/32213237/pexels-photo-32213237/free-photo-of-group-of-young-adults-engaging-with-a-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        blogTitle: "How Etiquette Builds Connections",
        blogContent: "Etiquette is more than manners—it’s a bridge between people from different backgrounds. In this blog, we explore how observing cultural etiquette builds stronger, more respectful relationships. Whether it’s sharing food, greeting someone appropriately, or dressing correctly, these small acts of awareness show that you value the other person's culture. In business, following local customs shows professionalism and opens doors to better collaboration. In friendships, it creates trust. From offering your seat to an elder in Thailand to waiting for everyone to be served before eating in Italy, etiquette builds a sense of inclusion. The blog also discusses how even small mistakes can be forgiven if your effort is genuine. We’ll share real-life stories of how respecting etiquette turned strangers into friends. Cultural sensitivity doesn’t just prevent conflict—it invites connection. When you show respect, curiosity, and humility, you build lasting impressions. Etiquette is a global language of kindness. Learn to speak it."

    }
]

export default blogRecords;