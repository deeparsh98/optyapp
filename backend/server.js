import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { fetchData, getUrlFromObject } from "./helpers/fetch.js";
import { checkAndServe, checkCookie } from "./helpers/cookie.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  if (checkCookie(req)) {
    res.redirect("/app");
  }
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(express.static(path.join(__dirname, "../build")));

app.get("/login", (req, res) => {
  fetchData(
    "local.optmyzr.com",
    {
      path:
        "/apiaccess_stos/get_token?client_id=F5F189EE-3B44-4C86-8AEF-C22EB7AB598D&client_secret=1C5503E2-LJ8S-4A33-9FD0-A4EF3D014522&grant_type=authorization_code&redirect_uri=&code=" +
        encodeURIComponent(req.query?.code ?? ""),
      method: "GET",
    },
    (data) => {
      if (data.access_token)
        res.cookie("token", data.access_token, {
          maxAge: 900000,
          httpOnly: true,
        });
      res.redirect("/app");
    },
    () => {
      res.send("Error");
    }
  );
});

app.get("/logout", (req, res) => {
  res.setHeader("Clear-Site-Data", '"cookies"');
  res.redirect("/");
});

app.get("/app*", (req, res) => {
  checkAndServe(req, res, () => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
});
("https://shoppingtest.optmyzr.com:5000/DataController/V1/GetAccountData?apiId=9&token=2024-07-16_17:04:40.000000_1_7a2c788d9899ac947f5e69dad5bf1763453a8398ede1531479f5915a991d2c08&accountId=1425022273");

app.get("/optmyzrapi/:operation", (req, res) => {
  checkAndServe(req, res, () => {
    let tokenParam = "token=" + encodeURIComponent(req.cookies.token);
    if (!req.params.operation) {
      res.status(404);
      res.send("API not found. Make sure `operation` is specified");
    }
    fetchData(
      "shoppingtest.optmyzr.com",
      {
        port: 5000,
        path:
          "/DataController/V1/" +
          req.params.operation +
          "?" +
          getUrlFromObject(req.query) +
          "&" +
          tokenParam,
        method: "GET",
      },
      (data) => {
        res.send(JSON.stringify(data));
      },
      () => {
        res.status(500);
        res.send("API Internal Server error");
      }
    );
  });
});

app.post("/optmyzrapi/:operation", (req, res) => {
  checkAndServe(req, res, () => {
    let tokenParam = "token=" + encodeURIComponent(req.cookies.token);
    if (!req.params.operation) {
      res.status(404);
      res.send("API not found. Make sure `operation` is specified");
    }
    fetchData(
      "shoppingtest.optmyzr.com",
      {
        port: 5000,
        path:
          "/DataController/V1/" +
          req.params.operation +
          "?" +
          getUrlFromObject(req.query) +
          "&" +
          tokenParam,
        method: "POST",
        body: req.body,
      },
      (data) => {
        res.send(JSON.stringify(data));
      },
      () => {
        res.status(500);
        res.send("API Internal Server error");
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
