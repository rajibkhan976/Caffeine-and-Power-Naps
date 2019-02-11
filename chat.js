$(document).ready(function() {
  //CHAT
    $('#chat').click(function() {
        $('#chatDisplay').slideToggle("slow");
        $(".chatMessages").html("");
    });

    $('#send').click(function() {
        chat();
        $('#chatInput').val('');
    });

    $('#chatInput').keydown(function() {
        if (event.keyCode == 13) {
            chat();
            $('#chatInput').val('');
        }
    });

    const validGreetings = ['hello', 'hi', 'hey', 'hej'];
    const validBadMoods = ['bad', 'sad', 'upset', 'angry', 'not good'];
    const validGoodMoods = ['good', 'happy', 'okay', 'great', 'awesome'];
    const validGoodbyes = ['goodbye', 'bye', 'later', 'hejdå']

    function checkInput (input, validArray) {
        var isInArray = false;

        for(var i = 0; i < validArray.length; i++) {
            if (input.includes(validArray[i])) {
            isInArray = true;
            }
        }

        return isInArray;
    }

    function chat() {
        var chatInput = $('#chatInput').val();
        const appendInput = '<li class="chat-input">' + chatInput + '</li>';
        chatInput = chatInput.toLowerCase();
        
        const isGreeting = checkInput(chatInput, validGreetings);
        const isBadMood = checkInput(chatInput, validBadMoods);
        const isGoodMood = checkInput(chatInput, validGoodMoods);
        const isGoodbye = checkInput(chatInput, validGoodbyes);

        if (isGreeting) {
            $('.chatMessages').append(appendInput)
            $('.chatMessages').append('<li class="chat-output">' + 'Hello. <br> How are you?' + '</li>');
            $('.chat-input').show();
            $('.chat-output').show(1000);
        } else if (isBadMood) {
            $('.chatMessages').append(appendInput);
            $('.chatMessages').append('<li class="chat-output">' + "I'm sorry to hear that. <br> I hope your day gets better!" + '</li>');
            $('.chat-input').show();
            $('.chat-output').show(1000);
        } else if (isGoodMood) {
            $('.chatMessages').append(appendInput);
            $('.chatMessages').append('<li class="chat-output">' + "Yay!! I'm glad you're having a good day." + '</li>');
            $('.chat-input').show();
            $('.chat-output').show(1000);
        } else if (isGoodbye) {
            $('.chatMessages').append(appendInput);
            $('.chatMessages').append('<li class="chat-output">' + "Goodbye." + '</li>');
            $('.chat-input').show();
            $('.chat-output').show(1000);
        } else {
            $('.chatMessages').append(appendInput)
            $('.chatMessages').append('<li class="chat-output">' + "Sorry, I don't understand." + '</li>');
            $('.chat-input').show();
            $('.chat-output').show(1000);
        }
    };
});