package programs;
import java.util.Scanner;

public class evenOdd {
	public static void main(String[] args) {
		System.out.println("enter any number");
		Scanner s =new Scanner(System.in);
		int num = s.nextInt();
		if(num%2==0)
		{
			System.out.println("this is a even number");
		}
		else
		{
			System.out.println("this is a odd number");
		}
	}

}
