package programs;
import java.util.Scanner;

public class armstrong {
	public static void main(String[] args) {
		System.out.println("enter any number");
		Scanner s=new Scanner(System.in);
		int num =s.nextInt();
		int t1=num;
		int length = 0;
		while(t1!=0)
		{
			length=length+1;
			t1=t1/10;
		}
		int t2=num;
		int arm=0;
		int rem;
		while(t2!=0)
			
		{
			int mul=1;
			rem=t2%10;
			for(int i=1; i<=length; i++)
			{
				mul = mul*rem;
			}
			arm=arm+mul;
			t2=t2/10;
		}
		if(arm==num)
		{
			System.out.println("armstrong");
		}
		else
		{
			System.out.println("not a armstrong");
		}
			
	}
	

}
