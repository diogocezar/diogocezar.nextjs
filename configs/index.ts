const config = {
  ApiBaseBlog: {
    url: "https://www.diogocezar.com/wp-json/wp/v2/posts",
  },
  ApiPost: {
    url: "https://diogocezar.vercel.app/api/posts?page=1",
  },
  ApiContact: {
    url: "https://us-central1-dctb-firebase.cloudfunctions.net/sendMail",
  },
};

export default config;
