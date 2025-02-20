/* eslint-disable @typescript-eslint/await-thenable */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { connect, Connection, Channel } from 'amqplib';

@Injectable()
export class MessagingService implements OnModuleInit {
  private connection: Connection;
  private channel: Channel;

  async onModuleInit() {
    try {
      const rabbitMqUrl = process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672';
      this.connection = await connect(rabbitMqUrl);
      this.channel = await this.connection.createChannel();

      // Declare exchanges
      await this.channel.assertExchange('catalog', 'topic', { durable: true });

      console.log('✅ Connected to RabbitMQ');
    } catch (error) {
      console.error('❌ Error connecting to RabbitMQ:', error);
    }
  }

  async publishProductCreated(product: any) {
    this.channel.publish(
      'catalog',
      'product.created',
      Buffer.from(JSON.stringify(product)),
    );
  }

  async publishProductUpdated(product: any) {
    this.channel.publish(
      'catalog',
      'product.updated',
      Buffer.from(JSON.stringify(product)),
    );
  }

  async publishProductDeleted(productId: string) {
    this.channel.publish(
      'catalog',
      'product.deleted',
      Buffer.from(JSON.stringify({ id: productId })),
    );
  }
}
