import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { QuestionTypeEnum, ChoiceQuestion, FillQuestion } from "@/lib/types";
import { isAnswerCorrect } from "@/lib/utils";

export function ChoiceQuestionView({
  question,
  selected,
  showResult,
  onSelect,
}: {
  question: ChoiceQuestion;
  selected: number[] | null;
  showResult: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="space-y-3">
      {question.choices.map((choice, index) => {
        const isSelected = selected?.includes(index);
        const isCorrect = question.answers.includes(index);
        const isWrongSelection = showResult && isSelected && !isCorrect;

        let className =
          "w-full justify-start text-left h-auto p-4 transition-all border-border";
        let icon = null;

        if (showResult) {
          if (isCorrect) {
            className += " bg-success/20 border-success";
            icon = <CheckCircle className="h-4 w-4 text-success" />;
          } else if (isWrongSelection) {
            className += " bg-destructive/20 border-destructive";
            icon = <XCircle className="h-4 w-4 text-destructive" />;
          }
        } else if (isSelected) {
          className += " border-primary bg-primary/20 dark:bg-primary/40";
        }

        return (
          <Button
            key={index}
            variant="outline"
            className={className}
            onClick={() => onSelect(index)}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="flex-1 text-foreground">{choice}</span>
              {icon}
            </div>
          </Button>
        );
      })}
    </div>
  );
}

export function FillQuestionView({
  value,
  disabled,
  onChange,
}: {
  value: string | null;
  disabled: boolean;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      className="w-full p-3 border border-input rounded-md bg-background text-foreground"
      placeholder="请输入答案..."
      value={value || ""}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function ResultView({
  correct,
  userAnswer,
  correctAnswer,
  hint,
}: {
  correct: boolean;
  userAnswer: string | number[] | null;
  correctAnswer: string | number[];
  hint?: string;
}) {
  const formatAnswer = (ans: string | number[] | null) => {
    if (Array.isArray(ans))
      return ans.map((i) => String.fromCharCode(65 + i)).join(", ");
    return ans ?? "未作答";
  };

  const formatCorrect = (ans: string | number[]) => {
    if (Array.isArray(ans))
      return ans.map((i) => String.fromCharCode(65 + i)).join(", ");
    return ans;
  };

  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        correct
          ? "bg-success/10 border-success"
          : "bg-destructive/10 border-destructive"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        {correct ? (
          <CheckCircle className="h-5 w-5 text-success" />
        ) : (
          <XCircle className="h-5 w-5 text-destructive" />
        )}

        <span className="font-medium text-lg text-foreground">
          {correct ? (
            "回答正确！"
          ) : (
            <div className="flex items-center gap-4 w-full">
              <span>回答错误</span>
              <div className="flex items-baseline gap-4 text-sm text-foreground">
                <p>
                  <strong>你的答案：</strong>
                  {formatAnswer(userAnswer)}
                </p>
                <p>
                  <strong>正确答案：</strong>
                  {formatCorrect(correctAnswer)}
                </p>
              </div>
            </div>
          )}
        </span>
      </div>

      {hint && (
        <div className="mt-2 text-sm text-foreground">
          <strong>解析：</strong> {hint}
        </div>
      )}
    </div>
  );
}

// Empty state component
export const EmptyChapterState = ({ courseId }: { courseId: string }) => (
  <div className="text-center py-12">
    <div className="text-4xl mb-4">📝</div>
    <h3 className="text-lg font-medium text-muted-foreground mb-2">
      本章节暂无题目
    </h3>
    <p className="text-sm text-muted-foreground mb-4">
      当前章节还没有添加任何练习题
    </p>
    <Link href={`/course/${courseId}`}>
      <Button variant="outline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回章节目录
      </Button>
    </Link>
  </div>
);

// Question content component
export const QuestionContent = ({
  currentQuestion,
}: {
  currentQuestion: ChoiceQuestion | FillQuestion | null;
}) =>
  currentQuestion && (
    <h3 className="text-lg font-medium mb-4 leading-relaxed text-foreground">
      {currentQuestion.content}
    </h3>
  );

// Question renderer component
export const QuestionRenderer = ({
  currentQuestion,
  selectedAnswer,
  showResult,
  onChoiceSelect,
  onFillInput,
}: {
  currentQuestion: ChoiceQuestion | FillQuestion | null;
  selectedAnswer: number[] | string | null;
  showResult: boolean;
  onChoiceSelect: (index: number) => void;
  onFillInput: (val: string) => void;
}) => {
  if (!currentQuestion) return null;

  return currentQuestion.type === QuestionTypeEnum.CHOICE ? (
    <ChoiceQuestionView
      question={currentQuestion as ChoiceQuestion}
      selected={selectedAnswer as number[]}
      showResult={showResult}
      onSelect={onChoiceSelect}
    />
  ) : (
    <FillQuestionView
      value={selectedAnswer as string}
      disabled={showResult}
      onChange={onFillInput}
    />
  );
};

// Submit button component
export const SubmitButton = ({
  showResult,
  hasAnswer,
  onSubmit,
}: {
  showResult: boolean;
  hasAnswer: boolean;
  onSubmit: () => void;
}) =>
  !showResult &&
  hasAnswer && (
    <Button onClick={onSubmit} className="w-full" size="lg">
      提交答案
    </Button>
  );

// Result display component
export const ResultDisplay = ({
  showResult,
  question,
  userAnswer,
}: {
  showResult: boolean;
  question: ChoiceQuestion | FillQuestion | null;
  userAnswer: number[] | string | null;
}) => {
  if (!showResult || !question) return null;

  return (
    <ResultView
      correct={isAnswerCorrect(question, userAnswer)}
      userAnswer={userAnswer}
      correctAnswer={
        question.type === QuestionTypeEnum.CHOICE
          ? (question as ChoiceQuestion).answers
          : (question as FillQuestion).answer
      }
      hint={question.hint}
    />
  );
};

// Navigation controls component
export const QuestionNavigation = ({
  currentIndex,
  totalQuestions,
  completedQuestions,
  onPrev,
  onNext,
}: {
  currentIndex: number;
  totalQuestions: number;
  completedQuestions: number;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <div className="flex items-center justify-between pt-4 border-t border-border">
    <Button
      variant="outline"
      onClick={onPrev}
      disabled={currentIndex === 0}
      className="gap-2 bg-transparent"
    >
      <ArrowLeft className="h-4 w-4" />
      上一题
    </Button>

    <div className="text-sm text-muted-foreground">
      已完成 {completedQuestions} / {totalQuestions} 题
    </div>

    <Button
      variant="outline"
      onClick={onNext}
      disabled={currentIndex === totalQuestions - 1}
      className="gap-2 bg-transparent"
    >
      下一题
      <ArrowRight className="h-4 w-4" />
    </Button>
  </div>
);

// Completion stats component
export const CompletionStats = ({
  totalQuestions,
  correctAnswers,
  nextChapterId,
  courseId,
  isLastChapter,
}: {
  totalQuestions: number;
  correctAnswers: number;
  nextChapterId?: string;
  courseId: string;
  isLastChapter: boolean;
}) => (
  <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg text-center">
    <h4 className="font-semibold text-lg mb-2 text-foreground">
      🎉 恭喜完成！
    </h4>
    <p className="text-sm text-muted-foreground mb-3">
      您已完成本章节的所有题目
    </p>
    <div className="flex justify-center gap-4 text-sm text-foreground">
      <span>总题数: {totalQuestions}</span>
      <span>正确: {correctAnswers}</span>
      <span>
        正确率: {Math.round((correctAnswers / totalQuestions) * 100)}%
      </span>
    </div>
    {nextChapterId ? (
      <Link
        href={`/course/${courseId}/chapter/${nextChapterId}`}
        className="mt-4 inline-block"
      >
        <Button className="gap-2">
          下一章
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    ) : isLastChapter ? (
      <Link href={`/course/${courseId}`} className="mt-4 inline-block">
        <Button className="gap-2">
          返回章节目录
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
    ) : null}
  </div>
);
