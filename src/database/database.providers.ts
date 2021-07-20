
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://MyMongoDBUser:Abcde@1234567@cluster0.odsw4.mongodb.net/?retryWrites=true&w=majority'),
  },
];