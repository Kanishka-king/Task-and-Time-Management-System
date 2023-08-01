package newpropack;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;



class Quiz {
    Scanner sc = new Scanner(System.in);
    int correctAnsCount = 0;
    int wrongAnsCount = 0;
    


    
    public void logic(String name) {
        System.out.println("1. Java Programming Questions");
        System.out.println("2. React Programming Questions");
        System.out.println("3. General Knowledge Questions");
        System.out.print("Choose a Question Type: ");
        int type = sc.nextInt();

        if (type == 1) {
            System.out.println("You have a total of 5 Java Programming Questions");
            System.out.println();
        
            JavaQuestion javaQ1 = new JavaQuestion("Which statement is true about Java?",
                    "A. Java is a sequence-dependent programming language ",
                    "B. Java is a code-dependent programming language ",
                    "C. Java is a platform-dependent programming language ",
                    "D. Java is a platform-independent programming language ",'D');
            JavaQuestion javaQ2 = new JavaQuestion("What is the extension of java code files?", " A. .txt", "B. .pdf",
                    "C. .sql", "D. .java",'D');
            JavaQuestion javaQ3 = new JavaQuestion("Who invented Java Programming?", "A. Guido van Rossum",
                    "B. James Gosling", "C. Dennis Ritchie", "D. Bjarne Stroustrup",'B');
            JavaQuestion javaQ4 = new JavaQuestion("Which one of the following is not a Java feature?",
                    "A. Object-oriented", "B. Use of pointers", "C. Portable", "D. Dynamic and Extensible",'B');
            JavaQuestion javaQ5 = new JavaQuestion("Which of these cannot be used for a variable name in Java?",
                    "A. identifier & keyword", "B. identifier", "C. Keyword", "D. none of the mentioned",'C');

            Map<JavaQuestion, Character> hmap = new HashMap<>();
            hmap.put(javaQ1, 'D');
            hmap.put(javaQ2, 'D');
            hmap.put(javaQ3, 'B');
            hmap.put(javaQ4, 'B');
            hmap.put(javaQ5, 'C');

      
            
            for (Map.Entry<JavaQuestion, Character> map : hmap.entrySet()) {
            	JavaQuestion ques=map.getKey();
                System.out.println(map.getKey().getQuestion());
                System.out.println(map.getKey().getOption1());
                System.out.println(map.getKey().getOption2());
                System.out.println(map.getKey().getOption3());
                System.out.println(map.getKey().getOption4());
                optionstodb(type,map.getKey().getQuestion(),map.getKey().getOption1(),map.getKey().getOption2(),map.getKey().getOption3(),map.getKey().getOption4());
                System.out.print("Enter Your Answer: ");
                Character ans = sc.next().charAt(0);

//              -----------------------
//                overloading
//                ----------------------
                questiontodb(map.getKey().getQuestion(),map.getValue(),type);
                if (ques.checkAnswer(ans)) {
                	System.out.println("-----------------");
                    System.out.println("|     Correct  |");
                    System.out.println("-----------------");
                    correctAnsCount++;
                } else {
                	System.out.println("-----------------");
                    System.out.println("|     Wrong       |");
                    System.out.println("-----------------");
                    wrongAnsCount++;
                }
                
            }
//          -----------------------
//          overloading
//          ----------------------
            questiontodb(type,name);
            displayResult(type, hmap.size(),name);

        } else if (type == 2) {
            // Questions for React Quiz
           
        	 System.out.println("You have Total of 5 React Programming Questions");
      		System.out.println();
      		 ReactQuestion reactQ1 = new ReactQuestion(" Which of the following is used in React.js to increase performance?",
                     "A. Virtual DOM ", "B. Original DOM", "C. Both A and B", "D. None of the Above ",'A');
             ReactQuestion reactQ2 = new ReactQuestion(" What is ReactJS?", " A. Server side Framework",
                     "B. User Interface Framework", "C. Both A and B", "D. None of the Above",'B');
             ReactQuestion reactQ3 = new ReactQuestion(" Identify the one which is used to pass data to components from outside",
                     "A. Render with argument", "B. setState", "C. props Type", "D. props",'D');
             ReactQuestion reactQ4 = new ReactQuestion(" Who created React.js?", "A. Jodran Mike", "B. Jodran walke",
                     "C. Tim Lee", "D. Lee",'B');
             ReactQuestion reactQ5 = new ReactQuestion(" In which language is React.js written?", "A. Java", "B. Java Script",
                     "C. Python", "D. C Sharp",'B');

             Map<ReactQuestion, Character> hmap = new HashMap<>();
             hmap.put(reactQ1, 'A');
             hmap.put(reactQ2, 'B');
             hmap.put(reactQ3, 'D');
             hmap.put(reactQ4, 'B');
             hmap.put(reactQ5, 'B');

              for(Map.Entry<ReactQuestion,Character> map:hmap.entrySet()){
            	  ReactQuestion rqn=map.getKey();
                  System.out.println(map.getKey().getQuestion());
                  System.out.println(map.getKey().getOption1());
                  System.out.println(map.getKey().getOption2());
                  System.out.println(map.getKey().getOption3());
                  System.out.println(map.getKey().getOption4());
                  optionstodb(type,map.getKey().getQuestion(),map.getKey().getOption1(),map.getKey().getOption2(),map.getKey().getOption3(),map.getKey().getOption4());
                  System.out.println("Enter Your Answer: ");
                  Character ans=sc.next().charAt(0);
                 
//                -----------------------
//                overloading
//                ----------------------
                  questiontodb(map.getKey().getQuestion(),map.getValue(),type);
                  if(rqn.checkAnswer(ans)){
                	  System.out.println("-----------------");
                      System.out.println("|     Correct   |");
                      System.out.println("-----------------");
                      correctAnsCount++;
                  }
                  else{
                	  System.out.println("-----------------");
                      System.out.println("|     Wrong      |");
                      System.out.println("-----------------");
                      wrongAnsCount++;
                  }

              }
//            -----------------------
//            overloading
//            ----------------------
              questiontodb(type,name);
              displayResult(type, hmap.size(),name);
          	
        } else if (type == 3) {
            // Questions for General Knowledge Quiz
         
        	System.out.println("You have Total of 5 Gneral Knowledge  Questions");
      		System.out.println();
      		GkQuestion gkQ1 = new GkQuestion("Grand Central Terminal, Park Avenue, New York is the world's",
                    "A. largest railway station ", "B. highest railway station", "C. longest station",
                    "D. None of the Above ",'A');
            GkQuestion gkQ2 = new GkQuestion(" Entomology is the science that studies", " A. Human Behaviour ",
                    "B. Insects", "C. Both A and B", "D. None of the Above",'B');
            GkQuestion gkQ3 = new GkQuestion(" Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
                    "A. Asia", "B. China", "C. Europe", "D. Africa",'D');
            GkQuestion gkQ4 = new GkQuestion(" For which of the following disciplines is Nobel Prize awarded?",
                    "A. Physiology and Medicine", "B. Physics and Chemistry", "C. Literature", "D. All of the Above",'D');
            GkQuestion gkQ5 = new GkQuestion(" First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
                    "A. 1967", "B. 1860", "C. 1965", "D. C 1970",'A');

            Map<GkQuestion, Character> hmap = new HashMap<>();
            hmap.put(gkQ1, 'A');
            hmap.put(gkQ2, 'B');
            hmap.put(gkQ3, 'D');
            hmap.put(gkQ4, 'D');
            hmap.put(gkQ5, 'A');

              for(Map.Entry<GkQuestion,Character> map:hmap.entrySet()){
            	  GkQuestion gkdb=map.getKey();
                  System.out.println(map.getKey().getQuestion());
                
                  System.out.println(map.getKey().getOption1());
                  System.out.println(map.getKey().getOption2());
                  System.out.println(map.getKey().getOption3());
                  System.out.println(map.getKey().getOption4());
                  //optionstodb
                  optionstodb(type,map.getKey().getQuestion(),map.getKey().getOption1(),map.getKey().getOption2(),map.getKey().getOption3(),map.getKey().getOption4());

                  System.out.println("Enter Your Answer: ");
                  Character ans=sc.next().charAt(0);
                  
//                -----------------------
//                overloading
//                ----------------------
                  questiontodb(map.getKey().getQuestion(),map.getValue(),type);
                  if(gkdb.checkAnswer(ans)){
                	  System.out.println("-----------------");
                      System.out.println("|     Correct    |");
                      System.out.println("-----------------");
                      correctAnsCount++;
                  }
                  else{
                	  System.out.println("-----------------");
                      System.out.println("|     wrong      |");
                      System.out.println("-----------------");
                      wrongAnsCount++;
                  }

              }
//            -----------------------
//            overloading
//            ----------------------

              questiontodb(type,name);
              displayResult(type, hmap.size(),name);
        	

        } else {
            System.out.println("Invalid Question Type! Please choose a valid option (1, 2, or 3).");
        }
    }
//  -----------------------
//  overloading
//  ----------------------
    public void questiontodb(String questi,Character ch,int type ) {
        // JDBC connection parameters
        String jdbcUrl = "jdbc:mysql://localhost:3306/quiz_db";
        String username = "root";
        String password = "Kani@1234";

        // JDBC objects
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Prepare the SQL query to insert the quiz result
            String sqlQuery = "INSERT INTO quiz_question (quiz_type, questi, correct_answers) VALUES (?, ?, ?)";
            preparedStatement = connection.prepareStatement(sqlQuery);

            // Set the values for the query parameters
            preparedStatement.setString(1, getQuizType(type)); // Assuming getQuizType() is a method to get the quiz type as a string (e.g., "Java Programming Questions")
           
            preparedStatement.setString(2, questi);
            preparedStatement.setString(3, ch.toString());

            // Execute the query to insert the data into the database
            preparedStatement.executeUpdate();

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close JDBC objects in the finally block to release resources
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

    }
//  -----------------------
//  overloading
//  ----------------------
    public void questiontodb(int type,String name) {
    	String jdbcUrl = "jdbc:mysql://localhost:3306/quiz_db";
        String username = "root";
        String password = "Kani@1234";

        // JDBC objects
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Prepare the SQL query to insert the quiz result
            String sqlQuery = "INSERT INTO quiz_user (quiz_type, user_name) VALUES (?, ?)";
            preparedStatement = connection.prepareStatement(sqlQuery);

            // Set the values for the query parameters
            preparedStatement.setString(1, getQuizType(type)); // Assuming getQuizType() is a method to get the quiz type as a string (e.g., "Java Programming Questions")
           
            preparedStatement.setString(2, name);
      

            // Execute the query to insert the data into the database
            preparedStatement.executeUpdate();

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close JDBC objects in the finally block to release resources
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void optionstodb(int type,String questi,String op1,String op2,String op3,String op4) {
    	String jdbcUrl = "jdbc:mysql://localhost:3306/quiz_db";
        String username = "root";
        String password = "Kani@1234";

        // JDBC objects
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Prepare the SQL query to insert the quiz result
            String sqlQuery = "INSERT INTO quiz_option (quiz_type, question, option1,option2,option3,option4) VALUES (?, ?, ?,?,?,?)";
            preparedStatement = connection.prepareStatement(sqlQuery);

            // Set the values for the query parameters
            preparedStatement.setString(1, getQuizType(type)); // Assuming getQuizType() is a method to get the quiz type as a string (e.g., "Java Programming Questions")
           
            preparedStatement.setString(2, questi);
            preparedStatement.setString(3, op1);
            preparedStatement.setString(4, op2);
            preparedStatement.setString(5, op3);
            preparedStatement.setString(6, op4);

            // Execute the query to insert the data into the database
            preparedStatement.executeUpdate();

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close JDBC objects in the finally block to release resources
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    	
    }
    private void deletehis(int type, String name) {
        // JDBC connection parameters
        String jdbcUrl = "jdbc:mysql://localhost:3306/quiz_db";
        String username = "root";
        String password = "Kani@1234";

        // JDBC objects
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Prepare the SQL query to delete the user's quiz result
            String deleteQuery = "DELETE FROM quiz_result WHERE quiz_type = ? AND user_name = ?";
            preparedStatement = connection.prepareStatement(deleteQuery);

            // Set the values for the query parameters
            preparedStatement.setString(1, getQuizType(type));
            preparedStatement.setString(2, name);

            // Execute the query to delete the user's quiz result from the database
            int rowsAffected = preparedStatement.executeUpdate();

            // Check if any rows were affected (deleted)
            if (rowsAffected > 0) {
            	System.out.println();
            	
                System.out.println("Quiz result for " + name + " in " + getQuizType(type) + " deleted successfully.");
                System.out.println("                 "+"----"+"      "+"-----------------"+"                     ");
                System.out.println();
            } else {
                System.out.println("No quiz result found for " + name + " in " + getQuizType(type) + ".");
            }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close JDBC objects in the finally block to release resources
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    // Method to display and store quiz results using JDBC
    private void displayResult(int type, int totalQuestions,String name) {

        String jdbcUrl = "jdbc:mysql://localhost:3306/quiz_db";
        String username = "root";
        String password = "Kani@1234";

        // JDBC objects
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Insert the user's quiz result into the database
            String insertQuery = "INSERT INTO quiz_result (quiz_type, user_name, total_questions, correct_answers, wrong_answers, percentage) VALUES (?, ?, ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(insertQuery);

            preparedStatement.setString(1, getQuizType(type));
            preparedStatement.setString(2, name);
            preparedStatement.setInt(3, totalQuestions);
            preparedStatement.setInt(4, correctAnsCount);
            preparedStatement.setInt(5, wrongAnsCount);
            int percentage = (100 * correctAnsCount) / totalQuestions;
            preparedStatement.setInt(6, percentage);

            // Execute the query to insert the data into the database
            preparedStatement.executeUpdate();

            // Prepare the SQL query to retrieve quiz results
            String selectQuery = "SELECT * FROM quiz_result WHERE quiz_type = ? AND user_name = ?";
            preparedStatement = connection.prepareStatement(selectQuery);
            preparedStatement.setString(1, getQuizType(type));
            preparedStatement.setString(2, name);

            // Execute the query to retrieve data from the database
            resultSet = preparedStatement.executeQuery();

            // Display the user's quiz results
            while (resultSet.next()) {
                System.out.println("--------Result---------");
                System.out.println("Quiz Type: " + resultSet.getString("quiz_type"));
                System.out.println("User Name: " + resultSet.getString("user_name"));
                System.out.println("Total Questions: " + resultSet.getInt("total_questions"));
                System.out.println("Correct Answered Questions: " + resultSet.getInt("correct_answers"));
                System.out.println("Wrong Answered Questions: " + resultSet.getInt("wrong_answers"));
                int percentageFromDB = resultSet.getInt("percentage");
                System.out.println("Percentage: " + percentageFromDB + "%");

                String performance;
                if (percentageFromDB > 95) {
                    performance = "*** Very Good ***";
                } else if (percentageFromDB < 35) {
                    performance = "*** Very Low ***";
                } else {
                    performance = "*** Medium ***";
                }
                System.out.println("Performance: " + performance);
                System.out.println();
            }

       





        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close JDBC objects in the finally block to release resources
            try {
            	if (resultSet != null) {
                    resultSet.close();
                }
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        System.out.println();
        System.out.println("Do you need to exit from Quiz?");
        System.out.println("1. Yes");
        System.out.println("2. No");
        int exit = sc.nextInt();
        if (exit == 1) {
            System.out.println();
            System.out.println("Do you need to delete your History?");
            System.out.println("1. Yes");
            System.out.println("2. No");
            int his=sc.nextInt();
            if(his==1) {
            	deletehis(type,name);
            }
            System.out.println("Thanks for attending the quiz!");
            System.out.println("----Visit us again!----");
            System.exit(0);
        } else {
            System.out.println();
            System.out.println();
            Quiz q = new Quiz();
            q.logic(name);
        }
    }

//--------------------
//    Access Modifers
//    ----------------
    private String getQuizType(int type) {
        switch (type) {
            case 1:
                return "Java Programming Questions";
            case 2:
                return "React Programming Questions";
            case 3:
                return "General Knowledge Questions";
            default:
                return "Unknown";
        }
    }
}
