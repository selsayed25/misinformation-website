import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Introduction to Misinformation',
    description: 'Learn the basics of what misinformation is and why it matters.',
    content: `
      # Understanding Misinformation in the Digital Age

      In today's connected world, information spreads faster than ever before. With just a few clicks, content can reach millions of people around the globe. But not all of this information is accurate or truthful.

      ## What is Misinformation?

      Misinformation refers to false or inaccurate information that is spread, regardless of intent to mislead. It's important to distinguish this from disinformation, which is deliberately created to deceive.

      ## Why Does It Matter?

      Misinformation can:
      - Influence important decisions
      - Damage public health
      - Erode trust in institutions
      - Create unnecessary fear or panic
      - Harm innocent people

      ## Common Sources of Misinformation

      - Social media
      - Messaging apps
      - Some news websites
      - Word of mouth
      - Misinterpreted scientific findings

      In the following lessons, you'll learn how to identify different types of misinformation and develop the critical thinking skills to evaluate information effectively.
    `,
    type: 'text',
    duration: 5
  },
  {
    id: 'lesson-2',
    title: 'Types of Misleading Content',
    description: 'Explore different categories of misleading information you might encounter online.',
    content: `
      # The Many Faces of Misleading Content

      Misleading content comes in many forms. Being able to recognize these different types is the first step in developing your "misinformation radar."

      ## Fake News
      Completely fabricated information presented as legitimate news. Often uses sensationalist headlines to drive clicks and shares.

      ## Misleading Presentation
      Real information that is presented with false context or in a way that distorts its meaning.

      ## Manipulated Content
      Genuine information or imagery that has been manipulated, distorted, or edited to create a false narrative.

      ## Propaganda
      Information designed to influence opinions or behaviors, often using emotional appeals rather than balanced arguments.

      ## Clickbait
      Content with misleading or exaggerated headlines designed primarily to attract attention and generate ad revenue.

      ## Satire/Parody
      Content created for humor that mimics news formats but can sometimes be mistaken as factual.

      ## Pseudoscience
      Claims presented as scientific that lack proper evidence or don't follow scientific methodology.

      In the next lesson, we'll explore the psychological factors that make us vulnerable to believing and sharing misinformation.
    `,
    type: 'text',
    duration: 8,
    quizId: 'quiz-1'
  },
  {
    id: 'lesson-3',
    title: 'The Psychology of Misinformation',
    description: 'Understand why our brains are vulnerable to false information.',
    content: `
      # Why We Fall for Misinformation

      Even the most intelligent, educated people can be fooled by misinformation. Our brains have certain tendencies that make us vulnerable.

      ## Cognitive Biases

      ### Confirmation Bias
      We tend to accept information that confirms what we already believe and reject information that contradicts our beliefs.

      ### Availability Heuristic
      We give more importance to information that comes to mind quickly, which is often information we've seen recently or repeatedly.

      ### Emotional Response
      Content that triggers strong emotions (especially fear, anger, or surprise) is more likely to be remembered and shared, regardless of accuracy.

      ## Social Factors

      ### Trust in Sources
      We're more likely to believe information from sources we trust, such as friends, family, or familiar media outlets.

      ### Social Proof
      When we see others accepting information, we're more likely to accept it ourselves.

      ### Identity and Belonging
      We often align our beliefs with groups we identify with, making us resistant to information that contradicts group narratives.

      ## Digital Environment Factors

      ### Information Overload
      The sheer volume of information we encounter makes thorough evaluation difficult.

      ### Algorithm Bubbles
      Social media algorithms often show us content similar to what we've engaged with before, potentially creating echo chambers.

      Understanding these vulnerabilities is the first step in overcoming them. In the next lesson, we'll cover practical strategies for evaluating information.
    `,
    type: 'text',
    duration: 10
  },
  {
    id: 'lesson-4',
    title: 'Fact-Checking Tools & Techniques',
    description: 'Learn practical methods to verify information you encounter online.',
    content: `
      # Your Fact-Checking Toolkit

      Developing the habit of verifying information before believing or sharing it is one of the most powerful defenses against misinformation.

      ## The SIFT Method

      ### Stop
      Pause before sharing or believing. Take a moment to consider the source and content.

      ### Investigate the Source
      Who created this information? What's their expertise? Do they have a history of reliability?

      ### Find Better Coverage
      Look for other reliable sources reporting the same information.

      ### Trace Claims, Quotes, and Media Back to the Original Context
      Follow information to its original source to understand its full context.

      ## Practical Tools

      ### Reverse Image Search
      Use Google Images or TinEye to find where an image originated and if it has been altered.

      ### Fact-Checking Websites
      Resources like Snopes, FactCheck.org, and PolitiFact specialize in verifying popular claims.

      ### Official Sources
      Government agencies, academic institutions, and established scientific organizations typically provide reliable information.

      ### Lateral Reading
      Instead of going deeper into one source, read across multiple sources to compare information.

      ## Red Flags to Watch For

      - Emotional, sensationalist language
      - Lack of author identification
      - No sources or citations
      - Clickbait headlines
      - Poor grammar or spelling
      - Requests to "share before they take this down"
      - Claims of "what the media won't tell you"

      Practice applying these techniques to information you encounter daily. In the next section, you'll put your skills to the test with some realistic scenarios.
    `,
    type: 'text',
    duration: 12,
    quizId: 'quiz-2'
  }
];