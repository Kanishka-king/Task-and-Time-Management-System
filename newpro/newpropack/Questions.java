package newpropack;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
//------------------------
//-abstraction
//------------------------
abstract class Questions {
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private Character correctAnswer;

    public Questions(String question, String option1, String option2, String option3, String option4, Character correctAnswer) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correctAnswer = correctAnswer;
    }
//    ----------------
//    encapsulation
//    ---------------

    public String getQuestion() {
        return question;
    }

    public String getOption1() {
        return option1;
    }

    public String getOption2() {
        return option2;
    }

    public String getOption3() {
        return option3;
    }

    public String getOption4() {
        return option4;
    }

    public Character getCorrectAnswer() {
        return correctAnswer;
    }

    // Abstract method to check the user's answer with the correct answer
    public abstract boolean checkAnswer(Character answer);
}