

document.addEventListener('DOMContentLoaded', function() {
    const config = window.SITE_CONFIG;
    
    // ページタイトルに会社名を設定
    updatePageTitle();
    
    // ナビゲーションの会社名を設定
    updateNavigation();
    
    // フッターの情報を設定
    updateFooter();
});

// ページタイトルを更新
function updatePageTitle() {
    const config = window.SITE_CONFIG;
    const titleElement = document.querySelector('title');
    if (titleElement && !titleElement.textContent.includes('|')) {
        // タイトルに会社名がない場合は追加
        titleElement.textContent += ` | ${config.company.name}`;
    }
}

// ナビゲーションを更新
function updateNavigation() {
    const config = window.SITE_CONFIG;
    
    // ロゴテキスト
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = config.company.name;
    }
}

// フッターを更新
function updateFooter() {
    const config = window.SITE_CONFIG;
    
    // 電話番号（複数箇所）
    document.querySelectorAll('.phone-number a, a[href^="tel:"]').forEach(el => {
        el.href = `tel:${config.contact.phone}`;
        if (el.classList.contains('phone-number') || el.parentElement.classList.contains('phone-number')) {
            el.textContent = config.contact.phoneDisplay;
        }
    });
    
    // メールアドレス
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
        if (el.href.includes('shoukaki')) {
            el.href = `mailto:${config.contact.email}`;
            if (el.classList.contains('btn-contact')) {
                // ボタンテキストはそのまま
            } else if (el.classList.contains('btn-primary')) {
                el.textContent = config.contact.email;
            }
        }
    });
    
    // 営業時間
    document.querySelectorAll('.business-hours').forEach(el => {
        el.textContent = `営業時間：${config.contact.businessHours}`;
    });
    
    // 会社名
    document.querySelectorAll('.footer-section h4').forEach(el => {
        if (el.textContent.includes('株式会社')) {
            el.textContent = config.company.name;
        }
    });
    
    // 住所
    updateAddress();
    
    // FAX
    updateFax();
    
    // コピーライト
    updateCopyright();
}

// 住所を更新
function updateAddress() {
    const config = window.SITE_CONFIG;
    document.querySelectorAll('.footer-section p').forEach(el => {
        if (el.innerHTML.includes('〒')) {
            el.innerHTML = `${config.address.postal}<br>${config.address.full}`;
        }
    });
}

// FAXを更新
function updateFax() {
    const config = window.SITE_CONFIG;
    document.querySelectorAll('.footer-section p').forEach(el => {
        if (el.textContent.includes('FAX:')) {
            el.textContent = `FAX: ${config.contact.fax}`;
        }
    });
}

// コピーライトを更新
function updateCopyright() {
    const config = window.SITE_CONFIG;
    const year = new Date().getFullYear();
    document.querySelectorAll('.footer-bottom p').forEach(el => {
        if (el.textContent.includes('©')) {
            el.textContent = `© ${year} ${config.company.name}. All rights reserved.`;
        }
    });
}
