package programs;
import java.util.Scanner;

public class greatest {
	public static void main(String[] args) {
		System.out.println("Enter Two Number");
		Scanner s = new Scanner(System.in);
		int num1 = s.nextInt();
		int num2 = s.nextInt();
		if(num1>num2)
		{
			System.out.println("num1 is greater");
		}
		else
		{
			System.out.println("num2 is greater");
		}
	}

}
