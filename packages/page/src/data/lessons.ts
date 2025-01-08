import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to ELIZA",
    content: "ELIZA is an early natural language processing computer program created from 1964 to 1966 at MIT by Joseph Weizenbaum.",
    emoji: "👋",
    details: [
      {
        title: "Origins",
        content: `# Origins of ELIZA

ELIZA was developed at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum between 1964 and 1966. This groundbreaking project marked one of the first attempts at natural language processing.

## Key Points
- Created at MIT AI Lab
- Developed by Joseph Weizenbaum
- Built between 1964-1966

## Historical Context
The 1960s were a pivotal time for computer science, and ELIZA emerged during this exciting period of innovation.`
      },
      {
        title: "Significance",
        content: `# The Significance of ELIZA

ELIZA was one of the first chatterbots ever created and one of the first programs capable of attempting the Turing test.

## Major Achievements
- First natural language processing program
- Pioneer in human-computer interaction
- Demonstrated basic pattern matching capabilities

## Impact on AI
ELIZA showed that even simple pattern matching could create seemingly intelligent conversation, leading to important discussions about AI capabilities.`
      },
      {
        title: "Naming",
        content: `# The Name "ELIZA"

The program was named after Eliza Doolittle, a character in George Bernard Shaw's play "Pygmalion."

## The Connection
- Eliza Doolittle: A character who learns to speak with an upper-class accent
- ELIZA program: Learns to engage in conversation
- Both demonstrate transformation through language

## Cultural Reference
The naming reflects the program's ability to transform simple inputs into sophisticated-seeming responses, much like Eliza Doolittle's transformation in Pygmalion.`
      }
    ]
  },
  // ... other lessons remain the same
];