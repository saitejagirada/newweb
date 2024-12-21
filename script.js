// Check if user is logged in
function checkLogin() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', checkLogin);

// Sample posts data
const posts = [
    {
        username: "User1",
        content: "This is my first post!",
        likes: 0
    }
];

// Function to create a post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <div style="background: white; padding: 1rem; margin: 1rem 0; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            <strong>${post.username}</strong>
            <p>${post.content}</p>
            <button onclick="likePost(this)" style="margin-top: 0.5rem;">
                Like (${post.likes})
            </button>
        </div>
    `;
    return postDiv;
}

// Function to add a new post
function addPost() {
    const content = document.querySelector('textarea').value;
    if (content) {
        const post = {
            username: "You",
            content: content,
            likes: 0
        };
        posts.unshift(post);
        const feed = document.querySelector('.feed');
        feed.prepend(createPostElement(post));
        document.querySelector('textarea').value = '';
    }
}

// Add event listener to post button
document.querySelector('.post-form button').addEventListener('click', addPost);

// Initialize feed with sample post
document.querySelector('.feed').appendChild(
    createPostElement(posts[0])
);

// Button functions
function toggleSubButtons(buttonSetId) {
    // Hide all sub-buttons first
    const allSubButtons = document.querySelectorAll('.sub-buttons');
    allSubButtons.forEach(buttons => {
        buttons.style.display = 'none';
    });

    // Toggle the clicked set
    const buttonSet = document.getElementById(buttonSetId);
    if (buttonSet.style.display === 'none') {
        buttonSet.style.display = 'flex';
    } else {
        buttonSet.style.display = 'none';
    }
}

function clickButton(buttonName) {
    alert(`You clicked ${buttonName}!`);
}

function sayBonjour() {
    alert('Bonjour!');
}

// Sample friends data with random locations
const friends = [
    { id: 1, name: "Sarah Smith", distance: Math.random() * 5 },
    { id: 2, name: "John Doe", distance: Math.random() * 5 },
    { id: 3, name: "Mike Johnson", distance: Math.random() * 5 },
    { id: 4, name: "Emma Wilson", distance: Math.random() * 5 },
    { id: 5, name: "Alex Brown", distance: Math.random() * 5 }
];

// Function to display friends
function showNearbyFriends() {
    const friendsList = document.querySelector('.friends-list');
    friendsList.innerHTML = ''; // Clear existing content

    // Sort friends by distance
    const sortedFriends = [...friends].sort((a, b) => a.distance - b.distance);

    // Display each friend
    sortedFriends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.className = 'friend-item';
        friendElement.innerHTML = `
            <div class="friend-avatar">${friend.name[0]}</div>
            <div class="friend-info">
                <div>${friend.name}</div>
                <div class="friend-distance">${friend.distance.toFixed(1)} km away</div>
            </div>
        `;
        friendsList.appendChild(friendElement);
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showNearbyFriends();
    
    // Make sure sub-buttons are hidden initially
    const subButtons = document.getElementById('subButtons');
    if (subButtons) {
        subButtons.style.display = 'none';
    }
});

// Refresh locations every 30 seconds
setInterval(() => {
    friends.forEach(friend => {
        friend.distance = Math.random() * 5; // Generate new random distance
    });
    showNearbyFriends();
}, 30000); 