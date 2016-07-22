package db;

import com.mongodb.Block;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.conversions.Bson;

/**
 * Created by myklory on 2016/7/22.
 */
public class MongoDbHelper {
    public void dbTest(){
        MongoClient mongoClient = new MongoClient();
        MongoDatabase mongoDatabase = mongoClient.getDatabase("test");
        FindIterable<Document> iterable = mongoDatabase.getCollection("restaurants").find();
        iterable = mongoDatabase.getCollection("restaurants").find(
                new Document("address.street", "West   54 Street"));
        iterable.forEach(new Block<Document>() {
            @Override
            public void apply(final Document document) {
                System.out.println(document.toJson());
            }
        });
    }

    private static MongoClient mongoClient;
    private static MongoDatabase mongoDatabase;
    private static MongoCollection mongoCollection = null;

    static {
        mongoClient = new MongoClient();
    }

    public static void setMongoDatabase(String database) {
        mongoDatabase = mongoClient.getDatabase(database);
    }

    public static MongoDatabase getMongoDatabase() {
        return mongoDatabase;
    }

    public static void setMongoCollection(String collection) {
        mongoCollection = mongoDatabase.getCollection(collection);
    }

    private static String getJson(FindIterable<Document> iterable) {
        String json = "[";
/*        iterable.forEach(new Block<Document>() {
            @Override
            public void apply(Document document) {
               json += document.toJson() + ",";
            }
        });*/
        MongoCursor<Document> mongoCursor = iterable.iterator();
        while (mongoCursor.hasNext()) {
            json += mongoCursor.next().toJson() + ",";
        }
        json += "]";
        return json;
    }

    public static String find(String key, String value) {
        FindIterable<Document> iterable = mongoCollection.find(
                new Document(key, value));

        return getJson(iterable);
    }

}

