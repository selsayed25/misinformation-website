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
  },
  {
    id: 'scenario-4',
    title: 'The Clickbait Headline',
    description: 'Read this article headline. What makes it misleading?',
    content: [
      {
        id: 'content-4',
        type: 'text',
        content: '"You Won\'t Believe What This Celebrity Did! Click Here to Find Out!"',
        source: 'Celebrity Gossip Website',
        isMisleading: true,
        explanation: 'This headline uses sensationalist language and a clickbait format to entice readers without providing any real information about the content of the article. It creates curiosity but lacks substance.'
      }
    ],
    questions: [
      {
        id: 'q1-s4',
        text: 'What is the main issue with this headline?',
        options: [
          {
            id: 'q1-s4-o1',
            text: 'It uses all capital letters',
            isCorrect: false,
            explanation: 'While all caps can be annoying, it\'s not the main issue here.'
          },
          {
            id: 'q1-s4-o2',
            text: 'It uses sensationalist language and lacks substance',
            isCorrect: true,
            explanation: 'The headline is designed to provoke curiosity without providing any real information, which is a hallmark of clickbait.'
          },
          {
            id: 'q1-s4-o3',
            text: 'It mentions a celebrity which is irrelevant to most readers',
            isCorrect: false,
            explanation: 'While not everyone may care about celebrities, the main issue is the sensationalism and lack of substance.'
          }
        ],
        points: 10
      },
      {
        id: 'q2-s4',
        text: 'What could make this headline more informative?',
        options: [
          {
            id: 'q2-s4-o1',
            text: 'Include the celebrity\'s name and a brief description of the event',
            isCorrect: true,
            explanation: 'Providing specific details would give readers a clearer idea of what to expect and whether they want to read the article.'
          },
          {
            id: 'q2-s4-o2',
            text: 'Use a more formal tone',
            isCorrect: false,
            explanation: 'While a formal tone might be appropriate for some articles, the main issue is the lack of informative content.'
          },
          {
            id: 'q2-s4-o3',
            text: 'Add a video link to the article',
            isCorrect: false,
            explanation: 'Adding a video link doesn\'t address the issue of the headline being misleading.'
          }
        ],
        points: 15
      }
    ],
    difficulty: 'beginner',
    category: 'clickbait'
  },
  {
    id: 'scenario-5',
    title: 'The Deepfake Video',
    description: 'Watch this video. What makes it potentially misleading?',
    content: [
      {
        id: 'content-5',
        type: 'text',
        content: 'Highlight and click: https://www.youtube.com/watch?v=oxXpB9pSETo&list=PLxgMOEESA8vgmkkQM_jsD94AZfH9Ve2Vd&index=4',
        source: 'YouTube Channel',
        isMisleading: true,
        explanation: 'This video uses deepfake technology to create a realistic but entirely fabricated scenario. The person in the video is not actually saying or doing what the video suggests, which can mislead viewers into believing false information.'
      }
    ],
    questions: [
      {
        id: 'q1-s5',
        text: 'What is the main issue with this video?',
        options: [
          {
            id: 'q1-s5-o1',
            text: 'It uses deepfake technology to create a fabricated scenario',
            isCorrect: true,
            explanation: 'Deepfake technology can create realistic but false representations of people, which can mislead viewers.'
          },
          {
            id: 'q1-s5-o2',
            text: 'It has poor video quality',
            isCorrect: false,
            explanation: 'While video quality can affect viewer perception, the main issue here is the use of deepfake technology.'
          },
          {
            id: 'q1-s5-o3',
            text: 'It contains too many advertisements',
            isCorrect: false,
            explanation: 'Advertisements are common on platforms like YouTube, but they don\'t directly relate to the misleading nature of the content.'
          }
        ],
        points: 15
      },
      {
        id: 'q2-s5',
        text: 'How can viewers protect themselves from deepfake misinformation?',
        options: [
          {
            id: 'q2-s5-o1',
            text: 'Verify the source and cross-check with reputable news outlets',
            isCorrect: true,
            explanation: 'Cross-checking information with reputable sources can help verify the authenticity of the content.'
          },
          {
            id: 'q2-s5-o2',
            text: 'Only watch videos from verified channels',
            isCorrect: false,
            explanation: 'While verified channels can be more trustworthy, deepfakes can still be created and shared by anyone.'
          },
          {
            id: 'q2-s5-o3',
            text: 'Avoid watching videos altogether',
            isCorrect: false,
            explanation: 'Avoiding videos is impractical; instead, viewers should learn to critically evaluate the content they consume.'
          }
        ],
        points: 10
      }
    ],
    difficulty: 'advanced',
    category: 'deepfake'
  },
  {
    id: 'scenario-6',
    title: 'Pizzagate Conspiracy',
    description: 'Pizzagate was a massive conspiracy theory that went viral back when the 2016 presidential election cycle was in full swing. Analyze this infamous conspiracy theory. What makes it misleading?',
    content: [
      {
        id: 'content-6',
        type: 'text',
        content: 'Pizzagate is a debunked conspiracy theory that emerged during the 2016 United States presidential election cycle, falsely claiming that a child trafficking ring involving high-profile politicians was being run out of a Washington, D.C. pizzeria called Comet Ping Pong. The theory gained traction through social media and online forums, leading to real-world consequences, including a shooting incident at the pizzeria.',
        source: 'Wikipedia',
        isMisleading: true,
        explanation: 'Pizzagate is a classic example of how misinformation can spread rapidly through social media, often fueled by emotional manipulation and conspiracy rhetoric. The claims were based on misinterpretations of leaked emails and unfounded allegations, with no credible evidence to support them.'
      }
    ],
    questions: [
      {
        id: 'q1-s6',
        text: 'What is the main issue with the Pizzagate conspiracy theory?',
        options: [
          {
            id: 'q1-s6-o1',
            text: 'It was based on real events',
            isCorrect: false,
            explanation: 'The claims made in Pizzagate were entirely fabricated and lacked credible evidence.'
          },
          {
            id: 'q1-s6-o2',
            text: 'It used emotional manipulation and conspiracy rhetoric to spread misinformation',
            isCorrect: true,
            explanation: 'Pizzagate relied heavily on emotional appeals and conspiracy narratives, making it difficult for many to critically evaluate the claims.'
          },
          {
            id: 'q1-s6-o3',
            text: 'It was only shared on social media',
            isCorrect: false,
            explanation: 'While social media played a significant role in its spread, the conspiracy theory also appeared in various online forums and websites.'
          }
        ],
        points: 15
      },
      {
        id: 'q2-s6',
        text: 'How can individuals protect themselves from falling for conspiracy theories like Pizzagate?',
        options: [
          {
            id: 'q2-s6-o1',
            text: 'Always trust your gut feeling about a story',
            isCorrect: false,
            explanation: 'Gut feelings can be misleading; critical thinking and verification are essential.'
          },
          {
            id: 'q2-s6-o2',
            text: 'Verify claims with credible sources and fact-checking organizations',
            isCorrect: true,
            explanation: 'Cross-referencing information with reputable sources can help debunk false claims and conspiracy theories.'
          },
          {
            id: 'q2-s6-o3',
            text: 'Avoid discussing controversial topics altogether',
            isCorrect: false,
            explanation: 'While avoiding controversy might seem easier, engaging in informed discussions is crucial for combating misinformation.'
          }
        ],
        points: 10
      }
    ],
    difficulty: 'advanced',
    category: 'conspiracy'
  },
  {
    id: 'scenario-7',
    title: 'The Fake Charity Scam',
    description: 'Analyze this email. What makes it potentially misleading?',
    content: [
      {
        id: 'content-7',
        type: 'text',
        content: '**Subject: Urgent Help Needed!**\n\nDear Friend, We are raising funds for a charity that helps children in need. Please donate now to make a difference! Click here to donate.',
        source: 'Spam Email',
        isMisleading: true,
        explanation: 'This email uses emotional manipulation and urgency to solicit donations without providing any verifiable information about the charity or how the funds will be used.'
      }
    ],
    questions: [
      {
        id: 'q1-s7',
        text: 'What is the main issue with this email?',
        options: [
          {
            id: 'q1-s7-o1',
            text: 'It uses emotional manipulation and urgency to solicit donations',
            isCorrect: true,
            explanation: 'The email creates a sense of urgency and appeals to emotions without providing verifiable information about the charity.'
          },
          {
            id: 'q1-s7-o2',
            text: 'It has poor grammar and spelling mistakes',
            isCorrect: false,
            explanation: 'While poor grammar can be a red flag, the main issue here is the emotional manipulation and lack of transparency.'
          },
          {
            id: 'q1-s7-o3',
            text: 'It was sent from an unknown email address',
            isCorrect: false,
            explanation: 'While unknown senders can be suspicious, the main issue is the content of the email itself.'
          }
        ],
        points: 10
      },
      {
        id: 'q2-s7',
        text: 'How can individuals protect themselves from fake charity scams?',
        options: [
          {
            id: 'q2-s7-o1',
            text: 'Donate only to well-known charities with transparent practices',
            isCorrect: true,
            explanation: 'Researching charities and ensuring they are reputable can help prevent falling for scams.'
          },
          {
            id: 'q2-s7-o2',
            text: 'Ignore all emails asking for donations',
            isCorrect: false,
            explanation: 'While caution is important, not all donation requests are scams. Researching before donating is key.'
          },
          {
            id: 'q2-s7-o3',
            text: 'Only donate to charities that have a physical office',
            isCorrect: false,
            explanation: 'While physical offices can be a good sign, many legitimate charities operate online and can still be trustworthy.'
          }
        ],
        points: 15
      }
    ],
    difficulty: 'intermediate',
    category: 'scam'
  },
  {
    id: 'scenario-8',
    title: 'Stapel Affair',
    description: 'Analyze the Stapel Affair, a major scientific fraud case. What makes it misleading?',
    content: [
      {
        id: 'content-8',
        type: 'text',
        content: 'The Stapel Affair involved Dutch social psychologist Diederik Stapel, who fabricated data in dozens of published studies. His fraudulent research misled the scientific community and the public, leading to a significant scandal when the truth was uncovered.',
        source: 'Wikipedia',
        isMisleading: true,
        explanation: 'Stapel\'s fraudulent practices undermined trust in scientific research and highlighted the importance of data integrity and ethical standards in academia.'
      }
    ],
    questions: [
      {
        id: 'q1-s8',
        text: 'What is the main issue with the Stapel Affair?',
        options: [
          {
            id: 'q1-s8-o1',
            text: 'It involved a single instance of data manipulation',
            isCorrect: false,
            explanation: 'The Stapel Affair involved multiple instances of data fabrication across numerous studies, not just a single case.'
          },
          {
            id: 'q1-s8-o2',
            text: 'It highlighted the importance of data integrity and ethical standards in scientific research',
            isCorrect: true,
            explanation: 'The Stapel Affair serves as a cautionary tale about the potential for fraud in academia and the need for rigorous peer review and ethical oversight.'
          },
          {
            id: 'q1-s8-o3',
            text: 'It was a minor incident with little impact on the scientific community',
            isCorrect: false,
            explanation: 'The Stapel Affair had a significant impact on the scientific community, leading to calls for better oversight and integrity in research practices.'
          }
        ],
        points: 15
      },
      {
        id: 'q2-s8',
        text: 'How can the scientific community prevent fraud like the Stapel Affair?',
        options: [
          {
            id: 'q2-s8-o1',
            text: 'Implement stricter peer review processes and data verification',
            isCorrect: true,
            explanation: 'Stricter peer review and data verification can help catch fraudulent practices before they are published.'
          },
          {
            id: 'q2-s8-o2',
            text: 'Rely solely on the reputation of the researcher',
            isCorrect: false,
            explanation: 'Relying on reputation alone is not sufficient; rigorous checks are necessary to ensure data integrity.'
          },
          {
            id: 'q2-s8-o3',
            text: 'Ignore minor discrepancies in research data',
            isCorrect: false,
            explanation: 'Ignoring discrepancies can lead to larger issues; all data should be carefully scrutinized.'
          }
        ],
        points: 10
      }
    ],
    difficulty: 'advanced',
    category: 'fraud'
  }
];