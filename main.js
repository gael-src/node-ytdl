const fs = require("fs");
const youtubedl = require("youtube-dl");
const args = process.argv.slice(2);
const youTubeURL = args[0];
const fileName = args[1];
const zufall = Math.round(Math.random() * 100);

// 0 ARGUMENT AS INPUT (DEFAULT URL)
if (args.length === 0) {
  const video = youtubedl(
    "http://www.youtube.com/watch?v=90AiXO1pAiA",
    // Optional arguments passed to youtube-dl.
    ["--format=18"],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname }
  );
  // Will be called when the download starts.
  video.on("info", function (info) {
    console.log("1: Download started");
    console.log("1: filename: " + info._filename);
    console.log("1: size: " + info.size);
  });
  video.pipe(fs.createWriteStream("myvideo.mp4"));
}

// 1 ARGUMENT AS INPUT (YOUR URL)
if (args.length === 1) {
  const video = youtubedl(
    youTubeURL,
    // Optional arguments passed to youtube-dl.
    ["--format=18"],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname }
  );
  // Will be called when the download starts.
  video.on("info", function (info) {
    console.log("2: Download started");
    console.log("2: filename: " + info._filename);
    console.log("2: size: " + info.size);
  });
  video.pipe(fs.createWriteStream(`myvideo${zufall}.mp4`));
}

// 2 ARGUMENT AS INPUT (YOUR URL AND FILENAME)
if (args.length === 2) {
  const video = youtubedl(
    youTubeURL,
    // Optional arguments passed to youtube-dl.
    ["--format=18"],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname }
  );
  // Will be called when the download starts.
  video.on("info", function (info) {
    console.log("3: Download started");
    console.log("3: filename: " + info._filename);
    console.log("3: size: " + info.size);
  });
  video.pipe(fs.createWriteStream(`${fileName}.mp4`));
}
