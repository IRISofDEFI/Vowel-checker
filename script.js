function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

function checkVowel() {
    let text = document.getElementById("inputText").value;
    let vowelCount = 0;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (isVowel(text[i])) {
            vowelCount++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

// Attach button click event
document.getElementById("checkBtn").addEventListener("click", checkVowel);
