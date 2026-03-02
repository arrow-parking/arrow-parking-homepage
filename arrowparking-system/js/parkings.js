let allParkings = [];

window.addEventListener('DOMContentLoaded', async () => {
    await loadParkings();
    setupAreaButtons();
    
    
    const params = new URLSearchParams(window.location.search);
    const prefecture = params.get('prefecture');
    if (prefecture) {
        filterByPrefecture(prefecture);
        
        document.querySelectorAll('.area-button').forEach(btn => {
            if (btn.dataset.prefecture === prefecture) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});


async function loadParkings() {
    try {
        const response = await fetch('data/parkings.json');
        allParkings = await response.json();
        displayParkings(allParkings);
    } catch (error) {
        console.error('データ読み込みエラー:', error);
        document.getElementById('parkingGrid').innerHTML = 
            '<p style="text-align: center; color: red;">データの読み込みに失敗しました。</p>';
    }
}


function displayParkings(parkings) {
    const grid = document.getElementById('parkingGrid');
    const countDiv = document.getElementById('resultCount');
    
    countDiv.textContent = `📍 ${parkings.length}件の駐車場`;
    
    if (parkings.length === 0) {
        grid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #666;">該当する駐車場が見つかりませんでした。</p>';
        return;
    }
    
    grid.innerHTML = parkings.map(parking => `
        <div class="parking-card" onclick="location.href='parking-detail.html?id=${parking.id}'">
            <div class="parking-card-content">
                <h3>${parking.name}</h3>
                <div class="parking-info">
                    <strong>📍 住所:</strong>
                    <span>${parking.prefecture} ${parking.city}</span>
                </div>
                <div class="parking-info">
                    <strong>🚇 最寄駅:</strong>
                    <span>${parking.station}</span>
                </div>
                <div class="parking-info">
                    <strong>💴 料金:</strong>
                    <span>${parking.price_per_hour}円/時間</span>
                </div>
                <div class="parking-info">
                    <strong>🚗 収容台数:</strong>
                    <span>${parking.capacity}台</span>
                </div>
                <div class="features">
                    ${parking.features.split(',').slice(0, 3).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="parking-card-footer">
                <span class="view-detail-btn">詳細を見る →</span>
            </div>
        </div>
    `).join('');
}

function setupAreaButtons() {
    const buttons = document.querySelectorAll('.area-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        
            buttons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const prefecture = button.dataset.prefecture;
            if (prefecture) {
                filterByPrefecture(prefecture);
            } else {
                
                displayParkings(allParkings);
            }
        });
    });
}

function filterByPrefecture(prefecture) {
    const filtered = allParkings.filter(parking => parking.prefecture === prefecture);
    displayParkings(filtered);
}