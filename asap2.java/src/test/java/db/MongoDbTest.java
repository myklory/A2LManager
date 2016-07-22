package db;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.JSONSerializer;
import org.junit.Test;

/**
 * Created by myklory on 2016/7/22.
 */
public class MongoDbTest {
    @Test
    public void dbTester() {
/*        MongoDbHelper mongoDbHelper = new MongoDbHelper();
        mongoDbHelper.dbTest();*/
        MongoDbHelper.setMongoDatabase("test");
        MongoDbHelper.setMongoCollection("restaurants");
        String json = MongoDbHelper.find("address.street", "West   54 Street");
        System.out.println(json);
        JSONArray jsonArray = JSONArray.parseArray(json);
        System.out.println(jsonArray);
        jsonArray.get(1);
    }
}
