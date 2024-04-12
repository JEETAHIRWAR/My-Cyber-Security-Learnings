<div align="center" style="font-size:28px; color:#5755FE; background-color:#FFF7FC;">
  <h1>SECURITY PRINCIPLES 👻</h1>
</div>

---

# ***[1.1] Understand the security concepts of information assurance***

## The CIA Triad 🖌️

The CIA Triad is a way to understand and ensure security in information systems. It stands for Confidentiality, Integrity, and Availability.

>##### [ ✒️ explain in Hindi ]
> `CIA Triad ek tareeka hai information systems mein suraksha ko samajhne aur ensure karne ka. Yeh Confidentiality, Integrity, aur Availability ke liye stand karta hai.`

 ***[1.1.1] Confidentiality -*** This means only authorized people can access certain information, and it should be protected from being shared with unauthorized individuals.

>##### [ ✒️ explain in Hindi ]
 > `01. Confidentiality: Iska matlab hai sirf authorized log hi kuch khaas jaankari tak pahunch sakte hain, aur yeh unauthorized logon se share hone se bachani chahiye. `

 ***[1.1.2] Integrity -*** This is about the accuracy and reliability of information. it ensures that data is complete, accurate, and consistent, and it con be trusted for its intended purpose.

>##### [ ✒️ explain in Hindi ]
 > `02. Integrity: Yeh jaankari ke sahi aur vishwasniy hone ke baare mein hai. Yeh yeh assure karta hai ki data poori tarah se sahi, satik, aur consistent hai, aur ise uske iraade ke liye vishwasniya kiya ja sakta hai.`

 ***[1.1.3] Availability -*** This refers to the accessibility of systems and data when users need them. it ensures that resources are accessible and usable when required, without any interruptions or delays.

>##### [ ✒️ explain in Hindi ]
 > `03. Availability: Yeh systems aur data ki upalabdhata ko jab users ko zaroorat ho tab accessible hone ka matlab hai. Yeh yeh ensure karta hai ki resourses jab chahiye tab uplabdh aur upyogshil hon, kisi bhi beech batai ya rukavat ke bina.`

In simpler terms, the CIA Triad helps in keeping information safe (Confidentiality), reliable (integrity), and accessible (availability).

>##### [ ✒️ explain in Hindi ]
> `Saral shabdon mein kaha jaye toh, CIA Triad jaankari ko surakshit (confidentiality), vishwasniy (integrity), aur upalabdh (availability) rakhne mein madad karta hai.` 



## CIA Triad Deep Dive 🖌️

#### 01. Confidentiality: 
***Confidentiality*** is about keeping information safe and secure. It's a bit tricky because sometimes users of a system might not be trustworthy, or they might access the system from unsafe devices or apps. So, security pros need to control who can access what—protecting important data while letting authorized people get to it.

>##### [ ✒️ explain in Hindi ]
> `Confidentiality ka matlab hai jaankari ko surakshit aur secure rakhna. Yeh thoda mushkil hai kyunki kabhi-kabhi system ke users bharosemand nahi hote, ya phir woh unsafe devices ya apps se system ko access karte hain. Isliye, suraksha professionals ko yeh dekhna hota hai ki kaun kya access kar sakta hai—mahatvapurn data ko bachate hue authorised logon ko us tak pahunchne dena.`

***Personally Identifiable Information (PII)*** is a part of confidentiality. It includes any data that can identify someone, like their name or address. Other terms related to confidentiality are ***Protected Health Information (PHI)***, which is about a person's health, and ***classified or sensitive information***, like trade secrets or business plans.

>##### [ ✒️ explain in Hindi ]
> `Personally Identifiable Information (PII) confidentiality ka hissa hai. Isme kisi ko identify karne wale koi bhi data shaamil hota hai, jaise naam ya pata. Aur confidentiality se judi dusri terms hain jaise Protected Health Information (PHI), jo kisi vyakti ki sehat se judi hoti hai, aur classified ya sensitive information, jaise trade secrets ya business plans.`

Another term is ***sensitivity***, which measures how important information is and how much it needs protecting. Sensitive information is stuff that, if it gets out or gets changed, could harm a person or a company. Sometimes, sensitivity is about how much harm it could cause to people or groups outside the organization that owns the info.

>##### [ ✒️ explain in Hindi ]
> `Ek aur term hai sensitivity, jo batata hai ki jaankari kitni mahatvapurn hai aur uski kitni suraksha ki zaroorat hai. Sensitive information woh hoti hai jo, agar bahar chali jaaye ya badal di jaaye, kisi vyakti ya company ko nuksan pahuncha sakti hai. Kabhi-kabhi sensitivity yeh bhi batati hai ki kitna nuksan kisi vyakti ya group ko ho sakta hai jo us jaankari ka maalik nahi hai.`

#### 02. Integrity:

***Integrity*** means things are whole, complete, and accurate. It applies to:

>##### [ ✒️ explain in Hindi ]
> `Integrity ka matlab hai ki cheezein poori, complete aur sahi hain. Yeh cheezon mein apply hota hai:`

- Information or data
- Systems and processes used in business
- Organizations
- People and their actions

***Data integrity*** ensures data hasn't been tampered with. It means protecting data from unauthorized changes, errors, or loss during storage, processing, and transmission.

>##### [ ✒️ explain in Hindi ]
> `Data integrity yeh ensure karta hai ki data mein kisi ne bina ijazat ke koi badlav nahi kiya hai. Iska matlab hai data ko unauthorized changes, errors, ya information loss se bachana storage, processing aur transmission ke dauraan.`

Information must be accurate and consistent across systems. This consistency ensures info is correct everywhere it's stored or shown.

>##### [ ✒️ explain in Hindi ]
> `Jaankari ko sahi aur consistent rakhna zaroori hai. Yeh consistency yeh ensure karta hai ki jaankari har jagah sahi dhang se store aur dikhayi ja rahi hai.`

***System integrity*** means systems operate as they should. It's about maintaining a known good configuration and expected function while processing data.

>##### [ ✒️ explain in Hindi ]
> `System integrity ka matlab hai ki systems waisa hi kaam kare jaisa unka hona chahiye. Yeh data ko process karte waqt ek known good configuration aur expected function maintain karna hai.`

To ensure integrity, we start by understanding the current state of data or a system, creating a ***baseline***. Then, we compare this baseline with the current state to check if anything's changed. If they match, integrity's intact; if not, it's compromised.

>##### [ ✒️ explain in Hindi ]
> `Integrity ko ensure karne ke liye, hum current state ko samajhte hain, aur ek baseline create karte hain. Phir, hum current state ko baseline ke saath compare karte hain ki kuch badla hai ya nahi. Agar match hota hai, toh integrity hai; agar nahi, toh compromised hai.`

Integrity is vital for trustworthy information and systems, often dictated by laws or the organization's needs for reliable data.

>##### [ ✒️ explain in Hindi ]
> `Integrity vishwasniya jaankari aur systems ke liye mahatvapurn hai, aur yeh aksar kanoon ya sangathan ki zarooraton ke mutabiq hota hai.`

## CIA in the Real World
#### A Practical Example

***Rahul :*** Hey, I need to send you some confidential client information for the upcoming project.

***Aman :*** Sure, go ahead and email it to me.

[***Rahul :*** sends the email containing the confidential client information]

>let's break down how the CIA triad comes into play here. First, we have confidentiality. The client information being sent should only be accessible to authorized individuals, ensuring that sensitive data remains protected from unauthorized access.

>However, in the real world, there are threats like hackers who may try to intercept the email and gain access to the confidential information.

***Aman :*** I've received the email. Let me review the information and get back to you.

[***Aman :*** opens the email and reviews the client information]

>Next, we have integrity. It's essential to ensure that the client information remains accurate and unaltered during transmission and storage. Any unauthorized changes or modifications could compromise the integrity of the data.

***Aman :*** Wait a minute, there seems to be an error in this data. Let me double-check with the original source to confirm.

[***Aman :*** contacts the original source to verify the accuracy of the client information]

>Finally, we have availability. It's crucial that the client information is readily accessible to authorized users when needed, ensuring smooth business operations and project execution.

***Rahul :*** Thanks for verifying the data. Now we can proceed with the project confidently.

>In conclusion, the CIA triad plays a vital role in ensuring the security and reliability of information and systems in the real world. By prioritizing confidentiality, integrity, and availability, organizations can mitigate risks and protect against potential threats.

# ***[1.1.4] Authentication (e.g., methods of authentication, multi-factor authentication (MFA))***
## Authentication 
Authentication is the process of confirming that a user is who they claim to be. In simpler terms, it's about proving someone's identity.

>Authentication ka matlab hai yeh verify karna ki ek user wahi vyakti hai jiska woh khud ko batata hai. Seedhe shabdon mein, yeh kisi ki pehchaan ko saabit karna hai.

There are three common methods of authentication:

- **Something you know:** This involves using something you remember, like a password or passphrase.

>##### [ ✒️ explain in Hindi ]
>`Kuch jo aap jaante hain:`  `Ismein aapko kuch yaad rakhna hota hai, jaise ek password ya passphrase.`

- **Something you have:** This involves using something physical that you possess, like a token, memory card, or smart card.

>##### [ ✒️ explain in Hindi ]
>`Kuch jo aapke paas hai:` `Ismein aapko kuch physical cheez ka istemal karna hota hai jo aapke paas hai, jaise ek token, memory card, ya smart card.`

- **Something you are:** This involves using physical traits unique to you, like biometrics (fingerprints, facial recognition, etc.).

>##### [ ✒️ explain in Hindi ]
> `Kuch jo aap hain:` `Ismein aap apne aap ko unique physical traits ka istemal karte hain, jaise ki biometrics (anguthe ka nishaan, chehre ka pehchaan, etc.).`

So, authentication is like showing your ID to prove you are who you say you are. You can do it by remembering something, having something physical, or showing your unique physical traits.

>##### [ ✒️ explain in Hindi ]
>`Toh, authentication waisa hai jaise apna ID dikhakar apni pehchaan ko saabit karna. Aap isse kuch yaad karke, kuch physical cheezen dharan karke, ya apni unique physical traits dikha kar kar sakte hain.`

### Methods of Authentication
There are two types of authentication: single-factor authentication (SFA) and multi-factor authentication (MFA).

>##### [ ✒️ explain in Hindi ]
>`Do prakar ke authentication hote hain: single-factor authentication (SFA) aur multi-factor authentication (MFA).`

- **Single-factor authentication (SFA):** This is when you use only one method to prove your identity, like entering a password.

>##### [ ✒️ explain in Hindi ]
- >`Single-factor authentication (SFA):` `Yeh tab hota hai jab aap sirf ek tarika istemal karte hain apni pehchaan ko saabit karne ke liye, jaise ki ek password daalna.`

- **Multi-factor authentication (MFA):** This is when you use two or more methods to prove your identity. For example, you might enter a password and then use a fingerprint scanner.

>##### [ ✒️ explain in Hindi ]
- >`Multi-factor authentication (MFA):` `Yeh tab hota hai jab aap apni pehchaan ko saabit karne ke liye do ya zyada tareekon ka istemal karte hain. For example, aap ek password daalte hain phir ek fingerprint scanner ka istemal karte hain.`

It's a good idea to use at least two out of three common authentication techniques:

>##### [ ✒️ explain in Hindi ]
>`Yeh behtar hota hai ki aap kam se kam teen common authentication techniques mein se do istemal karein:`

1. **Knowledge-based:** This involves using something you know, like a password.

>##### [ ✒️ explain in Hindi ]
>`Knowledge-based:` `Ismein aap kuch jaante hain, jaise ki ek password.`

2. **Token-based:** This involves using something physical, like a keycard.

>##### [ ✒️ explain in Hindi ]
>`Token-based:` `Ismein aap kuch physical cheez ka istemal karte hain, jaise ki ek keycard.`


3. **Characteristic-based:** This involves using something unique about you, like your fingerprint.

>##### [ ✒️ explain in Hindi ]
>`Characteristic-based:` `Ismein aap apni unique characteristic ka istemal karte hain, jaise ki aapka fingerprint.`

### Proving Identity

> Let's dive deeper into authentication. Many of us are familiar with different ways of proving our identity, often without even realizing it. Typically, we authenticate ourselves by using something we know, like a password. That's one way of proving who we are. Then, we might use something we have, like a card or token. That adds another layer of authentication.

>##### [ ✒️ explain in Hindi ]
>`Chaliye authentication ke baare mein aur gehraai se jaante hain. Kai log humein apni pehchaan saabit karne ke alag-alag tareeke acche se jaante hain, shayad bina jaane. Aam taur par, hum apni pehchaan ko saabit karne ke liye kuch jaante hain, jaise ki ek password. Yeh humari pehchaan ka ek tareeka hai. Fir, hum kuch paas rakhte hain, jaise ki ek card ya token. Yeh aur ek authentication ka layer add karta hai.`

For example, when you go to the bank and use your ATM card, you might need to enter a PIN. You have the card and know the PIN, so that's multi-factor authentication. Just having the card isn't enough to access your money.

>##### [ ✒️ explain in Hindi ]
>`For example, jab aap bank jaate hain aur apna ATM card istemal karte hain, toh aapko PIN daalna hota hai. Aapke paas card hota hai aur aap PIN jaante hain, isliye yeh multi-factor authentication hai. Bas card rakhna kaafi nahi hota aapke paise tak pahunchne ke liye.`

And now, we're also using biometrics, like fingerprints or facial recognition, to prove who we are. This adds another layer of security to the authentication process.

>##### [ ✒️ explain in Hindi ]
>`Aur ab, hum biometrics ka bhi istemal kar rahe hain, jaise ki fingerprints ya facial recognition, apni pehchaan ko saabit karne ke liye. Yeh authentication process mein aur bhi ek security layer add karta hai.`

### ***[1.1.5] Non-repudiation***
### Non-repudiation
Non-repudiation means you can't deny something you did. In e-commerce and electronic transactions, it's crucial to trust that people won't lie about their actions, like making a purchase and then saying they didn't. Non-repudiation methods ensure that everyone is accountable for what they do.

>##### [ ✒️ explain in Hindi ]
>`Non-repudiation ka matlab hai ki aap apne kiye gaye kaam ko inkaar nahi kar sakte. E-commerce aur electronic transactions mein, logon par bharosa karna zaroori hai ki woh apne kiye gaye kaamon ka jhoot nahi bolenge, jaise ki kharidari karke baad mein kehna ki woh nahi kiya. Non-repudiation methods yeh ensure karte hain ki har koi apne kiye gaye kaamon ke liye zimmedar hai.`

### ***[1.1.6] Privacy***
### Privacy
Privacy is about having control over who gets your personal information. While security and privacy both focus on protecting personal data, privacy is specifically about controlling how your information is shared. With more data being collected and stored digitally, there's a growing need for privacy laws and compliance. Laws like the **General Data Protection Regulation (GDPR)** in Europe and state regulations in the US set rules for how companies handle personal data. These laws apply to any organization, regardless of where they're based, if they handle data from people in that region. Making sure companies follow these laws is important to avoid penalties for mishandling personal information.


>##### [ ✒️ explain in Hindi ]
>`Privacy ka matlab hai apne personal jaankari ka control rakhna. Jabki security aur privacy dono personal data ki suraksha par dhyan dete hain, privacy specifically yeh decide karta hai ki aapki jaankari kaise share hoti hai. Digital mein jaada data collect ho raha hai, isliye privacy laws aur compliance ki zaroorat badh rahi hai. Laws jaise GDPR Europe mein aur US ke state regulations set karte hain ki companies personal data ko kaise handle karein. Yeh laws kisi bhi organization par apply hote hain, chahe woh kahi bhi ho, agar unka data us region ke logon ka hai. Companies ko yeh laws follow karna zaroori hai taki personal information ka misuse se penalties se bacha ja sake.`

### Privacy in the Working Environment
Privacy is a big part of keeping information safe. Once we know how private the information is, we can figure out what rules to follow. Different places have different rules for privacy. In the US, HIPAA makes sure medical information stays private. In the EU, the GDPR lets people control what companies can do with their personal information. As a security professional, it's important to know about privacy laws everywhere your company does business. If you're working in other countries, you need to follow their privacy rules too.

>##### [ ✒️ explain in Hindi ]
>`Privacy jaankari ko surakshit rakhne ka bada hissa hai. Jab humein pata chalta hai ki jaankari kitni private hai, tab humein pata chalta hai ki humein kaunsi niyamon ka palan karna chahiye. Alag-alag jagahon par privacy ke alag-alag niyam hote hain. US mein, HIPAA medical jaankari ko private rakhne ka dhyan rakhta hai. EU mein, GDPR logo ko control deta hai ki companies unki personal jaankari ka kya karein. Ek suraksha professional ke liye zaroori hai ki woh jaanen ki unki company ka business kahan-kahan hota hai aur wahan privacy laws kya hain. Agar aap doosre deshon mein kaam karte hain, toh aapko unke privacy rules bhi follow karna chahiye.`

---

# ***[1.2] Understand the risk management process***

 Information assurance and cybersecurity play a big role in managing risks. The amount of cybersecurity needed depends on how much risk an organization is okay with. We assess the risks and then put security measures in place to reduce them to an acceptable level. Risks can come from cyberattacks like malware or from other events like fires or natural disasters. Good risk management helps us identify vulnerabilities and threats and figure out how likely they are and what impact they could have.

>##### [ ✒️ explain in Hindi ]
 >`Information assurance aur cybersecurity risk management process mein bada role nibhate hain. Cybersecurity ki level wo risk par nirbhar karta hai jo koi organization accept kar sakta hai. Hum risk assess karte hain aur phir security measures ko implement karte hain taki unhe acceptable level tak kam kar sakein. Risks cyberattacks se ho sakte hain jaise malware ya doosre events se jaise ki fires ya natural disasters. Achhe risk management se hum vulnerabilities aur threats ko pehchante hain aur unka likelihood aur potential impact nikalte hain.`


 ## Importance of Risk Management

 When we talk about threats and vulnerabilities, what do we mean? A vulnerability is like a weak spot in an organization's protection of its valuable stuff, like information. A threat is something or someone that wants to take advantage of that weak spot to get in where they shouldn't. By using a vulnerability, the threat can cause harm to something valuable. For instance, a big storm can be a threat to the power supply, which might flood. The IT system, where work gets done, is valuable. If the power goes out because of the storm, the IT system won't work. Our job is to figure out how likely it is for something bad to happen and do things to lower that risk.

>##### [ ✒️ explain in Hindi ]
 >`Jab hum threats aur vulnerabilities ke baare mein baat karte hain, toh hum kya keh rahe hain? Ek vulnerability ek organization ki valuable cheezon ki, jaise ki jaankari, suraksha mein ek weak spot hoti hai. Ek threat kuch hai ya koi jo us weak spot ka faayda uthana chahta hai aur unauthorized access lena chahta hai. Vulnerability ka istemal karke, threat kisi valuable cheez ko nuksan pahuncha sakta hai. For example, ek bada toofan bijli ki supply ke liye ek threat ho sakta hai, jo ki baadh se flood ho sakta hai. IT system, jahan kaam hota hai, valuable hai. Agar toofan ki wajah se bijli chali gayi, toh IT system kaam nahi karega. Hamara kaam hai ye dekhna ki kisi bhi bura event hone ki kitni sambhavna hai aur us risk ko kam karne ke liye kuch karna.`


## Risk Management Terminology

Security professionals use their expertise to look at operational risk management, figure out how to use risk data well, work with different teams, and tell stakeholders about important information and findings. Terms like threats, vulnerabilities, and assets are common in cybersecurity.

- ***Asset:*** Something important that needs to be protected.
- ***Vulnerability:*** A weak spot or gap in protection.
- ***Threat:*** Something or someone that wants to take advantage of a vulnerability to get past protection.


>##### [ ✒️ explain in Hindi ]
>`Suraksha professionals apne gyaan aur skills ka istemal karte hain operational risk management ko dekhne ke liye, risk data ko kaise effective tareeke se use karein, alag-alag teams ke saath kaam karte hain, aur stakeholders ko important jaankari aur findings ke baare mein batate hain. Aise shabdon jaise threats, vulnerabilities, aur assets cybersecurity mein aam hote hain.`

> `Asset: Koi important cheez jo suraksha ki zarurat hai.`

>`Vulnerability: Ek weak spot ya gap protection mein.`

>`Threat: Kuch ya koi jo ek vulnerability ka faayda uthana chahta hai suraksha ko paar karne ke liye.`

## Threats

A threat is something or someone that tries to take advantage of weaknesses in a system to achieve their goals. ***For example***, pickpockets targeting tourists are threats because they exploit vulnerabilities in crowded areas. In cybersecurity, threats can be insiders making mistakes or acting maliciously, outsiders finding vulnerabilities, business competitors, cybercriminals, terrorists, or even automated bots. The way a threat acts is called their threat vector.

>##### [ ✒️ explain in Hindi ]
>`Ek threat kuch ya koi hota hai jo kisi system ke kamzoriyon ka faayda uthane ki koshish karta hai apne maqsad ko paane ke liye. For example, tourists ko target karne wale pickpockets ek threat hote hain kyunki woh crowded areas ki weaknesses ka faayda uthate hain. Cybersecurity mein, threats insiders ho sakte hain jo galti se ya jaanbujhkar kaam karte hain, outsiders jo vulnerabilities dhoondte hain, business competitors, cybercriminals, terrorists, ya phir automated bots. Ek threat ka kaam karne ka tarika unka threat vector kehlaya jata hai.`


## Vulnerabilities

A ***vulnerability*** is a weakness in a system or part of it that could be exploited to cause a problem. To reduce vulnerability, organizations need to think like the bad guys and figure out why they might be targeted. Then they can take steps to make it harder for attackers or make themselves less attractive targets. For example, to avoid pickpockets, you might keep your wallet in a safer place or stay more aware of your surroundings. Managing vulnerabilities starts with understanding what they are.


>##### [ ✒️ explain in Hindi ]
> `Vulnerability ek system ya uska hissa mein ek kamzori hai jo kisi problem ka kaaran ban sakti hai. Kamzori ko kam karne ke liye, organizations ko buraaiyon ki tarah sochna chahiye aur samajhna chahiye ki woh kyun target ho sakte hain. Phir woh kadam utha sakte hain taki attackers ko muskil ho ya phir woh unko kam attractive target banayein. 👉For example, pickpockets se bachne ke liye, aap apna wallet safe jagah par rakhte hain ya phir apne aaspaas ki jaankari mein zyada dhyan rakhte hain. Vulnerabilities ko manage karna shuru hota hai unhe samajhna se.`

##  Likelihood

When looking at an organization's weaknesses, the security team also considers how likely it is for those weaknesses to be exploited. Likelihood is the chance that a threat might take advantage of a vulnerability. They also think about what would happen if a threat actually happens. Impact is how much harm could come from things like info being disclosed or lost. For example, if a pickpocket steals your money, can you still finish your trip? What if you get hurt and need medical help? Impact isn't just about what happens right then.

>##### [ ✒️ explain in Hindi ]
>`Jab ek organization ki kamzoriyon ko dekha jata hai, toh suraksha team ko yeh bhi dekhna padta hai ki un kamzoriyon ko exploit hone ki kitni sambhavna hai. Likelihood yeh batata hai ki ek threat ek vulnerability ka faayda uthane ki kitni sambhavna hai. Woh bhi sochte hain ki agar ek threat sach mein hoti hai, toh kya ho sakta hai. Impact yeh batata hai ki info ka disclose ya lost hone se kitna nuksan ho sakta hai. 👉For example, agar ek pickpocket aapka paisa chura leta hai, toh kya aap apna trip pura kar paoge? Aur agar aapko chot lag jaati hai aur medical help ki zarurat padti hai, toh kya hoga? Impact sirf uss waqt hi nahi hota.`


## Risk Identification

Identifying risks is like looking out for potential problems, whether it's avoiding traffic on the street or noticing loose wires at your desk. In cybersecurity, it's an ongoing process of finding different risks, understanding them, and figuring out how they could disrupt the organization.

It's about understanding your company's unique situation and plans. Everyone in the organization has a role in identifying risks, not just security professionals. By identifying risks, you can communicate them clearly, protect against them, and assist in assessing risks at a system level.

>##### [ ✒️ explain in Hindi ]
> `Risk identify karna woh hai jaise potential problems ko dhundna, chahe wo sadak par traffic se bachna ho ya phir apne desk par dhile wires ko dekhna. Cybersecurity mein, yeh ek lagatar process hai alag-alag risks ko dhoondhne ka, samajhne ka aur samajhne ka ki wo organization ko kaise disrupt kar sakte hain.`

>`Yeh apne company ke unique situation aur plans ko samajhne ka kaam hai. Har koi organization mein risks ko identify karne mein hissa leta hai, sirf security professionals nahi. Risks ko identify karke aap unhe clear tareeke se communicate kar sakte hain, unse bacha sakte hain aur system level par risks assess karne mein madad kar sakte hain.`

## Risk assessment

Risk assessment is the process of finding, estimating, and ranking the risks that could affect an organization's operations, assets, people, or reputation. It involves connecting each identified risk with the organization's goals, assets, or processes, so they can figure out the best way to deal with them.

>##### [ ✒️ explain in Hindi ]
>`Risk assessment ek aise process hai jisme organization ke operations, assets, logon aur reputation ko prabhavit karne wale risks ko dhoondha, anuman lagaya aur unhe rank kiya jata hai. Isme har identified risk ko organization ke goals, assets ya processes se jodha jata hai, taaki unko unse deal karne ka behtareen tareeka pata chale.`

For example, when assessing the risk of a fire in a building, they consider things like fire alarms and sprinkler systems. Fire alarms can warn people to evacuate, but they won't stop the fire from spreading. Sprinkler systems can limit damage, but they might destroy data in a data center. They weigh these options to decide which is best for protecting the assets.


>##### [ ✒️ explain in Hindi ]
>`For example, jab building mein fire ka risk assess kiya jata hai, toh wahaan ke fire alarms aur sprinkler systems ko dekha jata hai. Fire alarms logon ko evacuate karne ke liye warn karte hain, lekin woh fire ko failne se nahi rok sakte. Sprinkler systems damage ko limit kar sakte hain, lekin woh data center mein data ko destroy kar sakte hain. In options ko weigh kiya jata hai assets ko protect karne ke liye.`

The results of the risk assessment are usually put into a report or presentation for management to review and prioritize. Sometimes, management might ask for a more detailed assessment from internal or external resources.

>##### [ ✒️ explain in Hindi ]
>`Risk assessment ke results usually ek report ya presentation mein management ke liye diye jate hain taki woh unhe review aur prioritize kar sakein. Kabhi kabhi, management detailed assessment ke liye internal ya external resources se pooch sakti hai.`


## Risk Treatment

Risk treatment involves deciding what to do about the risks that have been identified and prioritized. It depends on how management feels about risk and how much it will cost to deal with it. There are different options for responding to risk:

>##### [ ✒️ explain in Hindi ]
>`Risk treatment mein yeh decide kiya jata hai ki kis tarah ke risks ko deal karna chahiye jo pehchaane gaye hain aur unhe priority di gayi hai. Yeh management ke risk ke prati attitude aur isse deal karne ke kharch par depend karta hai. Risk ke liye kuch options hote hain:`

- ***Avoidance:*** Trying to get rid of the risk completely, like stopping certain activities that are too risky.

>##### [ ✒️ explain in Hindi ]
>`Avoidance: Risk ko puri tarah se khatam karne ki koshish karna, jaise ki kuch activities ko band karna jo zyada risky hain.`

- ***Acceptance:*** Doing nothing about the risk because it's not a big deal or the benefits outweigh the risks.

>##### [ ✒️ explain in Hindi ]
>`Acceptance: Risk ke bare mein kuch nahi karna kyunki woh bahut chhota hai ya phir benefits risks se zyada hain.`

- ***Mitigation:*** Taking actions to prevent or reduce the risk, like adding security measures or following procedures.

>##### [ ✒️ explain in Hindi ]
>`Mitigation: Risk ko rokne ya kam karne ke liye actions lena, jaise ki suraksha measures add karna ya procedures follow karna.`

- ***Transfer:*** Passing the risk to someone else, like getting insurance.

>##### [ ✒️ explain in Hindi ]
>`Transfer: Risk ko kisi aur ko dena, jaise ki insurance lena.`

## Risk Management Process

Imagine you have something valuable that needs protecting, like your personal information or a piece of equipment. A vulnerability is like a weak spot in your defense, maybe because your software is outdated. A threat is anything or anyone that could harm you once they find out about your weakness. For instance, if you leave a back door open, someone might exploit that to get inside and access your stuff. How likely this is depends on how secure your surroundings are. In a highly secure place like a bank, it's hard for someone to break in. But if your security measures are weak, the chances of a breach are higher.

>##### [ ✒️ explain in Hindi ]
> `Imagine karo, tumhare paas kuch bahut keemti hai jo tumhe bachana hai, jaise ki tumhari personal information ya ek equipment ka kona. Ek vulnerability ek weak spot hai tumhari suraksha mein, shayad tumhara software purana ho. Ek threat kuch bhi ho sakta hai ya koi bhi jo tumhe nuksan pahuncha sakta hai jab unhe tumhari weakness ka pata chalta hai. For example, agar tum ek back door khula chhod do, koi uska fayda utha sakta hai aur andar ghus ja sakta hai tumhare saman ko access karne ke liye. Ye kitni sambhavna hai ye tumhare aas paas ki suraksha par depend karta hai. Ek highly secure jagah jaise ki bank mein, kisi ke liye ghusna mushkil hai. Lekin agar tumhara suraksha paimane kamzor hain, breach hone ke chances zyada hain.`

Before dealing with risks, organizations need to decide how much risk they're okay with. This is called risk appetite. For example, if you hate power outages during a big game, you'll have a low risk appetite for them. If your data is super important, you'll want to avoid any risk of it getting breached.

>##### [ ✒️ explain in Hindi ]
> `Pehle risk ko deal karne se pehle, organizations ko decide karna padta hai ki unhe kitna risk lena theek lagta hai. Isse hum risk appetite kehte hain. For example, agar tumhe bada game ke dauraan power kaatne se nafrat hai, toh tumhara risk appetite uske liye kam hoga. Agar tumhara data bahut important hai, toh tum chahegi ki uska breach ho jaane ka koi risk hi na ho.`

To lower the risk, you might hire experts or use security controls. If you can't handle the risk, you might avoid risky situations or get insurance to cover any losses. Once you've done what you can to reduce or transfer the risk, you can accept whatever risk is left.

>##### [ ✒️ explain in Hindi ]
> `Risk ko kam karne ke liye, tum experts ko hire kar sakte ho ya security controls ka istemal kar sakte ho. Agar tum risk ko handle nahi kar paate, toh tum risky situations se bach sakte ho ya insurance le sakte ho jo tumhare nuksan ko cover kare. Jab tumne risk ko kam ya transfer karne ke liye jo kuch kiya hai, phir tum jo bache hue risk ko accept kar sakte ho.`

# Risk Management Question

When a company chooses to ignore a risk and proceed with a risky activity, which treatment is being applied by default? 

A. Mitigation  
   - Incorrect. Mitigation involves taking action to remove or lessen the effects of risks.

B. Avoidance  
   - Incorrect. Avoidance is halting the risky activity.

C. Acceptance  
   - Correct. Acceptance is choosing to ignore a risk and proceed with a risky activity.

D. Transference  
   - Incorrect. Transference is shifting the risk via legal agreement, usually to another party such as a service or insurance provider.


### Riya's Rise: Navigating the Security Operations Center

***Raj:*** The last time we saw Riya, she stepped into CyberCafe for a cup of coffee and spoke to Ankit about her job as a cybersecurity analyst in a security operations center.

***Sana:*** Or, as Riya calls it, the SOC.

***Raj:*** But what is a SOC, anyway?

***Sana:*** It's like headquarters for an information security team. That's where they monitor, detect, and analyze events on the network so they can prevent and resolve issues before they disrupt the business.

***Raj:*** That sounds cool. Well, I bet with her coffee in hand, Riya is ready for another busy day at the fast-paced environment of the SOC.

***Sana:*** That's right. Let's see how it's going for her.

***Raj:*** It's a good day for Riya. Upon arriving at the SOC where she's worked for two years as a senior cybersecurity analyst, Riya hears that she's just been promoted to manager.

***Sana:*** That's so exciting! Now, she reports directly to the chief information security officer, known as a CISO.

***Raj:*** And she's now responsible for the management, operations, safety, and security of the SOC.

***Sana:*** That must have been some cup of coffee. Let's listen in as she makes a presentation to her boss and colleagues just a few days after the promotion.

***Riya:*** Hi, everyone. Thank you all for coming. Okay, so one of my first goals in my new role was assessing the skill set of our current staff and highlighting the current and future needs of the SOC. Using a template provided by our CISO, I carefully considered the company's goals, as well as the milestones of the larger projects and considered staffing needs. During this process, I identified a risk in relation to staffing and conducted an assessment. I plan to make a recommendation on whether the company should mitigate, avoid, transfer, or accept this risk.

***Sana:*** Evaluating risk is a big part of Riya's new job. Let's hear a little more about how she does this.

***Riya:*** As we all know, our staff is a dynamic team challenged by the volume and growing sophistication of the cyber threat alerts that they are receiving. Because of the fast pace and the high level of manual triage needed to address these threats, there is a potential for high turnover among the Tier One and the Tier Two incident response teams. And because hiring, onboarding, and training new staff takes time, turnover could mean that there are fewer trained associates available to triage or escalate these threats. The training of new staff is not only time-consuming and costly, but it also represents an increased cyber risk to the company. Now, I have access to some data, including quarterly hiring reports from HR and the number of incidents that are triaged each week, but I decided that I didn't have enough information to do a quantitative risk assessment. However, a qualitative risk assessment may be well-suited for this situation because it allows us to rank or estimate the probability of a particular risk occurring and the loss or impact of that risk using terms such as high, low, moderate, and severe. This will provide me with enough information in my report to allow the leadership team to decide if any further analysis is needed.

***Sana:*** Riya can use a graphical representation to help her evaluate and communicate potential risk.

***Riya:*** Now, I'm going to use a risk matrix to determine the likelihood of the operational risk occurring. Having worked in the SOC myself for several years, I have personally witnessed a high turnover rate among the SOC staff. So, I think that there is a moderate to high chance of the risk occurring, meaning this risk belongs in the upper quadrants of the matrix. And I just need to figure out if the risk carries a high or low impact on the organization as a whole.

***Raj:*** When Riya determines the quadrant, which will be covered more shortly, she can include in her report a recommendation suggesting risk mitigation, avoidance, transference, or acceptance.

***Sana:*** This recommendation could also help company management to prioritize the risk and enable the organization to balance immediate and longer-term cost and benefits.

***Raj:*** Good work, Riya. We know you'll do great in your new position.


>##### [ ✒️ explain in Hindi ]
>`Riya, ek data suraksha anusaar sebhag bhare visheshagya ke taur par, apni nayi zimmedari mein kaam karti hai. Usne SOC mein kaam kiya hai aur ab usne abhi haal hi mein manager ke taur par promote kiya gaya hai. Ab uska zimmedari hai SOC ke prabandhan, operation, suraksha aur suraksha ka. Usne apne pehle mukhya lakshya mein se ek, apne sthaayi karmchariyon ki kshamata ka moolyon ka moolyon ka moolyaankan karne ka aadesh kiya. Usne company ke lakshya ko dhyaan mein rakhte hue staffing ki aavashyaktaon ko vichar mein rakha. Riya ne staffing ke sambandh mein ek risk ka pata lagaya aur ek mulyankan kiya. Usne faisla lene ka nirdesh diya ki kya company ko is khatre ka nidan karna chahiye, iske bachne ke liye, transfer karne ke liye, ya svikrit karne ke liye. Riya ne apne naye naukri mein risk ka mulyankan karna ek mahatvapurna hissa mante hue kaha. Usne bataya ki kaise uske pas kuch data hai, jaise ki HR dwara varshik bharti report aur haftawar mein triage kiye gaye ghatnaon ki sankhya, lekin usne faisla kiya ki uske paas karyatmak risk mulyankan ke liye paryapt jaankari nahi hai. Tasha aur Manny ke saath, Riya ne risk matriks ka upayog karke samiksha aur sanketit sambhav riskon ka moolyanankan karne ka ek tareeka bataya. Riya ke anusaar, unhone pehle se hi SOC mein kai saal kaam karke, SOC karmachariyon ke madhyam se ek uchch turnover dar ko vyaktigat roop se dekha hai. Isliye, unka maanana hai ki is risk ka hone ka maamuli se uchch sanket hai, jiska arth hai ki yeh risk matriks ke oopar ke kshetron mein aata hai. Manny aur Tasha ke saath, jab Riya quadrant tay karta hai, toh woh apne report mein ek sujhav shamil karta hai jisme risk ka nidan, bachav, parivahan, ya svikriti ka sujhav diya gaya hota hai. Yah sujhav company ki prabandhan mein sahayak ho sakta hai, risk ko mulyankan karne ka anumodan karta hai, aur samay aur lambay samay tak ke labh aur nuksan ka samanvay karne mein sahayak hota hai.`

## Risk in Our Lives

On a personal level, imagine you leave your wallet in a public place and someone steals your cash. It’s wise not to carry large sums of money or keep all your cash in one place to avoid this risk. While most banks cover fraudulent transactions, it can still be a hassle to deal with frozen accounts or replace stolen cash. To minimize this risk, consider using digital payment methods or keeping only a small amount of cash on hand. Another example of risk management is when you plan a picnic. If you're worried about rain ruining your outing, you might bring along a waterproof mat or choose a backup indoor location. Similarly, buying travel insurance for a trip can help cover costs if unexpected events like flight cancellations occur. These measures help transfer the risk of financial loss from you to the insurance provider, providing peace of mind in case of unforeseen circumstances.

>##### [ ✒️ explain in Hindi ]
> ``

