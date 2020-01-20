package Aula;

public class Game implements Runnable {
	
	private boolean isRunning;
	private Thread thread;
		
	public static void main(String[] args){
		Game game = new Game();
		game.start();
	}
	
	public synchronized void start(){
		isRunning = true;
		thread = new Thread(this);
		thread.start();
	}
	
	public void render(){
		// Render
		System.out.println("Render");
	}
	
	public void update(){
		// Update
		System.out.println("Update");
	}
	
	@Override
	public void run(){
		System.out.println("Jogo Iniciado");
		while(isRunning){
			update();
			render();
			try {
				Thread.sleep(1000/60);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
