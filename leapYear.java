package programs;
import java.util.Scanner;

public class leapYear {
	public static void main(String[] args) {
		System.out.println("enter any year");
		Scanner s =new Scanner(System.in);
		int year = s.nextInt();
		if((year%400==0) || (year%4==0) && (year%100!=0))
		{
			System.out.println("this is a leap year");
		}
		else
		{
			System.out.println("this is not a leap year");
		}
	}

}
