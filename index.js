async function fetchWeatherData() {
    try {
        const data = await fetchHistoryData(); // history.ts からデータ取得
        const latestEntry = data[0];

        document.getElementById("weather").innerHTML = `
            <p><strong>${latestEntry.date}</strong></p>
            <p>天気: ${latestEntry.weather}</p>
            <p>成功率: ${latestEntry.success_rate}%</p>
            <p>交差点回数: ${latestEntry.turn_count}</p>
        `;
    } catch (error) {
        console.error("データ取得エラー:", error);
        document.getElementById("weather").innerHTML = "データ取得に失敗しました";
    }
}

document.addEventListener("DOMContentLoaded", fetchWeatherData);
