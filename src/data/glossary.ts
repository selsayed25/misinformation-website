import { GlossaryItem } from '../types';

export const glossaryData: GlossaryItem[] = [
  {
    term: 'Misinformation',
    definition: 'False information that is spread, regardless of intent to mislead.',
    examples: [
      "Sharing an article with outdated statistics without realizing they've been updated",
      'Posting a photo of a storm from 2018 thinking it shows a current weather event'
    ],
    techniques: ['Sharing without verification', 'Misattribution', 'Outdated content'],
    relatedTerms: ['Disinformation', 'Fake News', 'Propaganda']
  },
  {
    term: 'Disinformation',
    definition: 'Deliberately misleading or biased information; manipulated narrative or facts.',
    examples: [
      'State-sponsored campaigns creating fake social media accounts to influence elections',
      'Organizations creating websites that look like news outlets but spread false information'
    ],
    techniques: ['Fabrication', 'Manipulation', 'Strategic deception'],
    relatedTerms: ['Misinformation', 'Propaganda', 'Information warfare']
  },
  {
    term: 'Propaganda',
    definition: 'Information, especially of a biased or misleading nature, used to promote a political cause or point of view.',
    examples: [
      'Wartime posters depicting enemies in dehumanizing ways',
      'Political campaigns that use emotional manipulation rather than policy discussion'
    ],
    techniques: ['Appeal to emotion', 'Black and white fallacy', 'Bandwagon', 'Card stacking'],
    relatedTerms: ['Disinformation', 'Political communication', 'Persuasion']
  },
  {
    term: 'Clickbait',
    definition: 'Content designed to attract attention and encourage visitors to click on a link, often at the expense of accuracy.',
    examples: [
      'Headlines that promise shocking revelations but deliver mundane content',
      "\"You won't believe what happened next\" style articles"
    ],
    techniques: ['Sensationalism', 'Emotional triggers', 'Curiosity gaps'],
    relatedTerms: ['Yellow journalism', 'Online advertising', 'Content marketing']
  },
  {
    term: 'Deepfake',
    definition: "Synthetic media where a person's likeness is replaced with someone else's using AI techniques.",
    examples: [
      'Videos appearing to show politicians saying things they never said',
      'AI-generated photos of non-existent people used in fake profiles'
    ],
    techniques: ['AI face swapping', 'Voice synthesis', 'Neural networks'],
    relatedTerms: ['Digital manipulation', 'Synthetic media', 'AI ethics']
  },
  {
    term: 'Echo Chamber',
    definition: 'An environment where a person only encounters beliefs or opinions that coincide with their own.',
    examples: [
      'Social media feeds algorithmically showing content that aligns with previous interests',
      'News consumption limited to sources that match political leanings'
    ],
    techniques: ['Algorithmic filtering', 'Self-selection', 'Group polarization'],
    relatedTerms: ['Filter bubble', 'Confirmation bias', 'Cognitive dissonance']
  },
  {
    term: 'Confirmation Bias',
    definition: "The tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs.",
    examples: [
      'Only engaging with news that supports political views',
      'Dismissing scientific studies that contradict personal beliefs'
    ],
    techniques: ['Selective attention', 'Biased interpretation', 'Selective recall'],
    relatedTerms: ['Cognitive bias', 'Echo chamber', 'Filter bubble']
  },
  {
    term: 'Cherry Picking',
    definition: 'Selectively choosing data that supports a position while ignoring contradictory evidence.',
    examples: [
      "Citing only studies that show a product works while ignoring those that show it doesn't",
      'Using a single cold day to argue against global warming'
    ],
    techniques: ['Selective use of data', 'Omission of context', 'Misrepresentation of trends'],
    relatedTerms: ['Data manipulation', 'Statistical fallacies', 'Misleading statistics']
  }
];