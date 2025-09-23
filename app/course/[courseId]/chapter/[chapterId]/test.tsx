            // <Card>
            //   <CardHeader>
            //     <CardTitle className="flex items-center justify-between h-8">
            //       <div className="flex items-center gap-2 w-full">
            //         题目 {currentQuestionIndex + 1}
            //         {currentQuestion &&
            //           currentQuestion.type === QuestionTypeEnum.CHOICE &&
            //           (currentQuestion as ChoiceQuestion).answers.length >
            //             1 && <Badge variant="secondary">多选题</Badge>}
            //       </div>
            //       {showResults[currentQuestionIndex] && (
            //         <Button
            //           variant="outline"
            //           size="sm"
            //           onClick={handleResetQuestion}
            //           className="gap-2 bg-transparent"
            //         >
            //           <RotateCcw />
            //           重新答题
            //         </Button>
            //       )}
            //     </CardTitle>

            //     {/* 导航 */}
            //     <div className="flex flex-wrap gap-2 mt-2">
            //       {chapter.questions.map((_, idx) => {
            //         const isAnswered = showResults[idx];
            //         const isCorrect =
            //           isAnswered &&
            //           isAnswerCorrect(
            //             chapter.questions[idx],
            //             selectedAnswers[idx]
            //           );
            //         const isWrong = isAnswered && !isCorrect;

            //         return (
            //           <Button
            //             key={idx}
            //             variant={
            //               currentQuestionIndex === idx ? "default" : "outline"
            //             }
            //             size="sm"
            //             onClick={() => setCurrentQuestionIndex(idx)}
            //             className={`h-8 w-8 p-0 rounded-full ${
            //               isCorrect
            //                 ? "border-2 border-success"
            //                 : isWrong
            //                 ? "border-2 border-destructive"
            //                 : ""
            //             }`}
            //           >
            //             {idx + 1}
            //           </Button>
            //         );
            //       })}
            //     </div>
            //   </CardHeader>

            //   <CardContent className="space-y-6">
            //     {/* Empty state */}
            //     {!hasQuestions ? (
            //       <EmptyChapterState courseId={courseId} />
            //     ) : (
            //       <>
            //         {/* Question content */}
            //         <QuestionContent currentQuestion={currentQuestion} />

            //         {/* Question type rendering */}
            //         <QuestionRenderer
            //           currentQuestion={currentQuestion}
            //           selectedAnswer={selectedAnswers[currentQuestionIndex]}
            //           showResult={showResults[currentQuestionIndex]}
            //           onChoiceSelect={handleChoiceSelect}
            //           onFillInput={handleFillInput}
            //         />

            //         {/* Submit button */}
            //         <SubmitButton
            //           showResult={showResults[currentQuestionIndex]}
            //           hasAnswer={selectedAnswers[currentQuestionIndex] !== null}
            //           onSubmit={handleSubmitAnswer}
            //         />

            //         {/* Result display */}
            //         <ResultDisplay
            //           showResult={showResults[currentQuestionIndex]}
            //           question={currentQuestion}
            //           userAnswer={selectedAnswers[currentQuestionIndex]}
            //         />

            //         {/* Navigation controls */}
            //         <QuestionNavigation
            //           currentIndex={currentQuestionIndex}
            //           totalQuestions={totalQuestions}
            //           completedQuestions={completedQuestions}
            //           onPrev={() =>
            //             setCurrentQuestionIndex((i) => Math.max(0, i - 1))
            //           }
            //           onNext={() =>
            //             setCurrentQuestionIndex((i) =>
            //               Math.min(totalQuestions - 1, i + 1)
            //             )
            //           }
            //         />

            //         {/* Completion stats */}
            //         {completedQuestions === totalQuestions && (
            //           <CompletionStats
            //             totalQuestions={totalQuestions}
            //             correctAnswers={correctAnswers}
            //             nextChapterId={nextChapterId}
            //             courseId={courseId}
            //             isLastChapter={
            //               currentChapterIndex === course?.chapters.length - 1
            //             }
            //           />
            //         )}
            //       </>
            //     )}
            //   </CardContent>
            // </Card>