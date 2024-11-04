// Placeholder for 'Join Now' button
function joinNow() {
    alert("Redirecting to registration page...");
}

// Display Topic Details in the Roadmap Section
function showTopicDetails(topic) {
    const topicDescription = {
        "Arrays": "Week 1: Learn arrays and make notes. Week 2: Practice array questions and submit results.",
        "Linked Lists": "Week 3: Learn linked lists concepts. Week 4: Practice linked list problems and submit results.",
        "Trees": "Week 5: Study tree structures. Week 6: Solve tree-based questions.",
        "Graphs": "Week 7: Understand graph theory. Week 8: Complete graph-based tasks."
    };
    document.getElementById("topic-description").innerText = topicDescription[topic];
}

// Placeholder for 'Submit Task' button
function submitTask() {
    alert("Submit your task on Google Drive link.");
}

// Placeholder for 'Go to Discord' button
function joinDiscord() {
    alert("Opening Discord...");
}
