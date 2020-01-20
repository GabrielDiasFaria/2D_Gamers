package Pong;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Rectangle;
import java.util.Random;

public class Ball {

	public double x,y;
	public int width,height;
	
	public double dx, dy;
	public double speed = 1.2;
	
	public Ball(double x,double y) {
		this.x = x;
		this.y = y;
		this.width = 3;
		this.height = 3;
		
		this.dx = new Random().nextGaussian();
		this.dy = new Random().nextGaussian();
	}

	public void tick() {
		if(x+(dx*speed) + width >= Game.WIDTH ) {
			dx*=-1;
		} else if(x+(dx*speed) + width < 0) {
			dx*=-1;
		}
		
		if(y >= Game.HEIGHT) {
			// Ponto do Inimigo!
		} else if(y < 0) {
			// Ponto do Player!
		}
		
		Rectangle bounds = new Rectangle((int)(x+(dx*speed)),(int)(y+(dy*speed)), width, height);
		
		Rectangle boundsPlayer = new Rectangle(Game.player.x, Game.player.y, Game.player.width, Game.player.height);
		Rectangle boundsEnemy = new Rectangle((int)Game.enemy.x, (int)Game.enemy.y, Game.enemy.width, Game.enemy.height);
		
		if(bounds.intersects(boundsPlayer)) {
			dy *= -1;
		} else if(bounds.intersects(boundsEnemy)) {
			dy *= -1;
		}
		
		x+=dx*speed;
		y+=dy*speed;
	}
	
	public void render(Graphics g) {
		g.setColor(Color.white);
		g.fillRect((int)x, (int)y, width, height);
	}
	
}
