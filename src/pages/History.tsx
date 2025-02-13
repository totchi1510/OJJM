import React, { useEffect, useState } from "react";
import { fetchHistoryData } from "../api/history";

const History: React.FC = () => {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        async function loadHistory() {
            try {
                const data = await fetchHistoryData();
                setHistory(data);
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        }
        loadHistory();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">運転履歴</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">日付</th>
                        <th className="border border-gray-300 px-4 py-2">成功率 (%)</th>
                        <th className="border border-gray-300 px-4 py-2">交差点回数</th>
                        <th className="border border-gray-300 px-4 py-2">成功回数</th>
                        <th className="border border-gray-300 px-4 py-2">失敗回数</th>
                        <th className="border border-gray-300 px-4 py-2">逆右左折</th>
                        <th className="border border-gray-300 px-4 py-2">天気</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((entry) => (
                        <tr key={entry.id} className="border border-gray-300">
                            <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.success_rate}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.turn_count}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.successful_turn_count}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.missing_turn_count}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.reverse_right_left_turn}</td>
                            <td className="border border-gray-300 px-4 py-2">{entry.weather}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;
