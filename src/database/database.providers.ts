import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT as string),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];
