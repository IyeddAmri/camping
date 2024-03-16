import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();
  const [lastQuestion, setLastQuestion] = useState('');

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessage = (userInput) => {
    switch (userInput.toLowerCase()) {
      case 'hello !':
        addMessage('AI', 'Hello! How can I assist you today?');
        break;
      case 'how are you?':
        addMessage('AI', "As an AI, I don't have feelings or emotions, but I'm here and ready to assist you! How can I help you today?");
        break;
      case 'what is the purpose of your camping application':
        addMessage('AI', "The purpose of a camping application could vary depending on its features and intended audience, but generally, a camping application is designed to enhance the camping experience for outdoor enthusiasts. Some common features and purposes of camping applications include Campsite Discovery/Booking and Reservations/Navigation and Directions/Campground Information/Campsite Reviews and Ratings");
        setLastQuestion('camping');
        break;
      case 'where can i do a camping':
        if (lastQuestion === 'camping') {
          addMessage('AI', 'In Tunisia, camping enthusiasts can enjoy diverse landscapes, from the vast Sahara Desert with its iconic sand dunes to the picturesque Mediterranean coastline, where beach camping is popular, while national parks like Ichkeul and Boukornine offer opportunities for camping amidst nature, ensuring a memorable outdoor experience for visitors')
        } 
        break;
      case 'by':
        addMessage('AI', 'Take care!');
        break;
      default:
        addMessage('AI', "It seems like you've entered a random sequence of characters. Is there something specific you'd like assistance with? Feel free to ask any questions or provide more context!");
        break;
    }
  };

  const addMessage = (sender, text) => {
    setMessages(prevMessages => [...prevMessages, { sender, text }]);
  };

  const sendMessage = () => {
    addMessage('User', input);
    scrollToBottom(); // Ensure user message is visible after sending
    handleMessage(input);
    setInput('');
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
      >
        <View style={{ flex: 1, padding: 20 }}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: message.sender === 'User' ? 'flex-end' : 'flex-start',
                marginVertical: 5,
              }}
            >
              {message.sender === 'User' ? (
                <Icon name="user" size={20} color="#007bff" style={{ marginRight: 5 }} />
              ) : (
                <Icon name="android" size={20} color="green" style={{ marginRight: 5 }} />
              )}
              <View
                style={{
                  backgroundColor: message.sender === 'User' ? '#007bff' : '#f0f0f0',
                  borderRadius: 10,
                  padding: 10,
                  maxWidth: '80%',
                }}
              >
                <Text style={{ color: message.sender === 'User' ? '#fff' : '#000' }}>{message.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextInput
            style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10 }}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chatbot;
