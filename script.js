// registering each link to its tab, when each link is clicked the other tabs are hidden 
document.querySelectorAll(".link").forEach((element) => {
    element.addEventListener('click', () => {
        const tabId = `#${element.id}-tab`;
        document.querySelectorAll(".tab").forEach((element) => {
            element.classList.remove("active"); // write some css code to make sure tabs without active class are hidden
        });
        
        document.querySelector(tabId)?.classList.add("active");
    });
});

// insert your functions to add schedules and modify schedules here

// helper function to get scheuldes as string and label it with a name
function getScheduleAsString(scheduleName, schedule) {
    return `${scheduleName}: ${schedule.innerHTML}`;
}

// helper function to fetch AI response and put it on the screen
function callOpenAIAndAddResponse(prompt) {
    fetch(/** fetch configuration here */)
        .then((response) => {
            // handle open ai response here, replace aiResponseAsText with proper value
            const aiResponseAsText = "hello world";
            document.querySelector("jasper-result").innerHTML = aiResponseAsText;
        })
        .catch((error) => {
            // something went wrong with the fetch request
        });
}

// adding event listener to the "ask japer button"
const askJasperButton = document.querySelector("#ask-jasper");
askJasperButton.addEventListener('click', () => {
    const userInput = document.querySelector("#jasper-input")?.value;
    const schedules = document.querySelectorAll(".schedule"); // replace schedule with correct className
    
    const schedulesAsString = [];
    schedules.forEach((schedule) => {
        schedulesAsString.push(getScheduleAsString(schedule.id, schedule));
    });

    const prompt = `I have a question: ${userInput}\n\nPlease use the following schedules to answer my question:\n${schedulesAsString.join("\n\n")}`;

    callOpenAIAndAddResponse(prompt);
});