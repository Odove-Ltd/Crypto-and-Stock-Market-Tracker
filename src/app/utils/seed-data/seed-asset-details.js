// Seed data for Asset Details

export const seedTopBarData = {
    assetId: 1,
    assetName: "ethereum",
    assetSymbol: "eth",
    assetLogo: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE2LTAyLnBuZw.png",
    currentPrice: {
        usd:26765.5,
        btc: 0.0655223,
    } ,
    marketCap: 194346000000,
        volume: 4216000000,
        volPerMarketCap: 0.0217,
        AllTimeHigh: 4861.29,
    }

    // Summary Table
export const seedAssetSummary =  [
    //
        {
            assetId: 1,
            assetName: "ethereum",
            assetSymbol: "eth",
            assetLogo: "#",
            usd:[
                {
                    name: "1h",
                    priceChange: 0.023,
                },
                {
                    name: "24h",
                    priceChange: 0.023,
                },
                {
                    name: "7d",
                    priceChange: 0.023,
                },
                {
                    name: "30d",
                    priceChange: 0.023,
                },
            ],
            btc:[
                {
                    name: "1h",
                    priceChange: 0.023,
                },
                {
                    name: "24h",
                    priceChange: 0.023,
                },
                {
                    name: "7d",
                    priceChange: 0.023,
                },
                {
                    name: "30h",
                    priceChange: 0.023,
                },
            ],
            eth:[
                {
                    name: "1h",
                    priceChange: 0.023,
                },
                {
                    name: "24h",
                    priceChange: 0.023,
                },
                {
                    name: "7d",
                    priceChange: 0.023,
                },
                {
                    name: "30h",
                    priceChange: 0.023,
                },
            ],
        supply: [
            {
                name: "Circulating Supply",
                value: 115000000,
            },
            {
                name: "Total Supply",
                value: 115000000,
            },
            {
                name: "Max Supply",
                value: 115000000,
            },
        ],
        range: [
            {
                name: "24h Range",
                value: 0.09999,
            },
            {
                name: "24h Low",
                value: 214.54,
            },
            {
                name: "24h High",
                value: 216.15,
            }
        ],
        movement: [
            {
                name: "liquidity",
                value: 89.42,
            },
            {
                name: "bids",
                value: 43.68,
            },
            {
                name: "asks",
                value: 56.32,
            }
        ]
    },
    //
]

