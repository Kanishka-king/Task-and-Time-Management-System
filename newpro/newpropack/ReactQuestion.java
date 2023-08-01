package newpropack;
//---------------------------------------
//Inheritace
//----------------------------------------

class ReactQuestion extends Questions {
    public ReactQuestion(String question, String option1, String option2, String option3, String option4, Character correctAnswer) {
        super(question, option1, option2, option3, option4, correctAnswer);
    }

    // Implementation of the abstract method to check the user's answer
    @Override
    public boolean checkAnswer(Character answer) {
        return getCorrectAnswer().equals(Character.toUpperCase(answer));
    }
}