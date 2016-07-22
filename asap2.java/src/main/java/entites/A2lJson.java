package entites;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.io.*;

/**
 * Created by myklory on 2016/7/21.
 */
public class A2lJson {

    public static void main(String[] args) throws IOException {
        JSONObject child = new JSONObject();
        child.put("full", "full");
        JSONObject obj = new JSONObject();
        obj.put("name", "foo");
        obj.put("num", "1001");
        obj.put("fullname", child);
        System.out.println(obj);

//        FileInputStream file = new FileInputStream(A2lJson.class.getResourceAsStream("asap2template.json"));
        InputStream in = A2lJson.class.getResourceAsStream("/asap2template.json");
        InputStreamReader inr = new InputStreamReader(in);
        BufferedReader br = new BufferedReader(inr);
        StringBuilder lines = new StringBuilder();
        String line = null;
        while((line = br.readLine()) != null){
            lines.append(line);
        }

        System.out.println(lines);


        JSONObject jo = JSON.parseObject(lines.toString());
        System.out.println(jo);
    }

    public JSONObject getAsap2Template() throws IOException {
        InputStream in = A2lJson.class.getResourceAsStream("/asap2template.json");
        InputStreamReader inr = new InputStreamReader(in);
        BufferedReader br = new BufferedReader(inr);
        StringBuilder lines = new StringBuilder();
        String line = null;
        while((line = br.readLine()) != null){
            lines.append(line);
        }

        System.out.println(lines);

        JSONObject jo = JSON.parseObject(lines.toString());
        System.out.println(jo);
        return jo;
    }
}
