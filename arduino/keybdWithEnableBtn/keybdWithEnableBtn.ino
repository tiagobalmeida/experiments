/*
  Emulates a keyboard with only one Key.
  Needs 2 switches connected to the arduino:
   the A key,
   the "keyboard enable" switch. For safety while developing.

  The circuit:
  - LED attached from pin 13 to ground
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.

  created 2018
  by Tiago Almeida @jumpifzero

*/

#include <Keyboard.h>

// constants won't change. They're used here to set pin numbers:
const int enableBtnPin = 2;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin
const int keyAPin = 4;

bool keyboardStarted = false;

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(enableBtnPin, INPUT);
  // enable the keyboard lib
  
  pinMode(keyAPin, INPUT_PULLUP);
}

void loop() {
  int keyboardEnabled = (digitalRead(enableBtnPin) == HIGH);
  int keyAPressed = (digitalRead(keyAPin) == LOW);

  if (keyboardEnabled) {
    digitalWrite(ledPin, HIGH); // LED is on when keyboard enabled.

    if ( !keyboardStarted ) { 
      keyboardStarted = true;
      Keyboard.begin();
    }
    
    // check if key a is pressed. It goes LOW when pressed as it is a pullup.
    if (keyAPressed) {
      Keyboard.press('a');
      delay(100);
      Keyboard.releaseAll();
    }
    
  } else { 
    digitalWrite(ledPin, LOW);
     
    if ( keyboardStarted ) { 
      Keyboard.end();
      keyboardStarted = false;
    }
    digitalWrite(ledPin, LOW);   
  }

}
