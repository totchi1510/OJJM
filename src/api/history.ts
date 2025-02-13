export async function fetchHistoryData() {
    try {
        const response = await fetch("/api/history"); // API エンドポイント
        if (!response.ok) {
            throw new Error("Failed to fetch history data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching history data:", error);

        // API 取得失敗時のダミーデータ（オフライン対応）
        return [
            {
                id: 1,
                date: "2025-02-13",
                success_rate: 85.0,
                turn_count: 10,
                successful_turn_count: 8,
                missing_turn_count: 2,
                reverse_right_left_turn: 1,
                weather: "Sunny"
            },
            {
                id: 2,
                date: "2025-02-12",
                success_rate: 78.5,
                turn_count: 12,
                successful_turn_count: 9,
                missing_turn_count: 3,
                reverse_right_left_turn: 0,
                weather: "Cloudy"
            }
        ];
    }
}
