import { Scenario } from '../types';

export const scenariosData: Scenario[] = [
  {
    id: 'scenario-1',
    title: 'The Viral Social Media Post',
    description: "Can you spot what's wrong with this trending post?",
    content: [
      {
        id: 'content-1',
        type: 'social-post',
        content: "BREAKING: Scientists discover that drinking hot water with lemon cures all types of cancer! Big Pharma doesn't want you to know this simple solution. SHARE to save lives!",
        source: 'Anonymous Facebook User',
        isMisleading: true,
        explanation: 'This post makes an extraordinary medical claim without any scientific evidence. It uses emotional manipulation ("save lives") and conspiracy rhetoric ("Big Pharma") to encourage sharing without verification.'
      }
    ],
    questions: [
      {
        id: 'q1-s1',
        text: 'What makes this post suspicious?',
        options: [
          {
            id: 'q1-s1-o1',
            text: 'It mentions lemons which are rarely used in medicine',
            isCorrect: false,
            explanation: "While this is unusual, it's not the main reason to be suspicious."
          },
          {
            id: 'q1-s1-o2',
            text: 'It makes an extraordinary medical claim without evidence',
            isCorrect: true,
            explanation: 'Extraordinary claims require extraordinary evidence. No single food or simple remedy cures all types of cancer.'
          },
          {
            id: 'q1-s1-o3',
            text: 'It was posted on social media rather than a news site',
            isCorrect: false,
            explanation: 'While source matters, legitimate information can be shared on social media too.'
          }
        ],
        points: 10
      },
      {
        id: 'q2-s1',
        text: 'Why does the post mention "Big Pharma"?',
        options: [
          {
            id: 'q2-s1-o1',
            text: 'To name the specific pharmaceutical companies involved',
            isCorrect: false,
            explanation: "The post doesn't name specific companies."
          },
          {
            id: 'q2-s1-o2',
            text: 'To promote transparency in the medical industry',
            isCorrect: false,
            explanation: "The post isn't advocating for transparency; it's suggesting a conspiracy."
          },
          {
            id: 'q2-s1-o3',
            text: 'To create an "us vs. them" narrative that discourages critical thinking',
            isCorrect: true,
            explanation: 'Conspiracy narratives often position a powerful, shadowy group (like "Big Pharma") against ordinary people, making readers less likely to seek verification.'
          }
        ],
        points: 15
      }
    ],
    difficulty: 'beginner',
    category: 'fake-news'
  },
  {
    id: 'scenario-2',
    title: 'Misleading Statistics',
    description: "Examine this graph from a news article. What's wrong with how the data is presented?",
    content: [
      {
        id: 'content-2',
        type: 'image',
        content: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg',
        source: 'Local News Website',
        isMisleading: true,
        explanation: 'This graph manipulates the y-axis to start at 35% instead of 0%, making a small 3% difference look dramatically larger. The title is also unnecessarily alarming given the actual data.'
      }
    ],
    questions: [
      {
        id: 'q1-s2',
        text: 'What technique is being used to mislead readers in this graph?',
        options: [
          {
            id: 'q1-s2-o1',
            text: 'Using fake data points',
            isCorrect: false,
            explanation: "The data itself may be accurate; the issue is with how it's presented."
          },
          {
            id: 'q1-s2-o2',
            text: 'Truncating the y-axis to exaggerate differences',
            isCorrect: true,
            explanation: 'By starting the y-axis at 35% instead of 0%, small percentage differences appear much larger visually.'
          },
          {
            id: 'q1-s2-o3',
            text: 'Using too many colors',
            isCorrect: false,
            explanation: 'While visual design is important, the main issue here is with the scale of the graph.'
          }
        ],
        points: 15
      },
      {
        id: 'q2-s2',
        text: 'How could this graph be presented more honestly?',
        options: [
          {
            id: 'q2-s2-o1',
            text: 'Start the y-axis at 0%',
            isCorrect: true,
            explanation: 'Starting the y-axis at 0% would provide proper visual context and show the true relative size of the differences.'
          },
          {
            id: 'q2-s2-o2',
            text: 'Use a pie chart instead',
            isCorrect: false,
            explanation: 'While a different chart type might be appropriate in some cases, the main issue here is the scale manipulation.'
          },
          {
            id: 'q2-s2-o3',
            text: 'Remove the numbers and just use the bars',
            isCorrect: false,
            explanation: 'Removing numerical data would make the graph less informative, not more honest.'
          }
        ],
        points: 10
      }
    ],
    difficulty: 'intermediate',
    category: 'misleading-stats'
  },
  {
    id: 'scenario-3',
    title: 'Political Propaganda',
    description: 'Analyze this political advertisement. What propaganda techniques are being used?',
    content: [
      {
        id: 'content-3',
        type: 'text',
        content: '"Candidate Elsayed: A Lifetime of Fighting for YOU. Unlike his opponent who sides with special interests, Elsayed puts the PEOPLE first. The choice is clear: Hope and Progress with Elsayed or return to the FAILED policies of the past."',
        source: 'Campaign Advertisement',
        isMisleading: true,
        explanation: 'This ad uses vague, emotionally charged language, presents a false dichotomy (only two possible outcomes), and makes claims without specific evidence or examples.'
      }
    ],
    questions: [
      {
        id: 'q1-s3',
        text: 'Which propaganda technique is NOT used in this advertisement?',
        options: [
          {
            id: 'q1-s3-o1',
            text: 'False dichotomy (black and white fallacy)',
            isCorrect: false,
            explanation: 'The ad presents only two options: hope/progress or failed policies, ignoring any nuance or middle ground.'
          },
          {
            id: 'q1-s3-o2',
            text: 'Appeal to fear',
            isCorrect: false,
            explanation: "The ad implies negative consequences (\"return to FAILED policies\") if viewers don't support Elsayed."
          },
          {
            id: 'q1-s3-o3',
            text: 'Direct statistical manipulation',
            isCorrect: true,
            explanation: "While the ad is misleading, it doesn't contain or manipulate specific statistics."
          }
        ],
        points: 15
      },
      {
        id: 'q2-s3',
        text: 'What makes the phrase "A Lifetime of Fighting for YOU" potentially misleading?',
        options: [
          {
            id: 'q2-s3-o1',
            text: "It's vague and doesn't provide verifiable examples",
            isCorrect: true,
            explanation: 'Without specific examples or evidence, this claim cannot be verified or assessed by voters.'
          },
          {
            id: 'q2-s3-o2',
            text: 'The capital letters are improper grammar',
            isCorrect: false,
            explanation: "While the capitalization is used for emphasis, the grammatical style isn't the main issue."
          },
          {
            id: 'q2-s3-o3',
            text: 'It mentions fighting which promotes violence',
            isCorrect: false,
            explanation: "\"Fighting for\" is a common metaphor and doesn't literally suggest violence in this context."
          }
        ],
        points: 10
      }
    ],
    difficulty: 'advanced',
    category: 'propaganda'
  }
];