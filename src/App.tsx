import * as Quiz from './components/quiz';

function App() {
  const onValidate = ({ submitted }: { submitted: number | null }) => {
    console.log('validate from App', submitted);
  };

  return (
    <Quiz.Root start={4} onValidate={onValidate}>
      {quiz.questions.map((q, idx) => (
        <Quiz.Question key={q.id} value={idx}>
          <Quiz.Label>{q.question_text}</Quiz.Label>
          <Quiz.Options>
            {q.answers.map((a, idx) => (
              <Quiz.Item key={a.id} value={idx}>
                {a.answer_text}
              </Quiz.Item>
            ))}
          </Quiz.Options>
        </Quiz.Question>
      ))}
      <Quiz.Button>Submit</Quiz.Button>
    </Quiz.Root>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MOCKS
 * -----------------------------------------------------------------------------------------------*/

const quiz = {
  id: 'LzTS_eM8-lw2PWEWulXXx',
  title: 'Discovering Macron: An Interactive Quiz',
  description:
    'This quiz is designed to test your knowledge about Emmanuel Macron, the President of France. It includes a series of fill-in-the-blank questions with multiple-choice answers, each offering a fun fact or interesting context to enhance learning. The questions range from easy to challenging, providing an engaging and educational experience.',
  difficulty_level: 1,
  xp_reward: 10,
  questions: [
    {
      id: 'i5_o_GNLMcq57JAm7OVQd',
      quiz_id: 'LzTS_eM8-lw2PWEWulXXx',
      question_text: 'Emmanuel Macron became the President of France in _____.',
      order: 1,
      answers: [
        {
          id: '6Y-SW3GadOTtJFUAGhE-U',
          question_id: 'i5_o_GNLMcq57JAm7OVQd',
          answer_text: '2017',
          is_correct: true,
        },
        {
          id: 'i7u_jPnJZbJg-dZ-5sr8l',
          question_id: 'i5_o_GNLMcq57JAm7OVQd',
          answer_text: '2015',
          is_correct: false,
        },
        {
          id: 'cmjCpPvmiqEHevN3Xpan_',
          question_id: 'i5_o_GNLMcq57JAm7OVQd',
          answer_text: '2019',
          is_correct: false,
        },
        {
          id: 'jzkohvyFIE0433-GLBnk4',
          question_id: 'i5_o_GNLMcq57JAm7OVQd',
          answer_text: '2021',
          is_correct: false,
        },
      ],
    },
    {
      id: 'DFt4-cvRBnjYua7Wvvn5H',
      quiz_id: 'LzTS_eM8-lw2PWEWulXXx',
      question_text:
        'Before becoming President, Macron served as the Minister of _____.',
      order: 2,
      answers: [
        {
          id: 'IFr9FIk96Wo2Y6UNqMI9i',
          question_id: 'DFt4-cvRBnjYua7Wvvn5H',
          answer_text: 'Economy',
          is_correct: true,
        },
        {
          id: 'mZVWRvzogkzwzyWUHmvAo',
          question_id: 'DFt4-cvRBnjYua7Wvvn5H',
          answer_text: 'Defense',
          is_correct: false,
        },
        {
          id: 'qPitKyFWyshFYBDlRoU5b',
          question_id: 'DFt4-cvRBnjYua7Wvvn5H',
          answer_text: 'Education',
          is_correct: false,
        },
        {
          id: 'rl4VxY_D3ee0ULgQaPcvk',
          question_id: 'DFt4-cvRBnjYua7Wvvn5H',
          answer_text: 'Health',
          is_correct: false,
        },
      ],
    },
    {
      id: 'd5o2t2fv35UUl_aZkT1aW',
      quiz_id: 'LzTS_eM8-lw2PWEWulXXx',
      question_text: 'Macron was born in the city of _____.',
      order: 3,
      answers: [
        {
          id: '8QwH3GZAisc_FSBsoLcC7',
          question_id: 'd5o2t2fv35UUl_aZkT1aW',
          answer_text: 'Amiens',
          is_correct: true,
        },
        {
          id: '_asvNtQ4kcpRMZTf8Y8rq',
          question_id: 'd5o2t2fv35UUl_aZkT1aW',
          answer_text: 'Paris',
          is_correct: false,
        },
        {
          id: 'qWgv1ykfBXu6g3IvcBbVu',
          question_id: 'd5o2t2fv35UUl_aZkT1aW',
          answer_text: 'Lyon',
          is_correct: false,
        },
        {
          id: 'iyRiUw06s6clpj9vj7ZSz',
          question_id: 'd5o2t2fv35UUl_aZkT1aW',
          answer_text: 'Marseille',
          is_correct: false,
        },
      ],
    },
    {
      id: '9UKwgDZUmHViEpVWt_LwO',
      quiz_id: 'LzTS_eM8-lw2PWEWulXXx',
      question_text:
        'Emmanuel Macron founded the political movement called _____.',
      order: 4,
      answers: [
        {
          id: 'Mg-HnAScuOWMlxnFkl8N3',
          question_id: '9UKwgDZUmHViEpVWt_LwO',
          answer_text: 'En Marche!',
          is_correct: true,
        },
        {
          id: 'Lg0NZjCzKmvDUOh15f2mp',
          question_id: '9UKwgDZUmHViEpVWt_LwO',
          answer_text: 'The Republicans',
          is_correct: false,
        },
        {
          id: 'yV-rZesfxio3BsWdJUtm_',
          question_id: '9UKwgDZUmHViEpVWt_LwO',
          answer_text: 'Socialist Party',
          is_correct: false,
        },
        {
          id: 'lT5mDRJluah_Esn_RwsZY',
          question_id: '9UKwgDZUmHViEpVWt_LwO',
          answer_text: 'National Rally',
          is_correct: false,
        },
      ],
    },
    {
      id: '1jjFUyCU7RRXi-Ugg1T_A',
      quiz_id: 'LzTS_eM8-lw2PWEWulXXx',
      question_text: 'Macron worked as an investment banker at _____.',
      order: 5,
      answers: [
        {
          id: 'DJgIWmtT3ydaR6G0AVWli',
          question_id: '1jjFUyCU7RRXi-Ugg1T_A',
          answer_text: 'Rothschild & Cie',
          is_correct: true,
        },
        {
          id: 'SaPkgifriEaO8iJTqMXjU',
          question_id: '1jjFUyCU7RRXi-Ugg1T_A',
          answer_text: 'Goldman Sachs',
          is_correct: false,
        },
      ],
    },
  ],
};

export default App;
