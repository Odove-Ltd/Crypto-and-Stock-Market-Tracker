// create a function to render price points for a number of days for a particular coin
import axios from "axios";

const API_KEY = "3a724224-1dad-4ae5-923d-166be3c7f62e";
const now = Date.now();

//** Good */

export const fetchLast7daysData = async (code: string) => {
    const startTimestamp = now - 7 * 24 * 60 * 60 * 1000;

    try {
        const response = await axios.post(
            "https://api.livecoinwatch.com/coins/single/history",
            {
                currency: "USD",
                code: code,
                start: startTimestamp,
                end: now,
                meta: true,
            },
            {
                headers: {
                    "content-type": "application/json",
                    "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
                },
            }
        );
        const data = response.data;
        // console.log(data);
        return data;
    } catch (error) {
        console.error(`Didn't work ${error}`);
    }
};

export const Sparkline = ( history : any) => {
    if(!Array.isArray(history)) {
        return
    }

    console.log(history)

    // Extract the "cap" (market cap) values from the history data
    const data = history.map((item: any) => item.cap);

    // Set the width of each data point based on the number of data items
    const pointWidth = 2;
    const svgWidth = data.length * pointWidth;

    // Calculate the minimum and maximum values in the data
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);

    // Calculate the scaling factors
    const scaleX = svgWidth / (data.length - 1);
    const scaleY = 50 / (maxValue - minValue);

    // Build the path data string
    const pathData = data
        .map(
            (value: any, index: any) =>
                `${index * scaleX},${50 - (value - minValue) * scaleY}`
        )
        .join(" ");

    return (
        <svg width={svgWidth} height="50">
            <path d={`M0,50 ${pathData}`} fill="none" stroke="blue" />
        </svg>
    );
};
