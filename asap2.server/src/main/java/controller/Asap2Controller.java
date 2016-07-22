package controller;

import com.alibaba.fastjson.JSONObject;
import entites.A2lJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

/**
 * Created by myklory on 2016/7/22.
 */
@Controller
@RequestMapping("/api/asap2")
public class Asap2Controller {

    @RequestMapping("/template")
    @ResponseBody
    public JSONObject getAsap2Template() throws IOException {
        A2lJson a2lJson = new A2lJson();
        return a2lJson.getAsap2Template();
    }

    @RequestMapping("/a2l")
    @ResponseBody
    public JSONObject getAsap2A2l(){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("test", "test");
        return jsonObject;
    }
}
