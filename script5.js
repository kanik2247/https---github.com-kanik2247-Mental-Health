const chatbot = {
    name: 'Tink',
    issues: [
      {
        name: 'Stress',
        subcategories: [
          {
            name: 'Work Stress',
            messages: [
              'I see you are dealing with work stress. It is important to take breaks and prioritize self-care. Have you considered setting aside time for relaxation or hobbies?',
              'Stress at work can be overwhelming. It might be helpful to talk to your supervisor or HR about your workload. They may be able to offer support or accommodations.',
              'Remember to breathe and take things one step at a time. You are doing your best and that is enough.'
            ]
          },
          {
            name: 'Personal Stress',
            messages: [
              'Personal stress can be challenging to manage. It might be helpful to talk to a trusted friend or family member about what you are going through.',
              'Consider engaging in activities that bring you joy and help you relax, such as exercise, meditation, or reading.',
              'Remember that it is okay to take time for yourself and prioritize your mental health.'
            ]
          }
        ]
      },
      {
        name: 'Anxiety',
        subcategories: [
          {
            name: 'Social Anxiety',
            messages: [
              'Social anxiety can make it difficult to feel comfortable in social situations. It might be helpful to practice deep breathing or mindfulness techniques before social events.',
              'Consider seeking support from a mental health professional who can help you develop coping strategies for social anxiety.',
              'Remember that you are not alone and many people experience social anxiety. It is a common experience.'
            ]
          },
          {
            name: 'Generalized Anxiety',
            messages: [
              'Generalized anxiety can cause worry and concern about many aspects of life. It might be helpful to practice relaxation techniques, such as progressive muscle relaxation or yoga.',
              'Consider talking to a mental health professional about your anxiety. They can help you develop coping strategies and provide support.',
              'Remember to take things one day at a time and focus on the present moment rather than worrying about the future.'
            ]
          }
        ]
      }
    ],
    startConversation: function() {
      const chatBox = document.getElementById('chat-box');
      const userInput = document.getElementById('user-input');
      const sendButton = document.getElementById('send-button');
      const chatLog = document.getElementById('chat-log');
  
      sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
          const chatBotMessage = {
            text: userMessage,
            type: 'user'
          };
          chatBox.appendChild(this.createMessageElement(chatBotMessage));
          userInput.value = '';
  
          const issue = chatBot.findIssue(userMessage);
          if (issue) {
            const subcategory = chatBot.findSubcategory(issue, userMessage);
            if (subcategory) {
              const message = chatBot.getRandomMessage(subcategory);
              const chatBotResponse = {
                text: message,
                type: 'bot'
              };
              chatBox.appendChild(chatBot.createMessageElement(chatBotResponse));
            }
          }
  
          chatLog.scrollTop = chatLog.scrollHeight;
        }
      });
    },
    findIssue: function(message) {
      const keywords = message.toLowerCase().split(' ');
      for (const issue of this.issues) {
        if (issue.name.toLowerCase().split(' ').some(keyword => keywords.includes(keyword))) {
          return issue;}
        }
    }
}