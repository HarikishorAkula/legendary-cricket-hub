document.addEventListener('DOMContentLoaded', () => {
    console.log('Cricket Legends Hub is ready!');

    const players = [
        {
            name: 'Sachin Tendulkar',
            featuredImg: 'sachin.jpg',
            profileImg: 'Tendulkar.jpg',
            stats: { matches: 463, runs: 18426, wickets: 154 },
            achievements: ['Highest ODI Runs', '100 International Centuries'],
            country: 'India',
            hometown: 'Mumbai',
            lat: 19.0760,
            lng: 72.8777,
            video: 'https://www.youtube.com/embed/qCLjWWREtuI'
        },
        {
            name: 'Brian Lara',
            featuredImg: 'brian lara.jpg',
            profileImg: 'lara.jpg',
            stats: { matches: 299, runs: 10405, wickets: 4 },
            achievements: ['400* in Test Match', 'Highest Individual Score in First-Class Cricket'],
            country: 'West Indies',
            hometown: 'Santa Cruz',
            lat: 10.6918,
            lng: -61.2225,
            video: 'https://www.youtube.com/embed/bbZdkBLYcak' // Corrected
        },
        {
            name: 'Ricky Ponting',
            featuredImg: 'pointing.jpg',
            profileImg: 'ricky.jpg',
            stats: { matches: 375, runs: 13704, wickets: 3 },
            achievements: ['World Cup Winner (1999, 2003, 2007)', 'Second Most ODI Runs'],
            country: 'Australia',
            hometown: 'Launceston',
            lat: -41.4332,
            lng: 147.1441,
            video: 'https://www.youtube.com/embed/E_Q_vCccND0' // Corrected
        }, 
        {
            name: 'Jacques Kallis',
            featuredImg: 'jaaques.jpg',
            profileImg: 'jaq.jpg',
            stats: { matches: 328, runs: 11579, wickets: 273 },
            achievements: ['All-rounder Extraordinaire', 'South Africa’s Leading Batsman'],
            country: 'South Africa',
            hometown: 'Cape Town',
            lat: -33.9249,
            lng: 18.4241,
            video: 'https://www.youtube.com/embed/ZiiczHHvAzk' // Corrected
        },
        {
            name: 'Virat Kohli',
            featuredImg: 'kohli.jpg',
            profileImg: 'kohli v.jpg',
            stats: { matches: 254, runs: 12311, wickets: 4 },
            achievements: ['Fastest to 8000, 9000, 10000 ODI Runs', 'World Cup Winner (2011)'],
            country: 'India',
            hometown: 'Delhi',
            lat: 28.6139,
            lng: 77.2090,
            video: 'https://www.youtube.com/embed/mVupXkSH4sQ' // Corrected
        }
    ];

    const featuredPlayersContainer = document.querySelector('.featured-players');
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <img src="${player.featuredImg}" alt="${player.name}">
            <h4>${player.name}</h4>
            <p>Country: ${player.country}</p>
        `;
        featuredPlayersContainer.appendChild(playerCard);
    });

    const profilesContainer = document.querySelector('.profiles-container');
    players.forEach(player => {
        const playerProfile = document.createElement('div');
        playerProfile.classList.add('player-profile');
        
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', player.video); // Corrected URLs
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.style.width = '100%';
        iframe.style.height = '315px'; // Adjusted height
        videoContainer.appendChild(iframe);

        playerProfile.innerHTML = `
            <img src="${player.profileImg}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p><strong>Country:</strong> ${player.country}</p>
            <p><strong>Hometown:</strong> ${player.hometown}</p>
            <p><strong>Career Statistics:</strong></p>
            <ul>
                <li><strong>Matches:</strong> ${player.stats.matches}</li>
                <li><strong>Runs:</strong> ${player.stats.runs}</li>
                <li><strong>Wickets:</strong> ${player.stats.wickets}</li>
            </ul>
            <p><strong>Notable Achievements:</strong></p>
            <ul>
                ${player.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        `;

        playerProfile.appendChild(videoContainer);
        profilesContainer.appendChild(playerProfile);
    });

    const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    players.forEach(player => {
        L.marker([player.lat, player.lng])
            .addTo(map)
            .bindPopup(`
                <b>${player.name}</b><br>
                <p>Hometown: ${player.hometown}, ${player.country}</p>
                <p><a href="${player.video}" target="_blank">Watch Video</a></p>
            `);
    });

    const matches = [
        {
            title: 'India vs Pakistan - 2007 T20 World Cup Final',
            description: 'A thrilling final that saw India clinch the inaugural T20 World Cup by defeating arch-rivals Pakistan. MS Dhoni’s young team triumphed in a nail-biting finish.',
            video: 'https://www.youtube.com/embed/g6VJRlfeQa0?si=LDDbUK0WZ1IhXl9Q', // Corrected
            year: 2007
        },
        {
            title: 'Australia vs South Africa - 1999 World Cup Semi-Final',
            description: 'One of the greatest ODIs ever played. The match ended in a dramatic tie, and Australia advanced to the final due to their superior performance in the earlier stage of the tournament.',
            video: 'https://www.youtube.com/embed/xiWp5WkN9ZQ?si=fG32mpTJ0f6KaxvZ', // Corrected
            year: 1999
        },
        {
            title: 'England vs New Zealand - 2019 World Cup Final',
            description: 'An unbelievable final that went down to a Super Over after both teams tied in the regular play. England eventually won their first-ever World Cup by the smallest of margins.',
            video: 'https://www.youtube.com/embed/pQ5xEiZ-5IE?si=6u1NEtc7-xt7AIoF', // Corrected
            year: 2019
        }
    ];

    const matchesContainer = document.querySelector('.matches-container');
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', match.video); // Corrected URLs
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.style.width = '100%';
        iframe.style.height = '315px';

        matchCard.innerHTML = `
            <h4>${match.title} (${match.year})</h4>
            <p>${match.description}</p>
        `;
        matchCard.appendChild(iframe);
        matchesContainer.appendChild(matchCard);
    });

    const voteForm = document.getElementById('vote-form');
    const voteResults = document.getElementById('vote-results');
    let voteCount = 0;

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const player = event.target.player.value;
        if (!player) {
            alert('Please select a player before voting.');
            return;
        }
        voteCount++;
        voteResults.textContent = `Votes: ${voteCount}`;
        alert(`Thank you for voting for ${player}!`);
    });
});
