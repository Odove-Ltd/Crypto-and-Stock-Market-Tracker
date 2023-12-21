import axios from "axios";
export const fetchCoinData = async () => {
  try {
    const response = await axios.post(
      "https://api.livecoinwatch.com/coins/list",
      {
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 25,
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
    // console.log("coindata");
    return data;
  } catch (error) {
    console.error(`error is ${error}`);
  }
};

export const fetchCoinOverview = async () => {
  try {
    const response = await axios.post(
      "https://api.livecoinwatch.com/overview",
      {
        currency: "USD",
      },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
        },
      }
    );

    const data = response.data;
    console.log(data, "hry");
    return data;
  } catch (error) {
    console.error(`error is ${error}`);
  }
};
