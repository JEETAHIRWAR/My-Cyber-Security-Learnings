<div align="center" style="font-size:28px; color:#5755FE; background-color:#FFF7FC;">
  <h1>SECURITY PRINCIPLES 👻</h1>
</div>

---

## The CIA Triad 🖌️

The CIA Triad is a way to understand and ensure security in information systems. It stands for Confidentiality, Integrity, and Availability.

>##### [ ✒️ explain in Hindi ]
> `CIA Triad ek tareeka hai information systems mein suraksha ko samajhne aur ensure karne ka. Yeh Confidentiality, Integrity, aur Availability ke liye stand karta hai.`

 01. Confidentiality - This means only authorized people can access certain information, and it should be protected from being shared with unauthorized individuals.
>##### [ ✒️ explain in Hindi ]
 > `01. Confidentiality: Iska matlab hai sirf authorized log hi kuch khaas jaankari tak pahunch sakte hain, aur yeh unauthorized logon se share hone se bachani chahiye. `
 02. Integrity - This is about the accuracy and reliability of information. it ensures that data is complete, accurate, and consistent, and it con be trusted for its intended purpose.
>##### [ ✒️ explain in Hindi ]
 > `02. Integrity: Yeh jaankari ke sahi aur vishwasniy hone ke baare mein hai. Yeh yeh assure karta hai ki data poori tarah se sahi, satik, aur consistent hai, aur ise uske iraade ke liye vishwasniya kiya ja sakta hai.`
 03. Availability - This refers to the accessibility of systems and data when users need them. it ensures that resources are accessible and usable when required, without any interruptions or delays.
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

## Methods of Authentication
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

## Proving Identity

> Let's dive deeper into authentication. Many of us are familiar with different ways of proving our identity, often without even realizing it. Typically, we authenticate ourselves by using something we know, like a password. That's one way of proving who we are. Then, we might use something we have, like a card or token. That adds another layer of authentication.

>##### [ ✒️ explain in Hindi ]
>`Chaliye authentication ke baare mein aur gehraai se jaante hain. Kai log humein apni pehchaan saabit karne ke alag-alag tareeke acche se jaante hain, shayad bina jaane. Aam taur par, hum apni pehchaan ko saabit karne ke liye kuch jaante hain, jaise ki ek password. Yeh humari pehchaan ka ek tareeka hai. Fir, hum kuch paas rakhte hain, jaise ki ek card ya token. Yeh aur ek authentication ka layer add karta hai.`

For example, when you go to the bank and use your ATM card, you might need to enter a PIN. You have the card and know the PIN, so that's multi-factor authentication. Just having the card isn't enough to access your money.

>##### [ ✒️ explain in Hindi ]
>`For example, jab aap bank jaate hain aur apna ATM card istemal karte hain, toh aapko PIN daalna hota hai. Aapke paas card hota hai aur aap PIN jaante hain, isliye yeh multi-factor authentication hai. Bas card rakhna kaafi nahi hota aapke paise tak pahunchne ke liye.`

And now, we're also using biometrics, like fingerprints or facial recognition, to prove who we are. This adds another layer of security to the authentication process.

>##### [ ✒️ explain in Hindi ]
>`Aur ab, hum biometrics ka bhi istemal kar rahe hain, jaise ki fingerprints ya facial recognition, apni pehchaan ko saabit karne ke liye. Yeh authentication process mein aur bhi ek security layer add karta hai.`

## Non-repudiation
Non-repudiation means you can't deny something you did. In e-commerce and electronic transactions, it's crucial to trust that people won't lie about their actions, like making a purchase and then saying they didn't. Non-repudiation methods ensure that everyone is accountable for what they do.

>##### [ ✒️ explain in Hindi ]
>`Non-repudiation ka matlab hai ki aap apne kiye gaye kaam ko inkaar nahi kar sakte. E-commerce aur electronic transactions mein, logon par bharosa karna zaroori hai ki woh apne kiye gaye kaamon ka jhoot nahi bolenge, jaise ki kharidari karke baad mein kehna ki woh nahi kiya. Non-repudiation methods yeh ensure karte hain ki har koi apne kiye gaye kaamon ke liye zimmedar hai.`


## Privacy
Privacy is about having control over who gets your personal information. While security and privacy both focus on protecting personal data, privacy is specifically about controlling how your information is shared. With more data being collected and stored digitally, there's a growing need for privacy laws and compliance. Laws like the **General Data Protection Regulation (GDPR)** in Europe and state regulations in the US set rules for how companies handle personal data. These laws apply to any organization, regardless of where they're based, if they handle data from people in that region. Making sure companies follow these laws is important to avoid penalties for mishandling personal information.


>##### [ ✒️ explain in Hindi ]
>`Privacy ka matlab hai apne personal jaankari ka control rakhna. Jabki security aur privacy dono personal data ki suraksha par dhyan dete hain, privacy specifically yeh decide karta hai ki aapki jaankari kaise share hoti hai. Digital mein jaada data collect ho raha hai, isliye privacy laws aur compliance ki zaroorat badh rahi hai. Laws jaise GDPR Europe mein aur US ke state regulations set karte hain ki companies personal data ko kaise handle karein. Yeh laws kisi bhi organization par apply hote hain, chahe woh kahi bhi ho, agar unka data us region ke logon ka hai. Companies ko yeh laws follow karna zaroori hai taki personal information ka misuse se penalties se bacha ja sake.`

### Privacy in the Working Environment
Privacy is a big part of keeping information safe. Once we know how private the information is, we can figure out what rules to follow. Different places have different rules for privacy. In the US, HIPAA makes sure medical information stays private. In the EU, the GDPR lets people control what companies can do with their personal information. As a security professional, it's important to know about privacy laws everywhere your company does business. If you're working in other countries, you need to follow their privacy rules too.

>##### [ ✒️ explain in Hindi ]
>`Privacy jaankari ko surakshit rakhne ka bada hissa hai. Jab humein pata chalta hai ki jaankari kitni private hai, tab humein pata chalta hai ki humein kaunsi niyamon ka palan karna chahiye. Alag-alag jagahon par privacy ke alag-alag niyam hote hain. US mein, HIPAA medical jaankari ko private rakhne ka dhyan rakhta hai. EU mein, GDPR logo ko control deta hai ki companies unki personal jaankari ka kya karein. Ek suraksha professional ke liye zaroori hai ki woh jaanen ki unki company ka business kahan-kahan hota hai aur wahan privacy laws kya hain. Agar aap doosre deshon mein kaam karte hain, toh aapko unke privacy rules bhi follow karna chahiye.`


