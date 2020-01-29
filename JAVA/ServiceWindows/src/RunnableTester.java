import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
 
public class RunnableTester {
	
	public static void main(String[] args) {
		PrintTask task1 = new PrintTask("thread1");
		System.out.println("Iniciando Thread!");
		
		ExecutorService threadExecutor = Executors.newFixedThreadPool(1);
		threadExecutor.execute(task1);
		threadExecutor.shutdown();
		System.out.println("Thread iniciada\n");
	}

}
