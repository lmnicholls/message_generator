const messageGenerator = function () {

    const beginning = ["To Think Less", "To Get Ahead", "For Stars To Shine", 
                    "If You Do Things", "If You Love Yourself", "To Keep Your Balance", 
                    "Failure Is Not Fatal", "Stay Focused Today", "Even If You Stumble",
                    "To Enjoy Every Moment"];

    const middle = ["You Need To"];

    const ending = ["Do More", "Get Started", "Have Darkness", "Do Them With Love", 
                "Do It Loudly", "Keep Moving", "Have The Courage To Continue",
                "Keep Your Eyes On The Prize", "Keep Trying", "Welcome Every Morning"];


    let first = beginning [ Math.floor (Math.random() * beginning.length )];
    let second = middle [ Math.floor (Math.random() * middle.length )];
    let third = ending [ Math.floor ( Math.random() * ending.length)];
    let inspirationalMessage = first + " " + second + " " + third + ".";

    document.getElementById("inspirational_message").innerHTML = inspirationalMessage;
}

