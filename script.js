const outdatedFacts = {
    1975: [
        "The world will face severe overpopulation crises by the year 2000.",
        "Nuclear power will become the primary energy source globally.",
        "Computers will remain expensive and inaccessible for the average household.",
        "Robotic technology will become advanced enough to replace human labor in most industries."
    ],
    1976: [
        "Space exploration will lead to the colonization of the Moon by the end of the century.",
        "The personal computer will never become a household necessity.",
        "Global warming will not be a major concern for future generations.",
        "Television will remain the dominant form of media for decades to come."
    ],
    1977: [
        "Telephones will continue to be largely landline-based with no significant advancements.",
        "Artificial intelligence will remain a theoretical concept with no practical applications.",
        "Global food shortages will be a major issue by the year 2000.",
        "The energy crisis will persist with no significant breakthroughs in alternative energy sources."
    ],
    1978: [
        "Flying cars will be a common mode of transportation by the year 2000.",
        "The Soviet Union will continue as a global superpower indefinitely.",
        "Robots will handle most household chores by the early 2000s.",
        "The human lifespan will be significantly extended through medical advancements by 2000."
    ],
    1979: [
        "The Internet will never become more than a niche tool for researchers.",
        "Nuclear war is considered inevitable within the next few decades.",
        "The energy crisis will be resolved through the widespread adoption of nuclear energy.",
        "Personal computers will remain primarily a tool for businesses and academia."
    ],
    1980: [
        "Computers will not be able to perform tasks beyond basic calculations and data processing.",
        "The ozone layer will be completely depleted by 2000, leading to severe environmental damage.",
        "Video games will be a passing fad and not a significant part of entertainment culture.",
        "The Cold War will continue indefinitely without resolution."
    ],
    1981: [
        "Acid rain will render all lakes too acidic for fish by 2000.",
        "Video games will not be a lasting form of entertainment.",
        "Computers will never be compact enough for personal use in the home.",
        "The Soviet Union will outlast the United States as a global superpower."
    ],
    1982: [
        "Nuclear war between the US and USSR is inevitable within the decade.",
        "Japan's economy will surpass the US economy by the year 2000.",
        "The ozone layer will be completely depleted by 2000, causing catastrophic environmental effects.",
        "Betamax will become the dominant video format over VHS."
    ],
    1983: [
        "Cabbage Patch Kids dolls will continue to be highly valuable collectibles indefinitely.",
        "The US will fully adopt the metric system by 1990.",
        "Personal computers will remain too complex for average consumers to use effectively.",
        "New Coke will permanently replace the original Coca-Cola formula."
    ],
    1984: [
        "George Orwell's dystopian vision of totalitarian control will become reality.",
        "The Cold War will last indefinitely without resolution.",
        "Artificial intelligence will surpass human intelligence by the year 2000.",
        "Flying cars will be a common mode of transportation by the turn of the century."
    ],
    1985: [
        "The Internet will remain a specialized tool only used by academics and researchers.",
        "The world population will stabilize at around 5 billion by 2000.",
        "Robots will manage most manual labor tasks by the year 2000.",
        "Personal computers will be reserved for business use rather than home use."
    ],
    1986: [
        "Nuclear energy will become the primary source of power worldwide.",
        "Virtual reality will become a mainstream technology within the decade.",
        "Television will be rendered obsolete by emerging new media.",
        "The US economy will collapse under the weight of budget deficits by 2000."
    ],
    1987: [
        "Cabbage Patch Kids will retain their value as highly sought-after collectibles.",
        "The US will transition to a fully metric system by 1990.",
        "Personal computers will remain too complex for the average person.",
        "New Coke will replace the original Coca-Cola formula permanently."
    ],
    1988: [
        "Human genetic engineering will lead to designer babies becoming common.",
        "Space travel will be routine with commercial flights available within a decade.",
        "The Internet will fail to achieve widespread adoption.",
        "Global travel will be restricted and less common due to safety concerns."
    ],
    1989: [
        "The Soviet Union will not collapse and will continue as a superpower.",
        "Robots will replace most human jobs by the turn of the century.",
        "Global population will be controlled by government policies by 2000.",
        "Electronic money will not surpass cash and credit cards."
    ],
    1990: [
        "Nuclear fusion will be a practical and widely used energy source by the end of the decade.",
        "Digital cameras will not surpass film cameras in quality or popularity.",
        "Human space colonization will begin by the year 2000.",
        "Fax machines will remain the primary method of communication."
    ],
    1991: [
        "The World Wide Web will never become a significant part of daily life.",
        "Global warming will not have a major impact before 2050.",
        "Television will remain the dominant medium for entertainment and news.",
        "The economic impact of the Gulf War will be minimal and short-lived."
    ],
    1992: [
        "AI will remain largely theoretical with no practical applications.",
        "Virtual reality will not have a significant impact on gaming or entertainment.",
        "The Internet will stay a niche technology with limited use.",
        "Global food shortages will not be a major issue in the near future."
    ],
    1993: [
        "Digital media will not surpass physical media in terms of popularity.",
        "The stock market will not experience a major crash in the coming years.",
        "The human genome project will not lead to significant breakthroughs in medicine.",
        "Smartphones will remain a niche product with limited market reach."
    ],
    1994: [
        "3D printing technology will not advance significantly in the near future.",
        "The Cold War tensions will re-emerge by the year 2000.",
        "Severe global resource shortages will occur by 2020.",
        "Telecommuting will remain impractical and rarely used."
    ],
    1995: [
        "The Internet will remain too expensive and complex for widespread use.",
        "Robotics will remain limited to basic industrial applications.",
        "Global warming will not be a significant concern before 2020.",
        "Television will continue to be the primary source of news and entertainment."
    ],
    1996: [
        "Mobile phones will remain a luxury item due to high costs and size.",
        "Personal digital assistants (PDAs) will be the primary technology for personal use.",
        "The US will continue to lead in technological innovation indefinitely.",
        "Public transportation will become less relevant due to advancements in personal vehicles."
    ],
    1997: [
        "The Internet bubble will burst and cause a major economic downturn.",
        "Personal robots will become household staples within a decade.",
        "Virtual reality will not significantly impact the gaming industry.",
        "Online privacy will remain adequately protected by current technology."
    ],
    1998: [
        "The world will not see significant advancements in space exploration.",
        "Artificial intelligence will not achieve practical applications in everyday life.",
        "Online privacy concerns will be resolved with existing technology.",
        "Renewable energy will not see significant adoption by the end of the decade."
    ],
    1999: [
        "The Y2K bug will cause widespread technological failures.",
        "The stock market will experience a catastrophic crash at the turn of the millennium.",
        "The Internet will not become a dominant platform for business and social interaction.",
        "Global climate change will have a less significant impact than anticipated."
    ],
    2000: [
        "The Y2K bug will cause major disruptions globally.",
        "Human cloning will become a common medical procedure by the mid-2000s.",
        "Flying cars will be a common mode of transportation by the end of the decade.",
        "Space tourism will become affordable for the average person."
    ],
    2001: [
        "The Internet bubble burst will lead to a major economic downturn.",
        "Artificial intelligence will remain a niche technology with limited practical applications.",
        "Personal robots will not become mainstream household items.",
        "The global economy will collapse due to the aftermath of the 9/11 attacks."
    ],
    2002: [
        "The human genome project will immediately revolutionize personalized medicine.",
        "Online privacy will be effectively secured with advancements in technology.",
        "Green technology will become mainstream without significant changes.",
        "Space tourism will remain a luxury for the elite."
    ],
    2003: [
        "Mobile phones will remain expensive and not widespread.",
        "Renewable energy sources will not make significant progress in adoption.",
        "Artificial intelligence will not achieve practical applications in daily life.",
        "Traditional media will remain dominant over digital media."
    ],
    2004: [
        "Social media will not significantly impact business or communication.",
        "Renewable energy will not become a major part of the energy mix.",
        "Artificial intelligence will not surpass current technological limits.",
        "Space exploration will remain limited to government agencies."
    ],
    2005: [
        "The global economic growth will continue without major disruptions.",
        "Online gaming will not surpass traditional gaming consoles in popularity.",
        "Mobile internet will remain slow and unreliable.",
        "Renewable energy sources will not become cost-competitive with fossil fuels."
    ],
    2006: [
        "Social networking sites will not become significant business tools.",
        "Digital media will not fully replace traditional media by 2010.",
        "Artificial intelligence will not achieve human-like capabilities.",
        "Space colonization will remain a distant goal."
    ],
    2007: [
        "The rise of smartphones will not significantly change personal computing habits.",
        "The economic impact of the 2008 financial crisis will be minimal.",
        "Online privacy will be adequately protected by existing technology.",
        "Renewable energy sources will not become mainstream."
    ],
    2008: [
        "Economic recovery will be swift and robust following the 2008 crisis.",
        "Artificial intelligence will not surpass human intelligence within the decade.",
        "Social media will not change the way people interact significantly.",
        "Renewable energy will remain a niche market."
    ],
    2009: [
        "The global economic recession will be resolved quickly.",
        "Smartphones will remain a luxury item for the wealthy.",
        "Green technologies will not become mainstream by 2020.",
        "Space exploration will not see significant advances in the next decade."
    ],
    2010: [
        "Online privacy will be fully secured by advancements in technology.",
        "Renewable energy will not be adopted at a large scale.",
        "Social media will not significantly impact traditional media.",
        "Self-driving cars will remain a concept without practical applications."
    ],
    2011: [
        "Economic recovery will be swift and robust after the 2008 crisis.",
        "Artificial intelligence will not become a significant part of everyday life.",
        "Mobile technology will not evolve significantly in the near future.",
        "The impact of climate change will be minimal by 2020."
    ],
    2012: [
        "Significant advancements in space exploration will occur in the near future.",
        "Renewable energy will not become a dominant source of power.",
        "Social media will not have a major impact on politics.",
        "Smart technology will remain a niche market."
    ],
    2013: [
        "The economic impact of the global financial crisis will continue to worsen.",
        "Artificial intelligence will not achieve significant advancements.",
        "Renewable energy sources will not replace fossil fuels in the near future.",
        "Self-driving cars will not become widespread."
    ],
    2014: [
        "Social media will not significantly influence global events.",
        "Renewable energy will not see major growth in adoption.",
        "Artificial intelligence will not become more advanced.",
        "The global economy will face significant challenges."
    ],
    2015: [
        "Virtual reality will not become mainstream.",
        "The global economy will face another major crisis.",
        "Artificial intelligence will not achieve significant breakthroughs.",
        "Self-driving cars will not become common on the roads."
    ],
    2016: [
        "Artificial intelligence will have minimal impact on the job market.",
        "Renewable energy will not see significant cost reductions.",
        "The global economy will remain unstable.",
        "Space travel will not become more accessible."
    ],
    2017: [
        "Artificial intelligence will not achieve human-like capabilities.",
        "Renewable energy will not be widely adopted.",
        "Social media will not have a major impact on global events.",
        "The global economy will face significant challenges."
    ],
    2018: [
        "Self-driving cars will not become mainstream.",
        "Renewable energy will not surpass fossil fuels.",
        "The impact of social media on politics will be minimal.",
        "Artificial intelligence will not advance significantly."
    ],
    2019: [
        "The COVID-19 pandemic will not have a significant long-term impact.",
        "Cryptocurrency will not replace traditional financial systems.",
        "Artificial intelligence will not achieve human-like intelligence.",
        "Climate change will not have a major impact on global weather patterns."
    ],
    2020: [
        "The pandemic will be resolved quickly with minimal long-term effects.",
        "Remote work will not become a long-term trend.",
        "Artificial intelligence will not significantly impact daily life.",
        "Renewable energy will not see significant adoption in the near future."
    ],
    2021: [
        "The COVID-19 pandemic will be fully under control by the end of the year.",
        "Remote work will not become a permanent fixture.",
        "Artificial intelligence will not achieve breakthroughs.",
        "Cryptocurrency will not become mainstream."
    ],
    2022: [
        "The effects of climate change will not be severe by mid-century.",
        "Artificial intelligence will not significantly alter industries.",
        "Remote work will not remain prevalent.",
        "Global economic instability will be minimal."
    ],
    2023: [
        "COVID-19 will be completely eradicated globally by the end of the year.",
        "Cryptocurrency will fully replace traditional banking for most people.",
        "Self-driving cars will dominate roads in major cities.",
        "Virtual and augmented reality will replace smartphones as the primary personal computing device."
    ]
};

function checkFacts() {
    const year = parseInt(document.getElementById('gradYear').value);
    const resultsDiv = document.getElementById('results');
    
    if (year < 1950 || year > 2024) {
        resultsDiv.innerHTML = `<p>Please enter a graduation year between 1950 and 2024.</p>`;
        return;
    }

    // Collect all facts from the graduation year to the current year
    let factsToDisplay = [];
    for (const [factYear, facts] of Object.entries(outdatedFacts)) {
        if (parseInt(factYear) >= year) {
            factsToDisplay = factsToDisplay.concat(facts.map(fact => `<b>${factYear}</b>: ${fact}`));
        }
    }

    if (factsToDisplay.length > 0) {
        resultsDiv.innerHTML = `<h2>Outdated Facts from ${year} and Beyond:</h2><ul>${factsToDisplay.map(fact => `<li>${fact}</li>`).join('')}</ul>`;
    } else {
        resultsDiv.innerHTML = `<p>No outdated facts found for the year ${year} or beyond.</p>`;
    }
}
