import https from "https";
import querystring from "querystring";

export function fetchData(
  host,
  { path, port = 443, method = "GET", body = {}, headers = {} },
  onSuccess,
  onError
) {
  var data = JSON.stringify(body);

  var options = {
    host,
    path,
    port,
    method: method,
    timeout: 7000,
    rejectUnauthorized: false,
    headers: {
      ...headers,
      ...(method === "POST"
        ? {
            // "Content-Type": "application/x-www-form-urlencoded",
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(data),
          }
        : { "Content-Type": "application/json" }),
    },
  };

  var httpreq = https.request(options, function (response) {
    response.setEncoding("utf8");
    let totalBuffer = "";
    response.on("data", function (chunk) {
      totalBuffer += chunk;
    });

    response.on("end", function () {
      onSuccess(totalBuffer ? JSON.parse(totalBuffer) : {});
    });
    response.on("error", function () {
      onError && onError();
    });
  });
  method === "POST" && httpreq.write(data);
  httpreq.end();
}

export function getUrlFromObject(object) {
  let urlAttrs = [];
  let obj_ = {};
  // if passed is an array spread it into object with indices as keys
  // generate url according to keys nd values in object and return
  return (
    (obj_ =
      typeof object === "object"
        ? object
        : Array.isArray(object)
        ? object.reduce((all, cur, idx) => ({ ...all, [idx]: cur }), {})
        : {}),
    Object.keys(obj_).map((key_) => {
      urlAttrs.push(
        `${encodeURIComponent(key_)}=${encodeURIComponent(
          typeof obj_[key_] == "string"
            ? obj_[key_]
            : JSON.stringify(obj_[key_])
        )}`
      );
    }),
    urlAttrs.join("&")
  );
}
