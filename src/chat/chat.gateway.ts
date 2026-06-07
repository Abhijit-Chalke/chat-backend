import { OnModuleInit } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

type Message = {
  userID: string;
  message: string;
  timestamp: number;
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  socket: Server;

  onModuleInit() {
    this.socket.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: Message): void {
    console.log('Received message:', message);
    this.socket.emit('onMessage', message);
  }
}
