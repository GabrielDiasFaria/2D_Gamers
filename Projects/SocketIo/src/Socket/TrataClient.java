package Socket;

import java.io.InputStream;
import java.util.Scanner;

public class TrataClient implements Runnable{
	
	private InputStream client;
	private Server server;
	
	public TrataClient(InputStream client, Server server){
		this.client = client;
		this.server = server;
	}

	@Override
	public void run() {
		Scanner s = new Scanner(this.client);	
		while(s.hasNextLine()){
			server.distribuiMensagem(s.nextLine());
		}
		s.close();
	}

}
