import { fetchHistoryData } from "./api/history.js"; // history.ts をインポート

async function fetchWeatherData() {
    try {
        // history.ts から直接データを取得
        const data = await fetchHistoryData();

        if (!data || data.length === 0) {
            throw new Error("データが取得できませんでした");
        }

        const latestEntry = data[0];

        document.getElementById("weather").innerHTML = `
            <p><strong>${latestEntry.date}</strong></p>
            <p>天気: ${latestEntry.weather}</p>
            <p>成功率: ${latestEntry.success_rate}%</p>
            <p>交差点回数: ${latestEntry.turn_count}</p>
        `;

    } catch (error) {
        console.error("データ取得エラー:", error);

        document.getElementById("weather").innerHTML = `
            <p style="color: red;">データ取得に失敗しました</p>
            <p>${error.message}</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", fetchWeatherData);
