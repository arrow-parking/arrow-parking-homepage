const SITE_CONFIG = {
    // 会社情報
    company: {
        name: "株式会社アローパーキング",
        nameEn: "Corporation arrowparking",
        established: "S61.3",
        ceo: "代表取締役社長 尾崎　陽介",
        description: "安心・安全な駐車場サービスを通じて、お客様の快適なカーライフをサポートしています。"
    },

    // 連絡先
    contact: {
        phone: "03-5428-6822",
        phoneDisplay: "03-5428-6822",
        fax: "03-5428-6821",
        email: "arrow-parking.jp",
        businessHours: "平日 9:30〜17:30"
    },

    // 住所
    address: {
        postalCode: "154-0001",
        prefecture: "東京都",
        city: "渋谷区",
        street: "神南1-20-15",
        full: "東京都渋谷区神南1-20-15 神南101ビル",
        postal: "〒150-0041"  // site.jsで使用
    },

    // 事業情報
    business: {
        totalLocations: 9,  // 駐車場の総数
        totalCapacity: 220, // 総収容台数
        description: "駐車場の運営・管理"
    },

    // SNS・リンク
    links: {
        website: "https://yama6418.github.io/parking-system/",
        googleMaps: "https://maps.google.com/",
        facebook: "",
        twitter: "",
        instagram: ""
    },

    // サイト設定
    site: {
        title: "株式会社アローパーキング",
        description: "安心・安全な駐車場サービスを全国に展開しています。24時間営業、防犯カメラ完備。",
        copyright: "2026 株式会社アロ＾パーキング. All rights reserved."
    }
};

// グローバルで使えるようにする
window.SITE_CONFIG = SITE_CONFIG;

// ヘルパー関数（必要に応じて使用）
function getPhoneNumber() {
    return SITE_CONFIG.contact.phone;
}

function getEmail() {
    return SITE_CONFIG.contact.email;
}

function getCompanyName() {
    return SITE_CONFIG.company.name;
}

function getAddress() {
    return SITE_CONFIG.address.full;
}
