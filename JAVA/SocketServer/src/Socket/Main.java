package Socket;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {

	public static void main(String[] args) throws IOException{
		
		ServerSocket server = new ServerSocket(12345);
		System.out.println("Servidor Iniciado");
		
		// Aguarda Conexões
		while(true){
			Socket client = server.accept();
			System.out.println("Nova Conexão" + client.getInetAddress().getHostAddress());
			
			
			ObjectOutputStream saida = new ObjectOutputStream(client.getOutputStream());
			saida.flush();
	        saida.writeObject(new String("Teste Servidor"));
	        
	        saida.close();
	        client.close();			
		}
		
	}
	
}
