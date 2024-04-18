
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const budget = parseInt(document.getElementById('budget').value);
    const carType = document.getElementById('carType').value;
    const color = document.getElementById('color').value;
    const style = document.getElementById('style').value;

    let recommendation = 'Based on your preferences: ';

    if (style === 'sporty') {
        if (budget <= 20000) {
            recommendation += 'a Mazda MX-5 Miata';
        } else if (budget <= 60000) {
            recommendation += 'a Ford Mustang';
        } else {
            recommendation += 'a Porsche 911';
        }
    } else if (style === 'luxurious') {
        if (budget <= 20000) {
            recommendation += 'a Toyota Avalon';
        } else if (budget <= 60000) {
            recommendation += 'a BMW 5 Series';
        } else {
            recommendation += 'a Mercedes-Benz S-Class';
        }
    } else { // casual
        if (budget <= 20000) {
            recommendation += 'a Honda Civic';
        } else if (budget <= 60000) {
            recommendation += 'a Toyota Camry';
        } else {
            recommendation += 'an Audi A4';
        }
    }

    document.getElementById('result').innerText = recommendation;
});
