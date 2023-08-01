package newpropack;


import java.util.Scanner;




public class Main {
    public static void main(String[] args) {
    	//--------------------//
    	//class and object//
    	//--------------------//
        Quiz q = new Quiz();
        Scanner sc=new Scanner(System.in);
        System.out.println("Hello Participant! Glad To See You!");
        System.out.println();

        System.out.print("Enter your pet name:");
        String name=sc.nextLine();
        System.out.println();
        q.logic(name);
    }
}
