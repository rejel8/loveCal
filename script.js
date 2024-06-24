function calculateLove() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === '' || name2 === '') {
        document.getElementById('result').innerHTML = `<p>Please enter both names.</p>`;
        return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1;
    const resultText = `<p>${name1} and ${name2}'s love score is: ${loveScore}%</p>`;

    document.getElementById('result').innerHTML = resultText;
}
