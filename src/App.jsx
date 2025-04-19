import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";
import { useState } from "react";
import AnswerChoice from "./components/AnswerChoice/AnswerChoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const questionsArray = [
  {
    questionNumber: 1,
    questionText:
      "You’re in potions class, and Neville accidentally messed up again. Professor Snape is humiliating him in front of the class, screaming from the top of his lungs and issuing him a week of detentions. Whilst this happens, Neville looks red and is about to burst into tears. As Neville's closest friend, what do you do?",
    answerChoices: [
      "You scream back at Professor Snape in total outrage. It was just a mistake on Neville's part and you tell Snape he's being a total d***. It gets you in detentions with Neville too.",
      "You avoid intervening publicly. Your mind has been working, and you stay after class to ‘casually’ mention to Snape that if he keeps targeting Neville, some curious letters about his teaching style might end up with Dumbledore. You notice Snape's lip curl as you smile politely. Nothing is threatened - just implied.",
      "You subtly take notes of exactly what happened - who said what, when, and how. You plan to draft a well-argued, evidence-based letter to Dumbledore, citing both Hogwarts’ student rights and historical precedents for teacher misconduct.",
      "You stand next to Neville the whole time, keeping silent. Once Snape finishes his humiliation, you hug Neville and let him know how despicable Snape was being.",
    ],
  },
  {
    questionNumber: 2,
    questionText:
      "You've been assigned a group project for Charms, but apart from you, no one in the group has done their part. The deadline is tomorrow, and you're the only one who’s prepared anything. What do you do?",
    answerChoices: [
      "You tell your group straight-up how unfair and irresponsible they’ve been. Then, when it's time to present, you announce to the class and Professor Flitwick that you completed the project alone. If that risks your grade, so be it. You’d rather lose points than them take credit for something they didn’t do.",
      "You act like everything’s fine, taking the lead during the presentation and making the group look good. Afterward, you approach Flitwick and hand him an extra “reflection” document you worked on that highlights your personal process, the spell research you did, and the way you 'guided your team'.",
      "You document everything - agreements, notes, dates - showing that you did the work and they didn’t. You finish your part to perfection and submit a detailed note to Professor Flitwick explaining the situation. You’re not trying to get them in trouble, but facts are facts - you deserve your grade.",
      "You stay up late helping your groupmates get their parts together so you can all present something halfway decent. You’re frustrated, but you believe everyone deserves a second chance - and you don’t want anyone to fail if you can help it.",
    ],
  },
  {
    questionNumber: 3,
    questionText:
      "You overhear someone saying the Quidditch captain has a bias and isn’t planning to pick you for the team, no matter how well you perform at tryouts. The tryouts are tomorrow, and you really want a spot. What do you do?",
    answerChoices: [
      "You show up to tryouts and give it absolutely everything - harder, louder, riskier than anyone else. If they’re biased, you’ll leave them no choice but to see your talent. And if they don’t pick you? You’ll confront them directly, face-to-face, and demand an explanation.",
      "You charm someone close to the captain to plant a few well-timed compliments about your flying. Then, before tryouts, you mention to the captain that your family’s just donated a set of new broom polishers to the team shed. You then fly just well enough to justify the choice they’ve already made in your favor.",
      "You spend the night studying the team's favourite Quidditch tactics and reviewing past matches to find exactly what the captain looks for in a player. You tailor your tryout performance precisely to those expectations - using skill, analysis, and creativity to stand out in a way they can’t ignore.",
      "You decide to focus on flying your best and trust that fairness will win out in the end. You help others at the tryout who seem nervous or lost - after all, everyone deserves a fair shot. If you don’t get picked, at least you’ll know you stayed true to who you are.",
    ],
  },
  {
    questionNumber: 4,
    questionText:
      "You discover the Room of Requirement and find a powerful magical object inside - one that could give you a major edge in your studies. No one else knows it's there. What do you do?",
    answerChoices: [
      "You pick it up fast, staring at it in wonder, and then feel your conscience kick in strongly. As tempting as it is, using something no one else has access to just feels wrong. You leave it behind - you’d rather earn your place honestly than win through an unfair advantage.",
      "You immediately think about how to use it smartly to your advantage. You stash the item somewhere only you can access, and begin using it to climb the academic ladder, gain recognition, and position yourself for future power. No one needs to know where your sudden improvement came from.",
      "You study the object thoroughly - the enchantments, runes, its history, its magical theory. This is a once-in-a-lifetime learning opportunity, and your curiosity is too powerful to ignore. You don’t use it carelessly, but you do test its effects... for research, of course.",
      "You take time to understand what the object is and whether it’s safe or fair to use. You write down everything you learned about the room and plan to tell the professors about what you have discovered. If this could help people learn, it should be shared for everyone to use.",
    ],
  },
  {
    questionNumber: 5,
    questionText:
      "During the Transfiguration exam, you notice a classmate is clearly cheating by using a spell to copy answers from someone else. They’re not a close friend, but they’re not exactly a foe either - just someone desperate to pass. Professor McGonagall doesn’t notice. What do you do?",
    answerChoices: [
      "You’re angered and you can’t let it slide. After the exam, you pull the student aside and tell them firmly and directly: you saw what they did, and it’s not fair to the rest of you who studied. You don’t threaten them - you challenge them. “Next time, do it right,” you say. “Be better.”",
      "You keep it to yourself - but you do make a mental note. Later, you let them know you saw what they did and suggest that they might want to return the favor sometime in the future. You don’t plan to use it right away, but it never hurts to have leverage.",
      "You take little notice, then move on - you’re too focused on your exam, not someone else’s. If they’re cheating, it’ll catch up to them eventually. You trust the system (and logic) to balance things out over time.",
      "You say nothing, but you feel for them - maybe they’re struggling more than you knew. After the exam, you approach them gently and offer to help them study next time. You don’t like what they did, but you’d rather help them do better than see them punished.",
    ],
  },
  {
    questionNumber: 6,
    questionText:
      "It’s the Welcome Feast. The first-years have been sorted, everyone’s chatting, laughing, and finding their place at the House tables - except one nervous-looking first-year who’s been sorted into your house and is sitting completely alone. No one seems to notice. You don’t know them. What do you do?",
    answerChoices: [
      "You grab your plate, walk right over, and sit with them like it’s no big deal. You make loud conversation to pull others in, cracking jokes until the tension breaks. No one eats alone on your watch - not tonight.",
      "You clock the situation instantly. Before anyone else acts, you approach them, offer a friendly smile, and invite them to sit near you. You make sure they feel included, and also that they remember who made them feel that way.",
      "You notice them right away - they’re not just lonely, they look overwhelmed. You recall how confusing your own first feast was, so you write them a short enchanted note (folded into a tiny origami phoenix) that says: “Everything will be fine. Sit with me if you’d like.” Then you send it fluttering their way.",
      "You quietly move over and sit beside them. You ask their name, where they’re from, and make sure they feel welcome. You don’t make a big fuss - you just want them to feel seen, safe, and part of something.",
    ],
  },
  {
    questionNumber: 7,
    questionText:
      "During breakfast, an owl drops a letter into your lap that's not for you. You glance at the name and realise it’s meant for someone you know... and inside, you can see that it’s clearly personal, possibly embarrassing, and definitely not for your eyes. What do you do?",
    answerChoices: [
      "You don't read it. Not even a word. You rush over and hand-deliver it to the person it was meant for without second thought, though in doing so you attract some attention. If it were you, you'd want someone to do the same for you.",
      "You read just enough to understand what it’s about - not to spread it, but to hold onto it. You return the letter with a polite smile, acting like you never opened it. But now you know something... and you’re storing that information away in case it ever becomes useful.",
      "Your curiosity tempts you, but  you resist. Instead, you think to yourself: how did this mistake happen? Was the owl confused by handwriting? Magical interference? You return the letter, untouched and then continue wondering about potential owl-post delivery flaws.",
      "You carefully protect the letter from prying eyes and return it discreetly without any attention, checking in quietly that the person’s okay. You don’t mention your suspicions, and you make sure no one else talks about it either. People deserve privacy and dignity.",
    ],
  },
  {
    questionNumber: 8,
    questionText:
      "You walk into the common room and overhear a group of your friends talking about someone behind their back - laughing, exaggerating stories, and saying things you know aren’t true. The person they’re talking about isn’t perfect, but they don’t deserve this. Your friends haven’t noticed you. What do you do?",
    answerChoices: [
      "You step in and call them out, loud and clear. “That’s not fair, and you know it.” You don’t care how awkward it gets, you’d rather lose face than stay silent while someone gets trashed behind their back.",
      "You listen in and remember exactly who was saying what. Later, you drop a subtle comment to the victim, letting them know someone has been spreading lies. You never name names but say just enough to make sure you’re seen as a trustworthy ally, while keeping control of the narrative.",
      "You don’t jump in - you listen, process, and consider. Later, you leave a witty, anonymous note on the common room bulletin board: “Gossip is the tool of those who lack the ability to be interesting on their own.” You let the truth do its quiet work while you return to your book.",
      "You don’t join in. Instead, you quietly leave, and later check in on the victim. That kind of gossip isn’t okay with you, and you want the victim to know that whatever happens, they have a true friend in you.",
    ],
  },
  {
    questionNumber: 9,
    questionText:
      "While browsing in a dusty little shop in Hogsmeade, you spot a student you vaguely know quietly buying a magical item from behind the counter. It’s something banned at Hogwarts: potentially dangerous, definitely not allowed. The shopkeeper seems to be in on it. No one notices you saw. What do you do?",
    answerChoices: [
      "You walk right up and ask what’s going on. You let them know exactly what you saw and that you aren't afraid to call it out. If it turns out to be serious, you let them know you're fully ready to tell a professor, no matter what fallout comes.",
      "You don’t say a word. Instead, you watch carefully - who bought it, who sold it, and how they left. That kind of information could be valuable later. Whether it’s blackmail, bargaining power, or protection, you’ve just gained a new piece on the board - and you know how to play it.",
      "You’re immediately curious about the item. How is it used? What makes it so dangerous? You don’t interfere - you go home and research it. Understanding the object is more important to you than judging the people involved.",
      "You don’t confront them, but the whole thing leaves you unsettled. You quietly let a trusted professor know what you saw, just in case it puts someone in danger. You don’t want anyone to get hurt.",
    ],
  },
  {
    questionNumber: 10,
    questionText:
      "A prefect unfairly deducts house points from you and then lies about what happened when a professor asks. You know they’re respected and trusted, so whatever you say will likely be dismissed. You’re angry, and it’s not just about the points - it’s about the lie. What do you do?",
    answerChoices: [
      "You can’t let a lie like that slide. You confront the prefect directly, face-to-face and in front of the professor. Whether they admit it or not, they’ll know you won’t stay quiet. If that gets you into more trouble, whatever. You stand up for the truth, no matter the cost.",
      "You let it go, for now. But you quietly start observing that prefect’s habits, weaknesses, and mistakes. Sooner or later, they’ll slip up again - and when they do, you’ll be the one holding the truth.",
      "You gather evidence - the exact timing, witness accounts, contradictions in the prefect’s version. Then you calmly and logically submit it to the head of house in writing. You’re not seeking drama - just truth, proven with facts.",
      "You let it go - not because it’s okay, but because you believe the truth comes out eventually. You focus on being the kind of student whose actions speak louder than accusations. You know people notice character over time.",
    ],
  },
  {
    questionNumber: 11,
    questionText:
      "You and a friend both sign up for the annual Hogwarts Talent Show. Before auditions, you shared an original spell combination and stage concept you'd been working on for weeks with your friend. At the auditions, your friend performs your exact routine. They’re selected, and they’re just acting like it was all their idea. What do you do?",
    answerChoices: [
      "You get into a huge heated argument with them. You tell them, to their face, in front of everyone watching: “That was mine and you know it.” You might lose a friend, but you make sure to stand up for yourself.",
      "You act supportive, even flattered, when they perform your routine and get picked. Then, right before the final performance, you suggest one tiny tweak to their wandwork to make the spell 'hit harder'. They believe you. On stage, the change causes the routine to fall apart, leaving your friend in embarassment.",
      "You’re furious, but only for a moment. Then, your mind starts racing. You go back to the drawing board and start crafting something even better - a spell combo so original and complex they couldn’t copy it if they tried. Ideas are infinite. Let them have your old one.",
      "You’re hurt, but you don’t retaliate. Instead, you quietly withdraw from the friendship out of principle. You know you created something valuable, and if they need to steal it to shine, that says more about them than about you.",
    ],
  },
  {
    questionNumber: 12,
    questionText:
      "While shelving books in the Restricted Section of the library for detention, you come across a magical book that responds to your presence. It whispers answers to questions - not just academic ones, but secrets about people, hidden school history, and forbidden spells. You’re completely alone. No one knows you’ve found it. What do you do?",
    answerChoices: [
      "You hesitate for a brief moment and then crack the book open and demand answers. You ask the book about forbidden spells, hidden truths, secret Hogwarts passages — not to hurt anyone, but because knowing this stuff exhilarates you, no matter how dangerous.",
      "You realise instantly what this book is: a weapon. You don’t tell anyone. You learn everything you can from it - about your professors, your rivals, your future. You don’t plan to use the information recklessly - but when the time is right, you’ll be ready.",
      "You immediately start testing its limits. You ask it about ancient magic, unsolved riddles, forbidden history. You take careful notes and cross-reference with other sources. You’re conducting a private research project. And the potential? Astounding.",
      "You ask it one question - just one - to see what it knows. But the way it answers gives you chills. You close it gently and walk away, choosing not to use something that feels wrong. You’d rather work things out the honest way.",
    ],
  },
  {
    questionNumber: 13,
    questionText:
      "You’ve noticed someone in your year is clearly struggling with magic. They’re getting spells wrong, falling behind, and becoming more withdrawn - but they’re too proud to ask for help. You’re not close friends, but you’ve seen how much they’re slipping. What do you do?",
    answerChoices: [
      "You walk right up to them after class and say, “You very clearly need help.” You don’t sugar-coat it, but you make it clear you're offering support. Whether they like it or not, you’ll be there in the common room tonight, ready to work through spells together. No one gets left behind on your watch.",
      "You approach them with a deal: “I help you catch up, and you owe me one.” You frame it as a smart alliance, not charity. You get the satisfaction of helping - and possibly a favor owed in return. Pride stays intact, and you stay ahead of the game.",
      "You discreetly leave a list of study resources that have helped you on their desk - books, notes, clever spell hacks you’ve developed. You don’t include your name. You just figure if someone’s too proud to ask for help, they might still accept it if it’s anonymous.",
      "You start sitting near them in class, quietly helping when you can - no big gestures, just support where it’s needed. Eventually, you slip them a note offering to revise together. You don’t need thanks - you just want to make sure they don’t feel hopeless.",
    ],
  },
  {
    questionNumber: 14,
    questionText:
      "You’ve just been offered two career paths after Hogwarts. Option A is a stable, well-paying, and respectable Ministry job. Option B is risky, unconventional, and might not work out — but if it does you’d be doing something groundbreaking that could have a real impact on the magical world. What do you do?",
    answerChoices: [
      "Easy. You take the risky one. It might not be safe, but you want your life to matter - not just tick boxes. You’d rather fail chasing something big than spend your days behind a desk wondering “what if?”",
      "You take the risky one - but cautiously. You already have a backup plan, a network of contacts, and a strategy to make it work. You don’t just want success - you want influence. And you’ll do whatever it takes to make it happen.",
      "You study both options in depth - not just the roles, but their long-term learning potential. In the end, you choose the one that challenges you the most intellectually and wil nurture your growth.",
      "You choose the Ministry job. You value consistency, predictability and the ability to build something steady over time. Success to you isn’t about glory - it’s about working hard, being part of a team, and living with integrity.",
    ],
  },
  {
    questionNumber: 15,
    questionText:
      "A magical puzzle - a set of enchanted ancient runes - has been set up in your common room. Whoever cracks it unlocks a rare prize. You’ve been staring at it for a while now and feel like you're close. But there’s a catch: once it’s solved, the puzzle locks forever, meaning only one person can claim the reward. What do you do?",
    answerChoices: [
      "You give it your absolute best shot for the prize, with the thrill of everyone watching you intently. If someone else had solved it first, you’d have been annoyed at yourself for not trying.",
      "You make sure no one’s watching and the common room is clear - then you solve it quickly, quietly, and alone. Whether the prize is power, knowledge, or status, it’s yours now. You’ve waited patiently for the right moment.",
      "You dive in completely - not for the prize, but because the puzzle itself is irresistible. You sketch it, test patterns, lose track of time. If you solve it, great. If not, you’ll still have the notes. The reward is the route, not the loot.",
      "You leave it - or better yet, ask the others if anyone wants to try solving it together. You’d feel weird taking something only for yourself when it's been sitting there in a shared space. Solving it as a team would feel more rewarding.",
    ],
  },
];

const scoresArray = [0, 0, 0, 0];

let scoreTracker = "";

const scoreTrackerHistory = [];

const fourHouses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export default function App() {
  const [isHatHover, setIsHatHover] = useState(false);
  const [question, setQuestion] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultContent, setResultContent] = useState(<p></p>);

  function handleHatHover() {
    setIsHatHover(true);
  }

  function handleHatLeave() {
    setIsHatHover(false);
  }

  function handleHatClick() {
    const nextQuestion = question + 1;
    setQuestion(nextQuestion);
    setShuffledAnswers(shuffleArray(questionsArray[nextQuestion-1].answerChoices));
  }

  function handleBackClick() {
    if (scoreTracker === "gryffindor") {
      scoresArray[0] = scoresArray[0] - 1;
    } else if (scoreTracker === "slytherin") {
      scoresArray[1] = scoresArray[1] - 1;
    } else if (scoreTracker === "ravenclaw") {
      scoresArray[2] = scoresArray[2] - 1;
    } else if (scoreTracker === "hufflepuff") {
      scoresArray[3] = scoresArray[3] - 1;
    }

    scoreTracker = scoreTrackerHistory.pop();
    const prevQuestion = question - 1;
    setQuestion(prevQuestion);
    setIsHatHover(false);
    if (prevQuestion > 0) {
      setShuffledAnswers(
        shuffleArray(questionsArray[prevQuestion - 1].answerChoices)
      );
    }
  }

  function handleAnswerSelection(event) {
    const answerSelection = event.target.textContent;
    if (answerSelection === questionsArray[question - 1].answerChoices[0]) {
      scoresArray[0] = scoresArray[0] + 1;
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[1]
    ) {
      scoresArray[1] = scoresArray[1] + 1;
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[2]
    ) {
      scoresArray[2] = scoresArray[2] + 1;
    } else {
      scoresArray[3] = scoresArray[3] + 1;
    }
    scoreTrackerHistory.push(scoreTracker);
    if (answerSelection === questionsArray[question - 1].answerChoices[0]) {
      scoreTracker = "gryffindor";
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[1]
    ) {
      scoreTracker = "slytherin";
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[2]
    ) {
      scoreTracker = "ravenclaw";
    } else {
      scoreTracker = "hufflepuff";
    }
    
    const nextQuestion = question + 1;
    setQuestion(nextQuestion);
    setShuffledAnswers(
      shuffleArray(questionsArray[nextQuestion - 1].answerChoices)
    );
  }

  function handleResultClick() {
    if (isOnlyHighestScore()) {
      if (isOnlySecondHighestScore()) {
        setResultContent(
          <div className="results-page">
            <img
              src="/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <div className="result-div">
              <p className="result-text">
                You have been sorted into {winningHouse()}, but also hold some
                traits of {secondHouse()}!
              </p>
              <div className="logos-div">
                <img
                  src={`/${winningHouse().toLowerCase()}-logo.png`}
                  className="house-logo-result-single"
                />
              </div>
            </div>
          </div>
        );
      } else {
        setResultContent(
          <div className="results-page">
            <img
              src="/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <div className="result-div">
              <p className="result-text">
                You have been sorted into {winningHouse()}.
              </p>
              <div className="logos-div">
                <img
                  src={`/${winningHouse().toLowerCase()}-logo.png`}
                  className="house-logo-result-single"
                />
              </div>
            </div>
          </div>
        );
      }
    } else {
      if (occurrencesOfHighestScore() === 2) {
        setResultContent(
          <div className="results-page">
            <img
              src="/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <div className="result-div">
              <p className="result-text">
                {" "}
                You are a hatstall between {winningHouse()}.
              </p>
              <div className="logos-div">
                {winningHouseIndArray().map((index) => (
                  <img
                    src={`/${fourHouses[index].toLowerCase()}-logo.png`}
                    className="house-logo-result"
                  />
                ))}
              </div>
            </div>
          </div>
        );
      } else if (occurrencesOfHighestScore() === 3) {
        setResultContent(
          <div className="results-page">
            <img
              src="/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <div className="result-div">
              <p className="result-text">
                You are a hatstall between {winningHouse()}!!
              </p>
              <div className="logos-div">
                {winningHouseIndArray().map((index) => (
                  <img
                    src={`/${fourHouses[index].toLowerCase()}-logo.png`}
                    className="house-logo-result"
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }
    }
    setShowResult(true);
  }

  function shuffleArray(arr) {
    const arrCopy = [...arr]; // make copy of arr and assign to arrCopy
    for (let i = arrCopy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // produces a random integer between 0-->i inclusive
      [arrCopy[i], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[i]]; // swaps item at index position i with item is randomly generated index
    }
    return arrCopy;
  }

  function highestScore() {
    const largestValue = Math.max(...scoresArray);
    return largestValue;
  }

  function isOnlyHighestScore() {
    const largestValue = highestScore();
    const largestValueArray = scoresArray.filter(
      (value) => value === largestValue
    );
    if (largestValueArray.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  function secondHighestScore() {
    const largestValue = highestScore();
    const scoresArrayWithoutHighest = scoresArray.filter(
      (value) => value !== largestValue
    );
    const secondLargestValue = Math.max(...scoresArrayWithoutHighest);
    return secondLargestValue;
  }

  function isOnlySecondHighestScore() {
    const secondLargestValue = secondHighestScore();
    const secondLargestValueArray = scoresArray.filter(
      (value) => value === secondLargestValue
    );
    if (secondLargestValueArray.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  function occurrencesOfHighestScore() {
    const largestValue = highestScore();
    const largestValueArray = scoresArray.filter(
      (value) => value === largestValue
    );
    return largestValueArray.length;
  }

  function winningHouse() {
    if (isOnlyHighestScore()) {
      if (scoresArray.indexOf(highestScore()) === 0) {
        return "Gryffindor";
      } else if (scoresArray.indexOf(highestScore()) === 1) {
        return "Slytherin";
      } else if (scoresArray.indexOf(highestScore()) === 2) {
        return "Ravenclaw";
      } else {
        return "Hufflepuff";
      }
    } else {
      if (occurrencesOfHighestScore() === 2) {
        const indArr = [];
        let i = -1;
        while ((i = scoresArray.indexOf(highestScore(), i + 1)) !== -1) {
          indArr.push(i);
        }
        return `${fourHouses[indArr[0]]} and ${fourHouses[indArr[1]]}`;
      } else if (occurrencesOfHighestScore() === 3) {
        const indArr = [];
        let i = -1;
        while ((i = scoresArray.indexOf(highestScore(), i + 1)) !== -1) {
          indArr.push(i);
        }
        return (
          <>
            {fourHouses[indArr[0]]}, {fourHouses[indArr[1]]} <u>AND</u>{" "}
            {fourHouses[indArr[2]]}
          </>
        );
      }
    }
  }

  function winningHouseIndArray() {
    const indArr = [];
    let i = -1;
    while ((i = scoresArray.indexOf(highestScore(), i + 1)) !== -1) {
      indArr.push(i);
    }
    return indArr;
  }

  function secondHouse() {
    if (isOnlySecondHighestScore()) {
      const index = scoresArray.indexOf(secondHighestScore());
      return fourHouses[index];
    }
  }

  let pageContent;

  if (question === 0) {
    pageContent = (
      <div className="four-colours">
        <HouseColourBackground
          backgroundColor="#95103b"
          imagePath="/gryffindor-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#1d7452"
          imagePath="/slytherin-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#97b6d3"
          imagePath="/ravenclaw-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#ffebb9"
          imagePath="/hufflepuff-logo.png"
        />
        <img
          src="/hogwarts-sorting-hat.png"
          className={isHatHover ? "sorting-hat-enlarged" : "sorting-hat"}
          onMouseEnter={handleHatHover}
          onMouseLeave={handleHatLeave}
          onClick={handleHatClick}
        />
        <p
          className={isHatHover ? "sorting-hat-greet" : "sorting-hat-not-greet"}
          onMouseEnter={handleHatHover}
          onMouseLeave={handleHatLeave}
          onClick={handleHatClick}
        >
          Let's begin the sorting ceremony...
        </p>
      </div>
    );
  } else if (question >= 1 && question <= 15) {
    pageContent = (
      <div className="answer-choices">
        {shuffledAnswers.map((answer) => (
          <AnswerChoice
            onAnswerClick={handleAnswerSelection}
            textContent={answer}
          />
        ))}
        <div className="parchment-div">
          <img src="/parchment.png" className="parchment"></img>
          <h1 className="question-heading">Question {question}</h1>
          <p className="question-text">
            {questionsArray[question - 1].questionText}
          </p>
          <FontAwesomeIcon
            icon={faBackward}
            className="backward-icon"
            onClick={handleBackClick}
          />
        </div>
      </div>
    );
  } else if (question === 16 && showResult === false) {
    pageContent = (
      <div className="four-colours">
        <HouseColourBackground
          backgroundColor="#95103b"
          imagePath="/gryffindor-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#1d7452"
          imagePath="/slytherin-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#97b6d3"
          imagePath="/ravenclaw-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#ffebb9"
          imagePath="/hufflepuff-logo.png"
        />
        <p className="click-for-result" onClick={handleResultClick}>
          Click here to join your house!
        </p>
        <FontAwesomeIcon
          icon={faBackward}
          className="backward-icon-end"
          onClick={handleBackClick}
        />
      </div>
    );
  } else if (question === 16 && showResult === true) {
    pageContent = resultContent;
  }

  return <div className="page">{pageContent}</div>;
}
