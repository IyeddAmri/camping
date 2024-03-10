const mockData = {
    search_metadata: {
      id: "search_6QNVPZBKo24jcB2p8y471M9O",
      status: "Success",
      created_at: "2024-03-05T21:27:31Z",
      // Add more fields as needed
    },
    search_parameters: {
      engine: "google_maps",
      q: "hotels",
      ll: "@40.7009973,-73.994778,12z",
      google_domain: "google.com",
      hl: "en"
    },
    search_information: {
      query_displayed: "hotels",
      state: "Showing results for exact spelling."
    },
    ads: [
      // Example ad data
      {
        position: 1,
        place_id: "ChIJByUH56RZwokR0kfko980E8U",
        // Add more fields as needed
      },
      // Add more ads as needed
    ],
    local_results: [
      // Example local result data
      {
        position: 1,
        ludocid: "109929969549451349998",
        // Add more fields as needed
      },
      // Add more local results as needed
    ]
  };
  
  export default mockData;
  