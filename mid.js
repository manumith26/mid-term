let storyStep = 0;

function startGame() {
    document.getElementById('story-text').innerText = "Hola, adventurer! Choose your path: (a)Explore the Jungle or (b)Climb the Magic Mountain.";
	document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/nature-scene-with-trees-fields_1308-96940.jpg)";
    document.getElementById('play-button').style.display = "none";
    document.getElementById('options-container').style.display = "flex";
}

function continueStory() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const storyTextElement = document.getElementById('story-text');

    switch (storyStep) {
        case 0:
            switch (userInput) {
                case "explore the jungle":
                    storyTextElement.innerText = "Fantastic! Let's explore the Jungle. Now choose: (a)Follow the River or (b)Swing on Vines.";
                    document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-hand-drawn-fresh-mountain-forest-illustration-background-design-paintedfreshmountain-forest-backgroundillustration-image_66822.jpg')";
                    break;
                case "climb the magic mountain":
                    storyTextElement.innerText = "Great choice! Let's climb the Magic Mountain. Now choose: (a)Find the Rainbow Bridge or (b)Slide Down the Rainbow.";
                    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg')";
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 1:
            switch (userInput) {
                case "follow the river":
                    storyTextElement.innerText = "Following the river,(a)follow fish or (b)seek shelter";
                    document.body.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20191216/ourmid/pngtree-house-is-eating-fish-illustration-vector-on-white-background-png-image_2078782.jpg')";
                    break;
                case "swing on vines":
                    storyTextElement.innerText = "Swinging on vines, you accidentally disturb a beehive. Game over!";
                    document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e803ef-8d1e-494e-8772-4d63f87ce3c0/dg1if2r-73e66742-0c67-4618-8bb7-e3ed755d6217.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZTgwM2VmLThkMWUtNDk0ZS04NzcyLTRkNjNmODdjZTNjMFwvZGcxaWYyci03M2U2Njc0Mi0wYzY3LTQ2MTgtOGJiNy1lM2VkNzU1ZDYyMTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VbHan8DJdfxLj5ZhiXLcYM6YUay2E5PtYfPE3CjmyNc')";
                    
                    break;
                case "find the rainbow bridge":
                    storyTextElement.innerText = "You found the Rainbow Bridge! (a) cross the bridge or (b)swim in the river";
                    document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1206770886/vector/wooden-bridge-crossing-river-in-forest.jpg?s=612x612&w=0&k=20&c=qXelJ2p5oA-rsY6i17-pY-nmlCiszWbybvw-vdjh5VE=')";
                    break;
                case "slide down the rainbow":
                    storyTextElement.innerText = "Sliding down the rainbow, you encounter a grumpy cloud. Game over!";
                    document.body.style.backgroundImage = "url('https://c8.alamy.com/comp/K4G869/angry-cute-cloud-character-cartoon-K4G869.jpg')";
                    
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 2:
            switch (userInput) {
                case "cross the bridge":
                    storyTextElement.innerText = "Crossing the bridge, you will have two options (a)treasure chest or (b)eat rainbow icecream";
                    document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/014/573/394/non_2x/cute-cartoon-ice-cream-pirate-with-treasure-box-free-vector.jpg')";
                    break;
                case "swim in the river":
                    storyTextElement.innerText = "Swimming in the river, you got sunk";
                    document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4e75230-39d0-4099-9b2e-b1cba5f313f3/dfsdnk6-e271ac61-378c-43c5-a44a-78899c0a28a9.png/v1/fill/w_736,h_1086,q_70,strp/dora_crying_because_she_dropped_her_ice_cream_by_gabetheslacker_dfsdnk6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMyIsInBhdGgiOiJcL2ZcL2E0ZTc1MjMwLTM5ZDAtNDA5OS05YjJlLWIxY2JhNWYzMTNmM1wvZGZzZG5rNi1lMjcxYWM2MS0zNzhjLTQzYzUtYTQ0YS03ODg5OWMwYTI4YTkucG5nIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tXhOyyM1HndoGIPgeLobelEl-o-FYs23YiUxDjvQU4s')";
                    
                    break;
                case "follow fish":
                    storyTextElement.innerText = "you are following the fish you will have two options (a)return to surface or (b)discover hidden cave";
                    document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
                    break;
                case "seek shelter":
                    storyTextElement.innerText = "you found the shelter you will sleep and forget the past";
                    document.body.style.backgroundImage = "url('https://i.insider.com/5f3c93decdf25a001e84e102?width=1029&format=jpeg')";
                    
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;

        case 3:
            switch (userInput) {
                case "return to surface":
                    storyTextElement.innerText = "you gave up!";
                    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/TYqAC8KoeqI/maxresdefault.jpg')";
                   
                    break;
                case "discover hidden cave":
                    storyTextElement.innerText = " you discover an underwater cave you will have two options (a)talk to mermaid or (b)explore magical fishes world";
                    document.body.style.backgroundImage = "url('https://diamondpaintingbliss.com/cdn/shop/products/Magical_Mermaid_Fish_Diamond_Painting.jpg?v=1578784935')";
                    break;
                case "treasure chest":
                    storyTextElement.innerText = "you won the treasure!:)";
                    document.body.style.backgroundImage = "url('https://as2.ftcdn.net/v2/jpg/01/02/48/53/1000_F_102485300_yESsm0bLhgPf9i8KHwsaD8wbpmL0DE52.jpg')";
                    
                    break;
                case "eat rainbow icecream":
                    storyTextElement.innerText = "you got fainted!:(";
                    document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
                    
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;

        case 4:
            switch (userInput) {
                case "talk to mermaid":
                    storyTextElement.innerText = "you have successfully discovered the mermaid";
                    document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/71/53/26/360_F_271532650_Wjl5ooMPpOrcotigYHM7AKZhFHnUaQXw.jpg')";
                    break;
                case "explore magical fishes world":
                    storyTextElement.innerText = "Playing with the magical fishes Game over!";
                    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/zodiac-sign-pisces-fantasy-fish-with-magic-light-space-with-generative-ai-technology_860978-618.jpg')";
                    break;

                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;

        default:
            storyTextElement.innerText = "The end of Dora's adventurous journey.";
            disableInput();
            break;
    }

    storyStep++;
}

function disableInput() {
    document.getElementById('options-container').style.display = "none";
    document.getElementById('story-text').innerText = "Game over. Refresh the page to play again with Dora!";
}
