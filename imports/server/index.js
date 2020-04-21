import { Mongo, MongoInternals } from 'meteor/mongo';

const DeleteMe = new Mongo.Collection('deleteMe');

console.log('======================================================');
console.log(DeleteMe._driver.mongo.MongoConnection.db.Db);
console.log('======================================================');
