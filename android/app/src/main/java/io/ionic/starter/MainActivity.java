package io.ionic.starter;

import android.osBundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import com.dutchconcepts.capacitor.barcodescanner.BarcodeScanner;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        add(BarcodeScanner.class);
    }});
    }
}
