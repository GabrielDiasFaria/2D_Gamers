package Main;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;


public class Main {
	
	public static void main(String[] args) throws IOException, UnknownHostException{
		
		new Main("172.26.122.204",12345).executa();
						
	}
	
	private String host;
	private int porta;
	
	public Main(String host, int porta){
		this.host = host;
		this.porta = porta;
	}
	
	public void executa() throws UnknownHostException, IOException{
		
		Socket client = new Socket(this.host, this.porta);
		System.out.println("Conectado com server: " + client.getRemoteSocketAddress());
		
		Recebedor r = new Recebedor(client.getInputStream());
		new Thread(r).start();
		
		Scanner teclado   = new Scanner(System.in);
		PrintStream saida = new PrintStream(client.getOutputStream());		
		while(teclado.hasNextLine()){
			saida.println(teclado.nextLine());
		}
		
		saida.close();
		teclado.close();
		client.close();
		
	}

}

