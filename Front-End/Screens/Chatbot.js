// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [lastQuestion, setLastQuestion] = useState('');

//   const handleMessage = (userInput) => {
//     switch (userInput.toLowerCase()) {
//       case 'hello !':
//         addMessage('AI', 'Hello! How can I assist you today?');
//         break;
//       case 'how are you?':
//         addMessage('AI', "As an AI, I don't have feelings or emotions, but I'm here and ready to assist you! How can I help you today?");
//         break;
//       case 'what is the purpose of your camping application':
//         addMessage('AI', "The purpose of a camping application could vary depending on its features and intended audience, but generally, a camping application is designed to enhance the camping experience for outdoor enthusiasts. Some common features and purposes of camping applications include Campsite Discovery/Booking and Reservations/Navigation and Directions/Campground Information/Campsite Reviews and Ratings");
//         setLastQuestion('camping');
//         break;
//       case 'where can i do a camping':
//         if (lastQuestion === 'camping') {
//           addMessage('AI', 'In Tunisia, camping enthusiasts can enjoy diverse landscapes, from the vast Sahara Desert with its iconic sand dunes to the picturesque Mediterranean coastline, where beach camping is popular, while national parks like Ichkeul and Boukornine offer opportunities for camping amidst nature, ensuring a memorable outdoor experience for visitors')
//         } 
//         break;
//       case 'by':
//         addMessage('AI', 'Take care!');
//         break;
//       default:
//         addMessage('AI', "It seems like you've entered a random sequence of characters. Is there something specific you'd like assistance with? Feel free to ask any questions or provide more context!");
//         break;
//     }
//   };

//   const addMessage = (sender, text) => {
//     setMessages([...messages, { sender, text }]);
//   };

//   const sendMessage = () => {
//     addMessage('User', input);
//     handleMessage(input);
//     setInput('');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//         <TextInput
//           style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
//           value={input}
//           onChangeText={setInput}
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//       {messages.map((message, index) => (
//         <Text key={index} style={{ textAlign: message.sender === 'User' ? 'right' : 'left' }}>
//           {`${message.sender}: ${message.text}`}
//         </Text>
//       ))}
//     </View>
//   );
// };

// export default Chatbot;


import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [lastQuestion, setLastQuestion] = useState('');

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
    setMessages([...messages, { sender, text }]);
  };

  const sendMessage = () => {
    addMessage('User', input);
    handleMessage(input);
    setInput('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 20, paddingHorizontal: 10 }}>
        <TextInput
          style={{ flex: 1, paddingVertical: 10 }}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
        <Icon name="send" size={20} color="#007bff" style={{ marginLeft: 10 }} />
      </View>
      <View style={{ marginTop: 10, alignSelf: 'stretch' }}>
        {messages.map((message, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text style={{ fontWeight: 'bold', marginRight: 5 }}>{message.sender}: </Text>
            <Text style={{ flex: 1, backgroundColor: message.sender === 'User' ? '#007bff' : '#f0f0f0', color: message.sender === 'User' ? '#fff' : '#000', padding: 10, borderRadius: 10 }}>{message.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Chatbot;
