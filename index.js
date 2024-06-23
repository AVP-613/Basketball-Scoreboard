// Home team score elements
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

// Guest team score elements
let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

// Home team score functions
homeScoreBtnOne.addEventListener("click", function() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
});
homeScoreBtnTwo.addEventListener("click", function() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
});
homeScoreBtnThree.addEventListener("click", function() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
});

// Guest team score functions
guestScoreBtnOne.addEventListener("click", function() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
});
guestScoreBtnTwo.addEventListener("click", function() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
});
guestScoreBtnThree.addEventListener("click", function() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
});

