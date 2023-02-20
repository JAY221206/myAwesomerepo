package programs;
import java.util.Scanner;

public class palindrome {
	public static void main(String[] args) {
		System.out.println("enter any number");
		Scanner s=new Scanner(System.in);
		int num=s.nextInt();
		int rem;
		int rev=0;
		int temp=num;
		while(temp!=0)
		{
			rem=temp%10;
			rev=rev*10+rem;
			temp=temp/10;
		}
		System.out.println("reverse number is = "+rev);
		if(num==rev)
		{
			System.out.println("this is a palindrome number");
		}
		else
		{
			System.out.println("this is not a palindrome number");
		}
		
				
		
				
		
	}

}
