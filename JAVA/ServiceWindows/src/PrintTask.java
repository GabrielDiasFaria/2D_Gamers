import java.util.Random;

public class PrintTask implements Runnable{
	
	private int sleepTime = 0;
	private int stopThreadCount = 0;
	private boolean stopThread = false;
	private String threadName = "";
	private static Random generator = new Random();
	
	public PrintTask(String name){
		 threadName = name;
		 sleepTime = generator.nextInt(10000);
	}

	@Override
	public void run() {	
		while (!stopThread){				
	       if (stopThreadCount <= 4){
	    	   try{
					System.out.printf("%s going to sleep for %d milliseconds.\n",
							 threadName, sleepTime);
					Thread.sleep(60*100); // sleepTime (60S * 100[Valor Miliseg])
				} catch(InterruptedException exception){
					 exception.printStackTrace();
				}
				System.out.printf("%s done sleeping\n", threadName);
				stopThreadCount++;
				System.out.printf("%s stop Thread\n", stopThreadCount);
	       } else {
	    	   stopThread = true;
	       }		       
		}
		
	}

}
