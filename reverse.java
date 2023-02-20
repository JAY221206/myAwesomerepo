package programs;
import java.util.Scanner;

public class reverse {
		public static void main(String[] args) {
			System.out.println("enter any number");
			Scanner s=new Scanner(System.in);
			int num = s.nextInt();
			int rem;
			int rev=0;
			while(num!=0)
			{
				rem=num%10;
				rev=rev*10+rem;
				num=num/10;
			}
			System.out.println("reverse number is = "+rev);
		}

}
