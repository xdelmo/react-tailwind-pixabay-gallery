import React from "react";

function Trends({ searchTrend }) {
  // WARNING in [eslint]
  // src\components\Trends.js
  // Line 86:6:  React Hook React.useEffect has a missing dependency: 'searchTag'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  React.useEffect(() => {
    const trendingWords = [
      "people",
      "water",
      "day",
      "sound",
      "work",
      "year",
      "man",
      "line",
      "boy",
      "men",
      "land",
      "home",
      "hand",
      "air",
      "animal",
      "house",
      "mother",
      "America",
      "world",
      "food",
      "country",
      "plant",
      "school",
      "father",
      "tree",
      "city",
      "earth",
      "eye",
      "head",
      "story",
      "life",
      "children",
      "car",
      "night",
      "sea",
      "river",
      "book",
      "idea",
      "face",
      "girl",
      "mountain",
      "song",
      "family",
    ];

    // Generate random integer (1, 59)
    function getRandomInt() {
      return Math.floor(Math.random() * trendingWords.length);
    }

    const trendingWordsSelected = [];

    function getTrendings() {
      // !Should update trendingWordsSelected just once every visit
      for (let i = 0; i < 20; i++) {
        // Get a random trendingWord
        let word = trendingWords[getRandomInt()];
        // If the random one selected isn't in the new array, push it to it
        if (!trendingWordsSelected.includes(word)) {
          trendingWordsSelected.push(word);
        }
      }

      // Mapping to elTrending all jsx elementes
      const elTrending = trendingWordsSelected.map((trendingWordSelected) => {
        return (
          <li className="transition-all ease-in-out cursor-pointer hover:text-gray-300">
            <span onClick={() => searchTag(trendingWordSelected)}>
              {trendingWordSelected}
            </span>
          </li>
        );
      });

      return elTrending;
    }

    setTrendsNow(getTrendings());
  }, []);

  const [trendsNow, setTrendsNow] = React.useState([]);

  // Search by clicking on trends

  function searchTag(trend) {
    searchTrend(trend);
  }

  return (
    <div className="text-white bg-teal-700 ">
      <div className="container flex flex-row items-center gap-4 px-4 py-5 mx-auto">
        <div className="pr-4 font-bold border-r-2 heading">
          <span>Trending</span>
        </div>
        {/* TRENDS */}
        <div className="overflow-auto no-scrollbar">
          {/* Render trends elements */}
          <ul className="flex flex-row justify-between gap-4">{trendsNow}</ul>
        </div>
      </div>
    </div>
  );
}

export default Trends;
