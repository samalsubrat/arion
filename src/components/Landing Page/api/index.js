const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");

const url = "https://saveig.app/api/ajaxSearch";

// Initialize an array to store the results for each query
const allVideoUrls = [];

async function getVid(queries) {
  const headers = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9",
    "Content-Type": "application/x-www-form-urlencoded;",
    Origin: "https://saveig.app",
    Referer: "https://saveig.app/",
    "Sec-Ch-Ua":
      '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    Priority: "u=1, i",
  };

  // Iterate over each query and make the API request
  for (const q of queries) {
    const data = {
      q,
      t: "media",
      lang: "en",
    };

    try {
      const res = await axios.post(url, qs.stringify(data), { headers });
      const x = res.data;
      const y = x.data;
      const $ = cheerio.load(y);
      const filter1 = $(".download-items");
      
      // Initialize an array to store video URLs for the current query
      const videoUrls = [];

      // Collect video URLs for the current query
      filter1.find(".download-items__btn").each((index, element) => {
        const href = $(element).find("a").attr("href");
        if (href) {
          videoUrls.push(href);
        }
      });

      // Add the video URLs to the allVideoUrls array
      allVideoUrls.push({ query: q, urls: videoUrls });
    } catch (err) {
      console.log(err);
    }
  }

  // Log the results
  console.log(allVideoUrls);
}

// Example usage with multiple queries
getVid([
  "https://www.instagram.com/reel/C5HkythSn5Q/",
  "https://www.instagram.com/reel/C6mxUddyXXU/",
  // Add more URLs as needed
]);