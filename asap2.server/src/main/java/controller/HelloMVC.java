package controller;

import com.alibaba.fastjson.JSONObject;
import entites.A2lJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by myklory on 2016/7/21.
 */
@Controller
@RequestMapping("/api")
public class HelloMVC {
    @RequestMapping("/hello")
    public String hello(){
        return "hello";
    }

    @RequestMapping("/json")
    public @ResponseBody JSONObject getJson() {
        JSONObject obj = new JSONObject();
        obj.put("Name", "fullish");
        return obj;
    }
    @RequestMapping("/map")
    public Map<String, String> getMap() {
        Map<String, String> map = new HashMap<String, String>();
        map.put("key1", "value-1");
        map.put("key2", "value-2");
        return map;
    }

    @RequestMapping("/asap2")
    public @ResponseBody JSONObject getAsap2() throws IOException {
        A2lJson a2lJson = new A2lJson();
        return a2lJson.getAsap2Template();
    }
}
