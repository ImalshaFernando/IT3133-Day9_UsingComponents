import { StyleSheet } from 'react-native';
import { Text ,Divider,Button } from 'react-native-paper'; 

export default function Home(){
    return(
        <>
      <Text variant="headlineLarge" style={styles.head}>Headline Large</Text>
      <Divider />
      <Text variant="bodyMedium" style={styles.body}>In a quiet corner of the universe, where the stars shimmered like spilled sugar across a velvet tablecloth, a tiny planet spun its tale of wonder. 
      Its oceans whispered secrets to the skies, while forests danced to the rhythm of unseen melodies. 
      Time moved differently here, not in seconds or hours, but in heartbeats and dreams.
      In a quiet corner of the universe, where the stars shimmered like spilled sugar across a velvet tablecloth, a tiny planet spun its tale of wonder. 
      Its oceans whispered secrets to the skies, while forests danced to the rhythm of unseen melodies. 
      Time moved differently here, not in seconds or hours, but in heartbeats and dreams.
      In a quiet corner of the universe, where the stars shimmered like spilled sugar across a velvet tablecloth, a tiny planet spun its tale of wonder. 
      Its oceans whispered secrets to the skies, while forests danced to the rhythm of unseen melodies. 
      Time moved differently here, not in seconds or hours, but in heartbeats and dreams.
      In a quiet corner of the universe, where the stars shimmered like spilled sugar across a velvet tablecloth, a tiny planet spun its tale of wonder. 
      Its oceans whispered secrets to the skies, while forests danced to the rhythm of unseen melodies. 
      Time moved differently here, not in seconds or hours, but in heartbeats and dreams.
      In a quiet corner of the universe, where the stars shimmered like spilled sugar across a velvet tablecloth, a tiny planet spun its tale of wonder. 
      Its oceans whispered secrets to the skies, while forests danced to the rhythm of unseen melodies. 
      Time moved differently here, not in seconds or hours, but in heartbeats and dreams.
      

      </Text>
       <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </>

    );
}

const styles = StyleSheet.create({
    body:
    {
      padding: 8,
      textAlign: 'justify',
      color: 'black'
    },

    head:
    {
      padding: 8,
      textAlign: 'center',
      color: 'black'
    }
   
});