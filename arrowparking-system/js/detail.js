// 駐車場データ
let allParkings = [];
let currentParking = null;

// ページ読み込み時
window.addEventListener('DOMContentLoaded', async () => {
    await loadParkings();
    displayParkingDetail();
});

// 駐車場データを読み込む
async function loadParkings() {
    try {
        const response = await fetch('data/parkings.json');
        allParkings = await response.json();
    } catch (error) {
        console.error('データ読み込みエラー:', error);
    }
}

// 駐車場詳細を表示
function displayParkingDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    
    currentParking = allParkings.find(p => p.id === id);
    
    if (!currentParking) {
        document.querySelector('main').innerHTML = 
            '<div style="text-align: center; padding: 5rem;"><h2>駐車場が見つかりませんでした</h2><a href="parkings.html" class="btn btn-primary">一覧に戻る</a></div>';
        return;
    }
    
    // タイトル設定
    document.title = `${currentParking.name} | 消火器株式会社`;
    document.getElementById('parkingName').textContent = currentParking.name;
    document.getElementById('breadcrumbName').textContent = currentParking.name;
    document.getElementById('parkingAddress').textContent = `📍 ${currentParking.prefecture} ${currentParking.city} ${currentParking.address}`;
    
    // 基本情報
    document.getElementById('address').textContent = `${currentParking.prefecture} ${currentParking.city} ${currentParking.address}`;
    document.getElementById('station').textContent = `🚇 ${currentParking.station}`;
    document.getElementById('capacity').textContent = `🚗 ${currentParking.capacity}台`;
    
    // 料金情報
    displayPriceInfo();
    
    // 車両制限
    displayVehicleRestrictions();
    
    // 支払方法
    displayPaymentMethods();
    
    // アクセス情報
    if (currentParking.access_info) {
        document.getElementById('accessInfo').textContent = currentParking.access_info;
    }
    
    // 周辺施設
    displayNearbySpots();
    
    // 設備
    const featuresDiv = document.getElementById('features');
    featuresDiv.innerHTML = currentParking.features.split(',').map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    // 写真ギャラリー
    displayGallery();
    
    // 関連駐車場
    displayRelatedParkings();
}

// 料金情報を表示
function displayPriceInfo() {
    const priceContent = document.getElementById('priceContent');
    
    if (currentParking.price_detail) {
        priceContent.innerHTML = `
            <table class="price-table">
                <tr>
                    <th>昼間料金<br><small style="font-weight: normal; color: #666;">${currentParking.price_detail.daytime.split('→')[0]}</small></th>
                    <td><strong style="font-size: 1.3rem; color: #667eea;">${currentParking.price_detail.daytime.split('→')[1]}</strong></td>
                </tr>
                <tr>
                    <th>夜間料金<br><small style="font-weight: normal; color: #666;">${currentParking.price_detail.nighttime.split('→')[0]}</small></th>
                    <td><strong style="font-size: 1.3rem; color: #667eea;">${currentParking.price_detail.nighttime.split('→')[1]}</strong></td>
                </tr>
            </table>
            <div class="price-highlight">
                <strong>🎯 最大料金：${currentParking.price_detail.max_charge}</strong>
                <p style="margin-top: 0.8rem; font-size: 0.95rem; color: #555;">※入庫から24時間まで適用されます</p>
            </div>
        `;
    } else {
        priceContent.innerHTML = `
            <table class="price-table">
                <tr>
                    <th>時間料金</th>
                    <td><strong style="font-size: 1.3rem; color: #667eea;">${currentParking.price_per_hour}円/時間</strong></td>
                </tr>
                <tr>
                    <th>最大料金</th>
                    <td><strong style="font-size: 1.3rem; color: #667eea;">${currentParking.price_per_day}円/日</strong></td>
                </tr>
            </table>
        `;
    }
}

// 車両制限を表示
function displayVehicleRestrictions() {
    const restrictionContent = document.getElementById('restrictionContent');
    
    if (currentParking.vehicle_restrictions) {
        const vr = currentParking.vehicle_restrictions;
        restrictionContent.innerHTML = `
            <div class="restriction-grid">
                <div class="restriction-item">
                    <strong>高さ</strong>
                    <span>${vr.height}</span>
                    <p style="font-size: 0.85rem; color: #666; margin-top: 0.3rem;">まで</p>
                </div>
                <div class="restriction-item">
                    <strong>幅</strong>
                    <span>${vr.width}</span>
                    <p style="font-size: 0.85rem; color: #666; margin-top: 0.3rem;">まで</p>
                </div>
                <div class="restriction-item">
                    <strong>長さ</strong>
                    <span>${vr.length}</span>
                    <p style="font-size: 0.85rem; color: #666; margin-top: 0.3rem;">まで</p>
                </div>
                <div class="restriction-item">
                    <strong>重量</strong>
                    <span>${vr.weight}</span>
                    <p style="font-size: 0.85rem; color: #666; margin-top: 0.3rem;">まで</p>
                </div>
            </div>
            <div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem; border-left: 5px solid #d32f2f;">
                <p style="color: #d32f2f; font-weight: 600; margin: 0;">
                    ⚠️ 制限を超える車両は入庫できません
                </p>
                <p style="color: #666; font-size: 0.9rem; margin: 0.5rem 0 0 0;">
                    事前に車両サイズをご確認ください。特に高さ制限にご注意ください。
                </p>
            </div>
        `;
    } else {
        document.getElementById('restrictionSection').style.display = 'none';
    }
}

// 支払方法を表示
function displayPaymentMethods() {
    const paymentContent = document.getElementById('paymentContent');
    
    if (currentParking.payment_methods) {
        paymentContent.innerHTML = `
            <div class="payment-methods">
                ${currentParking.payment_methods.map(method => 
                    `<span class="payment-badge">${getPaymentIcon(method)} ${method}</span>`
                ).join('')}
            </div>
            <div style="background: #f9f9f9; padding: 1.2rem; border-radius: 10px; margin-top: 1.2rem;">
                <p style="font-size: 0.95rem; color: #555; margin: 0;">
                    <strong>QR決済対応：</strong><br>
                    PayPay、LINE Pay、楽天ペイ、d払い、au PAY
                </p>
            </div>
        `;
    } else {
        document.getElementById('paymentSection').style.display = 'none';
    }
}

// 支払方法のアイコン
function getPaymentIcon(method) {
    if (method.includes('現金')) return '💵';
    if (method.includes('クレジット')) return '💳';
    if (method.includes('QR')) return '📱';
    return '💳';
}

// 周辺施設を表示
function displayNearbySpots() {
    const nearbyList = document.getElementById('nearbyList');
    
    if (currentParking.nearby_spots && currentParking.nearby_spots.length > 0) {
        nearbyList.innerHTML = currentParking.nearby_spots.map(spot => 
            `<li>${getSpotIcon(spot)} <strong>${spot.split('：')[0]}：</strong>${spot.split('：')[1]}</li>`
        ).join('');
    } else {
        document.getElementById('nearbySection').style.display = 'none';
    }
}

// 周辺施設のアイコン
function getSpotIcon(spot) {
    if (spot.includes('109') || spot.includes('店')) return '🏬';
    if (spot.includes('センター街')) return '🎪';
    if (spot.includes('駅')) return '🚉';
    if (spot.includes('ハンズ')) return '🏪';
    if (spot.includes('映画') || spot.includes('TOEI')) return '🎬';
    return '📍';
}

// 写真ギャラリーを表示
function displayGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnailsDiv = document.getElementById('thumbnails');
    const imageCounter = document.getElementById('imageCounter');
    
    if (!currentParking.images || currentParking.images.length === 0) {
        mainImage.src = 'https://via.placeholder.com/800x500/667eea/ffffff?text=No+Image';
        mainImage.alt = currentParking.name;
        imageCounter.textContent = '0 / 0';
        return;
    }
    
    // メイン画像
    mainImage.src = currentParking.images[0];
    mainImage.alt = currentParking.name;
    imageCounter.textContent = `1 / ${currentParking.images.length}`;
    
    // サムネイル
    thumbnailsDiv.innerHTML = currentParking.images.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(${index})">
            <img src="${img}" alt="${currentParking.name} ${index + 1}">
        </div>
    `).join('');
}

// メイン画像を変更
function changeMainImage(index) {
    const mainImage = document.getElementById('mainImage');
    const imageCounter = document.getElementById('imageCounter');
    
    mainImage.src = currentParking.images[index];
    imageCounter.textContent = `${index + 1} / ${currentParking.images.length}`;
    
    // サムネイルのアクティブ状態を変更
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// キーボード操作
document.addEventListener('keydown', (e) => {
    if (!currentParking || !currentParking.images) return;
    
    const counter = document.getElementById('imageCounter');
    if (!counter) return;
    
    const currentIndex = parseInt(counter.textContent.split('/')[0]) - 1;
    
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        changeMainImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < currentParking.images.length - 1) {
        changeMainImage(currentIndex + 1);
    }
});

// 関連駐車場を表示
function displayRelatedParkings() {
    const relatedGrid = document.getElementById('relatedGrid');
    
    const otherParkings = allParkings
        .filter(p => p.id !== currentParking.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    if (otherParkings.length === 0) {
        document.getElementById('relatedParkings').style.display = 'none';
        return;
    }
    
    relatedGrid.innerHTML = otherParkings.map(parking => `
        <div class="parking-card" onclick="location.href='parking-detail.html?id=${parking.id}'">
            <div class="parking-card-content">
                <h3>${parking.name}</h3>
                <div class="parking-info">
                    <strong>📍 住所:</strong>
                    <span>${parking.prefecture} ${parking.city}</span>
                </div>
                <div class="parking-info">
                    <strong>💴 料金:</strong>
                    <span>${parking.price_per_hour}円/時間</span>
                </div>
                <div class="parking-info">
                    <strong>🚗 収容台数:</strong>
                    <span>${parking.capacity}台</span>
                </div>
            </div>
            <div class="parking-card-footer">
                <span class="view-detail-btn">詳細を見る →</span>
            </div>
        </div>
    `).join('');
}