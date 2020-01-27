package Socket;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.net.Socket;

import javax.swing.JOptionPane;

public class Main {
	
	public static void main(String[] args) throws IOException{
		
		Socket cliente = new Socket("127.0.0.1",12345);
	    System.out.println("Conectado ao server");
	    
	    ObjectInputStream entrada = new ObjectInputStream(cliente.getInputStream());
	    
	    String retornoServer;
		try {
			
			retornoServer = (String)entrada.readObject();			
			JOptionPane.showMessageDialog(null,"Valor recebido do servidor:" + retornoServer);
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	    
	    entrada.close();
	    System.out.println("Conexão encerrada");
	}

}
