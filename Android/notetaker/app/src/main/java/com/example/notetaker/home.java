package com.example.notetaker;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;


public class home extends MainActivity{
    //SignOut Button
    Button GsignOut;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView welcome = findViewById(R.id.welcome);
        welcome.setText("Welcome " + user);

        GsignOut = findViewById(R.id.signOut);
        Gsignout();

    }

    private void Gsignout(){
        mGoogleSignInClient.signOut();
        GsignOut.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(home.this, MainActivity.class));
            }
        });
        //    startActivity(new Intent(MainActivity.this, LoginActivity.class));
    }

}
