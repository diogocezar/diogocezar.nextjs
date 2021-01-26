import Cors from "cors";

const initCors = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

const cors = initCors(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export { cors };
