import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

const Context = React.createContext<{
  current: number;
  onSubmit: () => void;
  select: React.Dispatch<React.SetStateAction<number | null>>;
  selected: number | null;
}>({
  current: 1,
  onSubmit: () => {},
  select: () => {},
  selected: null,
});

/* -------------------------------------------------------------------------------------------------
 * Quizz
 * -----------------------------------------------------------------------------------------------*/

const NAME = 'Quiz';
type NativeQuizProps = React.ComponentProps<'div'>;
interface QuizProps extends NativeQuizProps {
  start: number;
  onValidate: ({ submitted }: { submitted: number | null }) => void;
}

const Quiz: React.FC<QuizProps> = ({
  ref,
  start = 1,
  children,
  onValidate,
  ...props
}) => {
  const [current, _] = React.useState(start);
  const [selected, select] = React.useState<number | null>(null);

  const onSubmit = () => {
    //setCurrent((prev) => prev + 1);
    select(null);
    onValidate({
      submitted: selected,
    });
  };

  return (
    <Context.Provider value={{ current, onSubmit, select, selected }}>
      <div className="border border-black" {...props} ref={ref}>
        {children}
      </div>
    </Context.Provider>
  );
};
Quiz.displayName = NAME;

/* -------------------------------------------------------------------------------------------------
 * Question
 * -----------------------------------------------------------------------------------------------*/
const QUESTION_NAME = 'Question';
type NativeQuestionProps = React.ComponentProps<'div'>;
interface QuestionProps extends NativeQuestionProps {
  value: number;
}

const Question: React.FC<QuestionProps> = ({
  ref,
  children,
  value,
  ...props
}) => {
  const { current } = React.use(Context);
  if (current === value + 1) {
    return (
      <div
        data-value={value + 1}
        className="border border-black"
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
};

Question.displayName = QUESTION_NAME;

/* -------------------------------------------------------------------------------------------------
 * Options
 * -----------------------------------------------------------------------------------------------*/
const OPTIONS_NAME = 'Options';
type OptionsProps = React.ComponentProps<'div'>;

const Options: React.FC<OptionsProps> = ({ ref, ...props }) => {
  return <div className="border border-black" {...props} ref={ref} />;
};

Options.displayName = OPTIONS_NAME;

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
const ITEM_NAME = 'Item';
type NativeItemProps = React.ComponentProps<'div'>;
interface ItemProps extends NativeItemProps {
  value: number;
}

const Item: React.FC<ItemProps> = ({ ref, value, ...props }) => {
  const { select, selected } = React.use(Context);
  const current = value + 1;
  const isSelected = selected === current;
  return (
    <div
      onClick={() => select(current)}
      data-selected={isSelected}
      data-item={current}
      className="border border-black"
      {...props}
      ref={ref}
    />
  );
};

Item.displayName = ITEM_NAME;

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
const LABEL_NAME = 'Label';
type NativeLabelProps = React.ComponentProps<'label'>;
interface LabelProps extends NativeLabelProps {}

const Label: React.FC<LabelProps> = ({ ref, ...props }) => {
  return <label className="border border-black" {...props} ref={ref} />;
};

Label.displayName = LABEL_NAME;

export default Label;

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
const BUTTON_NAME = 'Button';
type ButtonProps = React.ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({ ref, ...props }) => {
  const { onSubmit, selected } = React.use(Context);
  return (
    <button
      className="disabled:text-gray-200"
      disabled={!selected}
      onClick={onSubmit}
      {...props}
      ref={ref}
    />
  );
};

Button.displayName = BUTTON_NAME;

const Root = Quiz;

export { Quiz, Question, Options, Label, Button, Item, Root };
export type {
  QuizProps,
  QuestionProps,
  LabelProps,
  ButtonProps,
  OptionsProps,
  ItemProps,
};

interface Answer {
  id: string;
  question_id: string;
  answer_text: string;
  is_correct: boolean;
}

interface Question {
  id: string;
  quiz_id: string;
  question_text: string;
  order: number;
  answers: Answer[];
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty_level: number;
  xp_reward: number;
  questions: Question[];
}
