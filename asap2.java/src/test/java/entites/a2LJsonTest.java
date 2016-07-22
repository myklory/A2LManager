package entites;

import org.junit.Test;

import java.io.IOException;

/**
 * Created by myklory on 2016/7/21.
 */
public class a2LJsonTest {

    @Test
    public void getAsap2Test() throws IOException {
        A2lJson A2lJson = new A2lJson();
        System.out.println(A2lJson.getAsap2Template());
    }
}
