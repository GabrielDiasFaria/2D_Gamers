package Socket;

import java.awt.List;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.PrintStream;

public class Server {
		
	private int porta;
	private ArrayList<PrintStream> clients;

	public Server(int porta){
		this.porta = porta;
		this.clients = new ArrayList<PrintStream>();
	}
	
	public void executa() throws IOException{
		ServerSocket server = new ServerSocket(this.porta);
		System.out.println("Servidor Iniciado");
		
		while(true){
			Socket client = server.accept();
			System.out.println("Nova Conexão" + client.getInetAddress().getHostAddress());
			
			PrintStream ps = new PrintStream(client.getOutputStream());
			this.clients.add(ps);
			
			TrataClient tc = new TrataClient(client.getInputStream(), this);
			new Thread(tc).start();
		}
	}
	
	public void distribuiMensagem(String msg){
		System.out.println("Repassar mensagens...");
		for(PrintStream client : this.clients){
			client.println("Server: " + msg);
		}
	}
	
}
